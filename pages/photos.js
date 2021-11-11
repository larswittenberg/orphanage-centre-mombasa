import fs from 'fs'
import path from 'path'
import sizeOf from 'image-size'
import Image from 'next/image'
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
					<ul className="gallery grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-2 max-w-screen-xl mx-auto mt-24 px-4">
						{photos.map((photo, i) => (
							<li key={i} className="block overflow-hidden h-40 sm:h-48 md:h-56 lg:h-64">
								<Image
									src={`/images/photogallery/${photo.fileName}`}
									width={photo.fileDimensions.width}
									height={photo.fileDimensions.height}
									quality={70}
									className="block w-full h-full object-cover bg-gray-100"
								/>
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
	const photoFiles = fs.readdirSync(photosDirectory)

	const photos = photoFiles.map(fileName => {
		const filePath = path.join(photosDirectory, fileName)
		const fileDimensions = sizeOf(filePath)

		return {
			fileName,
			fileDimensions,
		}
	})

	// By returning { props: photos }, the Photos component
	// will receive `photos` as a prop at build time
	return {
	  props: {
		photos
	  },
	}
}


export default Photos
