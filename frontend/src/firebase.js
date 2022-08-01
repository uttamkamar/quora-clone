// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
// import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyCBTM0mJg-S4OBl_8wCug10C5m6nGPiJIA',
	authDomain: 'quora-clone-4ef93.firebaseapp.com',
	projectId: 'quora-clone-4ef93',
	storageBucket: 'quora-clone-4ef93.appspot.com',
	messagingSenderId: '456820208131',
	appId: '1:456820208131:web:931cae20e5d89385359436',
	measurementId: 'G-HM164KC82S',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export { auth, provider };
