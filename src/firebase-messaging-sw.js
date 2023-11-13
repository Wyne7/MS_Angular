importScripts(
    "https://www.gstatic.com/firebasejs/9.1.3/firebase-app-compat.js"
  );
  importScripts(
    "https://www.gstatic.com/firebasejs/9.1.3/firebase-messaging-compat.js"
  );
  firebase.initializeApp({
    apiKey: "AIzaSyAINl3Y54arlpFs9RlFpDbp0Ce7Wyoka_0",
    authDomain: "fir-tutorial-db-7822b.firebaseapp.com",
    projectId: "fir-tutorial-db-7822b",
    storageBucket: "fir-tutorial-db-7822b.appspot.com",
    messagingSenderId: "963139272970",
    appId: "1:963139272970:web:c44720e6b7d7ee06e9faf3"
  });
  const messaging = firebase.messaging();