import { useEffect, useState } from 'react'
import pb from '../lib/pocketbase'
const useVerified = () => {
	const [isVerified, setIsVerified] = useState(false)
	useEffect(() => {
		async function checkVerified() {
			const model = pb.authStore.model
			if (!model) return
			try {
				const userData = await pb.collection('users').getOne(model.id)
				setIsVerified(userData.verified)
			} catch (error) {
				console.error('Ошибка при проверке email:', error)
			}
		}
		if (pb.authStore.isValid) {
			checkVerified()
		}
	}, [pb.authStore.model, pb.authStore.isValid])
	async function requestVerification() {
		const email = pb.authStore.model?.email
		const res = await pb.collection('users').requestVerification(email)
		if (res) {
			alert('проверьте email')
		}
	}
	return { isVerified, requestVerification }
}

export default useVerified
