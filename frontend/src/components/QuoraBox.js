import React from 'react';
import { Avatar } from '@material-ui/core';
import '../css/QuoraBox.css';

function QuoraBox() {
	return (
		<div className='quoraBox'>
			<div className='quorabox__info'>
				<Avatar />
			</div>
			<div className='quorabox__quora'>
				<h5>What is your question or link?</h5>
			</div>
		</div>
	);
}

export default QuoraBox;
