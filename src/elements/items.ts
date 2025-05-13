import { create } from 'zustand'
import IProduct from './interface'
interface IItem {
	items: IProduct[]
	setItems: (newValue: IProduct[]) => void
}
const itemStory = create<IItem>(set => ({
	items: JSON.parse(localStorage.getItem('items') || '[]'),
	setItems: (newValue: IProduct[]) => {
		set(() => ({ items: newValue }))
		localStorage.setItem('items', JSON.stringify(newValue))
	},
}))
export default itemStory
