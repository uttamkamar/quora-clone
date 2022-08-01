import React from 'react';
import { Avatar } from '@material-ui/core';
import '../css/QuoraBox.css';
import { useSelector } from 'react-redux';
import { selectUser } from '../feature/userSlice';

function QuoraBox() {
	const user = useSelector(selectUser);

	return (
		<div className='quoraBox'>
			<div className='quorabox__info'>
				<Avatar src={user?.photo} />
			</div>
			<div className='quorabox__quora'>
				<h5>What is your question or link?</h5>
			</div>
		</div>
	);
}

export default QuoraBox;
