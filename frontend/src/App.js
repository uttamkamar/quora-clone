import React, { useEffect } from 'react';
import './App.css';
import Quora from './components/Quora';
import { login, selectUser } from './feature/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import Login from './components/auth/Login';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';

function App() {
	const user = useSelector(selectUser);
	const dispatch = useDispatch();

	useEffect(() => {
		onAuthStateChanged(auth, (authUser) => {
			if (authUser) {
				dispatch(
					login({
						userName: authUser.displayName,
						photo: authUser.photoURL,
						email: authUser.email,
						uid: authUser.uid,
					})
				);
				// console.log('AuthUser:', authUser);
			}
		});
	}, [dispatch]);
	return <div className='App'>{user ? <Quora /> : <Login />}</div>;
}

export default App;
