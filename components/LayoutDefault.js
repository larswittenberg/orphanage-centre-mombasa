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
				<main className="prose sm:prose-base lg:prose-lg xl:prose-xl 2xl:prose-2xl mx-auto px-4 pt-4 md:pt-16">
					{children}
				</main>
			</MDXProvider>
			<Footer />
		</div>
	)
}
