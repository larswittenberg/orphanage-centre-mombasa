import LayoutDefault from '../components/LayoutDefault'
import Polaroid from '../components/Polaroid'

export default function Mission() {
	return (
		<LayoutDefault>
			<div className="prose prose-sm sm:prose lg:prose-xl mx-auto mb-12">
				<h1>Mission</h1>

				<h2>Who we are</h2>
				<p>Child of Mercy Orphanage Centre is a nonprofit making religious institution with a mission to ensure a better life is provided to the needy and orphaned, the less fortunate and poor children from poverty stricken families through a provision of primary necessities to attain a nation where children become self-reliant future leaders we target children of ages 5 to 15 years both girls and boys.</p>
			</div>

			<div className="prose prose-sm sm:prose lg:prose-xl mx-auto md:flex items-start">
				<blockquote className="w-2/3 pr-24">
					<p>
						<span className="">I</span> worked in another orphanage before, but due to some difficult circumstances I was not able to presume my visions. In 2010, when Child of Mercy was formed, I finally had the possibility to give the children a lovely home. That was the brightest moment in my life.
					</p>
					<small>Jessy, Director of COMOC</small>
				</blockquote>

				<Polaroid
					filename="staff/jessica.jpg"
					alt="Jessy, Director of COMOC"
					w={401}
					h={535}
					rotationRight
					className="w-1/3"
				/>
			</div>

			<div className="prose prose-sm sm:prose lg:prose-xl mx-auto mb-12">
				<h2>Our goals</h2>
				<p>
					Our specified goal is to address their needs and formulate ways of attending to them by acquiring assistance in the form of donation gifts and money from charitable donor communities, charitable organizations both international and local, well-wishers, volunteers, local communities and government.
				</p>
				<blockquote className="">
					<p>
						<span className="">M</span>y biggest aim is to see that the children are well protected and cared for but also to widen up the centre or even go to different parts of the country, because there are so many children who urgently need our assistance.
					</p>
					<small>Jessy, Director of COMOC</small>
				</blockquote>

				<Polaroid
					filename="comoc-staff.jpg"
					alt="COMOC Staff"
					w={840}
					h={680}
				/>
			</div>
		</LayoutDefault>
	)
}
