# Introduction to Unit Testing in JavaScript

Unit testing is the practice of writing small, focused tests that verify the behavior of individual pieces of code—usually functions or methods. The goal is to catch errors early, ensure code behaves as expected, and make it easier to refactor with confidence.

## The Testing Pyramid

A common model for thinking about different types of automated tests is the **Testing Pyramid**:

- **Unit Tests (Base):** Small, fast tests that focus on individual units of code. They form the foundation and should be the most numerous.
- **Integration Tests (Middle):** Tests that check how different parts of the system work together.
- **End-to-End Tests (Top):** High-level tests that simulate real user interactions with the application. These are slower and fewer in number.

The pyramid suggests having many unit tests, some integration tests, and relatively few end-to-end tests.

## The Three A's of Testing

When writing tests, a useful structure to follow is the **Three A's**:

1. **Arrange** – Set up the conditions and inputs needed for the test.
2. **Act** – Execute the code under test.
3. **Assert** – Verify that the result matches the expected outcome.

This structure keeps tests consistent, readable, and easy to maintain.
