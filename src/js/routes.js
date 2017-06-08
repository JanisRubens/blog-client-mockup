import * as rh from './routeHandlers';

import { IndexRoute, Route, Router } from 'react-router';
import { fetchPost, fetchPosts } from 'actions/postActions.js'
import store, { history } from 'store';

import About from 'components/pages/About';
import Admin from 'containers/pages/admin/AdminContainer'
import App from 'components/layouts/app';
import Blog from 'components/pages/Blog';
import Contact from 'components/pages/Contact';
import Dashboard from 'components/pages/admin/pages/Dashboard'
import Home from 'components/pages/home';
import Login from 'components/pages/Login';
import NotFound from 'components/pages/NotFound';
import Post from 'components/pages/Post';
import PostsList from 'components/pages/admin/pages/PostsList'
import { Provider } from 'react-redux';
import React from 'react';
import UsersList from 'components/pages/admin/pages/UsersList'

export default (
    <Provider store={store}>
		<Router  history={history}>
				<Route component={App}>
					<Route path='/' onEnter={rh.onEnterHome} component={Home} />
					<Route path='contact' component={Contact} />
					<Route path='blog' component={Blog} />
					<Route path='post/:postID' onEnter={rh.onEnterPost} component={Post} />
					<Route path='about' component={About} />
					<Route path='admin' onEnter={rh.verifyAuthentication} component={Admin}>
						<IndexRoute component={Dashboard} />
						<Route path='users' component={UsersList} />
						<Route path='posts' component={PostsList} />
					</Route>
					<Route path='login' component={Login} />
					<route path='*' component={NotFound} />
				</Route>
		</Router>
	</Provider>
)
