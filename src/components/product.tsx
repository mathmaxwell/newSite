//adaptivka +
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ReactPaginate from 'react-paginate'
import ShowProducts from '../parts/showProducts'
import 'react-loading-skeleton/dist/skeleton.css'
import itemStory from '../elements/items'
const Product = () => {
	const [isProducts, setIsProducts] = useState<boolean>(false)
	const { items, setItems } = itemStory()
	const [currentPage, setCurrentPage] = useState<number>(0)
	const itemPerPage: number = 12
	const [searchBy, setSearchBy] = useState<string>('title')
	const [pageCountNumber, setPageCountNumber] = useState<number>(1)
	const handlePageChange = ({ selected }: { selected: number }) => {
		setCurrentPage(selected)
	}

	useEffect(() => {
		const fetchData = async () => {
			setIsProducts(false)
			try {
				const response = await axios.get(
					`https://dummyjson.com/products?limit=${itemPerPage}&skip=${
						currentPage * itemPerPage
					}&sortBy=${searchBy}&order=${
						['rating', 'discountPercentage'].includes(searchBy) ? 'desc' : 'asc'
					}`
				)
				setItems(response.data.products)
				const total = response.data.total
				setPageCountNumber(Math.ceil(total / itemPerPage))
			} catch (error) {
				console.error('Error fetching data:', error)
			} finally {
				setIsProducts(true)
			}
		}
		fetchData()
	}, [currentPage, itemPerPage, searchBy])

	return (
		<div className='container px-2 sm:px-3 md:px-4 mx-auto'>
			<h2 className='text-red-500 inline-block ml-10 mt-5 sm:mt-10 md:mt-14 lg:mt-20 relative font-bold text-xl before:content-[""] before:w-5 before:h-10 before:bg-red-500 before:absolute before:top-1/2 before:-translate-y-1/2 before:left-0 before:-translate-x-10 before:rounded-sm'>
				Our Products
			</h2>
			<ul className='flex items-center justify-evenly my-5 sm:my-10 md:my-14 lg:my-20 gap-2'>
				<li
					onClick={() => setSearchBy('price')}
					className={` w-30 aspect-square flex flex-col justify-evenly items-center border rounded-2xl ${
						searchBy === 'price' ? 'bg-red-500 text-white ' : ''
					}`}
				>
					<svg
						width='44px'
						height='44px'
						viewBox='0 -0.5 17 17'
						version='1.1'
						xmlns='http://www.w3.org/2000/svg'
						xmlnsXlink='http://www.w3.org/1999/xlink'
						className='si-glyph si-glyph-money-$'
					>
						<g stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
							<path
								d='M11.979,10.596 C11.979,8.901 10.621,7.492 8.968,7.215 L8.968,3.828 C9.472,3.984 9.993,4.023 10.203,4.498 C10.393,4.926 10.874,5.109 11.275,4.908 C11.678,4.706 11.848,4.194 11.659,3.765 C11.186,2.699 10.117,2.271 8.983,2.077 L8.983,0 L8,0 L8,2.066 C6.336,2.317 5.005,3.736 5.005,5.449 C5.005,7.159 6.329,8.576 8,8.832 L8,12.242 C7.464,12.094 6.967,12.044 6.748,11.547 C6.56,11.117 6.08,10.934 5.68,11.135 C5.276,11.336 5.104,11.846 5.292,12.276 C5.773,13.366 6.846,13.807 8.016,13.987 L8.016,16 L8.954,16 L8.954,13.979 C10.6,13.707 11.979,12.294 11.979,10.596 L11.979,10.596 Z M6.617,5.449 C6.617,4.675 7.215,4.025 8.03,3.816 L8.03,7.085 C7.215,6.874 6.617,6.225 6.617,5.449 L6.617,5.449 Z M8.961,12.223 L8.961,8.969 C9.776,9.194 10.371,9.834 10.371,10.596 C10.371,11.358 9.776,11.998 8.961,12.223 L8.961,12.223 Z'
								fill={searchBy === 'price' ? 'white' : '#434343'}
								className='si-glyph-fill'
							></path>
						</g>
					</svg>
					price
				</li>
				<li
					onClick={() => setSearchBy('title')}
					className={` w-30 aspect-square flex flex-col justify-evenly items-center border rounded-2xl ${
						searchBy === 'title' ? 'bg-red-500 text-white ' : ''
					}`}
				>
					<svg
						fill={searchBy === 'title' ? 'white' : 'black'}
						width='44px'
						height='44px'
						viewBox='0 0 56 56'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path d='M 20.9389 41.0269 C 21.8069 41.0269 22.4398 40.4302 22.4398 39.5080 L 22.4398 36.9042 L 22.5121 36.9042 C 23.6693 39.4537 26.0381 41.0450 29.0397 41.0450 C 33.9760 41.0450 37.2126 37.1212 37.2126 31.0637 C 37.2126 25.0062 33.9578 21.0824 29.0759 21.0824 C 26.1285 21.0824 23.7417 22.6917 22.6206 25.2051 L 22.5302 25.2051 L 22.5302 15.9652 C 22.5302 14.9888 21.9154 14.3559 21.0113 14.3559 C 20.1072 14.3559 19.4924 14.9888 19.4924 15.9652 L 19.4924 39.5080 C 19.4924 40.4482 20.0710 41.0269 20.9389 41.0269 Z M 48.2066 41.0450 C 51.7687 41.0450 54.8065 39.0921 55.8371 36.3255 C 55.9456 36.0182 56.0000 35.7288 56.0000 35.4757 C 56.0000 34.6982 55.4575 34.1557 54.6980 34.1557 C 54.0110 34.1557 53.6492 34.4269 53.2515 35.2225 C 52.2931 37.2839 50.6659 38.4050 48.2248 38.4050 C 44.6986 38.4050 42.3841 35.6023 42.3841 31.0818 C 42.3841 26.5974 44.6986 23.7224 48.2248 23.7224 C 50.5574 23.7224 52.2390 24.8254 53.2152 26.9410 C 53.5951 27.7004 53.9566 27.9716 54.6257 27.9716 C 55.4034 27.9716 55.9456 27.4654 55.9456 26.6698 C 55.9456 26.4528 55.8915 26.1816 55.8193 25.9465 C 54.9150 23.1799 51.8232 21.0824 48.1522 21.0824 C 42.7640 21.0824 39.2560 25.0424 39.2560 31.0998 C 39.2560 37.1935 42.8000 41.0450 48.2066 41.0450 Z M 6.4553 41.0269 C 9.2037 41.0269 11.8075 39.5261 12.8924 37.2116 L 12.9467 37.2116 L 12.9467 39.5622 C 12.9829 40.4482 13.5796 41.0450 14.4294 41.0450 C 15.2974 41.0450 15.8941 40.4482 15.8941 39.4899 L 15.8941 27.5196 C 15.8941 23.6139 13.0371 21.1005 8.4805 21.1005 C 5.0991 21.1005 2.2964 22.5832 1.2476 24.8796 C 1.0487 25.3317 .9222 25.7657 .9222 26.1454 C .9222 26.9410 1.5008 27.4473 2.2964 27.4473 C 2.8569 27.4473 3.2728 27.2484 3.5621 26.7421 C 4.5386 24.6627 6.0755 23.7043 8.4081 23.7043 C 11.1928 23.7043 12.8382 25.2594 12.8382 27.7727 L 12.8382 29.2917 L 7.0701 29.6171 C 2.5315 29.9245 0 31.9678 0 35.2949 C 0 38.7485 2.6400 41.0269 6.4553 41.0269 Z M 28.3526 38.4050 C 24.9532 38.4050 22.5302 35.4938 22.5302 31.0818 C 22.5302 26.6517 24.9532 23.7405 28.3526 23.7405 C 31.8605 23.7405 34.0664 26.5794 34.0664 31.0637 C 34.0664 35.5842 31.8605 38.4050 28.3526 38.4050 Z M 7.1785 38.5135 C 4.7556 38.5135 3.1282 37.1935 3.1282 35.2406 C 3.1282 33.3420 4.6471 32.0944 7.4498 31.8954 L 12.8382 31.5519 L 12.8382 33.4324 C 12.8382 36.2894 10.3248 38.5135 7.1785 38.5135 Z' />
					</svg>
					title
				</li>
				<li
					onClick={() => setSearchBy('discountPercentage')}
					className={` w-30 aspect-square  flex flex-col justify-evenly items-center border rounded-2xl ${
						searchBy === 'discountPercentage' ? 'bg-red-500 text-white ' : ''
					}`}
				>
					<svg
						fill={searchBy === 'discountPercentage' ? 'white' : 'black'}
						width='44px'
						height='44px'
						viewBox='0 0 24 24'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							fillRule='evenodd'
							d='M12,23 C5.92486775,23 1,18.0751322 1,12 C1,5.92486775 5.92486775,1 12,1 C18.0751322,1 23,5.92486775 23,12 C23,18.0751322 18.0751322,23 12,23 Z M12,21 C16.9705627,21 21,16.9705627 21,12 C21,7.02943725 16.9705627,3 12,3 C7.02943725,3 3,7.02943725 3,12 C3,16.9705627 7.02943725,21 12,21 Z M16,18 C14.3431458,18 13,16.6568542 13,15 C13,13.3431458 14.3431458,12 16,12 C17.6568542,12 19,13.3431458 19,15 C19,16.6568542 17.6568542,18 16,18 Z M16,16 C16.5522847,16 17,15.5522847 17,15 C17,14.4477153 16.5522847,14 16,14 C15.4477153,14 15,14.4477153 15,15 C15,15.5522847 15.4477153,16 16,16 Z M8,12 C6.34314575,12 5,10.6568542 5,9 C5,7.34314575 6.34314575,6 8,6 C9.65685425,6 11,7.34314575 11,9 C11,10.6568542 9.65685425,12 8,12 Z M8,10 C8.55228475,10 9,9.55228475 9,9 C9,8.44771525 8.55228475,8 8,8 C7.44771525,8 7,8.44771525 7,9 C7,9.55228475 7.44771525,10 8,10 Z M16.118034,6 L10.118034,18 L7.88196601,18 L13.881966,6 L16.118034,6 Z'
						/>
					</svg>
					discount
				</li>
				<li
					onClick={() => setSearchBy('rating')}
					className={` w-30 aspect-square  flex flex-col justify-evenly items-center border rounded-2xl ${
						searchBy === 'rating' ? 'bg-red-500 text-white ' : ''
					}`}
				>
					<svg
						fill={searchBy === 'rating' ? 'white' : 'black'}
						width='44px'
						height='44px'
						viewBox='0 0 52 52'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path d='M27.4133467,3.10133815 L32.0133467,18.1013381 C32.2133467,18.7013381 32.8133467,19.0013381 33.4133467,19.0013381 L48.4133467,19.0013381 C49.9133467,19.0013381 50.5133467,21.0013381 49.3133467,21.9013381 L37.1133467,30.9013381 C36.6133467,31.3013381 36.4133467,32.0013381 36.6133467,32.6013381 L42.4133467,48.0013381 C42.8133467,49.4013381 41.3133467,50.6013381 40.1133467,49.7013381 L27.0133467,39.9013381 C26.5133467,39.5013381 25.8133467,39.5013381 25.2133467,39.9013381 L12.0133467,49.7013381 C10.8133467,50.6013381 9.21334668,49.4013381 9.71334668,48.0013381 L15.3133467,32.6013381 C15.5133467,32.0013381 15.3133467,31.3013381 14.8133467,30.9013381 L2.61334668,21.9013381 C1.41334668,21.0013381 2.11334668,19.0013381 3.51334668,19.0013381 L18.5133467,19.0013381 C19.2133467,19.0013381 19.7133467,18.8013381 19.9133467,18.1013381 L24.6133467,3.00133815 C25.0133467,1.60133815 27.0133467,1.70133815 27.4133467,3.10133815 Z M26.0133467,12.8023264 C26,14.1700393 26,33.5426636 26,34.4953918 C26.1865845,34.6476135 28.9331193,36.6890643 34.2396046,40.6197441 C34.9394191,41.144605 35.8141872,40.4447905 35.5809157,39.6283403 L35.5809157,39.6283403 L32.3085327,31.0201416 C31.9597778,30.2501831 32.3085327,29.7487793 32.7398682,29.4849854 L32.7398682,29.4849854 L39.6048489,24.6961622 C40.3046634,24.1713013 39.9547562,23.0049438 39.0799881,23.0049438 L39.0799881,23.0049438 L31.0206299,23.0049438 C30.6707226,23.0049438 29.7518921,22.8880615 29.5025635,21.9888306 L29.5025635,21.9888306 L26.8332347,13.4436151 C26.7175852,13.0388421 26.3602784,12.8204102 26.0133467,12.8023264 Z' />
					</svg>
					rating
				</li>
			</ul>
			<ShowProducts
				products={items}
				isProducts={isProducts}
				categories={searchBy}
			/>
			<ReactPaginate
				previousLabel={
					<span className='px-4 py-2 bg-gray-200 rounded hover:bg-red-300 transition'>
						Back
					</span>
				}
				nextLabel={
					<span className='px-4 cursor-pointer py-2 bg-gray-200 rounded hover:bg-red-300 transition'>
						Go
					</span>
				}
				breakLabel={<span className='px-4 py-2'>...</span>}
				pageCount={pageCountNumber}
				onPageChange={handlePageChange}
				marginPagesDisplayed={2}
				pageRangeDisplayed={3}
				containerClassName=' flex items-center justify-center gap-1.5 my-5 sm:my-10 md:my-14 lg:my-20'
				pageClassName='text-gray-700'
				pageLinkClassName='cursor-pointer p-2 rounded hover:bg-red-200 transition'
				activeClassName='bg-red-500 text-white'
				activeLinkClassName='px-4 py-2 rounded-full bg-red-500 text-white'
				previousClassName='text-gray-700'
				nextClassName='text-gray-700'
			/>
		</div>
	)
}

export default Product
