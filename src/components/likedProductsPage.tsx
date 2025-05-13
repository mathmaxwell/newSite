//adaptivka + hehe
import LikedProducts from '../elements/likedProducts'
import IProductFull from '../elements/interface'
import { useEffect, useState } from 'react'
import ShowProducts from '../parts/showProducts'
import axios from 'axios'
const LikedProductsPage = () => {
	const [isProducts, setIsProducts] = useState(false)
	const { likedProductsMap } = LikedProducts()
	const [objects, setObjects] = useState<IProductFull[]>([])
	useEffect(() => {
		if (!likedProductsMap) return

		const productIds = Object.keys(likedProductsMap).map(Number)

		Promise.all(
			productIds.map(id => axios.get(`https://dummyjson.com/products/${id}`))
		).then(responses => {
			setObjects(responses.map(r => r.data))
			setIsProducts(true)
		})
	}, [likedProductsMap])
	
	return (
		<ShowProducts
			isProducts={isProducts}
			products={objects}
			categories={'liked products'}
		/>
	)
}

export default LikedProductsPage
