import { create } from 'zustand'
interface ILogin {
	login: boolean
	setLogin: (login: boolean) => void
}
const useLoginStore = create<ILogin>(set => ({
	login: false,
	setLogin: newValue => set(() => ({ login: newValue })),
}))
export default useLoginStore
