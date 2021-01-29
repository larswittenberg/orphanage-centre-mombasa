import { MDXProvider } from '@mdx-js/react'
import MDXComponents from './MDXComponents';
import Nav from './Nav'
import Footer from './Footer'

export default function LayoutDefault({ children }) {
	return (
		<div>
			<Nav />
				<MDXProvider components={MDXComponents}>
					<main className="prose prose-sm sm:prose lg:prose-xl mx-auto">
						{children}
					</main>
				</MDXProvider>
			<Footer />
		</div>
	)
}
