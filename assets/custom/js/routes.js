 'use strict';

window.routes = [
	{
		path: '/',
		componentUrl: './partials/user/signup.html'
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
		path: '/signup',
		componentUrl: './partials/user/signup.html',
		routes: [
			{
				path: '/otp',
				componentUrl: './partials/user/signup-otp.html',
			}
		]
	},
	{
		path: '(.*)',
		componentUrl: './partials/404.html'
	}
];