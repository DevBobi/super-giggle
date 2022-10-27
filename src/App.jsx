import { Route, Routes, useLocation } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import Nav from './components/Nav/Nav'
import ContactPage from './pages/ContactPage'
import ContentPage from './pages/ContentPage'
import GalleryPage from './pages/GalleryPage'
import Home from './pages/HomePage'
import Login from './pages/Login'
import Register from './pages/Register'
import TeamPage from './pages/TeamPage'

function App() {
	const { pathname } = useLocation()
	return (

		<div className=" justify-center flex-col min-h-screen ">
			{pathname !== '/login' && pathname !== '/register' && <Nav />}
			<Routes>
				<Route path='*' element={<div>Not Found</div>} />
				<Route path='/' element={<Home />} />
				<Route path='/gallery' element={<GalleryPage />} />
				<Route path='/content' element={<ContentPage />} />
				<Route path='/team' element={<TeamPage />} />
				<Route path='/contact' element={<ContactPage />} />
				<Route path='/login' element={<Login />} />
				<Route path='/register' element={<Register />} />
			</Routes>
			{pathname !== '/login' && pathname !== '/register' && <Footer />}
		</div>
	)
}
export default App
