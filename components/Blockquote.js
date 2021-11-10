export default function Blockquote({ className, children, cite }) {
	return (
		<blockquote className={`mb-12 ${className}`}>
			{children}
			– <cite>{cite}</cite>
		</blockquote>
	)
}
