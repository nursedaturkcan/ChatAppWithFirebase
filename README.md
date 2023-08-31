# Chat App With Firebase
This project involves creating a React-based chat application. It integrates services like authentication, database, and storage using Firebase. The application presents a authentication screen where users can sign in with their Google accounts. After signing in, users can send messages to different chat rooms.

Here are the main sections of the project:

Firebase Configuration: Contains a configuration object named firebaseConfig. This object holds the settings for your Firebase project. You'll use this configuration to utilize Firebase services like authentication and database.

Authentication Process:

The App component tracks the user's authentication status using onAuthStateChanged. If the user is logged in, they are directed to the room selection or the current room.
The Auth component includes a button that allows users to sign in with their Google account. It uses signInWithRedirect to open the Google authentication window.
Chat Room Operations:

The Chat component displays messages for the selected room and provides functionality to send messages. Messages are added to the Firebase Firestore database using addDoc.
The Message component displays sent messages and usernames.

Preview:

https://github.com/nursedaturkcan/ChatAppWithFirebase/assets/129687664/3d4c66c5-f663-4931-8f71-d2d31db4633a



This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

