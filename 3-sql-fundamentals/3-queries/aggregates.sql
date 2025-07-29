-- AGGREGATES
-- Count the total number of dads
SELECT COUNT(*) AS num_dads
FROM dads;

-- Count the number of dads who have an email address
-- email is NOT NULL in our schema, this will be the same as COUNT(*)
SELECT COUNT(email)
FROM dads;

-- Count the number of unique ages among dads
SELECT COUNT(DISTINCT age)
FROM dads;