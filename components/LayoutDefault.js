import { MDXProvider } from '@mdx-js/react'
import MDXComponents from './MDXComponents'
import Navigation from './Navigation'
import Footer from './Footer'
import Teaser from './Teaser'

export default function LayoutDefault({ children, withTeaser }) {
	return (
		<div>
			<Navigation />
			{withTeaser ? <Teaser /> : ''}
			<MDXProvider components={MDXComponents}>
				<main className="px-4 prose prose-sm sm:prose lg:prose-xl mx-auto pt-4 md:pt-16">
					{children}
				</main>
			</MDXProvider>
			<Footer />
		</div>
	)
}
