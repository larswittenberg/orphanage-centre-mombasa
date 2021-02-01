import NextLink from 'next/link'

const links = [
	{ href: '/mission', label: 'Mission' },
	{ href: '/children', label: 'Children' },
	{ href: '/projects', label: 'Projects' },
	{ href: '/volunteers', label: 'Volunteers' },
	{ href: '/photos', label: 'Photos' },
	{ href: '/contact', label: 'Contact' }
]

export default function Nav() {
	return (
		<nav className="bg-navgrey">
			<ul className="flex items-center justify-between py-5 px-8">
				<li>
					<NextLink href="/">
						<a className="no-underline text-gray-50 text-2xl hover:text-orange focus:text-orange">Child of Mercy Orphanage Centre</a>
					</NextLink>
				</li>
				<ul className="flex items-center justify-between space-x-4 -mt-2">
					{links.map(({ href, label }) => (
						<li key={`${href}${label}`}>
							<NextLink href={href}>
								<a className="text-lg no-underline px-1 py-2 border-b-3 text-gray-50  hover:border-orange focus:border-orange focus:text-orange">{label}</a>
							</NextLink>
						</li>
					))}
				</ul>
			</ul>
		</nav>
	)
}
