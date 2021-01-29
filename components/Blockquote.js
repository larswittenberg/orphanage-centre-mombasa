export default function Blockquote({ className, children, cite }) {
	return (
		<blockquote className={ className }>
			{children}
			– <cite>{cite}</cite>
		</blockquote>
	)
}
