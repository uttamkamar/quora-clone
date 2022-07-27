import React, { useState } from 'react';
import logo from '../img/quora-logo.jpg';
import {
	Home,
	FeaturedPlayListOutlined,
	AssignmentTurnedInOutlined,
	PeopleAltOutlined,
	NotificationsOutlined,
	Search,
	CloseOutlined,
	ExpandMore,
} from '@material-ui/icons';
import { Avatar, Button, Input } from '@material-ui/core';
import '../css/QuoraHeader.css';
import Modal from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import axios from 'axios';

function QuoraHeader() {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [inputUrl, setInputUrl] = useState('');
	const [question, setQuestion] = useState('');
	const Close = <CloseOutlined />;

	const handleSubmit = async () => {
		if (question !== '') {
			const config = {
				headers: {
					'Content-Type': 'application/json',
				},
			};

			const body = {
				questionName: question,
				questionUrl: inputUrl,
			};
			await axios
				.post('/api/questions', body, config)
				.then((res) => {
					console.log(res.data);
					alert(res.data.message);
					window.location.href = '/';
				})
				.catch((e) => {
					console.log(e);
					alert('Error in adding question');
				});
		}
	};

	return (
		<div className='qHeader'>
			<div className='qHeader-content'>
				<div className='qHeader__logo'>
					<img src={logo} alt='logo' />
				</div>
				<div className='qHeader__icons'>
					<div className='qHeader__icon'>
						<Home />
					</div>
					<div className='qHeader__icon'>
						<FeaturedPlayListOutlined />
					</div>
					<div className='qHeader__icon'>
						<AssignmentTurnedInOutlined />
					</div>
					<div className='qHeader__icon'>
						<PeopleAltOutlined />
					</div>
					<div className='qHeader__icon'>
						<NotificationsOutlined />
					</div>
				</div>
				<div className='qHeader__input'>
					<Search />
					<input type='text' name='searchBox' id='' placeholder='Search Question' />
				</div>
				<div className='qHeader__Rem'>
					<Avatar />
				</div>
				<Button onClick={() => setIsModalOpen(true)}>Add Question</Button>
				<Modal open={isModalOpen} closeIcon={Close} onClose={() => setIsModalOpen(false)} closeOnEsc center closeOnOverlayClick={false}>
					<div className='modal__title'>
						<h5>Add Question</h5>
						<h5>Share Link</h5>
					</div>
					<div className='modal__info'>
						<Avatar className='avatar' />
						<div className='modal__scope'>
							<PeopleAltOutlined />
							<p>Public</p>
							<ExpandMore />
						</div>
					</div>
					<div className='modal__Field'>
						<Input
							value={question}
							onChange={(e) => setQuestion(e.target.value)}
							type='text'
							placeholder="Start your question with 'What', 'How', 'Why', etc."
						/>
						<div className='modal__fieldLink'>
							<input
								value={inputUrl}
								onChange={(e) => setInputUrl(e.target.value)}
								type='text'
								placeholder='Optional: inclue a link that gives context'
							/>

							{inputUrl !== '' && <img src={inputUrl} alt='LinkImage' />}
						</div>
					</div>
					<div className='modal__buttons'>
						<button className='cancel' onClick={() => setIsModalOpen(false)}>
							Cancel
						</button>
						<button onClick={handleSubmit} type='submit' className='add'>
							Add Question
						</button>
					</div>
				</Modal>
				{/* <button className='modal__buttons'>Add Question</button> */}
			</div>
		</div>
	);
}

export default QuoraHeader;
