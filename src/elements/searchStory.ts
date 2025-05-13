import { create } from 'zustand'
interface IItem {
	search: string
	setSearch: (categories: string) => void
}
const itemStory = create<IItem>(set => ({
	search: localStorage.getItem('search') || '',
	setSearch: newValue => {
		localStorage.setItem('search', newValue)
		set(() => ({ search: newValue }))
	},
}))
export default itemStory
