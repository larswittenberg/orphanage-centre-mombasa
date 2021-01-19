import Nav from './Nav'
import Footer from './Footer'

export default function LayoutDefault({ children }) {
	return (
		<div>
			<Nav />
			<main className="">
				{children}
			</main>
			<Footer />
		</div>
	)
}
