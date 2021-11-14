const title = 'Child of Mercy Orphanage Centre Mombasa, Kenya'
const description = 'Our Orphanage Centre was formed in 2010 and is situated in the Likoni slum area south of Mombasa.'
const url = 'https://child-of-mercy-orphanage-centre-kenya.com/'

export default {
	title,
	description,
	canonical: url,
	openGraph: {
		type: 'website',
		url: url,
		title,
		description,
		images: [{
			url: 'https://www.child-of-mercy-orphanage-centre-kenya.com/images/comoc.jpg',
			alt: title,
			width: 1920,
			height: 1075
		}]
	},
		twitter: {
		handle: '@larswittenberg',
		site: '@larswittenberg',
		cardType: 'summary_large_image',
	},
};
