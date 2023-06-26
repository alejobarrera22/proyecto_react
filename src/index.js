//import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {

    apiKey: "AIzaSyACrer9Zw7ReDRgztiGq9b81cu2e-Quovs",
    authDomain: "tiendamoto-c9051.firebaseapp.com",
    projectId: "tiendamoto-c9051",
    storageBucket: "tiendamoto-c9051.appspot.com",
    messagingSenderId: "298231577511",
    appId: "1:298231577511:web:0faf568d8c733097391482",
    measurementId: "G-YK9JXTECQY"
};

initializeApp(firebaseConfig);  

const root = ReactDOM.createRoot(document.getElementById('root'));
// const rootElement = document.getElementById("root");
// ReactDOM.render(
//     <StrictMode>
//         <App/>
//     </StrictMode>
//     rootElement
// );
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
root.render(<App />);


