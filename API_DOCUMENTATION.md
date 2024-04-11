



## Base URL

http://localhost:3000


 ## Authentication

### Sign Up
- **URL:** `/auth/signup`
- **Method:** `POST`
- **Description:** Register a new user.
- **Request Body:**
  ```json
  {
      "email": "example@example.com",
      "password": "password"
  }```

-   **Response:**
    -   `200 OK` if successful:
        

        
        `{
            "token": "JWT Token"
        }` 
        
    -   `409 Conflict` if email is already in use.
    -   `500 Internal Server Error` if server encounters an error.

### Sign In

-   **URL:** `/auth/signin`
-   **Method:** `POST`
-   **Description:** Authenticate an existing user.
-   **Request Body:**
    
    
    `{
        "email": "example@example.com",
        "password": "password"
    }` 
    
-   **Response:**
    -   `200 OK` if successful:
        
        `{
            "token": "JWT Token"
        }` 
        
    -   `400 Bad Request` if user not found or incorrect password.
    -   `500 Internal Server Error` if server encounters an error.

## User Routes

### Update User

-   **URL:** `/user`
-   **Method:** `PUT`
-   **Description:** Update user information.
-   **Authentication Required:** Yes
-   **Request Headers:**
    -   `Authorization: Bearer JWT Token`
-   **Request Body:**
    
    
    `{
        "email": "newemail@example.com",
        "password": "newpassword"
    }` 
    
-   **Response:**
    -   `200 OK` if successful:
        
        
        `{
            "message": "User updated successfully"
        }` 
        
    -   `400 Bad Request` if email or password is missing.
    -   `500 Internal Server Error` if server encounters an error.

### Delete User

-   **URL:** `/user`
-   **Method:** `DELETE`
-   **Description:** Delete user and associated blog posts.
-   **Authentication Required:** Yes
-   **Request Headers:**
    -   `Authorization: Bearer JWT Token`
-   **Response:**
    -   `200 OK` if successful:
        
        
        `{
            "message": "User and associated blog posts deleted successfully"
        }` 
        
    -   `500 Internal Server Error` if server encounters an error.

## Blog Routes

### Create Blog Post

-   **URL:** `/blog`
-   **Method:** `POST`
-   **Description:** Create a new blog post.
-   **Authentication Required:** Yes
-   **Request Headers:**
    -   `Authorization: Bearer JWT Token`
-   **Request Body:**
        
    `{
        "title": "Blog Title",
        "content": "Blog Content"
    }` 
    
-   **Response:**
    -   `200 OK` if successful:
                
        `{
            "id": "Inserted Blog ID"
        }` 
        
    -   `400 Bad Request` if title or content is missing.
    -   `500 Internal Server Error` if server encounters an error.

### Read Blog Post

-   **URL:** `/blog/:id`
-   **Method:** `GET`
-   **Description:** Get details of a specific blog post.
-   **Authentication Required:** Yes
-   **Request Headers:**
    -   `Authorization: Bearer JWT Token`
-   **Response:**
    -   `200 OK` if successful:
                
        `{
            "id": "Blog ID",
            "title": "Blog Title",
            "content": "Blog Content",
            "user_id": "User ID"
        }` 
        
    -   `404 Not Found` if blog post does not exist.
    -   `500 Internal Server Error` if server encounters an error.

### Update Blog Post

-   **URL:** `/blog/:id`
-   **Method:** `PUT`
-   **Description:** Update an existing blog post.
-   **Authentication Required:** Yes
-   **Request Headers:**
    -   `Authorization: Bearer JWT Token`
-   **Request Body:**
    
    `{
        "title": "New Blog Title",
        "content": "New Blog Content"
    }` 
    
-   **Response:**
    -   `200 OK` if successful:
        

        
        `{
            "message": "Blog updated successfully"
        }` 
        
    -   `400 Bad Request` if title or content is missing.
    -   `403 Forbidden` if user is not authorized to update the blog.
    -   `500 Internal Server Error` if server encounters an error.

### Delete Blog Post

-   **URL:** `/blog/:id`
-   **Method:** `DELETE`
-   **Description:** Delete an existing blog post.
-   **Authentication Required:** Yes
-   **Request Headers:**
    -   `Authorization: Bearer JWT Token`
-   **Response:**
    -   `200 OK` if successful:
        
 
        
        `{
            "message": "Blog deleted successfully"
        }` 
        
    -   `403 Forbidden` if user is not authorized to delete the blog or blog post does not exist.
    -   `500 Internal Server Error` if server encounters an error.
