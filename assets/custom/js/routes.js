 'use strict';

window.routes = [
	{
		path: '/',
		componentUrl: './partials/user/signin.html'
	},
	{
		path: '/home',
		componentUrl: './partials/main/home.html'
	},
	{
		path: '/orders',
		componentUrl: './partials/main/orders.html',
		routes: [
			{
				path: '/options',
				componentUrl: './partials/main/orders-options.html'
			},
		]
	},
	{
		path: '/transactions',
		componentUrl: './partials/main/transactions.html',
		routes: [
			{
				path: '/detail',
				componentUrl: './partials/main/transactions-detail.html'
			}
		]
	},
	{
		path: '/inbox',
		componentUrl: './partials/main/inbox.html',
		routes: [
			{
				path: '/detail',
				componentUrl: './partials/main/inbox-detail.html'
			}
		]
	},	
	{
		path: '/more',
		componentUrl: './partials/main/more.html',
		routes: [
			{
				path: '/loyalty',
				componentUrl: './partials/main/loyalty.html'
			}
		]
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