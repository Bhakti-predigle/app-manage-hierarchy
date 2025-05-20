const keycloak = {
	authority: 'https://accounts.predigle.com',
	/**

	 * To redirect user to the pi page which he/she was trying to reach before signing in

	 */
	get redirectUri() {
		return window.location.href;
	},
	postLogoutRedirectUri: 'https://pi.predigle.com',
	realm: 'predigle',
	clientId: 'pi-frontend',
	group_id: '9bba117b-e4db-4a85-9976-89c5ccf965f0'
} as const;

export const environment = {
	production: true,
	appUrl: 'https://pi.predigle.com',
	FabrixUrl: 'https://api-fabrix.predigle.com/',
	videoEntityURL: 'https://api-video.predigle.com/',
	userEntityURL: 'https://api-entity-user-pf35w2ahoq-uc.a.run.app',
	productEntityURL: 'https://api-entity-product-pf35w2ahoq-uc.a.run.app',
	precogURL: 'https://api-precog.predigle.com/',
	precogMLURL: 'https://api-precog.predigle.com/',
	// firebase: firebaseConfig,
	keycloak
};
