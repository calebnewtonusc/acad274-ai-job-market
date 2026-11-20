// Draws the nine M2 charts from window.M2 (written by tools/build.py).
// M3 swap: replace window.M2 with $.getJSON("api/fields.php") etc., same field names.
(function () {
  "use strict";
  const D = window.M2;
  if (!D || typeof Chart === "undefined") {
    document.querySelectorAll(".chart-box").forEach(function (box) {
      box.textContent =
        "Chart could not load. Check that js/m2-data.js and Chart.js loaded.";
    });
    return;
  }

  const css = getComputedStyle(document.documentElement);
  const v = function (name) {
    return css.getPropertyValue(name).trim();
  };
  const LEVEL_COLORS = [
    v("--lvl-low"),
    v("--lvl-moderate"),
    v("--lvl-high"),
    v("--lvl-veryhigh"),
  ];
  const ACCENT = v("--accent");
  const SLATE = v("--series-2");
  const MUTED = v("--muted");
  const money = function (n) {
    return "$" + Math.round(n).toLocaleString("en-US");
  };

  Chart.defaults.font.family = '"Inter", Helvetica, Arial, sans-serif';
  Chart.defaults.color = MUTED;
  Chart.defaults.maintainAspectRatio = false;
  Chart.defaults.plugins.legend.labels.boxWidth = 12;

  const make = function (id, config) {
    const el = document.getElementById(id);
    if (el) {
      new Chart(el, config);
    }
  };

  // ---------- Table 1: by exposure level ----------
  const ex = D.exposure;
  const exLabels = ex.map(function (r) {
    return r.AIExposure;
  });

  make("c1a", {
    type: "bar",
    data: {
      labels: exLabels,
      datasets: [
        {
          label: "Avg projected change (%)",
          data: ex.map(function (r) {
            return r.AvgChangePct;
          }),
          backgroundColor: LEVEL_COLORS,
          borderRadius: 6,
        },
      ],
    },
    options: {
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            label: function (c) {
              return c.parsed.y + "% average change";
            },
          },
        },
      },
      scales: {
        y: {
          beginAtZero: true,
          title: { display: true, text: "% change 2025 to 2035" },
        },
      },
    },
  });

  make("c1b", {
    type: "doughnut",
    data: {
      labels: exLabels,
      datasets: [
        {
          data: ex.map(function (r) {
            return r.Employment2025;
          }),
          backgroundColor: LEVEL_COLORS,
          borderWidth: 2,
          borderColor: "#fff",
        },
      ],
    },
    options: {
      cutout: "58%",
      plugins: {
        legend: { position: "bottom" },
        tooltip: {
          callbacks: {
            label: function (c) {
              return (
                c.label +
                ": " +
                Math.round(c.parsed).toLocaleString("en-US") +
                "k jobs"
              );
            },
          },
        },
      },
    },
  });

  make("c1c", {
    type: "line",
    data: {
      labels: exLabels,
      datasets: [
        {
          label: "Avg observed AI use",
          data: ex.map(function (r) {
            return r.AvgObservedUse;
          }),
          borderColor: ACCENT,
          backgroundColor: ACCENT,
          tension: 0.25,
          yAxisID: "y",
        },
        {
          label: "Avg median wage",
          data: ex.map(function (r) {
            return r.AvgMedianWage;
          }),
          borderColor: SLATE,
          backgroundColor: SLATE,
          borderDash: [6, 4],
          tension: 0.25,
          yAxisID: "y1",
        },
      ],
    },
    options: {
      plugins: { legend: { position: "bottom" } },
      scales: {
        y: {
          beginAtZero: true,
          title: { display: true, text: "observed use (0 to 1)" },
        },
        y1: {
          position: "right",
          grid: { drawOnChartArea: false },
          ticks: {
            callback: function (n) {
              return "$" + n / 1000 + "k";
            },
          },
        },
      },
    },
  });

  // ---------- Table 2: by field ----------
  const fields = D.fields;
  const fLabels = fields.map(function (r) {
    return r.Category;
  });

  make("c2a", {
    type: "bar",
    data: {
      labels: fLabels,
      datasets: [
        {
          label: "% rated High or Very high",
          data: fields.map(function (r) {
            return r.HighExposurePct;
          }),
          backgroundColor: ACCENT,
          borderRadius: 4,
        },
      ],
    },
    options: {
      indexAxis: "y",
      plugins: { legend: { display: false } },
      scales: {
        x: {
          min: 0,
          max: 100,
          ticks: {
            callback: function (n) {
              return n + "%";
            },
          },
        },
        y: { ticks: { autoSkip: false, font: { size: 11 } } },
      },
    },
  });

  make("c2b", {
    type: "bar",
    data: {
      labels: fLabels,
      datasets: ["Low", "Moderate", "High", "Very high"].map(function (lvl, i) {
        return {
          label: lvl,
          backgroundColor: LEVEL_COLORS[i],
          data: fields.map(function (r) {
            return Math.round((1000 * r.Mix[lvl]) / r.Jobs) / 10;
          }),
        };
      }),
    },
    options: {
      indexAxis: "y",
      plugins: {
        legend: { position: "bottom" },
        tooltip: {
          callbacks: {
            label: function (c) {
              return c.dataset.label + ": " + c.parsed.x + "% of occupations";
            },
          },
        },
      },
      scales: {
        x: {
          stacked: true,
          max: 100,
          ticks: {
            callback: function (n) {
              return n + "%";
            },
          },
        },
        y: { stacked: true, ticks: { autoSkip: false, font: { size: 11 } } },
      },
    },
  });

  const maxEmp = Math.max.apply(
    null,
    fields.map(function (r) {
      return r.Employment2025;
    }),
  );
  make("c2c", {
    type: "bubble",
    data: {
      datasets: [
        {
          label: "Fields",
          backgroundColor: "rgba(194, 65, 12, 0.35)",
          borderColor: ACCENT,
          data: fields.map(function (r) {
            return {
              x: r.HighExposurePct,
              y: r.AvgObservedUse,
              r: 4 + 22 * Math.sqrt(r.Employment2025 / maxEmp),
              name: r.Category,
              emp: r.Employment2025,
            };
          }),
        },
      ],
    },
    options: {
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            label: function (c) {
              const p = c.raw;
              return (
                p.name +
                ": " +
                p.x +
                "% rated high, observed " +
                p.y +
                ", " +
                Math.round(p.emp).toLocaleString("en-US") +
                "k jobs"
              );
            },
          },
        },
      },
      scales: {
        x: {
          min: -5,
          max: 108,
          // Padding keeps edge bubbles whole; hide the -5 and 105 ticks it creates.
          ticks: {
            callback: function (n) {
              return n < 0 || n > 100 ? "" : n + "%";
            },
          },
          title: {
            display: true,
            text: "% of occupations rated High or Very high",
          },
        },
        y: {
          min: 0,
          title: { display: true, text: "avg observed AI use (0 to 1)" },
        },
      },
    },
  });

  // ---------- Table 3: by major ----------
  const majors = D.majors;
  const overall = D.majors_overall;
  const top15 = majors.slice(0, 15);

  make("c3a", {
    type: "bar",
    data: {
      labels: top15
        .map(function (r) {
          return r.Major;
        })
        .concat(["All majors"]),
      datasets: [
        {
          label: "Unemployment (%)",
          data: top15
            .map(function (r) {
              return r.UnemploymentRate;
            })
            .concat([overall.UnemploymentRate]),
          backgroundColor: top15
            .map(function () {
              return ACCENT;
            })
            .concat([SLATE]),
          borderRadius: 4,
        },
      ],
    },
    options: {
      indexAxis: "y",
      plugins: { legend: { display: false } },
      scales: {
        x: {
          beginAtZero: true,
          ticks: {
            callback: function (n) {
              return n + "%";
            },
          },
        },
        y: { ticks: { autoSkip: false, font: { size: 11 } } },
      },
    },
  });

  const refLines = {
    id: "refLines",
    afterDraw: function (chart) {
      const ctx = chart.ctx,
        xs = chart.scales.x,
        ys = chart.scales.y;
      ctx.save();
      ctx.setLineDash([5, 4]);
      ctx.strokeStyle = SLATE;
      const x = xs.getPixelForValue(overall.UnderemploymentRate);
      const y = ys.getPixelForValue(overall.UnemploymentRate);
      ctx.beginPath();
      ctx.moveTo(x, ys.top);
      ctx.lineTo(x, ys.bottom);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(xs.left, y);
      ctx.lineTo(xs.right, y);
      ctx.stroke();
      ctx.restore();
    },
  };
  make("c3b", {
    type: "scatter",
    data: {
      datasets: [
        {
          label: "Majors",
          backgroundColor: "rgba(194, 65, 12, 0.6)",
          pointRadius: 4,
          data: majors.map(function (r) {
            return {
              x: r.UnderemploymentRate,
              y: r.UnemploymentRate,
              name: r.Major,
            };
          }),
        },
      ],
    },
    options: {
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            label: function (c) {
              return (
                c.raw.name +
                ": " +
                c.raw.y +
                "% unemployed, " +
                c.raw.x +
                "% underemployed"
              );
            },
          },
        },
      },
      scales: {
        x: { title: { display: true, text: "underemployment (%)" } },
        y: {
          beginAtZero: true,
          title: { display: true, text: "unemployment (%)" },
        },
      },
    },
    plugins: [refLines],
  });

  const byEarly = majors
    .slice()
    .sort(function (a, b) {
      return (
        b.MedianWageEarly - a.MedianWageEarly ||
        b.MedianWageMid - a.MedianWageMid
      );
    })
    .slice(0, 12);
  make("c3c", {
    type: "bar",
    data: {
      labels: byEarly.map(function (r) {
        return r.Major;
      }),
      datasets: [
        {
          label: "Early career",
          data: byEarly.map(function (r) {
            return r.MedianWageEarly;
          }),
          backgroundColor: ACCENT,
          borderRadius: 4,
        },
        {
          label: "Mid career",
          data: byEarly.map(function (r) {
            return r.MedianWageMid;
          }),
          backgroundColor: SLATE,
          borderRadius: 4,
        },
      ],
    },
    options: {
      plugins: {
        legend: { position: "bottom" },
        tooltip: {
          callbacks: {
            label: function (c) {
              return c.dataset.label + ": " + money(c.parsed.y);
            },
          },
        },
      },
      scales: {
        x: {
          ticks: {
            autoSkip: false,
            maxRotation: 60,
            minRotation: 45,
            font: { size: 10 },
          },
        },
        y: {
          beginAtZero: true,
          ticks: {
            callback: function (n) {
              return "$" + n / 1000 + "k";
            },
          },
        },
      },
    },
  });
})();
