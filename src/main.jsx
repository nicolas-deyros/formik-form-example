import React from 'react'
import ReactDOM from 'react-dom/client'
import ContactUs from './components/ContactUs.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<main className='container mx-auto grid content-center place-items-center h-screen'>
			<ContactUs />
		</main>
	</React.StrictMode>
)
