-- Section 3: SQL Querying - Basic Retrieval & Modification (4 Points)
-- Add at least 5 users to your users table.
INSERT INTO users
(username, email, password)
VALUES
	("kermit-the-frog", "kermit@thefrog.com", "abc123"),
    ("miss-piggy", "miss@piggy.com", "abc123"),
    ("fozzy-bear", "fozzy@bear.com", "abc123"),
    ("gonzo", "thegreat@gonzo.com", "abc123"),
    ("rowlf", "rowlf@thedog.com", "abc123");

SELECT * FROM users;

-- Add at least 7 cars to your cars table.
INSERT INTO cars
(year, make, model, image_url, user_id)
VALUES (2021, "Jeep", "Wrangler", "http://www.example.com/image.jpg", 1),
(2017, "Ford", "Mustang GT", "http://www.example.com/image.jpg", 1),
(2024, "Toyota", "Camry", "http://www.example.com/image.jpg", 2),
(2022, "Chevrolet", "Silverado", "http://www.example.com/image.jpg", 2),
(2023, "Honda", "CRV", "http://www.example.com/image.jpg", 4),
(2016, "Subaru", "Crosstrek", "http://www.example.com/image.jpg", 4),
(2025, "Toyota", "Tacoma", "http://www.example.com/image.jpg", 4),
(2019, "Nissan", "Rogue", "http://www.example.com/image.jpg", 5);

INSERT INTO cars
(year, make, model, image_url, user_id)
VALUES (2023, "Toyota", "Corolla", "http://www.example.com/image.jpg", 2);

SELECT * FROM cars;

-- Add at least 10 ratings to your ratings table.
INSERT INTO ratings
(user_id, car_id, rate)
VALUES
(1, 3, 5),
(1, 4, 2),
(2, 1, 3),
(2, 5, 1),
(3, 2, 4),
(3, 7, 4),
(3, 8, 4),
(5, 1, 1),
(5, 5, 2),
(5, 4, 1);

SELECT * FROM ratings;

-- Retrieve all columns for all cars.
SELECT * FROM cars;

-- Retrieve the username and email for all users.
SELECT username, email FROM users;

-- Retrieve the make and model of all cars manufactured before the year 2010.
SELECT make, model FROM cars WHERE year < 2010;

-- Retrieve the username and email of the first 5 users, ordered alphabetically by username.
SELECT username, email FROM users ORDER BY username ASC LIMIT 5;

-- Update the email of one specific user.
UPDATE users
SET email = "kermy@thefrog.com"
WHERE id = 1;

-- Change the year of one specific car.
UPDATE cars
SET year = 2022
WHERE id = 1;

-- Delete one specific user.
INSERT INTO users
(username, email, password)
VALUES ("user-to-delete", "email@email.com", "abc123");

DELETE FROM users WHERE id = 6;

-- Delete one specific car. (Observe the CASCADE effect on ratings!)
DELETE FROM cars WHERE id = 4;

-- Section 4: SQL Querying - Aggregates & Grouping (3 Points)
-- Calculate the total number of users in the database.
SELECT COUNT(*) from users;

-- Find the oldest year and newest year among all cars.
SELECT MIN(year) as oldest FROM cars;
SELECT MAX(year) as newest FROM cars;

-- Calculate the average rating for all car ratings recorded.
SELECT AVG(rate) FROM ratings;

-- Count how many cars there are for each unique make. Display the make and the count_of_cars.
SELECT make, COUNT(*) as count_of_cars FROM cars GROUP BY make;

-- Find the make of cars that has more than 2 cars registered. Display the make and the total_cars count.
SELECT make, COUNT(*) as total_cars
FROM cars 
GROUP BY make 
HAVING total_cars > 2;

-- For each unique user_id in the ratings table, count how many ratings they have given. Display the user_id and total_ratings_given.
SELECT user_id, COUNT(*) as total_ratings_given FROM ratings GROUP BY user_id;

-- Section 5: SQL Querying - Multi-Table Joins (INNER & LEFT) (3 Points)
-- INNER JOIN: List the username of users along with the make and model of all cars they own.
-- Only show users who own at least one car.
SELECT username, make, model
FROM users
INNER JOIN cars
ON users.id = cars.user_id;

-- LEFT JOIN (All from Left): List the username of all users, and for each user, display the
-- make and model of any cars they own. Include users who do not own any cars.
SELECT username, make, model
FROM users
LEFT JOIN cars
ON users.id = cars.user_id;

-- LEFT JOIN (Anti-Join): Find the make and model of all cars that have not yet received any ratings.
SELECT make, model
FROM cars
LEFT JOIN ratings
ON cars.id = ratings.car_id
WHERE ratings.car_id IS NULL;

-- Section 6: SQL Querying - Advanced Relational Analysis (2 Points)
-- Calculate the average rating for each car. Display the car's make, model, and its
-- average_rating. Order the results by average_rating in descending order.
SELECT make, model, AVG(rate) as average_rating
FROM cars
LEFT JOIN ratings
ON cars.id = ratings.car_id
GROUP BY ratings.car_id
ORDER BY average_rating DESC;

-- For each user, calculate the total number of ratings they have given . Display the username
-- and their total_ratings_given. Order the results by total_ratings_given in descending order.
SELECT username, COUNT(*) as total_ratings_given
FROM users
JOIN ratings
ON users.id = ratings.user_id
GROUP BY username
ORDER BY total_ratings_given DESC;
