 'use strict';

window.routes = [
	{
		path: '/',
		componentUrl: './partials/main/home.html'
	},
	{
		path: '/orders',
		componentUrl: './partials/main/orders.html'
	},
	{
		path: '/transactions',
		componentUrl: './partials/main/transactions.html'
	},
	{
		path: '/inbox',
		componentUrl: './partials/main/inbox.html'
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