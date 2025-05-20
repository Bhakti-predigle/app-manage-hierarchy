const keycloak = {
	authority: 'https://accounts.predigle.com',
	/**
	 * To redirect user to the pi page which he/she was trying to reach before signing in
	 */
	get redirectUri() {
		return window.location.href;
	},
	postLogoutRedirectUri: 'http://localhost:4200',
	realm: 'predigle-dev',
	clientId: 'pi-frontend'
} as const;

export const environment = {
	production: false,
	appUrl: 'http://ec2-44-204-56-180.compute-1.amazonaws.com:4201',
	FabrixUrl: 'http://ec2-44-204-56-180.compute-1.amazonaws.com:8000',
	userEntityURL: 'https://api-user-dev.predigle.com',
	videoEntityURL: 'https://api-video.predigle.com',
	productEntityURL: 'https://api-entity-product-pf35w2ahoq-uc.a.run.app',
	precogURL: 'http://ec2-44-204-56-180.compute-1.amazonaws.com:5000',
	precogMLURL: 'http://ec2-44-204-56-180.compute-1.amazonaws.com:5000',
	// firebase: firebaseConfig,
	keycloak
};
