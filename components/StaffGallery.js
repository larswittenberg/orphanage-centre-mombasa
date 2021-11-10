import Polaroid from './Polaroid'

const staff = [
	{
		"name": "Jessica",
		"title": "Centre Director",
		"src": "staff/jessica.jpg"
	}, {
		"name": "James Mbotela",
		"title": "Manager",
		"src": "staff/james.jpg"
	}, {
		"name": "Peter",
		"title": "Volunteer Director",
		"src": "staff/peter.jpg"
	}, {
		"name": "Evelyn",
		"title": "Sen. Housemother",
		"src": "staff/evelyn.jpg"
	}, {
		"name": "Rose",
		"title": "Housemother",
		"src": "staff/rose.jpg"
	}, {
		"name": "Belinda",
		"title": "Housemother",
		"src": "staff/belinda.jpg"
	}, {
		"name": "Lilian",
		"title": "Cook / Housemother",
		"src": "staff/lilian.jpg"
	}, {
		"name": "Geoffrey",
		"title": "Groundsman",
		"src": "staff/geoffrey.jpg"
	}, {
		"name": "Charles",
		"title": "Nightwatchman",
		"src": "staff/charles.jpg"
	}, {
		"name": "Irene",
		"title": "Housemother Western Kenya Area",
		"src": "staff/irene.jpg"
	}
]



export default function StaffGallery() {
	return (
		<div className="grid gap-6 grid-cols-2 sm:grid-cols-3">
			{staff.map(({ name, title, src, }, i) => (
				<Polaroid
					key={`${name}-${i}`}
					filename={src}
					alt={name}
					w={410}
					h={546}
					className=""
					title={name}
					subtitle={title}
				/>
			))}
		</div>
	)
}
