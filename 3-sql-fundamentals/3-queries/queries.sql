-- SELECT STATEMENT
SELECT * FROM dads ORDER BY age;

-- select certain columns
select name, email from dads;

-- filter with WHERE
SELECT * from dads
WHERE name="Chen Wei";

SELECT * FROM dads
WHERE age >= 50;

SELECT name, age FROM dads
ORDER BY name asc;

-- Combining conditions
SELECT name, age, email
FROM dads
WHERE age > 40 AND email LIKE '%.com';

-- Find dads whose names start with 'L'
SELECT name
FROM dads
WHERE name LIKE 'L%';

-- Find dads whose email contains 'example'
SELECT name, email
FROM dads
WHERE email LIKE '%example%';

-- Find dads whose name has 'a' as the second letter (e.g., 'Maria')
SELECT name
FROM dads
WHERE name LIKE '_a%';

/* 
	this is a comment
	multiline
*/

-- Find dads named Omar Khan, Maria Rodriguez, or Chen Wei
SELECT name, age
FROM dads
WHERE name IN ('Omar Khan', 'Maria Rodriguez', 'Chen Wei');

-- Find dads whose age is between 40 and 48 (inclusive)
SELECT name, age
FROM dads
WHERE age BETWEEN 40 AND 48;

-- Get the youngest 5 dads
SELECT *
FROM dads
ORDER BY age
LIMIT 5;

/* 
	YOUR TURN CHALLENGES
	Young Dads
	Retrieve the name and email of all dads who are younger than 40 years old.
*/

SELECT name, email
FROM dads
WHERE age < 40;

-- Email Domains
-- Find the name and email of all dads whose email addresses contain '.com' and are NOT named 'David Goldstein'.

SELECT name, email
FROM dads
WHERE email LIKE '%.com' AND name != "David Goldstein";

-- Alphabetical Dads
-- List all dads' name and age, sorted alphabetically by name. Then, get only the first 3 results.

SELECT name, age
FROM dads
ORDER BY name
LIMIT 3;

-- Middle-Aged Dads
-- Find the name and age of dads whose age is between 45 and 55 (inclusive), and order them from oldest to youngest.

SELECT name, age
FROM dads 
WHERE age BETWEEN 45 AND 55
ORDER BY age desc;

-- Senior Dads
-- Retrieve the names of the 2 oldest dads in your database.
SELECT name, age
FROM dads
ORDER BY age desc
LIMIT 2;