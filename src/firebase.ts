import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
import {getDatabase} from 'firebase/database';

const firebaseConfig = {
	apiKey: process.env['FIREBASE_API_KEY'] as string,
	authDomain: process.env['FIREBASE_AUTH_DOMAIN'] as string,
	projectId: process.env['FIREBASE_PROJECT_ID'] as string,
	storageBucket: process.env['FIREBASE_STORAGE_BUCKET'] as string,
	messagingSenderId: process.env['FIREBASE_MESSAGING_SENDER_ID'] as string,
	appId: process.env['FIREBASE_APP_ID'] as string,
	databaseURL: process.env['FIREBASE_DATABASE_URL'] as string,
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);
