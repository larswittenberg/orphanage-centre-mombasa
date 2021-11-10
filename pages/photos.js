import fs from 'fs'
import path from 'path'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

function Photos({ photos }) {
	return (
		<div>
			<Navigation />
				<main className="">
					<div className="prose sm:prose-base lg:prose-lg xl:prose-xl 2xl:prose-2xl mx-auto px-4 pt-4 md:pt-16">
						<h1 className="">Photo-Gallery</h1>
					</div>
					<ul className="grid grid-cols-4 gap-2 max-w-screen-xl mx-auto mt-24">
						{photos.map((photo, i) => (
							<li key={i} className="block h-72">
								<img src={`/images/photogallery/${photo}`} className="block w-full h-full object-cover bg-gray-100" />
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
