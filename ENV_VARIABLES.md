# Cahierix Environmental Variables

## Frontend

In the frontend code, you may need to configure the following environmental variables:

1. `REACT_APP_API_URL`: The base URL of the backend API. Make sure to set this to the correct URL where your backend server is running.

Example:
REACT_APP_API_URL=https://api.example.com

## Backend

In the backend code, you need to set the following environmental variables:

1. `PORT`: The port number on which the backend server will listen for incoming requests. Set it to your desired port number.

Example:
PORT=5000

2. `MONGODB_URL`: The MongoDB connection URL. Replace `your-mongodb-url` with the actual URL of your MongoDB database.

Example:
MONGODB_URL=mongodb://your-mongodb-url

3. `REDIS_HOST`: The hostname of the Redis server.

Example:
REDIS_HOST=your-redis-host-here


4. `REDIS_PORT`: The port number of the Redis server.

Example:
REDIS_PORT=6379


5. `REDIS_PASSWORD`: The password used to authenticate with the Redis server.

Example:
REDIS_PASSWORD=your-redis-password


6. `EMAIL_HOST`: The host of the email server for sending emails.

Example:
EMAIL_HOST=your-email-host

7. `EMAIL_PORT`: The port number of the email server.

Example:
EMAIL_PORT=599


8. `EMAIL_USER`: The email address used to authenticate with the email server.

Example:
EMAIL_USER=your-email@example.com


9. `EMAIL_PASSWORD`: The password used to authenticate with the email server.

Example:
EMAIL_PASSWORD=your-email-password


10. `SENDER_EMAIL`: The email address used as the sender of the emails.

Example:
SENDER_EMAIL=info@cahierix.com


11. `JWT_SECRET`: The secret key used to sign and verify JWT tokens.

Example:
JWT_SECRET=your-jwt-secret


12. `JWT_TEMP_SECRET`: A temporary secret key used during token rotation or key updates.

Example:
JWT_TEMP_SECRET=secret

13. `JWT_EXP_AT`: The expiration time for JWT tokens. It should be a numeric value representing the token expiration time in seconds.

Example:
JWT_EXP_AT=3600


Make sure to replace the example values with your actual configurations before running the frontend and backend servers.



