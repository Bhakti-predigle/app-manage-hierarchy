const keycloak = {
	authority: 'https://accounts.predigle.com',
	/**
	 * To redirect user to the pi page which he/she was trying to reach before signing in
	 */
	get redirectUri() {
		return window.location.href;
	},
	postLogoutRedirectUri: 'https://pi-dev.predigle.com',
	realm: 'predigle-dev',
	clientId: 'pi-frontend',
	group_id:'8915d3e5-f2db-457b-acb9-75952fdf25d3'
} as const;

export const environment = {
	production: true,
	appUrl: 'https://pi-dev.predigle.com',
	FabrixUrl: 'https://api-fabrix-dev.predigle.com',
	videoEntityURL: 'https://api-video.predigle.com/',
	userEntityURL: 'https://api-entity-user-pf35w2ahoq-uc.a.run.app',
	productEntityURL: 'https://api-entity-product-pf35w2ahoq-uc.a.run.app',
	precogURL: 'https://api-precog-dev.predigle.com',
	precogMLURL: 'https://dashboard.predigle.com/entity/precog',
	// firebase: firebaseConfig,
	keycloak
} as const;
