import Nav from './Nav'
import Footer from './Footer'

export default function LayoutDefault({ children }) {
	return (
		<div>
			<Nav />
			<main className="main">
				{children}
			</main>
			<Footer />
		</div>
	)
}
