//adaptivka +
import { NavLink } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import IDate from '../elements/interface'
const Contact = () => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<IDate>()

	const onSubmit = (data: IDate) => {
		reset()
		console.log(data)
	}
	return (
		<section className='container mx-auto px-2 sm:px-3 md:px-4 mb-6 sm:mb-10 md:mb-14 lg:mb-20 xl:mb-24'>
			<div className='flex items-center gap-5 my-5 sm:my-10 md:my-14 lg:my-20 xl:my-24'>
				<NavLink to='/' className='text-sm font-normal opacity-50'>
					Home <span className='ml-5'>/</span>
				</NavLink>
				<p className='text-sm font-normal'>Contact</p>
			</div>
			<div className='flex flex-col gap-2 sm:gap-3 md:gap-5 lg:gap-8 xl:gap-10 lg:grid lg:grid-cols-3  sm:mb-10 md:mb-14 lg:mb-20 xl:mb-35'>
				<div className='flex flex-col gap-2 sm:flex-row sm:gap-3 md:gap-5 lg:gap-8 lg:flex-col xl:gap-10 bg-gray-50'>
					<div className='flex flex-col relative items-center gap-4  before:content-[""] before:absolute before:w-full lg:before:w-full before:h-0.5 lg:before:h-0.5 sm:before:h-full sm:before:w-0.5 before:opacity-20 before:bg-black before:bottom-0 pb-8 before:left-0 lg:before:left-0 sm:before:left-full py-4 sm:py-5 md:py-7 lg:py-8 xl:px-9 xl:py-10 sm:w-1/2 lg:w-full'>
						<div className='flex justify-center gap-4 items-center '>
							<div className='bg-red-500 w-10 h-10 rounded-full flex items-center justify-center'>
								<svg
									width='35'
									height='35'
									viewBox='0 0 24 24'
									fill='none'
									stroke='white'
									strokeWidth='2'
									strokeLinecap='round'
									strokeLinejoin='round'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path d='M22 16.92v3a2 2 0 01-2.18 2A19.86 19.86 0 013 5.18 2 2 0 015 3h3a2 2 0 012 1.72 13.38 13.38 0 001.16 4.19 2 2 0 01-.45 2.11l-1.27 1.27a16 16 0 006.88 6.88l1.27-1.27a2 2 0 012.11-.45 13.38 13.38 0 004.19 1.16A2 2 0 0122 16.92z' />
								</svg>
							</div>
							<h3 className='font-medium text-2xl'>Call To Us</h3>
						</div>
						<p className='font-normal text-sm lg:mt-6 lg:mb-4'>
							We are available 24/7, 7 days a week.
						</p>
						<a href='tel:+8801611112222' className='font-normal text-sm '>
							Phone: +8801611112222
						</a>
					</div>
					<div className='flex flex-col items-center py-4 sm:py-5 sm:w-1/2 md:py-7 lg:w-full lg:py-8 xl:px-9 xl:py-10 gap-4'>
						<div className='flex gap-4 items-center justify-center'>
							<div className='bg-red-500 w-10 h-10 rounded-full flex items-center justify-center'>
								<svg
									width='35'
									height='35'
									viewBox='0 0 24 24'
									fill='none'
									stroke='white'
									strokeWidth='2'
									strokeLinecap='round'
									strokeLinejoin='round'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path d='M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z' />
									<path d='M22 6l-10 7L2 6' />
								</svg>
							</div>
							<h3 className='font-medium text-2xl'>Write To US</h3>
						</div>
						<p className='font-normal text-sm lg:mt-6 lg:mb-4 text-center'>
							Fill out our form and we will contact you within 24 hours.
						</p>
						<a
							href='mailto:customer@exclusive.com'
							className='font-normal text-sm'
						>
							Emails: customer@exclusive.com
						</a>
						<a
							href='mailto:support@exclusive.com'
							className='font-normal text-sm'
						>
							Emails: support@exclusive.com
						</a>
					</div>
				</div>

				<form
					className='flex flex-col gap-3 items-start lg:col-span-2 lg:h-full bg-gray-50 lg:grid lg:grid-rows-6 lg:grid-cols-3 lg:gap-y-4 lg:gap-x-8'
					onSubmit={handleSubmit(onSubmit)}
				>
					<input
						className='h-14 py-3 px-4 border w-full rounded-lg'
						type='text'
						placeholder='Your Name *'
						{...register('name', { required: 'имя обязательно' })}
					/>
					<input
						className='h-14 py-3 px-4 border w-full rounded-lg'
						type='email'
						placeholder='Your Email *'
						{...register('email', { required: 'email обязательно' })}
					/>
					<input
						className=' h-14 py-3 px-4 border w-full rounded-lg'
						type='text'
						placeholder='Your Phone *'
						{...register('phone', { required: 'телефон обязательно' })}
					/>
					<textarea
						className='col-span-3 px-4 py-3 row-span-4  bg-[#e8e7e7] w-full rounded-lg border lg:h-full'
						placeholder='Your Message'
						{...register('text', { required: 'текст обязателен' })}
					/>
					<button
						type='submit'
						className='lg:col-span-3 mx-auto rounded-2xl lg:ml-auto px-12 py-4 h-14 bg-red-600 text-white mt-auto'
					>
						submit
					</button>
				</form>
			</div>
		</section>
	)
}

export default Contact
