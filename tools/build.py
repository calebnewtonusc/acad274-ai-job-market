"""Precompute the three M2 tables from the CSVs in data/clean/.

Writes:
  site/data.json        the three tables, same columns as the db views
  site/js/m2-data.js    the same object as window.M2, so charts work from file:// too
  site/data.html        table HTML pasted between the <!-- TABLE:name --> markers

Averages are plain per-occupation averages, the same math as db/views.sql
(AVG(EmploymentChangePct), AVG(MedianWage2025)), so the numbers here match
what fields.php and exposure.php return once the views run on ellenjun_aijobs.

Run from the folder root:  python3 tools/build.py
"""

import csv
import json
import re
from decimal import Decimal, ROUND_HALF_UP
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
CLEAN = ROOT / "data" / "clean"
SITE = ROOT / "site"

LEVELS = ["Low", "Moderate", "High", "Very high"]
TOP = ("High", "Very high")


def rnd(x, places=1):
    """Round half up like MySQL ROUND(), not Python's banker's rounding."""
    q = Decimal(1).scaleb(-places)
    return float(Decimal(str(x)).quantize(q, rounding=ROUND_HALF_UP))


def num(s):
    return float(s) if s not in ("", None) else None


def load():
    jobs = list(csv.DictReader(open(CLEAN / "aijobs_categorized.csv", encoding="utf-8")))
    observed = {r["OccupationCode"]: float(r["ObservedExposure"])
                for r in csv.DictReader(open(CLEAN / "observed_ai_use_by_job.csv", encoding="utf-8"))}
    grads = list(csv.DictReader(open(CLEAN / "grad_outcomes_by_major.csv", encoding="utf-8")))
    for j in jobs:
        j["obs"] = observed.get(j["OccupationCode"])
    return jobs, grads


def avg(vals):
    vals = [v for v in vals if v is not None]
    return sum(vals) / len(vals) if vals else None


def summarize(group):
    obs = [j["obs"] for j in group if j["obs"] is not None]
    return {
        "Jobs": len(group),
        "Employment2025": rnd(sum(num(j["Employment2025"]) for j in group)),
        "AvgChangePct": rnd(avg(num(j["EmploymentChangePct"]) for j in group)),
        "AvgMedianWage": int(rnd(avg(num(j["MedianWage2025"]) for j in group), 0)),
        "HighExposurePct": rnd(100 * sum(j["AIExposure"] in TOP for j in group) / len(group)),
        "ObservedJobs": len(obs),
        "AvgObservedUse": rnd(avg(obs), 3) if obs else None,
    }


def table_exposure(jobs):
    rows = []
    for lvl in LEVELS:
        s = summarize([j for j in jobs if j["AIExposure"] == lvl])
        s.pop("HighExposurePct")
        rows.append({"AIExposure": lvl, **s})
    return rows


def table_fields(jobs):
    rows = []
    for cat in sorted({j["Category"] for j in jobs}):
        group = [j for j in jobs if j["Category"] == cat]
        s = summarize(group)
        mix = {lvl: sum(j["AIExposure"] == lvl for j in group) for lvl in LEVELS}
        rows.append({"Category": cat, **s, "Mix": mix})
    rows.sort(key=lambda r: (-r["HighExposurePct"], r["Category"]))
    return rows


def table_majors(grads, fields):
    by_cat = {f["Category"]: f for f in fields}
    rows = []
    for g in grads:
        cat = g["Category"] or None
        f = by_cat.get(cat) if cat else None
        rows.append({
            "Major": g["Major"],
            "Category": cat,
            "UnemploymentRate": rnd(float(g["UnemploymentRate"])),
            "UnderemploymentRate": rnd(float(g["UnderemploymentRate"])),
            "MedianWageEarly": int(float(g["MedianWageEarly"])),
            "MedianWageMid": int(float(g["MedianWageMid"])),
            "CategoryHighExposurePct": f["HighExposurePct"] if f else None,
        })
    overall = next(r for r in rows if r["Major"] == "Overall")
    majors = sorted((r for r in rows if r["Major"] != "Overall"),
                    key=lambda r: -r["UnemploymentRate"])
    return majors, overall


def money(n):
    return "$" + f"{n:,.0f}"


def pct(n):
    return "n/a" if n is None else f"{n:.1f}%"


def signed(n):
    return f"+{n:.1f}%" if n > 0 else f"{n:.1f}%"


def html_table(head, body, caption):
    th = "".join(f'<th scope="col">{h}</th>' for h in head)
    trs = "\n".join("<tr>" + "".join(f"<td>{c}</td>" for c in row) + "</tr>" for row in body)
    return (f'<div class="tbl"><table>\n<caption>{caption}</caption>\n'
            f"<thead><tr>{th}</tr></thead>\n<tbody>\n{trs}\n</tbody></table></div>")


def obs_cell(r):
    if r["AvgObservedUse"] is None:
        return "n/a"
    return f'{r["AvgObservedUse"]:.3f} <span class="sub">({r["ObservedJobs"]} jobs)</span>'


def render(data):
    t1 = html_table(
        ["AI exposure (gov rating)", "Occupations", "Employment 2025 (thousands)",
         "Avg projected change 2025 to 2035", "Avg median wage 2025", "Avg observed AI use (0 to 1)"],
        [[r["AIExposure"], r["Jobs"], f'{r["Employment2025"]:,.1f}', signed(r["AvgChangePct"]),
          money(r["AvgMedianWage"]), obs_cell(r)] for r in data["exposure"]],
        "Table 1. 831 occupations grouped by their AI exposure rating. Same columns as exposure.php.")
    t2 = html_table(
        ["Field", "Occupations", "Employment 2025 (thousands)", "Rated High or Very high",
         "Avg observed AI use (0 to 1)", "Avg projected change", "Avg median wage"],
        [[r["Category"], r["Jobs"], f'{r["Employment2025"]:,.1f}', pct(r["HighExposurePct"]),
          obs_cell(r), signed(r["AvgChangePct"]), money(r["AvgMedianWage"])] for r in data["fields"]],
        "Table 2. The 21 job fields, sorted by share of occupations rated High or Very high. Same columns as fields.php.")
    o = data["majors_overall"]
    body = [[r["Major"], r["Category"] or "no clean match", pct(r["UnemploymentRate"]),
             pct(r["UnderemploymentRate"]), money(r["MedianWageEarly"]), money(r["MedianWageMid"]),
             pct(r["CategoryHighExposurePct"])] for r in data["majors"]]
    body.append([f'<strong>All majors</strong>', "", pct(o["UnemploymentRate"]), pct(o["UnderemploymentRate"]),
                 money(o["MedianWageEarly"]), money(o["MedianWageMid"]), ""])
    t3 = html_table(
        ["Major", "Mapped field (our call)", "Unemployment, grads 22 to 27", "Underemployment",
         "Median wage early career", "Median wage mid career", "Field rated High or Very high"],
        body,
        "Table 3. 73 majors from the NY Fed, sorted by recent-grad unemployment, joined to Table 2 through our field mapping.")
    page = (SITE / "data.html").read_text(encoding="utf-8")
    for name, tbl in (("exposure", t1), ("fields", t2), ("majors", t3)):
        pat = re.compile(rf"(<!-- TABLE:{name} -->).*?(<!-- /TABLE:{name} -->)", re.S)
        if not pat.search(page):
            raise SystemExit(f"marker TABLE:{name} missing from site/data.html")
        page = pat.sub(lambda m: m.group(1) + "\n" + tbl + "\n" + m.group(2), page)
    (SITE / "data.html").write_text(page, encoding="utf-8")


def main():
    jobs, grads = load()
    fields = table_fields(jobs)
    majors, overall = table_majors(grads, fields)
    data = {
        "source_note": "Built by tools/build.py from data/clean/*.csv",
        "counts": {
            "occupations": len(jobs),
            "joined_to_observed": sum(j["obs"] is not None for j in jobs),
            "majors": len(majors),
        },
        "exposure": table_exposure(jobs),
        "fields": fields,
        "majors": majors,
        "majors_overall": overall,
    }
    (SITE / "data.json").write_text(json.dumps(data, indent=1), encoding="utf-8")
    (SITE / "js" / "m2-data.js").write_text(
        "// Generated by tools/build.py. Do not edit by hand.\nwindow.M2 = "
        + json.dumps(data, separators=(",", ":")) + ";\n", encoding="utf-8")
    render(data)
    c = data["counts"]
    print(f'{c["occupations"]} occupations, {c["joined_to_observed"]} joined to observed use, {c["majors"]} majors')


if __name__ == "__main__":
    main()
