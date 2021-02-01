import { MDXProvider } from '@mdx-js/react'
import MDXComponents from './MDXComponents';
import Nav from './Nav'
import Footer from './Footer'
import Teaser from './Teaser'

export default function LayoutDefault({ children, withTeaser }) {
	return (
		<div>
			<Nav />
				{withTeaser ? <Teaser /> : ''}
				<MDXProvider components={MDXComponents}>
					<main className="px-4 prose prose-sm sm:prose lg:prose-xl mx-auto">
						{children}
					</main>
				</MDXProvider>
			<Footer />
		</div>
	)
}
