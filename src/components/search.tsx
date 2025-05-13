//adaptivka + hehe
import searchStory from '../elements/searchStory'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import ShowProducts from '../parts/showProducts'
import itemStory from '../elements/items'
const Search = () => {
	const { search } = searchStory()
	const { items, setItems } = itemStory()
	const [isProducts, setIsProducts] = useState(false)
	useEffect(() => {
		setIsProducts(false)
		axios
			.get(`https://dummyjson.com/products/search?q=${search}`)
			.then(response => {
				setItems(response.data.products)
				setIsProducts(true)
			})
	}, [search])

	return (
		<>
			<ShowProducts
				products={items}
				isProducts={isProducts}
				categories={search}
			/>
		</>
	)
}

export default Search
