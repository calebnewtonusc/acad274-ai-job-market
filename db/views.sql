-- Views the JSON feeds read. Run once in phpMyAdmin (SQL tab) on ellenjun_aijobs.
-- They assume the imported table is named `aijobs_categorized` (Ellen named it that) with the same column names as
-- data/clean/aijobs_categorized.csv. The feeds in site/api run the same SELECTs directly, so they work before these views exist.
-- Exposure share counts High + Very high, since those are the top two of four BLS-style levels.

-- Table 1: one row per field. Proves which fields carry the most AI exposure.
CREATE OR REPLACE VIEW field_summary AS
SELECT Category,
       COUNT(*) AS Jobs,
       ROUND(SUM(Employment2025), 1) AS Employment2025,
       ROUND(AVG(EmploymentChangePct), 1) AS AvgChangePct,
       ROUND(AVG(MedianWage2025)) AS AvgMedianWage,
       ROUND(100 * SUM(AIExposure IN ('High', 'Very high')) / COUNT(*), 1) AS HighExposurePct
FROM aijobs_categorized
GROUP BY Category;

-- Table 2: one row per AI exposure level. Do exposed jobs grow slower or pay more?
CREATE OR REPLACE VIEW exposure_summary AS
SELECT AIExposure,
       COUNT(*) AS Jobs,
       ROUND(SUM(Employment2025), 1) AS Employment2025,
       ROUND(AVG(EmploymentChangePct), 1) AS AvgChangePct,
       ROUND(AVG(MedianWage2025)) AS AvgMedianWage
FROM aijobs_categorized
GROUP BY AIExposure;

-- Table 3: one row per work experience level. Are entry jobs the exposed ones?
CREATE OR REPLACE VIEW experience_summary AS
SELECT WorkExperience,
       COUNT(*) AS Jobs,
       ROUND(AVG(EmploymentChangePct), 1) AS AvgChangePct,
       ROUND(AVG(MedianWage2025)) AS AvgMedianWage,
       ROUND(100 * SUM(AIExposure IN ('High', 'Very high')) / COUNT(*), 1) AS HighExposurePct
FROM aijobs_categorized
GROUP BY WorkExperience;
