# Express.js Route Handler Missing Error Handling

This repository demonstrates a common error in Express.js route handlers: missing error handling for invalid input.  Specifically, the `/users/:id` route doesn't handle cases where `req.params.id` is not a valid number.  This can result in unexpected behavior, such as crashes or incorrect data being returned.

The `bug.js` file shows the problematic code. The `bugSolution.js` file provides a corrected version with improved error handling.

## How to Reproduce

1. Clone this repository.
2. Run `npm install express` to install the required dependencies.
3. Run `node bug.js`.
4. Send a GET request to `/users/abc` (or any non-numeric ID).

You will observe that the server crashes or behaves unexpectedly because `parseInt('abc')` returns `NaN`, leading to unexpected behavior in the array lookup. 

## Solution

The `bugSolution.js` file shows how to correctly handle this situation by adding checks to ensure the `userId` is a number before attempting to access the user from the array.  A `400 Bad Request` is returned if the userId is invalid and a `404 Not Found` if no user is found with the specified ID.