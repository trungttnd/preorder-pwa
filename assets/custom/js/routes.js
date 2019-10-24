 'use strict';

window.routes = [
	{
		path: '/',
		componentUrl: './partials/main/home.html'
	},	
	{
		path: '/more',
		componentUrl: './partials/main/more.html'
	},
	{
		path: '(.*)',
		componentUrl: './partials/404.html'
	}
];