import NextImage from 'next/image'

export default function Polaroid({
		filename,
		alt,
		w,
		h,
		rotation='none',
		className,
		title,
		subtitle,
	}){

	return (
		<div className={`
			shadow-polaroid p-3
			${className}
			${title ? 'pb-2' : 'pb-12'}
			${rotation == 'right' ? 'transform rotate-1' : rotation == 'left' ? 'transform -rotate-1' : ''}
		`}>
			<NextImage
				src={`/images/${filename}`}
				alt={alt}
				width={w}
				height={h}
			/>
			<span className="flex flex-col text-center mt-0 mb-1">
				<i className="not-italic">{title}</i>
				<i className="not-italic text-gray-400 text-base">{subtitle}</i>
			</span>
		</div>
	)
}



