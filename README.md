# Serverless Function with Login, Registration, JSON Web Token and Refresh Token 🚀

This is a template made by Jun Dave Wamar for a serverless function that calls an endpoint. It already includes endpoints for Login, Registration, create token, and refresh token with middleware that checks if the user is valid.
🛠️ Prerequisites

# Technologies 🛠️ 

    ExpressJs
    NodeJS
    Mongoose (MongoDB)
    
# Dependencies 🛠️
    
    express
    bcryptjs
    cookie-parser
    cors
    dotenv
    jsonwebtoken
    mongodb
    mongoose
    nodemon
    

# Getting Started 🚀 

To get started, clone this repository to your local machine and install the necessary dependencies using the following commands:

    git clone https://github.com/jun-dave-wamar/serverless-api.git
    cd your_project
    npm install

# Configuration ⚙️ 

Before you can use this template, you will need to configure your environment variables. Create a .env file in the root directory of your project and add the following:

    MONGO_URI=your_database_host
    SECRET_KEY=your_database_name

# Usage 🚀

To run the serverless function, use the following command:

    npm run start

This will start the function on your local machine. You can then use a tool like Postman to test the endpoints.

# Endpoints 📝 

The following endpoints are included in this template:


    POST /api/login: This endpoint allows users to log in with their email and password.
             - This endpoint allows users to create a new access token by successfuly logging in.

    POST /api/register: This endpoint allows users to create a new account by providing their name, email, and password.

# Middleware 🔒 

This template includes middleware that checks if the user is valid before allowing access to certain endpoints. The middleware checks for a valid access token and verifies that the user exists in the database.



