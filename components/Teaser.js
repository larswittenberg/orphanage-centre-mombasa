import NextImage from 'next/image'

export default function Teaser(){
	return (
		<div className="relative mb-4 lg:mb-16">
			<NextImage
				src="/images/comoc.jpg"
				alt="Child of Mercy Orphanage Centre"
				width="1920"
				height="1075"
				layout="responsive"
			/>
			<h1 className="absolute top-0 left-0 right-0 text-xl md:text-4xl lg:text-6xl font-light text-center text-white flex flex-col items-center mt-4 md:mt-8 lg:mt-12">
				<span className="bg-gray-900 bg-opacity-80 py-1 px-2 md:py-2 md:px-6 lg:py-3 lg:px-8 mb-1 md:mb-3 lg:mb-4">A wholehearted welcome to the</span>
				<span className="bg-gray-900 bg-opacity-80 py-1 px-2 md:py-2 md:px-6 lg:py-3 lg:px-8">Child of Mercy Orphanage Centre</span>
			</h1>
		</div>
	)
}



