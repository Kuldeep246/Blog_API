# Blogging Application

This is a simple blogging application built with Node.js, Express.js, and MySQL. It provides RESTful APIs for user authentication, creating, reading, updating, and deleting blog posts.

## Features

- User authentication (sign up, sign in) using JWT (JSON Web Tokens).
- CRUD operations for blog posts.
- MySQL database for storing user and blog post data.
- Input validation for user sign up/sign in and blog post creation.
- Authorization middleware to protect routes that require authentication.

## Installation

1. Clone the repository:

``git clone https://github.com/Kuldeep246/Blog_API``



 2. Navigate to the project directory:`

```cd Blog_API```


 3. Install dependencies 

  ```npm install```


 4. Set up the MySQL database:

- Create a `.env` file in the root directory.
- Add the following environment variables to `.env` file:

  ```
  SQL_PASSWORD=your_mysql_password
  JWT_SECRET=your_jwt_secret
  ```

5. Run the application: 

   `node index.js`


 The application will start running on http://localhost:3000.

 6. Test application:
    `npm test`

## API Documentation

For detailed API documentation, refer to the [API Documentation](API_DOCUMENTATION.md) file.


