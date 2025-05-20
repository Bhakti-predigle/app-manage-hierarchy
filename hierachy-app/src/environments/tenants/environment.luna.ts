const keycloak = {
	authority: 'https://accounts.predigle.com',
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
	FabrixUrl: 'http://ltapiservices.us.lollytogs.com:8005',
	userEntityURL: 'https://api-user-dev.predigle.com',
	videoEntityURL: 'https://api-video.predigle.com',
	productEntityURL: 'https://api-entity-product-pf35w2ahoq-uc.a.run.app',
	precogURL: 'http://ltapiservices.us.lollytogs.com:8004',
	precogMLURL: 'https://dashboard.predigle.com/entity/precog',
	keycloak
} as const;
