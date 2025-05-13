import { create } from 'zustand'
interface ILogin {
	login: string
	setSearch: (login: string) => void
}
const isLoginStory = create<ILogin>(set => ({
	login: '',
	setSearch: newValue => set(() => ({ login: newValue })),
}))
export default isLoginStory
