# News-Aggregator-API

The News Aggregator API is a Node.js-based RESTful API that allows users to register, log in, manage their news preferences, and fetch news articles based on their preferences. It integrates with external news APIs to provide up-to-date news articles from various sources.

## Getting Started

To set up and run the News Aggregator API locally, follow these steps:

1. **Clone the Repository**: 
   ```bash
   git clone https://github.com/mehul1504/news-aggregator-api.git
   ```
## Install Dependencies:
```bash
cd news-aggregator-api
npm install
```

## Endpoints

The News Aggregator API provides the following endpoints:

- **POST /users/signup**: Register a new user.
- **POST /users/login**: Log in a user.
- **GET /users/preferences**: Retrieve the news preferences for the logged-in user.
- **PUT /users/preferences**: Update the news preferences for the logged-in user.
- **GET /news**: Fetch news articles based on the logged-in user's preferences.

## Testing

The API includes unit tests to ensure its functionality. To run the tests, use the following command:
```bash
npm test
```

## Dependencies

The News Aggregator API relies on the following dependencies:

- **Express.js**: Web framework for Node.js
- **bcrypt**: Password hashing library
- **jsonwebtoken**: JWT authentication library
- **dotenv**: Load environment variables from.env file
- **axios**: HTTP client for making requests to external APIs
- **tap**: Test runner for unit testing
