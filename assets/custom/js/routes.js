 'use strict';

window.routes = [
	{
		path: '/',
		componentUrl: './partials/user/signin.html'
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
				componentUrl: './partials/user/signup-otp.html'
			},
			{
				path: '/password',
				componentUrl: './partials/user/signup-password.html'
			}
		]
	},
	{
		path: '/signin',
		componentUrl: './partials/user/signin.html'
	},
	{
		path: '/forgot-password',
		componentUrl: './partials/user/forgot-password.html',
		routes: [
			{
				path: '/otp',
				componentUrl: './partials/user/forgot-password-otp.html'
			},
			{
				path: '/new',
				componentUrl: './partials/user/forgot-password-new.html'
			}
		]
	},
	{
		path: '(.*)',
		componentUrl: './partials/404.html'
	}
];