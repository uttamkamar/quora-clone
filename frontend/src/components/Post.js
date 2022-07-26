import { Avatar } from '@material-ui/core';
import {
	ArrowDownwardOutlined,
	ArrowUpwardOutlined,
	ChatBubbleOutlineOutlined,
	MoreHorizOutlined,
	RepeatOutlined,
	CloseOutlined,
	ShareOutlined,
} from '@material-ui/icons';
import React, { useState } from 'react';
import '../css/Post.css';
import Modal from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function Post() {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const Close = <CloseOutlined />;

	return (
		<div className='post'>
			<div className='post__info'>
				<Avatar />
				<h4>user name</h4>
				<small>TimeStamp</small>
			</div>
			<div className='post__body'>
				<div className='post__question'>
					<p>This is test question</p>
				</div>

				<button onClick={() => setIsModalOpen(true)} className='post__btnAnswer'>
					Answer
				</button>

				<Modal open={isModalOpen} closeIcon={Close} onClose={() => setIsModalOpen(false)} closeOnEsc center closeOnOverlayClick={false}>
					<div className='modal__question'>
						<h1>This is test question</h1>
						<p>
							asked by <span className='name'>UserName</span> on <span className='name'>timestamp</span>
						</p>
					</div>
					<div className='maodal__answer'>
						<ReactQuill placeholder='Write your answer here...' />
					</div>
					<div className='modal__button'>
						<button className='cancle' onClick={() => setIsModalOpen(false)}>
							Cancel
						</button>
						<button type='submit' className='add'>
							Add Question
						</button>
					</div>
				</Modal>
			</div>
			<div className='post__footer'>
				<div className='post__footerAction'>
					<ArrowUpwardOutlined />
					<ArrowDownwardOutlined />
				</div>
				<RepeatOutlined />
				<ChatBubbleOutlineOutlined />
				<div className='post__footerLeft'>
					<ShareOutlined />
					<MoreHorizOutlined />
				</div>
			</div>
			<p className='ansCount'>1 Answer</p>
			<div className='post__answer'>
				<div className='post-answer-container'>
					<div className='post-answered'>
						<Avatar />
						<div className='post-info'>
							<p>
								Username<span>TimeStamp</span>
							</p>
						</div>
					</div>
					<div className='post-answer'>This is test answer</div>
				</div>
			</div>
		</div>
	);
}

export default Post;
