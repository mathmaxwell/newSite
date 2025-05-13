//adaptivka +
import { NavLink } from 'react-router-dom'
const NotFound = () => {
	return (
		<div className='container px-2 sm:px-3 md:px-4 mx-auto'>
			<div className='flex items-center gap-5 my-5 sm:my-10 md:my-14 lg:my-20'>
				<NavLink to='/' className='text-sm font-normal opacity-50'>
					Home <span className='ml-5'>/</span>
				</NavLink>
				<p className='text-sm font-normal'>404 Error</p>
			</div>
			<h1 className='font-medium text-9xl text-center mb-5 sm:mb-10'>
				404 Not Found
			</h1>
			<p className='text-base font-medium text-center mb-5 sm:mb-10 md:mb-14 lg:mb-20'>
				Your visited page not found. You may go home page.
			</p>
			<button className='bg-red-500 px-12 py-4 mx-auto text-white block mb-5 sm:mb-10 md:mb-14 lg:mb-20 xl:mb-36 rounded-xl'>
				<NavLink to={'/'}>Back to home page</NavLink>
			</button>
		</div>
	)
}

export default NotFound
