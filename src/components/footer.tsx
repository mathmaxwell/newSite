//adaptivka +
import { NavLink } from 'react-router-dom'
import qrCode from '../images/qrCode.png'
import googlePlay from '../images/googlePlay.png'
import appStore from '../images/appStore.png'
import facebook from '../images/facebook.svg'
import twitter from '../images/twitter.svg'
import instagram from '../images/instagram.svg'
import inSvg from '../images/in.svg'
import useLoginStore from '../elements/useLoginStore'
const Footer = () => {
	const { login } = useLoginStore()
	return (
		<footer className='bg-black '>
			<div className='text-white container mx-auto p-2 sm:p-3 md:px-4'>
				<ul className=' grid grid-cols-2 gap-2 mb-2 sm:gap-3 sm:mb-3 sm:grid-cols-4'>
					<li className=' hidden sm:flex flex-col gap-3 text-center'>
						<NavLink
							className='text-xl font-semibold md:text-2xl md:font-bold lg:text-3xl'
							to={'/'}
						>
							Exclusive
						</NavLink>
						<NavLink
							className='text-base font-normal md:text-lg md:font-medium'
							to={'/about'}
						>
							Subscribe
						</NavLink>
						<NavLink
							className='text-base font-normal md:text-lg md:font-medium'
							to={login ? '/shopping' : '/sign-up'}
						>
							Get 10% off your first order
						</NavLink>
					</li>
					<li className=' flex flex-col gap-2 text-center justify-between sm:gap-3'>
						<NavLink
							className='font-medium text-xl md:text-2xl md:font-bold lg:text-3xl'
							to={'/about'}
						>
							Support
						</NavLink>
						<address className='font-light text-sm sm:text-base sm:font-normal md:text-lg md:font-medium'>
							111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
						</address>
						<a
							className='font-light text-sm sm:text-base sm:font-normal md:text-lg md:font-medium'
							href='mailto:exclusive@gmail.com'
						>
							exclusive@gmail.com
						</a>
						<a
							className='font-light text-sm sm:text-base sm:font-normal md:text-lg md:font-medium'
							href='tel:+88015-88888-9999'
						>
							+88015-88888-9999
						</a>
					</li>
					<li className='hidden sm:flex flex-col gap-2 items-center sm:gap-3'>
						<NavLink
							className='text-xl font-semibold md:text-2xl md:font-bold lg:text-3xl'
							to={login ? '/liked-products' : '/sign-up'}
						>
							Account
						</NavLink>
						<NavLink
							className='text-base font-normal md:text-lg md:font-medium'
							to={'/liked-products'}
						>
							My Account
						</NavLink>
						{login ? null : (
							<NavLink
								className='text-base font-normal md:text-lg md:font-medium'
								to={'/login'}
							>
								Login / Register
							</NavLink>
						)}
						<NavLink
							className='text-base font-normal md:text-lg md:font-medium'
							to={'/liked-products'}
						>
							Cart
						</NavLink>
						<NavLink
							className='text-base font-normal md:text-lg md:font-medium'
							to={'/liked-products'}
						>
							Wishlist
						</NavLink>
						<NavLink
							className='text-base font-normal md:text-lg md:font-medium'
							to={'/shopping'}
						>
							Shop
						</NavLink>
					</li>
					<li className=' flex flex-col gap-2 text-center sm:gap-3'>
						<a
							className='font-medium text-xl sm:text-xl sm:font-semibold md:text-2xl md:font-bold lg:text-3xl'
							href='#!'
						>
							Quick Link
						</a>
						<a
							className='font-light text-sm sm:text-base sm:font-normal md:text-lg md:font-medium'
							href='#!'
						>
							Privacy Policy
						</a>
						<NavLink
							className='font-light text-sm sm:text-base sm:font-normal md:text-lg md:font-medium'
							to={'/about'}
						>
							Terms Of Use
						</NavLink>
						<a
							className='font-light text-sm md:text-lg md:font-medium'
							href='#!'
						>
							FAQ
						</a>
						<NavLink
							className='font-light text-sm sm:text-base sm:font-normal md:text-lg md:font-medium'
							to={'/about'}
						>
							Contact
						</NavLink>
					</li>
				</ul>

				<div className='grid grid-cols-2 w-full'>
					<div className='hidden sm:flex flex-col gap-3 text-center'>
						<a
							href='#!'
							className='font-medium text-xl md:text-2xl md:font-bold'
						>
							Download App
						</a>
						<p className='font-medium text-xs text-gray-500 md:text-lg md:font-medium'>
							Save $3 with App New User Only
						</p>
					</div>
					<div className='grid grid-rows-2 grid-cols-4 gap-5 order-2 sm:grid-cols-6'>
						<img className='col-span-2 row-span-2 ' src={qrCode} alt='qrCode' />
						<img className='col-span-2' src={googlePlay} alt='googlePlay' />
						<img className='col-span-2' src={appStore} alt='appStore' />
						<div className='hidden sm:flex items-center justify-center gap-4 sm:col-span-4'>
							<a href='#!'>
								<img src={facebook} alt='facebook' />
							</a>
							<a href='#!'>
								<img src={twitter} alt='twitter' />
							</a>
							<a href='#!'>
								<img src={instagram} alt='instagram' />
							</a>
							<a href='#!'>
								<img src={inSvg} alt='in' />
							</a>
						</div>
					</div>
					<div className='flex sm:hidden w-full items-center justify-center gap-4'>
						<a href='#!'>
							<img src={facebook} alt='facebook' />
						</a>
						<a href='#!'>
							<img src={twitter} alt='twitter' />
						</a>
						<a href='#!'>
							<img src={instagram} alt='instagram' />
						</a>
						<a href='#!'>
							<img src={inSvg} alt='in' />
						</a>
					</div>
				</div>
				<p className='text-center border-t border-zinc-800 opacity-50 text-sm font-light mt-2 sm:text-base sm:font-normal md:text-lg md:font-medium'>
					© Copyright Rimel 2022. All right reserved
				</p>
			</div>
		</footer>
	)
}

export default Footer
