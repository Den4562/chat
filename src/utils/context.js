import { createContext, useContext } from "react";

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAZoVLUuX9u4DMnYPLIagruwTH7jZ6long",
  authDomain: "chattest-b4ca5.firebaseapp.com",
  projectId: "chattest-b4ca5",
  storageBucket: "chattest-b4ca5.appspot.com",
  messagingSenderId: "514365865928",
  appId: "1:514365865928:web:5668655a3ac0c466ad8afd",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const firestore = firebase.firestore();

const AppContext = createContext();
export const useAppContext = () => {
  return useContext(AppContext);
};

export const AppProvider = ({ children }) => {
  return (
    <AppContext.Provider value={{ firebase, auth, firestore }}>
      {children}
    </AppContext.Provider>
  );
};
