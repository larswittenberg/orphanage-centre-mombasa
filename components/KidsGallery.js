import Polaroid from '../components/Polaroid'

const kids = [
	{
		"name": "Abdul",
		"date": "2011",
		"src": "children/abdul.jpg"
	},
	{
		"name": "Ali",
		"date": "2009",
		"src": "children/ali.jpg"
	},
	{
		"name": "Ochi",
		"date": "2010",
		"src": "children/ochi.jpg"
	},
	{
		"name": "Sangali",
		"date": "2011",
		"src": "children/sangali.jpg"
	},
	{
		"name": "Lewis",
		"date": "2011",
		"src": "children/lewis.jpg"
	},
	{
		"name": "John",
		"date": "2010",
		"src": "children/john.jpg"
	},
	{
		"name": "Brenda",
		"date": "2008",
		"src": "children/brenda.jpg"
	},
	{
		"name": "Patrick",
		"date": "2007",
		"src": "children/patrick_1.jpg"
	},
	{
		"name": "Alice",
		"date": "2009",
		"src": "children/alice.jpg"
	},
	{
		"name": "Mnene",
		"date": "2009",
		"src": "children/mnene.jpg"
	},
	{
		"name": "Junior",
		"date": "2008",
		"src": "children/junior.jpg"
	},
	{
		"name": "Kevin",
		"date": "2006",
		"src": "children/kevin.jpg"
	},
	{
		"name": "William",
		"date": "2006",
		"src": "children/william.jpg"
	},
	{
		"name": "Brian",
		"date": "2006",
		"src": "children/brian.jpg"
	},
	{
		"name": "Patrick",
		"date": "2007",
		"src": "children/patrick_2.jpg"
	},
	{
		"name": "Harrison",
		"date": "2006",
		"src": "children/harrison.jpg"
	}
]


export default function KidsGallery() {
	return (
		<div className="grid gap-4 xl:gap-6 grid-cols-2 sm:grid-cols-3 xl:grid-cols-4">
			{kids.map(({ name, date, src, }, i) => (
				<Polaroid
					key={`${name}-${i}`}
					filename={src}
					alt={name}
					w={430}
					h={543}
					className=""
					title={name}
					subtitle={`(* ${date})`}
				/>
			))}
		</div>
	)
}
