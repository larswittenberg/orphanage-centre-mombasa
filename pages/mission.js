import LayoutDefault from '../components/LayoutDefault'
import Polaroid from '../components/Polaroid'

export default function Mission() {
	return (
		<LayoutDefault>
			<div class="prose prose-sm sm:prose lg:prose-lg mx-auto">
				<h1>Mission</h1>

				<h2>Who we are</h2>
				<p>Child of Mercy Orphanage Centre is a nonprofit making religious institution with a mission to ensure a better life is provided to the needy and orphaned, the less fortunate and poor children from poverty stricken families through a provision of primary necessities to attain a nation where children become self-reliant future leaders we target children of ages 5 to 15 years both girls and boys.</p>

				<blockquote className="">
					<p>
						<span className="">I</span> worked in another orphanage before, but due to some difficult circumstances I was not able to presume my visions. In 2010, when Child of Mercy was formed, I finally had the possibility to give the children a lovely home. That was the brightest moment in my life.
					</p>
					<small>Jessy, Director of COMOC</small>
				</blockquote>

				<Polaroid alt="Jessy, Director of COMOC" filename="staff/jessica.jpg" w="401" h="535" />

			</div>
		</LayoutDefault>
	)
}
