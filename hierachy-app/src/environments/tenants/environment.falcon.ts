const firebaseConfig = {
	apiKey: 'AIzaSyAVmX62IQOw3iiRmRO7u65sfJ-h5GX91gM',
	authDomain: 'predigle-pi-dev.firebaseapp.com',
	projectId: 'predigle-pi-dev',
	storageBucket: 'predigle-pi-dev.appspot.com',
	messagingSenderId: '430860721882',
	appId: '1:430860721882:web:126f0096a1a3f33c770fe3'
};

export const environment = {
	production: false,
	appUrl: 'http://ec2-34-227-117-181.compute-1.amazonaws.com:4201',
	FabrixUrl: 'http://ec2-34-227-117-181.compute-1.amazonaws.com:8000',
	userEntityURL: 'https://api-user-dev.predigle.com',
	videoEntityURL: 'https://api-video.predigle.com',
	productEntityURL: 'https://api-entity-product-pf35w2ahoq-uc.a.run.app',
	precogURL: 'http://ec2-34-227-117-181.compute-1.amazonaws.com:5000',
	precogMLURL: 'http://ec2-34-227-117-181.compute-1.amazonaws.com:5000',
	firebase: firebaseConfig
};
