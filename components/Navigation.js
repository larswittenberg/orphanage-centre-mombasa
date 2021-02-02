import NextLink from 'next/link'

const links = [
	{ href: '/mission', label: 'Mission' },
	{ href: '/children', label: 'Children' },
	{ href: '/projects', label: 'Projects' },
	{ href: '/volunteers', label: 'Volunteers' },
	{ href: '/photos', label: 'Photos' },
	{ href: '/contact', label: 'Contact' }
]

export default function Navigation() {
	return (
		<nav className="bg-navgrey">
			<div className="flex flex-wrap lg:items-center lg:justify-between py-4 px-4 md:py-5 md:px-8">
				<NextLink href="/">
					<a className="flex-grow no-underline text-gray-50 text-lg md:text-2xl hover:text-orange focus:text-orange">Child of Mercy Orphanage Centre</a>
				</NextLink>

				<label htmlFor="show-menu" className="lg:hidden">
					<span className="showmenu__icon cursor-pointer">
						<svg className="h-6 w-6" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" fill="#fff"/></svg>
					</span>
				</label>
				<input type="checkbox" id="show-menu" className="showmenu__input hidden" />

				<ul className="menu flex lg:flex w-full lg:w-auto flex-wrap lg:flew-row lg:items-center lg:justify-between lg:space-x-4 mt-6 mb-0 lg:-mt-2">
					{links.map(({ href, label }) => (
						<li key={`${href}${label}`} className="flex-grow w-1/2 sm:w-1/3 lg:w-auto mb-8 lg:mb-0 text-center">
							<NextLink href={href}>
								<a className="text-lg no-underline px-1 py-1 md:py-2 border-b-3 text-gray-50  hover:border-orange focus:border-orange focus:text-orange">{label}</a>
							</NextLink>
						</li>
					))}
				</ul>
			</div>
		</nav>
	)
}
