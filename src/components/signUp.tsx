//adaptivka +
import login from '../images/login.png'
import { useForm } from 'react-hook-form'
import { NavLink, useNavigate } from 'react-router-dom'
import pb from '../lib/pocketbase'
import useLoginStore from '../elements/useLoginStore'
import IDate from '../elements/interface'
const SignUp = () => {
	const navigate = useNavigate()
	const { setLogin } = useLoginStore()
	const { register, handleSubmit, reset } = useForm<IDate>()
	async function onSubmit(data: IDate) {
		localStorage.setItem('pocketbase', JSON.stringify(data))
		try {
			const createdUser = await pb.collection('users').create({
				name: data.name,
				email: data.email,
				password: data.password,
				passwordConfirm: data.password,
			})
			await pb.collection('users').authWithPassword(data.email, data.password)
			const user = pb.authStore.model
			setLogin(true)
			reset()
			navigate('/')
		} catch (error) {
			console.error(error)
		}
	}

	return (
		<div className='container px-2 sm:px-3 md:px-4 mx-auto flex items-center justify-center md:justify-between mt-8 mb-8 sm:mb-14 sm:mt-14 md:mb-20 md:mt-20 lg:mb-35 lg:mt-25 lg:grid lg:grid-cols-2 lg:gap-10'>
			<img
				src={login}
				alt='login image'
				className='hidden md:block w-1/2 lg:w-full
			'
			/>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className='flex flex-col lg:w-2/3 '
			>
				<h2 className='text-4xl font-medium mb-3 sm:mb-4 md:mb-6'>
					Create an account
				</h2>
				<p className='text-base font-normal mb-3 sm:mb-4 md:mb-5'>
					Enter your details below
				</p>
				<input
					{...register('name', { required: 'заполните поле' })}
					type='text'
					autoComplete='username'
					placeholder='Name'
					className='mb-3 sm:mb-4 md:mb-5 py-2 border-b'
				/>
				<input
					{...register('email', { required: 'email нужен' })}
					type='email'
					autoComplete='email'
					placeholder='Your email'
					className='mb-3 sm:mb-4 md:mb-5  py-2 border-b'
				/>
				<input
					{...register('password', { required: 'пароль нужен' })}
					type='password'
					autoComplete='new-password'
					placeholder='Password'
					className='mb-3 sm:mb-4 md:mb-5  py-2 border-b'
				/>
				<button type='submit' className='bg-red-500 rounded-xl py-4 text-white'>
					sign Up
				</button>
				<p className='font-normal text-base text-black text-center mt-8'>
					Create Account{' '}
					<NavLink
						to='/login'
						className='ml-2 relative before:content-[""] before:w-full before:h-0.5 before:opacity-50 before:bg-black before:absolute before:bottom-0'
					>
						Log in
					</NavLink>
				</p>
			</form>
		</div>
	)
}

export default SignUp
