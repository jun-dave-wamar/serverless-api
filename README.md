# Serverless Function with Login, Registration, JSON Web Token and Refresh Token 🚀

This is a template made by Jun Dave Wamar for a serverless function that calls an endpoint. It already includes endpoints for Login, Registration, Create token, and refresh token with middleware that checks if the user is valid.


# Getting Started 🚀 

To get started, clone this repository to your local machine and install the necessary dependencies using the following commands:

    git clone https://github.com/jun-dave-wamar/serverless-api.git
    cd server
    npm install

# Configuration ⚙️ 

Before you can use this template, you will need to configure your environment variables. Create a .env file in the root directory of your project and add the following:

    MONGO_URI=your_mongodb_link
    SECRET_KEY=your_jwt_secret_key

# Usage 🚀

To use this API, you can use a tool like Postman to test the endpoints. Here's an example request:

1. Register a user by sending a POST request to https://wamar-serverless-api.vercel.app/api/register with the following JSON body:

    {
        "username":"sample",
        "password":"sample",
        "email":"sample@gmail.com",
        "number":"123456789",
        "role":"admin"
    }

2. Login by sending a POST request to https://wamar-serverless-api.vercel.app/api/login with the following JSON body:

    {
        "username":"sample",
        "password":"sample"
    }


# Endpoints 📝 

The following endpoints are included in this template:

    POST url_link/api/login
    POST url_link/api/register

# Middleware 🔒 

This template includes middleware that checks if the user is valid before allowing access to certain endpoints. The middleware checks for a valid access token and verifies that the user exists in the database.

# Technologies 🛠️ 

    ExpressJs
    NodeJS
    Mongoose (MongoDB)
    
## Contributing

Contributions are welcome! If you find a bug or want to add a new feature, please create an issue or submit a pull request.

