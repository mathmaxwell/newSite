import { create } from 'zustand'
import pb from '../lib/pocketbase'

interface IProducts {
	likedProductsMap: Record<number, string>
	initLiked: () => Promise<void>
	addOrDel: (id: number) => Promise<void>
}

const userId = pb.authStore.model?.id

const LikedProducts = create<IProducts>((set, get) => ({
	likedProductsMap: {},

	initLiked: async () => {
		try {
			const list = await pb.collection('favorite_products').getFullList({
				filter: `user = '${userId}'`,
			})
			const map: Record<number, string> = {}
			list.forEach(item => {
				map[item.product_id] = item.id
			})
			set({ likedProductsMap: map })
		} catch (error) {
			console.log(error)
		}
	},
	addOrDel: async id => {
		const currentMap = get().likedProductsMap
		if (id in currentMap) {
			try {
				await pb.collection('favorite_products').delete(currentMap[id])
				const updatedMap = { ...currentMap }
				delete updatedMap[id]
				set({ likedProductsMap: updatedMap })
			} catch (error) {
				console.log(error)
			}
		} else {
			try {
				const record = await pb.collection('favorite_products').create({
					user: userId,
					product_id: id,
				})
				set({
					likedProductsMap: {
						...currentMap,
						[id]: record.id,
					},
				})
			} catch (error) {
				console.log(error)
			}
		}
	},
}))

export default LikedProducts
