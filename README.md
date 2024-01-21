`# Your Backend Application Name

This repository contains the backend application for Avet's MERN project practice, which is a web application that allows users can sign up and add places with description and address uploading images - the main purpose of this app is to practice MERN - MongoDB, Express JS, React JS and Node JS as a Junior Fullstack Developer.

## Getting Started

### Prerequisites

Before you begin, ensure you have the following dependencies installed:

- Node.js
- npm
- MongoDB

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/your-project.git `

1.  Install dependencies:

    bashCopy code

    `cd your-project
    npm install`

2.  Set up your environment variables:

    Create a `.env` file in the root directory and include the following variables:

    envCopy code

    `PORT=5000
    DB_USER=your-mongodb-username
    DB_PASSWORD=your-mongodb-password
    DB_NAME=your-mongodb-database-name
    JWT_KEY=your-secret-jwt-key`

3.  Start the server:

    bashCopy code

    `npm start`

API Endpoints
-------------

### Places

#### `GET /api/places/:pid`

Get a specific place by its ID.

#### `GET /api/places/user/:uid`

Get all places created by a specific user.

#### `POST /api/places`

Create a new place. Requires authentication.

#### `PATCH /api/places/:pid`

Update a place by its ID. Requires authentication.

#### `DELETE /api/places/:pid`

Delete a place by its ID. Requires authentication.

### Users

#### `GET /api/users`

Get a list of all users.

#### `POST /api/users/signup`

Create a new user account.

#### `POST /api/users/login`

Login with an existing user account.

Built With
----------

-   Node.js
-   Express.js
-   MongoDB
-   Mongoose
-   JWT for authentication

Authors
-------

-   Avet Badalyan