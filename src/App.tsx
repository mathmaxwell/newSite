
import { Route, Routes } from 'react-router-dom'
import HomePage from './layouts/homePage'
import Search from './components/search'
import LikedProductsPage from './components/likedProductsPage'
import Shopping from './components/shopping'
import Contact from './components/contact'
import About from './components/about'
import SignUp from './components/signUp'
import Login from './components/login'
import NotFound from './components/notFound'
import Product from './components/product'
import Catalog from './components/catalog'
import Categories from './components/categories'
import Item from './components/item'
LikedProductsPage
function App() {
	return (
		<>
			<Routes>
				<Route
					path='/'
					element={
						<HomePage>
							<Product />
							<Catalog />
						</HomePage>
					}
				/>
				<Route
					path={'/search'}
					element={
						<HomePage>
							<Search />
						</HomePage>
					}
				/>
				<Route
					path={`/search/:search`}
					element={
						<HomePage>
							<Search />
						</HomePage>
					}
				/>
				<Route
					path={'/categories'}
					element={
						<HomePage>
							<Categories />
						</HomePage>
					}
				/>
				<Route
					path={`/categories/:categories`}
					element={
						<HomePage>
							<Categories />
						</HomePage>
					}
				/>
				<Route
					path={`/categories/:categories/:item`}
					element={
						<HomePage>
							<Item />
						</HomePage>
					}
				/>
				<Route
					path={`/liked-products`}
					element={
						<HomePage>
							<LikedProductsPage />
						</HomePage>
					}
				/>
				<Route
					path={`/shopping`}
					element={
						<HomePage>
							<Shopping />
						</HomePage>
					}
				/>
				<Route
					path={`/contact`}
					element={
						<HomePage>
							<Contact />
						</HomePage>
					}
				/>
				<Route
					path={`/about`}
					element={
						<HomePage>
							<About />
						</HomePage>
					}
				/>
				<Route
					path={`/sign-up`}
					element={
						<HomePage>
							<SignUp />
						</HomePage>
					}
				/>
				<Route
					path='/login'
					element={
						<HomePage>
							<Login />
						</HomePage>
					}
				/>
				<Route
					path='*'
					element={
						<HomePage>
							<NotFound />
						</HomePage>
					}
				/>
			</Routes>
		</>
	)
}

export default App
