const keycloak = {
	authority: 'https://accounts.predigle.com',
	// authority: 'http://localhost:8080',
	/**
	 * To redirect user to the pi page which he/she was trying to reach before signing in
	 */
	get redirectUri() {
		return window.location.href;
	},
	postLogoutRedirectUri: 'http://localhost:4200',
	realm: 'predigle-dev',
	clientId: 'pi-frontend',
	group_id:'8915d3e5-f2db-457b-acb9-75952fdf25d3'

} as const;

export const environment = {
	production: false,
	appUrl: 'http://localhost:4200',
	FabrixUrl: 'http://127.0.0.1:8005',
	hierarchyUrl: "http://127.0.0.1:8000",
	//FabrixUrl:'https://api-fabrix-dev.predigle.com',
	// userEntityURL: 'http://127.0.0.1:8000',
	userEntityURL: 'https://api-user-dev.predigle.com',
	videoEntityURL: 'https://api-video.predigle.com',
	productEntityURL: 'https://api-entity-product-pf35w2ahoq-uc.a.run.app',
	precogURL: 'http://127.0.0.1:1809',
	precogMLURL: 'https://dashboard.predigle.com/entity/precog',
	keycloak
} as const;
