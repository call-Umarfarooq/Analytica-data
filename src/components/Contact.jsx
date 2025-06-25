'use client';
import React, { useState } from 'react';
import HeaderSection from './HeaderSection';

const Contact = () => {
	const [form, setForm] = useState({
		name: '',
		email: '',
		message: '',
	});
	const [success, setSuccess] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();
		if (form.name && form.email && form.message) {
			setSuccess(true);
			setForm({ name: '', email: '', message: '' });
			setTimeout(() => {
				setSuccess(false);
			}, 3000);
		}
	};

	return (
		<section id='contact' className='bg-blue-700 text-white py-20'>
			<div className='max-w-xl mx-auto px-6'>
				<HeaderSection
					title={'Contact Us '}
					text={'Lorem ipsum dolor sit amet consectetur, adipisicing elit.'}
				/>
				{success && (
					<div className='bg-green-500 text-white p-4 rounded mb-4'>
						<p>Message sent successfully!</p>{' '}
					</div>
				)}

				<form className='bg-white text-gray-800 p-6 rounded shadow space-y-4'>
					<input
						placeholder='Name'
						className='w-full border px-4 py-2 rounded'
						type='text'
					/>
					<input
						placeholder='Email'
						className='w-full border px-4 py-2 rounded'
						type='text'
					/>
					<textarea
						rows='4'
						placeholder='Message'
						className='w-full border px-4 py-2 rounded'
						type='text'
					/>
					<div className='flex justify-end'>
						<button className='bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-800'>
							Send
						</button>
					</div>
				</form>
			</div>
		</section>
	);
};

export default Contact;
