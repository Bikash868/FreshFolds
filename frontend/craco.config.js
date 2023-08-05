const sassResourcesLoader = require('craco-sass-resources-loader');
const webpack = require('webpack')
const path = require(`path`);

module.exports = {
	eslint: {
		mode: 'file',
	},
	plugins: [
		{
			plugin: sassResourcesLoader,
			options: {
				resources: ['./src/styles/global.scss'],
			},
		},
	],
	babel: {
		"presets": [
			'@babel/preset-env'
		],
		"plugins": [
			[
				"@emotion",
				{
					// sourceMap is on by default but source maps are dead code eliminated in production
					"sourceMap": true,
					"autoLabel": "dev-only",
					"labelFormat": "[local]",
					"cssPropOptimization": true
				}
			]
		]
	},
	webpack: {
		// plugins: [
		// 	new webpack.ProvidePlugin({
		// 		$: 'jquery',
		// 		jQuery: 'jquery',
		// 		'windwow.jQuery': 'jquery',
		// 	})
		// ],
		alias: {
			'@': path.resolve(__dirname, 'src/'),
			'@components': path.resolve(__dirname, 'src/components'),
			'@layouts': path.resolve(__dirname, 'src/layouts'),
			'@router': path.resolve(__dirname, 'src/router'),
			// '@routes': path.resolve(__dirname, 'src/routes'),
			'@store': path.resolve(__dirname, 'src/store'),
			'@styles': path.resolve(__dirname, 'src/styles'),
			'@utils': path.resolve(__dirname, 'src/utils'),
			'@views': path.resolve(__dirname, 'src/views'),
			// '@constants': path.resolve(__dirname, 'src/constants'),
			// '@lib': path.resolve(__dirname, 'src/lib'),
		},
	},
};
