module.exports = {
	siteMetadata: {
		title: `Armbet`,
		description: `Guiding you through the world of armwrestling.`,
		author: `@armbet`,
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/assets/images/`,
			},
		},
		`gatsby-plugin-glamor`,
		{
			resolve: `gatsby-plugin-styled-components`,
			options: {
				stylesProvider: { injectFirst: true },
			},
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		//{resolve: 'gatsby-plugin-zopfli'},
		{
			resolve: `gatsby-plugin-create-client-paths`,
			options: { prefixes: [`/activate/*`] },
		},
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `gatsby-starter-default`,
				short_name: `starter`,
				start_url: `/`,
				background_color: `#ffffff`,
				theme_color: `#E52D2D`,
				display: `standalone`,
				icon: `src/assets/images/favicon.png`, // This path is relative to the root of the site.
			},
		},
		{
			resolve: `gatsby-plugin-canonical-urls`,
			options: {
				siteUrl: `https://www.armbet.com`,
			},
		},
		{
			resolve: "gatsby-plugin-load-script",
			options: {
				src:
					"https://maps.googleapis.com/maps/api/js?key=AIzaSyDBZNOrpaYIJZiUxQCZ2QUoRBcYMnwBpdM&libraries=places",
				onLoad: `() => window.googleMapsHasLoaded = true`,
			},
		},
		{
			resolve: `gatsby-plugin-layout`,
			options: {
				// add relative path to your layout component
				component: `${__dirname}/src/containers/Layout/index.js`,
			},
		},
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.dev/offline
		// `gatsby-plugin-offline`,
	],
};
