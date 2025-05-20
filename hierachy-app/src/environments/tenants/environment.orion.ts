const keycloak = {
	authority: 'https://accounts.predigle.com',
	/**
	 * To redirect user to the pi page which he/she was trying to reach before signing in
	 */
	get redirectUri() {
		return window.location.href;
	},
	postLogoutRedirectUri: 'http://10.252.47.134:4201',
	realm: 'predigle-dev',
	clientId: 'pi-frontend',
	group_id:'8915d3e5-f2db-457b-acb9-75952fdf25d3'
} as const;

export const environment = {
	production: false,
	appUrl: 'http://10.252.47.134:4201',
	FabrixUrl: 'http://10.252.47.134/api/fabrix',
	userEntityURL: 'https://api-user-dev.predigle.com',
	videoEntityURL: 'https://api-video.predigle.com',
	productEntityURL: 'https://api-entity-product-pf35w2ahoq-uc.a.run.app',
	precogURL: 'http://10.252.47.134/api/precog',
	precogMLURL: 'http://10.252.47.134/api/precog',
	keycloak
} as const;
