# Cahierix

Cahierix is an innovative app that aims to enhance the back-to-school shopping experience for users. It provides a user-friendly interface to manage shopping lists, track orders, and discover the latest products for the upcoming academic year.

<!-- ![Cahierix Logo](link-to-logo) -->

## Features

- Landing page
- Add, edit, and remove items from the shopping lists.
- Track the status of orders and receive notifications on shipment and delivery updates.
- Discover new and trending products for the back-to-school season.
- User-friendly authentication system with support for passwordless login.
- Secure JWT-based authentication and authorization to protect user data and sensitive information.

## Technologies Used

- Frontend: Next.js (with Redux for state management)
- Backend: Node.js (Express.js), Socket.io, Redis and MongoDB with Prisma ORM
- Database: MongoDB (for user data and shopping history), and Redis(for cart real-time features).
- Authentication: JWT-based passwordless authentication with Passport.js
- CI/CD: GitHub Actions for automated deployment on AWS.

## Getting Started

### Prerequisites

- Node.js and npm installed on your local machine
- MongoDB set up and running
- AWS account

### Backend

1. Clone the repository: `git clone https://github.com/kamicodaxe/cahierix.git`
2. Navigate to the project directory: `cd cahierix`
3. Navigate to the backend directory: `cd backend-nodejs`
4. Install backend dependencies: `npm install` (or `yarn install`)
5. Set up environmental variables: Create a `.env` file in the backend directory and add the necessary environment variables (e.g., MongoDB connection string, JWT secret, etc..). Check [Environmental variables](ENV_VARIABLES.md)

### Frontend

1. Navigate to the frontend directory: `cd frontend`
2. Install frontend dependencies: `npm install` (or `yarn install`)


## Usage

### Backend

- Start the backend development server: `npm run dev` (or `yarn dev`)
- Start the backend production server: `npm start` (or `yarn start`)
The app will be accessible at `http://localhost:PORT`.

### Frontend

- Start the frontend development server: `npm run start` (or `yarn start`)
- Build the frontend for production: `npm run build` (or `yarn build`)
The app will be accessible at `http://localhost:3000`.

### Contributing

We welcome contributions from the community! If you'd like to contribute to Cahierix, please follow our [contribution guidelines](CONTRIBUTING.md).

### License

Cahierix is open-source software licensed under the [GNU Affero General Public License (AGPL)](https://www.gnu.org/licenses/agpl-3.0.html) version 3.0.

This software is free to use, modify, and distribute, as long as you comply with the terms and conditions of the AGPL 3.0 license.

The AGPL 3.0 ensures that any modifications or improvements made to the software will also be open source and available to the community. If you modify the software and make it available to others, you must also provide the corresponding source code.

Please read the full text of the AGPL 3.0 license to understand your rights and obligations.

For the full license text, visit: [GNU AGPL 3.0](https://www.gnu.org/licenses/agpl-3.0.html)


### Acknowledgements

We would like to express our gratitude to all the contributors and supporters who have helped make Cahierix a reality.

For bug reports, feature requests, and general feedback, please open an issue on our GitHub repository.

Happy shopping with Cahierix!
