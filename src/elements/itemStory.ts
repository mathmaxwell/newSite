import { create } from 'zustand'
interface IItem {
	id: number
	setId: (categories: number) => void
}
const itemStory = create<IItem>(set => ({
	id: Number(localStorage.getItem('productId')) || 167,
	setId: newValue => {
		set(() => ({ id: newValue }))
		localStorage.setItem('productId', `${newValue}`)
	},
}))
export default itemStory
