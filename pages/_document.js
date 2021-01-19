import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx)
		return { ...initialProps }
	}

	render() {
		return (
			<Html lang="en">
				<Head>
					<link href="/favicon.svg" rel="shortcut icon" />
				</Head>
				<body className="font-sans">
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument
