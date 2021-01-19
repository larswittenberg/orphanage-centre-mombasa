import Link from 'next/link'

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
		<nav className="bg-gray-800">
			<ul className="flex items-center justify-between p-8">
				<li>
					<Link href="/">
						<a className="no-underline text-accent-1 dark:text-gray-300">Child of Mercy Orphanage Centre</a>
					</Link>
				</li>
				<ul className="flex items-center justify-between space-x-4">
					{links.map(({ href, label }) => (
						<li key={`${href}${label}`}>
							<a href={href} className="underline p-1 text-gray-50">
								{label}
							</a>
						</li>
					))}
				</ul>
			</ul>
		</nav>
	)
}
