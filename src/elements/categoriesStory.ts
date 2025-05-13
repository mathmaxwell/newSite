import { create } from 'zustand'
interface ICategories {
	categories: string
	setCategories: (categories: string) => void
}
const categoriesStory = create<ICategories>(set => ({
	categories: localStorage.getItem('categories') || '',
	setCategories: newValue => {
		set(() => ({ categories: newValue }))
		localStorage.setItem('categories', newValue)
	},
}))
export default categoriesStory
