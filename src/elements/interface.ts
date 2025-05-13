export default interface IProduct {
	id: number
	title: string
	price: number
	discountPercentage: number
	rating: number
	images: string[]
}
interface IReviews {
	comment: string
	date: string
	rating: number
	reviewerName: string
}
export default interface IProductFull {
	id: number
	title: string
	price: number
	discountPercentage: number
	rating: number
	images: string[]
	stock: number
	category: string
	brand: string
	description: string
	dimensions: {
		depth: number
		height: number
		width: number
	}
	reviews: IReviews[]
}

export default interface ICategory {
	id: number
	name: string
}
export default interface IDate {
	name: string
	email: string
	phone?: string
	text?: string
}
export default interface IsavedDate {
	email: string
	password: string
}
export default interface IDate {
	name: string
	password: string
	email: string
}
