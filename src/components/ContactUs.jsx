import { useState, useRef } from 'react'
import { useFormik } from 'formik'
import emailjs, { send } from '@emailjs/browser'
import { BasicSchema } from '../schemas'

const ContactUs = () => {
	const from = useRef()
	const [send, setSend] = useState('Envoyer')
	const initialValues = {
		name: '',
		email: '',
		msg: '',
	}

	const sendEmail = (value) => {
		emailjs
			.send('service_r5lhb2j', 'template_30fomqt', value, '5jtzri5zyzJcWEw-T')
			.catch((error) => console.log(error))
	}

	const handleSubmit = async (value, onSubmittingProps) => {
		// console.log(onSubmittingProps)
		try {
			// await sendEmail(value)
			// console.log(value)
			await setTimeout(() => {
				sendEmail(value)
			}, 3000)

			onSubmittingProps.resetForm()
		} catch (error) {
			console.error(error)
		}
	}

	const formik = useFormik({
		initialValues,
		onSubmit: handleSubmit,
		validationSchema: BasicSchema,
	})

	// console.log(formik.errors)

	return (
		<div className='w-2/3'>
			<div className='w-full text-center'>
				<h1 className='font-extrabold text-2xl'>Form using:</h1>
				<h2 className='text-lg'>Formik + Yup + Tailwind</h2>
			</div>
			<form
				ref={from}
				className='flex flex-col w-2/3 mx-auto gap-1'
				onSubmit={formik.handleSubmit}
				autoComplete='off'>
				<label className='block text-gray-700 text-sm font-bold' htmlFor='name'>
					Your Name
				</label>
				<input
					id='name'
					name='name'
					type='text'
					className={
						formik.errors.name && formik.touched.name
							? 'bg-red-500 border border-red-500 text-gray-50 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5  placeholder-gray-700'
							: 'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  placeholder-gray-700'
					}
					placeholder='Your name goes here'
					value={formik.values.name}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
				/>
				{formik.errors.name && formik.touched.name && (
					<span className='text-red-500 font-semibold text-sm'>{formik.errors.name}</span>
				)}
				<label className='block text-gray-700 text-sm font-bold' htmlFor='email'>
					Your Email
				</label>
				<div className='flex'>
					<span
						className={
							formik.errors.email && formik.touched.email
								? 'inline-flex items-center px-3 text-sm text-red-900 bg-red-200 border border-r-0 border-red-300 rounded-l-md '
								: 'inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600'
						}>
						<svg
							aria-hidden='true'
							className={
								formik.errors.email && formik.touched.email
									? 'w-5 h-5 text-red-500'
									: 'w-5 h-5 text-gray-500'
							}
							fill='currentColor'
							viewBox='0 0 20 20'
							xmlns='http://www.w3.org/2000/svg'>
							<path d='M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z'></path>
							<path d='M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z'></path>
						</svg>
					</span>
					<input
						id='email'
						name='email'
						type='email'
						className={
							formik.errors.email && formik.touched.email
								? 'bg-red-200 border border-red-300 text-red-900 text-sm border-l-0  rounded-r-md focus:ring-red-500 focus:border-red-500 block w-full p-2.5  placeholder-gray-700'
								: 'bg-gray-50 border border-gray-300 text-gray-900 text-sm border-l-0  rounded-r-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  placeholder-gray-700'
						}
						placeholder='Here goes your email'
						value={formik.values.email}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
					/>
				</div>
				{formik.errors.email && formik.touched.email && (
					<span className='text-red-500 font-semibold text-sm'>{formik.errors.email}</span>
				)}
				<label className='block text-gray-700 text-sm font-bold' htmlFor='msg'>
					Your Message
				</label>
				<textarea
					id='msg'
					name='msg'
					type='text'
					className={
						formik.errors.name && formik.touched.name
							? 'bg-red-500 border border-red-500 text-gray-50 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5  placeholder-gray-700'
							: 'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  placeholder-gray-700'
					}
					placeholder='What would you like to say'
					value={formik.values.msg}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
				/>
				{formik.errors.msg && formik.touched.msg && (
					<span className='text-red-500 font-semibold text-sm'>{formik.errors.msg}</span>
				)}
				<input
					type='submit'
					value='Send'
					disabled={formik.isSubmitting}
					className={
						formik.isSubmitting
							? 'opacity-50'
							: 'text-white w-1/3  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
					}
				/>
			</form>
		</div>
	)
}

export default ContactUs
