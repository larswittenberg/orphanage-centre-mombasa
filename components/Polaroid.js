import Image from 'next/image'

export default function Polaroid({ filename, alt, w, h, rotationRight, className }) {
	return (
		<div className={`shadow-polaroid p-3 pb-12 ${rotationRight ? 'transform rotate-1' : 'transform -rotate-1'} ${className} `}>
			<Image
				src={`/images/${filename}`}
				alt={alt}
				width={w}
				height={h}
			/>
		</div>
	)
}
