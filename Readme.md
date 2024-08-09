# Video Hosting Platform

A full-featured video hosting platform built with Node.js, Express.js, MongoDB, and Mongoose, designed to provide seamless video management and dynamic user interactions. This project includes user authentication, video uploads, playback, and real-time features like subscriptions and notifications.

# DataBase Schema
<img width="1080" alt="Screenshot 2024-08-09 at 8 26 01 AM" src="https://github.com/user-attachments/assets/cc81cf07-6e49-4ff0-aecf-f83a68e9d4d7">


## Features

- **Robust Backend Architecture:** Built with Node.js and Express.js to handle user requests efficiently and integrate seamlessly with front-end services.
- **Secure User Authentication:** Utilizes JWT and bcrypt for enhanced security, ensuring protection of sensitive user data.
- **Comprehensive Video Management:** Features video uploads, playback, likes, dislikes, comments, and replies, with data efficiently stored and retrieved using MongoDB and Mongoose.
- **Dynamic User Interaction:** Includes subscriptions, notifications, and real-time data updates to ensure a dynamic and engaging user experience.
- **Scalability and Performance:** Implements industry-standard practices like access tokens, refresh tokens, and rigorous testing to ensure the platform is scalable and performs optimally.

## Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** MongoDB, Mongoose
- **Authentication:** JWT, bcrypt
- **Others:** Access Tokens, Refresh Tokens

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/video-hosting-platform.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd video-hosting-platform
   ```

3. **Install dependencies:**

   ```bash
   npm install
   ```

4. **Set up environment variables:**

   Create a `.env` file in the root directory and add the following:

   ```bash
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   ```

5. **Run the application:**

   ```bash
   npm start
   ```

## Usage

- **Sign Up/Log In:** Users can create an account and log in to the platform.
- **Upload Videos:** Authenticated users can upload videos to the platform.
- **Interact with Videos:** Users can like, dislike, comment, and reply to videos.
- **Subscribe to Channels:** Users can subscribe to their favorite channels and receive notifications.

## API Endpoints

- **POST** `/api/auth/signup`: Register a new user
- **POST** `/api/auth/login`: Log in an existing user
- **POST** `/api/videos/upload`: Upload a new video
- **GET** `/api/videos/:id`: Retrieve a video by ID
- **POST** `/api/videos/:id/like`: Like a video
- **POST** `/api/videos/:id/dislike`: Dislike a video
- **POST** `/api/videos/:id/comment`: Comment on a video
- **POST** `/api/videos/:id/comment/:commentId/reply`: Reply to a comment
- **POST** `/api/users/:id/subscribe`: Subscribe to a channel

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
```

Feel free to customize the template further according to your project’s specific needs!
