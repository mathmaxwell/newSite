//adaptivka +
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import categoriesStory from '../elements/categoriesStory'
import ICategory from '../elements/interface'
const Catalog = () => {
	const { setCategories, categories } = categoriesStory()
	const navigate = useNavigate()
	const handleClick = (name: string) => {
		setCategories(`${name}`)
		navigate(`/categories/${name.toLowerCase()}`)
	}

	const [products, setProducts] = useState<ICategory[]>([])

	useEffect(() => {
		axios
			.get('https://dummyjson.com/products/categories')
			.then(res => setProducts(res.data))
	}, [categories])
	return (
		<div className='container mx-auto px-2 sm:px-3 md:px-4 mb-8 sm:mb-10 md:mb-16 lg:mb-24 xl:mb-35'>
			<ul className='grid grid-rows-2 grid-cols-12 overflow-x-scroll gap-x-36 gap-y-3 md:gap-2.5 lg:gap-4 md:flex md:flex-wrap md:items-center md:justify-center'>
				{products.map((product, index) => (
					<li
						className='cursor-pointer flex items-center text-center justify-center border-2 rounded-lg bg-gray-200 hover:bg-red-400 hover:text-white text-lg transition p-2 h-24 w-32'
						key={index}
						onClick={() => handleClick(product.name)}
					>
						{product.name}
					</li>
				))}
			</ul>
		</div>
	)
}

export default Catalog
