import NextImage from 'next/image'

export default function Polaroid({
		filename,
		alt,
		w,
		h,
		rotation='none',
		rotationRight,
		className
	}){

	return (
		<div className={`
			shadow-polaroid p-3 pb-12
			${className}
			${rotation == 'right' ? 'transform rotate-1' : rotation == 'left' ? 'transform -rotate-1' : ''}
		`}>
			<NextImage
				src={`/images/${filename}`}
				alt={alt}
				width={w}
				height={h}
			/>
		</div>
	)
}



