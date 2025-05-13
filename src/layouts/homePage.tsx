import React, { ReactNode } from 'react'
import Header from '../components/header'
import Footer from '../components/footer'

interface Props {
	children: ReactNode
}

const HomePage = ({ children }: Props) => {
	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	)
}

export default HomePage
