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
import ReactTimeAgo from 'react-time-ago';
import axios from 'axios';
import ReactHtmlParser from 'html-react-parser';
import { useSelector } from 'react-redux';
import { selectUser } from '../feature/userSlice';

function LastSeen({ date }) {
	return (
		<div>
			<ReactTimeAgo date={date} locale='en-US' timeStyle='round' />
		</div>
	);
}

function Post({ post }) {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [answer, setAnswer] = useState('');
	const Close = <CloseOutlined />;
	const user = useSelector(selectUser);

	const handleQuill = (value) => {
		setAnswer(value);
	};
	// console.log(answer);

	const handleSubmit = async () => {
		if (post?._id && answer !== '') {
			const config = {
				headers: {
					'Content-Type': 'application/json',
				},
			};
			const body = {
				answer: answer,
				questionId: post?._id,
				user: user,
			};
			await axios
				.post('/api/answers', body, config)
				.then((res) => {
					console.log(res.data);
					alert('Answer added successfully');
					setIsModalOpen(false);
					window.location.href = '/';
				})
				.catch((e) => {
					console.log(e);
				});
		}
	};

	return (
		<div className='post'>
			<div className='post__info'>
				<Avatar src={post?.user?.photo} />
				<h4>{post?.user?.userName}</h4>

				<small>
					<LastSeen date={post?.createdAt} />
				</small>
			</div>
			<div className='post__body'>
				<div className='post__question'>
					<p>{post?.questionName}</p>

					<button onClick={() => setIsModalOpen(true)} className='post__btnAnswer'>
						Answer
					</button>

					<Modal open={isModalOpen} closeIcon={Close} onClose={() => setIsModalOpen(false)} closeOnEsc center closeOnOverlayClick={false}>
						<div className='modal__question'>
							<h1>{post?.questionName}</h1>
							<p>
								asked by <span className='name'>{post?.user?.userName}</span> on{' '}
								<span className='name'>{new Date(post?.createdAt).toLocaleString()}</span>
							</p>
						</div>
						<div className='maodal__answer'>
							<ReactQuill value={answer} onChange={handleQuill} placeholder='Write your answer here...' />
						</div>
						<div className='modal__button'>
							<button className='cancle' onClick={() => setIsModalOpen(false)}>
								Cancel
							</button>
							<button onClick={handleSubmit} type='submit' className='add'>
								Add Answer
							</button>
						</div>
					</Modal>
				</div>
				{post.questionUrl !== '' && <img src={post.questionUrl} alt='url'></img>}
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
			<p className='ansCount'>{post?.allAnswers.length} Answer</p>
			<div className='post__answer'>
				{post?.allAnswers?.map((_a) => (
					<>
						<div className='post-answer-container'>
							<div className='post-answered'>
								<Avatar src={_a?.user?.photo} />
								<div className='post-info'>
									<p>
										{_a?.user?.userName}
										<span>
											<LastSeen date={_a?.createdAt} />
										</span>
									</p>
								</div>
							</div>
							<div className='post-answer'>{ReactHtmlParser(_a?.answer)}</div>
						</div>
					</>
				))}
			</div>
		</div>
	);
}

export default Post;
