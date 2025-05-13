
import half1 from '../images/half1.svg'
import half2 from '../images/half2.svg'
import full from '../images/full.svg'
import zero from '../images/zero.svg'
const RatingStars = (rating: number) => {
	let fullStars: number = Math.floor(rating)
	let hasHalfStar: boolean = rating - fullStars >= 0.5
	const array: string[] = []
	for (let i = 0; i < 5; i++) {
		if (fullStars > 0) {
			array.push('full')
			fullStars--
		} else if (hasHalfStar) {
			array.push('half')
			hasHalfStar = false
		} else {
			array.push('empty')
		}
	}

	return (
		<ul className='flex items-center h-5 w-25'>
			{array.map((star, index) => (
				<li key={index} className='h-5 '>
					{star === 'full' ? (
						<img src={full} alt='full' className='h-5 w-5' />
					) : star === 'half' ? (
						<div className='flex items-center h-5'>
							<img src={half1} alt='half1' className='h-5 w-2.5' />
							<img src={half2} alt='half2' className='h-5 w-2.5' />
						</div>
					) : (
						<img src={zero} alt='zero' className='h-5 w-5' />
					)}
				</li>
			))}
		</ul>
	)
}

export default RatingStars
