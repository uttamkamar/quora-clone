import React from 'react';
import QuoraBox from './QuoraBox';
import '../css/feed.css';
import Post from './Post';

function Feed() {
	return (
		<div className='feed'>
			<QuoraBox />
			<Post />
		</div>
	);
}

export default Feed;
