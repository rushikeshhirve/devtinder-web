# DevTinder 🏆

A modern web-based dating and professional networking platform built with React, inspired by Tinder's swipe interface but focused on skill-based matching and meaningful connections.

![React](https://img.shields.io/badge/React-19.1.1-blue.svg)
![Vite](https://img.shields.io/badge/Vite-7.1.7-646CFF.svg)
![Redux](https://img.shields.io/badge/Redux_Toolkit-2.11.2-764ABC.svg)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.16-38B2AC.svg)
![Socket.io](https://img.shields.io/badge/Socket.io-4.8.3-010101.svg)

## 🌐 Live Demo

🚀 **[View Live Demo](http://56.228.30.160/)**

Experience DevTinder in action! Try creating a profile, browsing matches, and connecting with others.

## ✨ Features

- **🔐 User Authentication**: Secure login and signup with form validation
- **👤 Profile Management**: Comprehensive profile editing with skills, photos, and personal information
- **🎯 Smart Matching**: Browse potential matches based on skills and interests
- **💬 Real-time Chat**: Instant messaging with connected users using Socket.io
- **🤝 Connection Requests**: Send and receive connection requests with accept/reject functionality
- **📱 Responsive Design**: Design using Tailwind CSS and DaisyUI
- **⚡ Fast Development**: Built with Vite for lightning-fast hot module replacement
- **🎨 Modern UI**: Clean, intuitive interface with smooth animations

## 🛠️ Tech Stack

- **Frontend Framework**: React 19.1.1
- **Build Tool**: Vite 7.1.7
- **State Management**: Redux Toolkit 2.11.2
- **Routing**: React Router DOM 7.10.1
- **Styling**: Tailwind CSS 4.1.16 + DaisyUI 5.3.10
- **HTTP Client**: Axios 1.13.2
- **Real-time Communication**: Socket.io Client 4.8.3
- **Icons**: React Icons 5.5.0
- **Linting**: ESLint 9.36.0

## 📋 Prerequisites

Before running this project, make sure you have the following installed:

- **Node.js** (version 16 or higher)
- **npm** or **yarn** package manager
- **Backend API** server running (typically on `http://localhost:3000`)

## 🚀 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/rushikeshhirve/devtinder-web.git
   cd devtinder-web
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 📖 Usage

### For New Users:
1. Visit the application and click "Sign Up"
2. Fill in your profile information including skills, photo, and bio
3. Start browsing potential matches in the Feed

### For Existing Users:
1. Log in with your credentials
2. Update your profile if needed
3. Browse the Feed to find potential connections
4. Send connection requests to interesting profiles
5. Check your Requests to accept/reject incoming requests
6. Chat with your accepted connections

### Key Interactions:
- **Feed**: Swipe through potential matches (Interested/Ignore buttons)
- **Requests**: Accept or reject incoming connection requests
- **Connections**: View all your accepted connections and start chats
- **Profile**: Edit your personal information and skills

## 🏗️ Project Structure

```
devtinder-web/
├── public/                 # Static assets
├── src/
│   ├── components/         # React components
│   │   ├── UI/            # Reusable UI components
│   │   ├── Body.jsx       # Main layout wrapper
│   │   ├── NavBar.jsx     # Navigation header
│   │   ├── Login.jsx      # Authentication page
│   │   ├── Feed.jsx       # Match browsing interface
│   │   ├── UserCard.jsx   # Profile display card
│   │   ├── Profile.jsx    # Profile wrapper
│   │   ├── EditProfile.jsx # Profile editing form
│   │   ├── Connection.jsx # Connections list
│   │   ├── Requests.jsx   # Incoming requests
│   │   ├── Chat.jsx       # Real-time messaging
│   │   └── Footer.jsx     # Site footer
│   ├── utils/             # Utilities and state management
│   │   ├── appStore.js    # Redux store configuration
│   │   ├── userSlice.js   # User state slice
│   │   ├── feedSlice.js   # Feed state slice
│   │   ├── connectionSlice.js # Connections state slice
│   │   ├── requestSlice.js # Requests state slice
│   │   ├── socket.js      # Socket.io configuration
│   │   └── constants.js   # App constants
│   ├── App.jsx            # Main app component
│   ├── main.jsx           # App entry point
│   └── index.css          # Global styles
├── package.json           # Dependencies and scripts
├── vite.config.js         # Vite configuration
├── eslint.config.js       # ESLint configuration
└── README.md             # Project documentation
```

## 🔌 API Integration

The application communicates with a Node.js backend API. Key endpoints include:

- `POST /login` - User authentication
- `POST /signup` - User registration
- `GET /profile/view` - Fetch user profile
- `PATCH /profile/edit` - Update user profile
- `GET /user/feed` - Get potential matches
- `POST /request/send/:status/:userId` - Send connection request
- `GET /user/requests/received` - Get incoming requests
- `POST /request/review/:status/:requestId` - Accept/reject requests
- `GET /user/connections` - Get accepted connections
- `GET /chat/:targetUserId` - Get chat history
- `POST /logout` - User logout

## 📜 Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📋 TODO & Known Issues

### Features to Implement
- [ ] Show remaining skills on UserCard hover (+X more)
- [ ] Add "Skip for now" functionality in Feed
- [ ] Display connection count in user lists
- [ ] Add/remove skills feature in profile updates

### Fixes Needed
- [ ] Show asterisks (*) for required form fields
- [ ] Reflect accepted connections in list without page refresh

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built as part of the Namaste Node.js course
- Uses open-source libraries and frameworks

---

**Happy Connecting! 💕**