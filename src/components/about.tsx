//adaptiva +
import { NavLink } from 'react-router-dom'
import twoFemales from '../images/twoFemales.png'
const About = () => {
	return (
		<div className='container mx-auto mt-5 px-2 sm:px-3 sm:mt-10 md:px-4 md:mt-14 lg:mt-20 xl:mt-24'>
			<div className='flex items-center gap-5'>
				<NavLink to='/' className='text-base font-normal opacity-50'>
					Home <span className='ml-5'>/</span>
				</NavLink>
				<p className='text-base font-normal'>About</p>
			</div>
			<h2 className='hidden text-center text-4xl font-bold sm:block mt-5'>
				Our Story
			</h2>
			<div className='mt-10 mb-10 sm:flex'>
				<div className='flex flex-col content-center gap-5 justify-center w-full md:gap-7'>
					<h2 className='font-semibold text-3xl text-center  sm:hidden'>
						Our Story
					</h2>
					<p className='font-normal text-lg text-center sm:text-xl sm:font-normal md:font-medium md:text-2xl'>
						Launced in 2015, Exclusive is South Asia’s premier online shopping
						makterplace with an active presense in Bangladesh. Supported by wide
						range of tailored marketing, data and service solutions, Exclusive
						has 10,500 sallers and 300 brands and serves 3 millioons customers
						across the region.
					</p>
					<p className='font-normal text-lg text-center md:text-xl'>
						Exclusive has more than 1 Million products to offer, growing at a
						very fast. Exclusive offers a diverse assotment in categories
						ranging from consumer.
					</p>
				</div>
				<img
					src={twoFemales}
					alt='two females'
					className='w-1/2 hidden sm:block'
				/>
			</div>
			<div className='grid grid-cols-2 grid-rows-2 gap-2 mb-10 mx-auto aspect-square sm:aspect-auto sm:flex sm:w-full sm:gap-2 sm:justify-center'>
				<div className='flex mx-auto aspect-square flex-col gap-3 items-center justify-center border text-center rounded-lg  sm:w-1/4 '>
					<div className='w-1/3 h-1/3 bg-gray-200 rounded-full flex items-center justify-center'>
						<div className='w-2/3 h-2/3 rounded-full bg-black flex items-center justify-center'>
							<svg
								fill='#FFF'
								width='35px'
								height='35px'
								viewBox='0 0 36 36'
								version='1.1'
								preserveAspectRatio='xMidYMid meet'
								xmlns='http://www.w3.org/2000/svg'
								xmlnsXlink='http://www.w3.org/1999/xlink'
							>
								<title>bank-solid</title>
								<path
									d='M3.5,13.56,5,12.68V16H31V12.71l1.48.85a1,1,0,0,0,1-1.73L18,2.92,2.5,11.83a1,1,0,1,0,1,1.73ZM17.85,7.11a.8.8,0,0,1,.8,0L25.37,11H22.15l-3.9-2.24L14.35,11H11.14Z'
									className='clr-i-solid clr-i-solid-path-1'
								></path>
								<path
									d='M32.85,27H32v-.85A1.15,1.15,0,0,0,30.85,25H28V17.63H24V25H20V17.63H16V25H12V17.63H8V25H5.15A1.15,1.15,0,0,0,4,26.15V27H3.15A1.15,1.15,0,0,0,2,28.15V31H34V28.15A1.15,1.15,0,0,0,32.85,27Z'
									className='clr-i-solid clr-i-solid-path-2'
								></path>
								<rect x='0' y='0' width='36' height='36' fillOpacity='0' />
							</svg>
						</div>
					</div>
					<h2 className='text-xl font-semibold md:text-2xl md:font-bold lg:text-3xl'>
						10.5k
					</h2>
					<p className='text-base font-normal md:text-lg md:font-semibold'>
						Sallers active our site
					</p>
				</div>
				<div className=' flex mx-auto aspect-square flex-col gap-3 items-center justify-center border text-center rounded-lg sm:w-1/4 '>
					<div className='w-1/3 h-1/3 bg-gray-200 rounded-full flex items-center justify-center'>
						<div className='w-2/3 h-2/3 rounded-full bg-black flex items-center justify-center'>
							<svg
								width='35px'
								height='35px'
								viewBox='0 -0.5 17 17'
								version='1.1'
								xmlns='http://www.w3.org/2000/svg'
								xmlnsXlink='http://www.w3.org/1999/xlink'
								className='si-glyph si-glyph-money-$'
							>
								<defs></defs>
								<g stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
									<path
										d='M11.979,10.596 C11.979,8.901 10.621,7.492 8.968,7.215 L8.968,3.828 C9.472,3.984 9.993,4.023 10.203,4.498 C10.393,4.926 10.874,5.109 11.275,4.908 C11.678,4.706 11.848,4.194 11.659,3.765 C11.186,2.699 10.117,2.271 8.983,2.077 L8.983,0 L8,0 L8,2.066 C6.336,2.317 5.005,3.736 5.005,5.449 C5.005,7.159 6.329,8.576 8,8.832 L8,12.242 C7.464,12.094 6.967,12.044 6.748,11.547 C6.56,11.117 6.08,10.934 5.68,11.135 C5.276,11.336 5.104,11.846 5.292,12.276 C5.773,13.366 6.846,13.807 8.016,13.987 L8.016,16 L8.954,16 L8.954,13.979 C10.6,13.707 11.979,12.294 11.979,10.596 L11.979,10.596 Z M6.617,5.449 C6.617,4.675 7.215,4.025 8.03,3.816 L8.03,7.085 C7.215,6.874 6.617,6.225 6.617,5.449 L6.617,5.449 Z M8.961,12.223 L8.961,8.969 C9.776,9.194 10.371,9.834 10.371,10.596 C10.371,11.358 9.776,11.998 8.961,12.223 L8.961,12.223 Z'
										fill='#FFF'
										className='si-glyph-fill'
									></path>
								</g>
							</svg>
						</div>
					</div>
					<h2 className='text-xl font-semibold md:text-2xl md:font-bold lg:text-3xl'>
						33k
					</h2>
					<p className='text-base font-normal md:text-lg md:font-medium'>
						Mopnthly Produduct Sale
					</p>
				</div>
				<div className='flex mx-auto aspect-square flex-col gap-3 items-center justify-center  border text-center rounded-lg sm:w-1/4'>
					<div className='w-1/3 h-1/3 bg-gray-200 rounded-full flex items-center justify-center'>
						<div className='w-2/3 h-2/3 rounded-full bg-black flex items-center justify-center'>
							<svg
								fill='#FFF'
								width='35px'
								height='35px'
								viewBox='0 0 2.33333 2.33333'
								xmlSpace='preserve'
								xmlns='http://www.w3.org/2000/svg'
								xmlnsXlink='http://www.w3.org/1999/xlink'
							>
								<defs></defs>

								<g id='Layer_x0020_1'>
									<path
										className='fil0'
										d='M0.504185 0.996732l1.32496 0c0.0110433,0 0.02,0.00895669 0.02,0.02l0 0.843539c0,0.0878976 -0.0718268,0.159724 -0.15972,0.159724l-1.04552 0c-0.0878937,0 -0.159724,-0.0718307 -0.159724,-0.159724l0 -0.843539c0,-0.0110433 0.00895669,-0.02 0.02,-0.02zm1.30496 0.04l-1.28496 0 0 0.823539c0,0.0658071 0.0539173,0.119724 0.119724,0.119724l1.04552 0c0.0658071,0 0.11972,-0.0539134 0.11972,-0.119724l0 -0.823539z'
									/>

									<path
										className='fil0'
										d='M0.504181 0.996732l1.32497 0c0.0350394,0 0.0636772,-0.0286732 0.0636772,-0.0636811l0 -0.0958701c0,-0.0589646 -0.0483189,-0.107287 -0.107283,-0.107287l-1.23776 0c-0.0589646,0 -0.107283,0.0483228 -0.107283,0.107287l0 0.0958701c0,0.0349764 0.0286417,0.0636811 0.0636772,0.0636811zm1.32497 0.04l-1.32497 0c-0.0570276,0 -0.103677,-0.0466378 -0.103677,-0.103681l0 -0.0958701c0,-0.0810512 0.0662323,-0.147287 0.147283,-0.147287l1.23776 0c0.0810512,0 0.147283,0.0662362 0.147283,0.147287l0 0.0958701c0,0.0570157 -0.0466339,0.103681 -0.103677,0.103681z'
									/>

									<path
										className='fil0'
										d='M1.32613 1.01673c0,-0.0263307 -0.04,-0.0263307 -0.04,0l0 0.983264c0,0.0263307 0.04,0.0263307 0.04,0l0 -0.983264zm-0.318941 0.983264c0,0.0263307 0.04,0.0263307 0.04,0l0 -0.983264c0,-0.0263307 -0.04,-0.0263307 -0.04,0l0 0.983264z'
									/>

									<path
										className='fil0'
										d='M1.38376 1.01673c0,0.0263307 0.04,0.0263307 0.04,0l0 -0.306835c0,-0.0263307 -0.04,-0.0263307 -0.04,0l0 0.306835zm-0.434205 -0.306835c0,-0.0263307 -0.04,-0.0263307 -0.04,0l0 0.306835c0,0.0263307 0.04,0.0263307 0.04,0l0 -0.306835z'
									/>

									<path
										className='fil0'
										d='M0.773469 0.313429c0.124118,0.00143701 0.269047,0.0894252 0.32213,0.200839l0.0891142 0.187028 7.87402e-006 -3.93701e-006c0.00605512,0.0127126 -0.0025,0.0295276 -0.020122,0.0284961 -0.142689,-0.00183071 -0.250839,-0.0241457 -0.331146,-0.0538346 -0.148287,-0.0548189 -0.224768,-0.137437 -0.223697,-0.230555 0.00102362,-0.0887756 0.0772992,-0.132965 0.163713,-0.131969zm0.167409 0.0935669c-0.0672402,-0.0418858 -0.169181,-0.0734724 -0.239843,-0.039815 -0.0580984,0.0276732 -0.0621378,0.0865984 -0.035685,0.142118 0.0138583,0.0290827 0.0661457,0.086378 0.18185,0.12915 0.0710433,0.0262638 0.16511,0.0464961 0.287476,0.0507756l-0.0751732 -0.157768c-0.0228425,-0.0479409 -0.0665748,-0.0920394 -0.118626,-0.124461z'
									/>

									<path
										className='fil0'
										d='M1.56018 0.353272c-0.108657,0.00125197 -0.239815,0.0805157 -0.28635,0.178185l-0.0751732 0.157768c0.122366,-0.00427953 0.216433,-0.0245118 0.287476,-0.0507756 0.130488,-0.0482362 0.198476,-0.116492 0.197602,-0.192736 -0.000759843,-0.0662598 -0.0612362,-0.0931575 -0.123555,-0.0924409zm-0.188819 0.0198189c0.0791102,-0.0492795 0.194394,-0.0818898 0.278126,-0.0420039 0.0777244,0.0370236 0.0909606,0.119071 0.0545906,0.195402 -0.0165551,0.0347441 -0.076311,0.102189 -0.204197,0.149465 -0.0803071,0.029689 -0.188457,0.0520039 -0.331146,0.0538346 -0.017622,0.0010315 -0.0261772,-0.0157835 -0.020122,-0.0284961l7.87402e-006 3.93701e-006 0.0891142 -0.187028c0.0261693,-0.0549291 0.0754055,-0.104913 0.133626,-0.141177z'
									/>
								</g>
							</svg>
						</div>
					</div>
					<h2 className='text-xl font-semibold md:text-2xl md:font-bold lg:text-3xl'>
						45.5k
					</h2>
					<p className='text-base font-normal md:text-lg md:font-medium'>
						Customer active in our site
					</p>
				</div>
				<div className='flex mx-auto aspect-square flex-col gap-3 items-center justify-center  border text-center rounded-lg sm:w-1/4'>
					<div className='w-1/3 h-1/3 bg-gray-200 rounded-full flex items-center justify-center'>
						<div className='w-2/3 h-2/3 rounded-full bg-black flex items-center justify-center'>
							<svg
								version='1.0'
								id='Layer_1'
								xmlns='http://www.w3.org/2000/svg'
								xmlnsXlink='http://www.w3.org/1999/xlink'
								width='35px'
								height='35px'
								viewBox='0 0 64 64'
								enableBackground='new 0 0 64 64'
								xmlSpace='preserve'
							>
								<circle
									fill='none'
									stroke='#FFF'
									strokeWidth='2'
									strokeMiterlimit='10'
									cx='44'
									cy='38'
									r='19'
								/>
								<circle
									fill='none'
									stroke='#FFF'
									strokeWidth='2'
									strokeMiterlimit='10'
									cx='44'
									cy='38'
									r='13'
								/>
								<polyline
									fill='none'
									stroke='#FFF'
									strokeWidth='2'
									strokeMiterlimit='10'
									points='30,51 1,51 1,57 38,57 38,56 '
								/>
								<polyline
									fill='none'
									stroke='#FFF'
									strokeWidth='2'
									strokeMiterlimit='10'
									points='27,45 3,45 3,51 30,51 '
								/>
								<polyline
									fill='none'
									stroke='#FFF'
									strokeWidth='2'
									strokeMiterlimit='10'
									points='26,39 5,39 5,45 27,45 '
								/>
								<polyline
									fill='none'
									stroke='#FFF'
									strokeWidth='2'
									strokeMiterlimit='10'
									points='26,33 1,33 1,39 26,39 '
								/>
								<polyline
									fill='none'
									stroke='#FFF'
									strokeWidth='2'
									strokeMiterlimit='10'
									points='29,27 3,27 3,33 26,33 '
								/>
								<polyline
									fill='none'
									stroke='#FFF'
									strokeWidth='2'
									strokeMiterlimit='10'
									points='35,21 1,21 1,27 29,27 '
								/>
								<polyline
									fill='none'
									stroke='#FFF'
									strokeWidth='2'
									strokeMiterlimit='10'
									points='40,20 40,15 3,15 3,21 35,21 '
								/>
								<rect
									x='1'
									y='9'
									fill='none'
									stroke='#FFF'
									strokeWidth='2'
									strokeMiterlimit='10'
									width='37'
									height='6'
								/>
							</svg>
						</div>
					</div>
					<h2 className='text-xl font-semibold md:text-2xl md:font-bold lg:text-3xl'>
						25k
					</h2>
					<p className='text-base font-normal md:text-lg md:font-medium'>
						Anual gross sale in our site
					</p>
				</div>
			</div>
			<div className='mb-14 grid grid-rows-3 gap-6 sm:mb-20 sm:flex sm:justify-center sm:items-center '>
				<div className='flex flex-col h-28 items-center justify-evenly text-center rounded-lg border sm:h-48 sm:aspect-square'>
					<div>
						<div>
							<svg
								fill='#000000'
								width='35px'
								height='35px'
								viewBox='0 0 15 15'
								xmlns='http://www.w3.org/2000/svg'
								id='car'
							>
								<path d='M13.84,6.852,12.6,5.7,11.5,3.5a1.05,1.05,0,0,0-.9-.5H4.4a1.05,1.05,0,0,0-.9.5L2.4,5.7,1.16,6.852A.5.5,0,0,0,1,7.219V11.5a.5.5,0,0,0,.5.5h2c.2,0,.5-.2.5-.4V11h7v.5c0,.2.2.5.4.5h2.1a.5.5,0,0,0,.5-.5V7.219A.5.5,0,0,0,13.84,6.852ZM4.5,4h6l1,2h-8ZM5,8.6c0,.2-.3.4-.5.4H2.4C2.2,9,2,8.7,2,8.5V7.4c.1-.3.3-.5.6-.4l2,.4c.2,0,.4.3.4.5Zm8-.1c0,.2-.2.5-.4.5H10.5c-.2,0-.5-.2-.5-.4V7.9c0-.2.2-.5.4-.5l2-.4c.3-.1.5.1.6.4Z' />
							</svg>
						</div>
					</div>
					<h3 className='text-xl font-semibold md:text-xl md:font-bold '>
						FREE AND FAST DELIVERY
					</h3>
					<p className='text-base font-normal md:text-lg md:font-medium'>
						Free delivery for all orders over $140
					</p>
				</div>
				<div className='flex flex-col h-28 items-center justify-evenly text-center rounded-lg border sm:h-48 sm:aspect-square'>
					<div>
						<div>
							<svg
								width='35px'
								height='35px'
								viewBox='0 0 64 64'
								xmlns='http://www.w3.org/2000/svg'
								xmlnsXlink='http://www.w3.org/1999/xlink'
								aria-hidden='true'
								role='img'
								className='iconify iconify--emojione-monotone'
								preserveAspectRatio='xMidYMid meet'
							>
								<path
									d='M60.564 25.721c-1.092-2.947-3.697-7.932-6.545-7.932c-.568 0-1.086.207-1.523.568c-2.006-3.242-5.072-5.707-9.152-7.393a23.137 23.137 0 0 1 1.881-.943c-3.229-1.182-6.029-1.873-8.453-2.188c1.275-.996 2.127-1.379 2.127-1.379c-14.96-2.194-24.139 3.862-27.967 11.552a2.353 2.353 0 0 0-.953-.217c-2.846 0-5.452 4.984-6.543 7.93C1.67 30.492.822 42.574 5.19 46.551C4.977 49.416 4.27 55.939 2.285 62h12.619l-.626-8.438C18.544 57.5 24.898 60 32 60s13.455-2.5 17.721-6.436L49.096 62h12.619c-1.986-6.061-2.693-12.584-2.904-15.449c4.367-3.981 3.519-16.059 1.753-20.83M8.59 46.318a3.758 3.758 0 0 1-1.458-.279C2.551 44.072 2.84 31.625 4.824 26.264c1.377-3.717 3.66-6.945 5.155-6.945c.336 0 .633.164.87.521c1.2 1.813-.091 2.061.395 4.033c1.021 4.143-1.285 8.369-.521 10.32c3.803 9.731.436 12.125-2.133 12.125m36.043-5.089c1.338 1.721 2.121 3.729 2.121 5.885c0 6.316-6.605 11.432-14.754 11.432S17.246 53.43 17.246 47.113c0-2.156.783-4.164 2.122-5.885c-4.587-2.863-7.524-7.252-7.524-12.17C11.843 11.475 32 22.676 32 22.676s20.156-11.201 20.156 6.383c0 4.918-2.937 9.306-7.523 12.17m12.234 4.81c-.398.172-.91.279-1.459.279c-2.568 0-5.936-2.395-2.131-12.125c.764-1.951-1.543-6.178-.521-10.32c.484-1.973-.805-2.221.395-4.033c.236-.357.533-.521.869-.521c1.496 0 3.779 3.229 5.156 6.945c1.982 5.361 2.271 17.808-2.309 19.775'
									fill='#000000'
								></path>
								<path
									d='M34.145 40.789c.553 0 1-.919 1-2.057c0-1.133-.447-2.059-1-2.059s-1 .926-1 2.059c0 1.138.447 2.057 1 2.057'
									fill='#000000'
								></path>
								<path
									d='M29.854 40.789c.553 0 1-.919 1-2.057c0-1.133-.447-2.059-1-2.059s-1 .926-1 2.059c0 1.138.447 2.057 1 2.057'
									fill='#000000'
								></path>
								<path
									d='M32 45.249c-4.689 0-9.459-1.271-9.846-.942C20.73 45.521 25.1 51.246 32 51.283c6.9-.035 11.272-5.762 9.843-6.977c-.385-.327-5.154.944-9.843.943'
									fill='#000000'
								></path>
								<ellipse
									cx='40.682'
									cy='31.255'
									rx='3.5'
									ry='4.499'
									fill='#000000'
								></ellipse>
								<ellipse
									cx='23.318'
									cy='31.255'
									rx='3.5'
									ry='4.499'
									fill='#000000'
								></ellipse>
							</svg>
						</div>
					</div>
					<h3 className='text-xl font-semibold md:text-xl md:font-bold '>
						24/7 CUSTOMER SERVICE
					</h3>
					<p className='text-base font-normal md:text-lg md:font-medium'>
						Friendly 24/7 customer support
					</p>
				</div>
				<div className='flex flex-col h-28 items-center justify-evenly text-center rounded-lg border sm:h-48 sm:aspect-square'>
					<div>
						<div>
							<svg
								width='35px'
								height='35px'
								viewBox='-4 0 34 34'
								xmlns='http://www.w3.org/2000/svg'
							>
								<g fill='none' fillRule='evenodd'>
									<g transform='translate(1)'>
										<rect
											stroke='#474747'
											strokeWidth='2'
											y='1'
											width='24'
											height='32'
											rx='1'
										/>
										<g fill='#575757'>
											<path d='M7 12h12v1H7z' />
											<path d='M5 12h1v1H5z' />
											<path d='M5 15h1v1H5z' />
											<path d='M7 15h12v1H7z' />
											<path d='M5 18h1v1H5z' />
											<path d='M7 18h12v1H7z' />
											<path d='M5 21h1v1H5z' />
											<path d='M7 21h12v1H7z' />
										</g>
									</g>
								</g>
							</svg>
						</div>
					</div>
					<h3 className='text-xl font-semibold md:text-xl md:font-bold '>
						MONEY BACK GUARANTEE
					</h3>
					<p className='text-base font-normal md:text-lg md:font-medium'>
						We reurn money within 30 days
					</p>
				</div>
			</div>
		</div>
	)
}

export default About
