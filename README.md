# Campus Market

## Project Overview

Campus Market is a web-based platform designed to facilitate the buying and selling of goods within a college campus. This platform aims to provide students, faculty, and staff with a convenient, secure, and user-friendly marketplace where they can easily list items for sale and purchase goods from others in the campus community.

## Features

- **User Registration and Authentication**: Secure login and registration system for users.
- **User Profiles**: Personalized profiles for users to manage their listings and transactions.
- **Product Listings**: Easy-to-use interface for listing items for sale, including descriptions, photos, and prices.
- **Search and Filter**: Advanced search and filtering options to help users find the items they need.
- **Messaging System**: In-app messaging for buyers and sellers to communicate securely.
- **Transaction Management**: Secure payment gateway integration and transaction tracking.
- **Rating and Reviews**: System for users to rate and review transactions and sellers.
- **Notifications**: Real-time notifications for new messages, listings, and transaction updates.

## Technology Stack

- **Frontend**: HTML, CSS, JavaScript, React.js
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Tokens)
- **Payment Gateway**: Stripe/PayPal (to be decided)
- **Hosting**: AWS/GCP (to be decided)

## Installation and Setup

### Prerequisites

- Node.js (version X.X.X or higher)
- MongoDB
- Stripe/PayPal account for payment gateway setup

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ivishalsharmax/campus-market.git
   ```

2. Navigate to the project directory:
   ```bash
   cd campus-market
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Set up environment variables:
   - Create a `.env` file in the root directory.
   - Add the following variables:
     ```
     MONGO_URI=your_mongo_db_connection_string
     JWT_SECRET=your_jwt_secret
     STRIPE_SECRET_KEY=your_stripe_secret_key
     PAYPAL_CLIENT_ID=your_paypal_client_id
     PAYPAL_CLIENT_SECRET=your_paypal_client_secret
     ```

5. Start the development server:
   ```bash
   npm run dev
   ```

6. Open your browser and navigate to `http://localhost:3000`.

## Contributing

We welcome contributions to improve Campus Market! To contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeatureName`).
3. Make your changes and commit them (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/YourFeatureName`).
5. Create a new Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

If you have any questions, suggestions, or feedback, please contact us at [vishalsharma29261@gmail.com].

---

Thank you for your interest in Campus Market! We look forward to building a thriving campus marketplace together.

