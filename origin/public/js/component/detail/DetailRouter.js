import React, { Component } from 'react';
import { Router, Route, hashHistory, IndexRoute} from 'react-router';
import Main from './Main';
import RouterHandler from '../common/RouterHandler';


class DetailRouter extends React.Component{
	render(){
		return(
		  <Router history={hashHistory}>
		    <Route path="/" component={RouterHandler}>
		    	<IndexRoute component={Main} />
		    </Route>
		    <Route path="/:id" component={RouterHandler}>
		    	<IndexRoute component={Main} />
		    </Route>
		  </Router>
		);
	}
}

export default DetailRouter;