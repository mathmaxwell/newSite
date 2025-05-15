//adaptifka +

import { NavLink, useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import lupe from '../images/lupe.svg'
import heard from '../images/heard.svg'
import shopping from '../images/shopping.svg'
import searchStory from '../elements/searchStory'
import { listVariants, itemVariants, logo } from '../variants/headerVariants'
import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import useLoginStore from '../elements/useLoginStore'
import pb from '../lib/pocketbase'
import { navList, navList2 } from '../elements/list'
import IsavedDate from '../elements/interface'
const Header = () => {
	const { login, setLogin } = useLoginStore()
	const MotionNavLink = motion.create(NavLink)
	const navigate = useNavigate()
	const navListSec = navList2
	const { search, setSearch } = searchStory()
	const searchRef = useRef<HTMLInputElement | null>(null)
	const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		const searchValue = searchRef.current?.value || ''
		if (searchValue.trim()) {
			setSearch(searchValue.toLowerCase())
			navigate(`/search/${searchValue.toLowerCase()}`)
		}
	}

	useEffect(() => {
		async function getInProfil() {
			const rawData = localStorage.getItem('pocketbase')
			if (!rawData) return
			try {
				const savedDate: IsavedDate = JSON.parse(rawData)
				await pb
					.collection('users')
					.authWithPassword(savedDate.email, savedDate.password)
				setLogin(true)
			} catch (err) {
				console.error(err)
			}
		}

		getInProfil()
	}, [])
	const [burgerMenu, setBurgerMenu] = useState(false)
	return (
		<header className='container mx-auto px-2 mt-2 sm:px-3 sm:mt-3 md:px-4 md:mt-4 lg:mt-5 xl:mt-6'>
			<div className='flex w-full items-center justify-between gap-2'>
				<Link
					to='/'
					className='hidden sm:block text-lg font-medium sm:text-xl sm:font-semibold md:text-2xl md:font-bold lg:text-3xl xl:text-4xl '
				>
					Exclusive
				</Link>
				<motion.ul
					variants={listVariants}
					initial='hidden'
					animate='visible'
					className=' gap-1 min-w-20 max-w-64 w-full justify-between hidden sm:flex lg:max-w-80 xl:max-w-96'
				>
					{(login ? navListSec : navList).map((item, idx) => (
						<MotionNavLink
							key={idx}
							variants={itemVariants}
							to={item.url}
							className='text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl'
						>
							{item.name}
						</MotionNavLink>
					))}
				</motion.ul>
				{burgerMenu ? (
					<>
						<motion.ul
							variants={listVariants}
							initial='hidden'
							animate='visible'
							className='order-1  flex sm:hidden gap-1  max-w-72 w-full justify-between '
						>
							{(login ? navListSec : navList).map(
								(
									item,
									idx //ikki
								) => (
									<MotionNavLink
										key={idx}
										variants={itemVariants}
										to={item.url}
									>
										{item.name}
									</MotionNavLink>
								)
							)}
						</motion.ul>
						<button
							className='order-2 w-14 rounded-lg p-1 bg-red-500 text-white sm:hidden'
							onClick={() => setBurgerMenu(prev => !prev)}
						>
							close
						</button>
					</>
				) : (
					<button
						className='order-2 w-14 rounded-lg p-1 bg-red-500 text-white sm:hidden'
						onClick={() => setBurgerMenu(prev => !prev)}
					>
						menu
					</button>
				)}
				<div>
					{!burgerMenu && (
						<div className='flex items-center gap-2 sm:hidden'>
							{' '}
							<form
								onSubmit={handleSearch}
								className='flex border-1  rounded-lg items-center justify-center text-sm'
							>
								<input
									type='text'
									ref={searchRef}
									defaultValue={search}
									placeholder='What are you looking for?' ////////
									className='text-sm p-1 min-w-52 '
								/>
								<button type='submit' className='p-1 block w-5 h-5 '>
									<img src={lupe} alt='search' />
								</button>
							</form>
							{login ? (
								<div className='flex items-center '>
									<NavLink to='/liked-products'>
										<img src={heard} alt='liked' />
									</NavLink>
									<NavLink to='/shopping'>
										<img src={shopping} alt='cart' />
									</NavLink>
								</div>
							) : (
								<div className='hidden' onClick={() => navigate('/sign-up')}>
									<svg
										width='24'
										height='24'
										viewBox='0 0 32 32'
										className='text-gray-700
                     hover:text-gray-900
                     transition-colors duration-200'
									>
										<path d='M22.82,20.55l-.63-.18c-1.06-.29-1.79-.51-1.91-1.75,2.83-3,2.79-5.67,2.73-8.47,0-.38,0-.76,0-1.15a7.1,7.1,0,0,0-7-7A7.1,7.1,0,0,0,9,9c0,.39,0,.77,0,1.15-.06,2.8-.1,5.45,2.73,8.47-.12,1.24-.85,1.46-1.91,1.75l-.63.18C5.61,21.74,2,25,2,29a1,1,0,0,0,2,0c0-3,3-5.61,5.82-6.55.16-.06.34-.1.52-.15A4.11,4.11,0,0,0,13.45,20a5.4,5.4,0,0,0,5.1,0,4.11,4.11,0,0,0,3.11,2.35c.18.05.36.09.52.15C25,23.39,28,26,28,29a1,1,0,0,0,2,0C30,25,26.39,21.74,22.82,20.55Zm-9.36-3C10.9,15,10.94,12.86,11,10.18,11,9.8,11,9.4,11,9A5,5,0,0,1,21,9c0,.4,0,.8,0,1.18,0,2.68.09,4.8-2.47,7.36A3.58,3.58,0,0,1,13.46,17.54Z' />
									</svg>
								</div>
							)}
						</div>
					)}
					<div className='hidden sm:flex gap-1 sm:gap-1.5 md:gap-2 lg:gap-3 xl:gap-4'>
						<form
							onSubmit={handleSearch}
							className='border-1 hidden sm:flex rounded-lg items-center justify-center text-sm sm:text-base md:text-lg lg:text-xl'
						>
							<input
								type='text'
								ref={searchRef}
								defaultValue={search}
								placeholder='What are you looking for?' ///////////
								className='text-sm p-1 w-48 sm:text-base sm:w-48 md:p-1.5 md:text-lg md:w-56 lg:p-2    '
							/>
							<button type='submit' className='p-1 md:block w-7 h-7'>
								<img src={lupe} alt='search' />
							</button>
						</form>
						{login ? (
							<div className='flex items-center sm:gap-1.5 md:gap-2 lg:gap-3 xl:gap-4  '>
								<NavLink to='/liked-products'>
									<img src={heard} alt='liked' />
								</NavLink>
								<NavLink to='/shopping'>
									<img src={shopping} alt='cart' />
								</NavLink>
							</div>
						) : (
							<div className='hidden' onClick={() => navigate('/sign-up')}>
								<svg
									width='24'
									height='24'
									viewBox='0 0 32 32'
									className='text-gray-700
                     hover:text-gray-900
                     transition-colors duration-200'
								>
									<path d='M22.82,20.55l-.63-.18c-1.06-.29-1.79-.51-1.91-1.75,2.83-3,2.79-5.67,2.73-8.47,0-.38,0-.76,0-1.15a7.1,7.1,0,0,0-7-7A7.1,7.1,0,0,0,9,9c0,.39,0,.77,0,1.15-.06,2.8-.1,5.45,2.73,8.47-.12,1.24-.85,1.46-1.91,1.75l-.63.18C5.61,21.74,2,25,2,29a1,1,0,0,0,2,0c0-3,3-5.61,5.82-6.55.16-.06.34-.1.52-.15A4.11,4.11,0,0,0,13.45,20a5.4,5.4,0,0,0,5.1,0,4.11,4.11,0,0,0,3.11,2.35c.18.05.36.09.52.15C25,23.39,28,26,28,29a1,1,0,0,0,2,0C30,25,26.39,21.74,22.82,20.55Zm-9.36-3C10.9,15,10.94,12.86,11,10.18,11,9.8,11,9.4,11,9A5,5,0,0,1,21,9c0,.4,0,.8,0,1.18,0,2.68.09,4.8-2.47,7.36A3.58,3.58,0,0,1,13.46,17.54Z' />
								</svg>
							</div>
						)}
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header
