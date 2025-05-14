//adaptivka +
import loginImg from '../images/login.png'
import { useForm } from 'react-hook-form'
import pb from '../lib/pocketbase'
import useLoginStore from '../elements/useLoginStore'
import { Navigate, useNavigate } from 'react-router'
import IDate from '../elements/interface'
Navigate
const Login = () => {
	const navigate = useNavigate()
	const { setLogin } = useLoginStore()
	const { register, handleSubmit, reset } = useForm<IDate>()

	async function onSubmit(data: IDate) {
		try {
			const result = await pb
				.collection('users')
				.authWithPassword(data.email, data.password)
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
				src={loginImg}
				alt='login image'
				className='hidden md:block w-1/2 lg:w-full'
			/>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className='flex flex-col lg:w-2/3'
			>
				<h2 className='text-4xl font-medium mb-3 sm:mb-4 md:mb-6'>
					Log in to Exclusive
				</h2>
				<p className='text-base font-normal mb-3 sm:mb-4 md:mb-5'>
					Enter your details below
				</p>
				<input
					{...register('email', { required: 'нужное поле' })}
					type='email'
					autoComplete='email'
					placeholder='Your email'
					className='mb-3 sm:mb-4 md:mb-5 outline-1  py-2 border-b'
				/>
				<input
					{...register('password', { required: 'пароль нужен' })}
					type='password'
					autoComplete='current-password'
					placeholder='Password'
					className='mb-3 sm:mb-4 md:mb-5 outline-1  py-2 border-b'
				/>
				<button type='submit' className='bg-red-500 rounded-xl py-4 text-white'>
					Log In
				</button>
			</form>
		</div>
	)
}

export default Login
