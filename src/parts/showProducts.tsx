//adaptivka +
import Skeleton from 'react-loading-skeleton'
import eye from '../images/eye.svg'
import heard from '../images/heard.svg'
import RatingStars from '../parts/ratingStars'
import { SkeletonTheme } from 'react-loading-skeleton'
import LikedProducts from '../elements/likedProducts'
import useLoginStore from '../elements/useLoginStore'
import { useNavigate } from 'react-router-dom'
import itemStory from '../elements/itemStory'
import categoriesStory from '../elements/categoriesStory'
import IProductFull from '../elements/interface'
import { useEffect } from 'react'

const ShowProducts = ({
	isProducts,
	products,
	categories,
}: {
	isProducts: boolean
	products: IProductFull[]
	categories: string
}) => {
	const { setId } = itemStory()
	const { setCategories } = categoriesStory()
	const navigate = useNavigate()
	const { addOrDel, initLiked } = LikedProducts()
	useEffect(() => {
		initLiked()
	}, [])
	async function handleClickHeard(id: number) {
		addOrDel(id)
	}
	function handleClickEye(obj: IProductFull) {
		setId(obj.id)
		setCategories(obj.category)
		navigate(
			`/categories/${obj.category.toLowerCase()}/${obj.title.toLowerCase()}`
		)
	}
	const { login } = useLoginStore()
	return (
		<ul className='flex flex-col gap-2.5 items-center justify-center  my-5 px-2 sm:px-3 sm:flex-row sm:flex-wrap sm:mt-10 md:px-4 md:mt-14 lg:mt-20 xl:mt-24 '>
			{isProducts ? (
				products.length > 0 ? (
					products.map(item => (
						<li
							className='relative flex flex-col gap-2 justify-between items-center w-[250px] h-[340px] bg-gray-300 rounded-2xl p-4'
							key={item.id}
						>
							<div className='absolute top-4 right-4 flex flex-col gap-3'>
								<button
									onClick={() => handleClickEye(item)}
									className='w-[35px] h-[35px] bg-white flex justify-center items-center rounded-full'
								>
									<img src={eye} alt='eye' />
								</button>
								{login ? (
									<button
										onClick={() => handleClickHeard(item.id)}
										className='w-[35px] h-[35px] bg-white flex justify-center items-center rounded-full'
									>
										<img src={heard} alt='heard' />
									</button>
								) : null}
							</div>

							<div className='flex items-center justify-center w-full'>
								<img
									src={item.images[0]}
									alt='image'
									className=' w-[200px]  h-[190px]'
								/>
							</div>
							<div className='flex flex-col items-start w-full'>
								<h3 className='font-medium text-2xl max-h-15 overflow-y-hidden'>
									{item.title}
								</h3>
								<div className='flex gap-3 items-center'>
									<p className='text-red-400 text-xl'>
										{(
											Math.round(
												((item.price * (100 - item.discountPercentage)) / 100) *
													100
											) / 100
										).toFixed(2)}
										$
									</p>
									<p className='text-gray-400 line-through text-sm whitespace-nowrap'>
										{item.price} $
									</p>
									<p className='text-gray-400'>({item.stock})</p>
								</div>
								{RatingStars(item.rating)}
							</div>
						</li>
					))
				) : (
					<h2 className='text-center text-5xl'>
						Not found categories '{categories}'
					</h2>
				)
			) : (
				Array(8)
					.fill(0)
					.map((_: number, index: number) => (
						<li
							key={index}
							className='w-[270px] h-[340px] p-4 bg-gray-300 rounded-2xl '
						>
							<SkeletonTheme>
								<Skeleton
									height={170}
									width='100%'
									baseColor='#ddd'
									highlightColor='#eee'
									style={{ marginBottom: 15 }}
								/>
								<Skeleton
									height={30}
									width='100%'
									baseColor='#ddd'
									highlightColor='#eee'
									style={{ marginBottom: 10 }}
								/>
								<Skeleton
									height={25}
									width='100%'
									baseColor='#ddd'
									highlightColor='#eee'
									style={{ marginBottom: 10 }}
								/>
								<Skeleton
									height={25}
									width='100%'
									baseColor='#ddd'
									highlightColor='#eee'
								/>
							</SkeletonTheme>
						</li>
					))
			)}
		</ul>
	)
}

export default ShowProducts
