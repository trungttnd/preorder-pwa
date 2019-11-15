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
			{
				path: '/cart',
				componentUrl: './partials/main/orders-cart.html'
			},
			{
				path: '/checkout',
				componentUrl: './partials/main/orders-checkout.html'
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
			},
			{
				path: '/account',
				componentUrl: './partials/main/account.html'
			},
			{
				path: '/user-profile',
				componentUrl: './partials/main/user-profile.html'
			},
			{
				path: '/change-password',
				componentUrl: './partials/main/change-password.html'
			},
			{
				path: '/payment-method',
				componentUrl: './partials/main/payment-method.html'
			},
			{
				path: '/payment-method-view',
				componentUrl: './partials/main/payment-method-view.html'
			},
			{
				path: '/payment-method-new',
				componentUrl: './partials/main/payment-method-new.html'
			},
			{
				path: '/setting',
				componentUrl: './partials/main/setting.html'
			},
			{
				path: '/feedback',
				componentUrl: './partials/main/feedback.html'
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