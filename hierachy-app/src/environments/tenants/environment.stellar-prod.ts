const keycloak = {
	authority: 'https://accounts.predigle.com',
	/**
	 * To redirect user to the pi page which he/she was trying to reach before signing in
	 */
	get redirectUri() {
		return window.location.href;
	},
	postLogoutRedirectUri: 'http://34.19.111.69:4201',
	realm: 'predigle-dev',
	clientId: 'pi-frontend'
} as const;

export const environment = {
	production: false,
	appUrl: 'http://34.19.111.69:4201',
	FabrixUrl: 'http://34.19.111.69:8000',
	userEntityURL: 'https://api-user-dev.predigle.com',
	videoEntityURL: 'https://api-video.predigle.com',
	productEntityURL: 'https://api-entity-product-pf35w2ahoq-uc.a.run.app',
	precogURL: 'http://34.19.111.69:5000',
	precogMLURL: 'http://34.19.111.69:5000',
	keycloak
} as const;
