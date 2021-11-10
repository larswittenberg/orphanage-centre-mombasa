import fs from 'fs'
import path from 'path'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'


function Photos({ photos }) {
	// console.log({photos})
	return (
		<div>
			<Navigation />
				<main className="px-4 prose prose-sm sm:prose lg:prose-xl mx-auto pt-4 md:pt-16">
					<ul className="">
						{photos.map((photo, i) => (
							<li key={i} className="">
								<img src={`/images/photogallery/${photo}`} />
							</li>
						))}
					</ul>
				</main>
			<Footer />
		</div>
	)
}



// This function gets called at build time on server-side.
// It won't be called on client-side.
export async function getStaticProps() {
	const photosDirectory = path.join(process.cwd(), '/public/images/photogallery')
	const photos = fs.readdirSync(photosDirectory)

	// By returning { props: photos }, the Photos component
	// will receive `photos` as a prop at build time
	return {
	  props: {
		photos
	  },
	}
}


export default Photos
