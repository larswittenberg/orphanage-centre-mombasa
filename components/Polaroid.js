import Image from 'next/image'

export default function Polaroid({ alt, filename, extraClassName, w, h }) {
	return (
		<div className="shadow-polaroid p-3 pb-12">
			<Image
				src={`/images/${filename}`}
				alt={alt}
				width={w}
				height={h}
				className=""
			/>
		</div>
	)
}
