import { useState, useRef } from 'react'
import { useFormik } from 'formik'
import emailjs, { send } from '@emailjs/browser'

const ContactUs = () => {
	const from = useRef()
	const [send, setSend] = useState('Envoyer')
	const initialValues = {
		name: '',
		email: '',
		msg: '',
	}

	// const sendEmail = (values) => {
	// 	emailjs.sendForm('service_r5lhb2j', 'template_30fomqt', values, '5jtzri5zyzJcWEw-T').then(
	// 		(result) => {
	// 			console.log(result.text)
	// 		},
	// 		(error) => {
	// 			console.log(error.text)
	// 		}
	// 	)
	// }

	const sendEmail = (value) => {
		emailjs
			.send('service_r5lhb2j', 'template_30fomqt', value, '5jtzri5zyzJcWEw-T')
			.then((result) => {
				console.log((result.text = 'le message a ete envoye'))
			})
			.catch((error) => console.log(error))
	}

	const handleSubmit = async (value, onSubmittingProps) => {
		console.log(onSubmittingProps)
		try {
			await sendEmail(value)
			console.log(value)
			await setTimeout(() => {
				setSend('message envoyer')
			}, 3000)

			onSubmittingProps.resetForm()
		} catch (error) {
			console.error(error)
		}
	}

	const formik = useFormik({
		initialValues,
		onSubmit: handleSubmit,
		// validationSchema,
	})

	return (
		<div className='w-2/3'>
			<form
				ref={from}
				className='flex flex-col w-full gap-3'
				onSubmit={formik.handleSubmit}
				autoComplete='off'>
				<label htmlFor='name'>Name</label>
				<input
					id='name'
					name='name'
					type='text'
					onChange={formik.handleChange}
					value={formik.values.name}
					placeholder='Your name goes here'
				/>
				<label htmlFor='email'>Email</label>
				<input
					id='email'
					name='email'
					type='email'
					onChange={formik.handleChange}
					value={formik.values.email}
					placeholder='and here your email'
				/>
				<textarea
					id='msg'
					name='msg'
					type='text'
					onChange={formik.handleChange}
					value={formik.values.msg}
					placeholder='what would your like to say'
				/>
				<input type='submit' value='Send' />
			</form>
		</div>
	)
}

export default ContactUs
