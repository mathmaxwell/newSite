//adaptivka +
import { useEffect } from 'react'
import categoriesStory from '../elements/categoriesStory'
import { useState } from 'react'
import axios from 'axios'
import Catalog from './catalog.jsx'
import { NavLink, useParams } from 'react-router-dom'
import ShowProducts from '../parts/showProducts'
import itemStory from '../elements/items'
const Categories = () => {
	const { categories } = categoriesStory()
	let { nameUrl } = useParams()
	if (nameUrl == undefined) {
		nameUrl = localStorage.getItem(categories) || categories
	}
	const { items, setItems } = itemStory()
	const [isProducts, setIsProducts] = useState<boolean>(false)
	useEffect(() => {
		setIsProducts(false)
		axios
			.get(`https://dummyjson.com/products/category/${categories}`)
			.then(res => {
				setItems(res.data.products)
				setIsProducts(true)
			})
	}, [categories])

	return (
		<div className='flex flex-col gap-3 sm:gap-5 md:gap-7 lg:gap-10 container mx-auto px-2 sm:px-3 md:px-4'>
			<div className='flex items-center gap-5 my-5 sm:my-10 md:my-14 lg:my-20'>
				<NavLink to='/' className='text-sm font-normal opacity-50'>
					Home <span className='ml-5'>/</span>
				</NavLink>
				<p className='text-sm font-normal opacity-50'>categories</p>
				<span className='ml-5 opacity-50'>/</span>
				<p>{categories}</p>
			</div>
			<ShowProducts
				products={items}
				isProducts={isProducts}
				categories={nameUrl}
			/>
			<Catalog />
		</div>
	)
}

export default Categories
