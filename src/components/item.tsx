//-------------
import itemStory from '../elements/itemStory'
import { useEffect, useState } from 'react'
import axios from 'axios'
import IProductFull from '../elements/interface'
import { NavLink, useNavigate } from 'react-router-dom'
import categoriesStory from '../elements/categoriesStory'
import RatingStars from '../parts/ratingStars'
import Skeleton from 'react-loading-skeleton'
import { SkeletonTheme } from 'react-loading-skeleton'
import useLoginStore from '../elements/useLoginStore'
import LikedProducts from '../elements/likedProducts'
const Item = () => {
	const { login } = useLoginStore()
	const { setCategories } = categoriesStory()
	const navigate = useNavigate()
	const { id } = itemStory()
	const { addOrDel } = LikedProducts()
	const [obj, setObj] = useState<IProductFull | null>(null)
	const [index, setIndex] = useState(0)
	const [isItemInfo, setIsItemInfo] = useState(false)
	useEffect(() => {
		setIsItemInfo(false)
		axios.get(`https://dummyjson.com/products/${id}`).then(resolve => {
			setObj(resolve.data)
			setIsItemInfo(true)
			console.log(resolve.data)
		})
	}, [id])
	function handleCategory(category: string) {
		setCategories(category)
		navigate(`/categories/${category.toLowerCase()}`)
	}
	function handleBuy(title: string) {
		alert(`${title} sotib oldim db faraz qiling`)
	}
	function handleLike(id: number) {
		addOrDel(id)
	}
	return (
		<div className='container px-2 sm:px-3 md:px-4 mx-auto mb-5 sm:mb-10 md:mb-14 lg:mb-20'>
			<div className='flex items-center gap-3 my-3 sm:my-5 md:my-7 lg:my-10'>
				<NavLink to='/' className='text-sm font-normal opacity-50'>
					Home <span className='ml-5'>/</span>
				</NavLink>
				<p className='text-sm font-normal opacity-50'>categories</p>
				<span className='ml-5 opacity-50'>/</span>
				<p onClick={() => handleCategory(obj?.category || '')}>
					{obj?.category}{' '}
				</p>
				<span className='ml-5 opacity-50'>/</span>
				<p>{obj?.title}</p>
			</div>
			{isItemInfo ? (
				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 h-full gap-2'>
					<div className='grid grid-cols-2 gap-1'>
						{obj?.images?.map((image, key) => (
							<button
								key={key}
								className={
									key === index
										? 'bg-gray-300 hover:bg-gray-400 transition'
										: 'bg-gray-50 hover:bg-gray-400 transition'
								}
								onClick={() => setIndex(key)}
							>
								<img key={key} src={image} alt='image' />
							</button>
						))}
					</div>
					<img className='w-full ' src={obj?.images[index]} alt='image' />
					<div className='max-h-full bg-gray-50 container mx-auto px-2 py-3 flex flex-col gap-4 sm:col-span-2 lg:col-span-1'>
						<h2 className='text-center text-4xl font-bold'>{obj?.title}</h2>
						<div className='flex items-center justify-center gap-2'>
							{RatingStars(obj?.rating || 5)}
							<p>{`(${obj?.reviews.length || 0} reviews)`}</p>
						</div>
						<p className='text-2xl font-normal'>{obj?.price}$</p>
						<p>{obj?.description}</p>
						<ul>
							{obj?.reviews.map((coment, index) => (
								<li
									key={index}
									className=' flex items-center justify-between gap-4 border-b-1 border-t-1'
								>
									<p className='text-xl font-medium opacity-50 max-w-40'>
										{coment.reviewerName}
									</p>
									<p className='text-2xl font-bold max-w-40 text-center'>
										{coment.comment}
									</p>
									<p className='text-2xl font-bold '>{coment.rating}</p>
								</li>
							))}
						</ul>
						<ul>
							<li>depth: {obj?.dimensions.depth}</li>
							<li>height: {obj?.dimensions.height}</li>
							<li>width: {obj?.dimensions.width}</li>
						</ul>
						{login && (
							<div className='flex flex-col  gap-3'>
								{' '}
								<button
									className='py-3 rounded-2xl text-white text-2xl font-bold bg-red-400'
									onClick={() => handleLike(obj?.id || 22)}
								>
									like
								</button>
								<button
									className='py-3 rounded-2xl text-white text-2xl font-bold bg-yellow-400'
									onClick={() => handleBuy(obj?.title || 'buyum')}
								>
									buy
								</button>
							</div>
						)}
					</div>
				</div>
			) : (
				<div className='grid grid-cols-3 h-screen gap-2'>
					<SkeletonTheme>
						<div className='grid grid-cols-2'>
							{' '}
							<Skeleton
								height='95%'
								width='95%'
								baseColor='#ddd'
								highlightColor='#eee'
								style={{ marginBottom: 5 }}
							/>
							<Skeleton
								height='95%'
								width='95%'
								baseColor='#ddd'
								highlightColor='#eee'
								style={{ marginBottom: 5 }}
							/>
							<Skeleton
								height='95%'
								width='95%'
								baseColor='#ddd'
								highlightColor='#eee'
								style={{ marginBottom: 5 }}
							/>
							<Skeleton
								height='95%'
								width='95%'
								baseColor='#ddd'
								highlightColor='#eee'
								style={{ marginBottom: 5 }}
							/>
						</div>
					</SkeletonTheme>
					<SkeletonTheme>
						<Skeleton
							height='100%'
							circle
							width='100%'
							baseColor='#ddd'
							highlightColor='#eee'
							style={{ marginBottom: 15 }}
						/>
					</SkeletonTheme>
					<SkeletonTheme>
						<Skeleton
							height='100%'
							width='100%'
							baseColor='#ddd'
							highlightColor='#eee'
							style={{ marginBottom: 15 }}
						/>
					</SkeletonTheme>
				</div>
			)}
		</div>
	)
}

export default Item
