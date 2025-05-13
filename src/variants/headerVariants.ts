export const logo = {
	hidden: { opacity: 0, scale: 1.5 },
	visible: {
		opacity: 1,
		scale: 1,
		transition: { duration: 1, type: 'spring', stiffness: 10, damping: 1 },
	},
}
export const listVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			when: 'beforeChildren',
			staggerChildren: 0.3,
		},
	},
}
export const itemVariants = {
	hidden: { opacity: 0, y: -10 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.3, type: 'spring', stiffness: 100, damping: 2 },
	},
}
