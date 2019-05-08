module.exports = {
	// The configuration settings for your Swagger service.
	pluginConfig: {
		'@axway/api-builder-plugin-fn-swagger': {
			'config-service': {
				// It is possible to override Swagger URI options when constructing
				// outbound requests from the Swagger plugin.
				uri: {
					// protocol: 'https',
					// host: 'hostname',
					// port: 443,
					// basePath: '/api'
				}
			}
		}
	},
	// The following authorization credentials needed to use the Swagger service.
	// Please follow this guide to manually configure the credentials:
	// https://docs.axway.com/bundle/API_Builder_4x_allOS_en/page/api_builder_credentials.html
	authorization: {
		credentials: {
			'API Central Bearer': {
				type: 'apiKey',
				key: null
			}
		}
	}
};
