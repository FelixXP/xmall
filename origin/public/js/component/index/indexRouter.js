import React, { Component } from 'react';
import { Router, Route, browserHistory , IndexRoute} from 'react-router';
import IndexMain from './Main';
import DetailMain from '../detail/Main';
import UploadMain from '../upload/Main';
import LoginMain from '../login/Login';
import RegisterMain from '../login/Register';
import ResultMain from '../result/Result';
import MyMain from '../my/Main';
import RouterHandler from '../common/RouterHandler';


class indexRouter extends React.Component{
	render(){
		return(
		  <Router history={browserHistory}>
		    <Route path="/" component={RouterHandler}>
		    	<IndexRoute component={IndexMain} />
		    </Route>
		    <Route path="/detail" component={RouterHandler}>
		    	<IndexRoute component={DetailMain} />
		    </Route>
		    <Route path="/result" component={RouterHandler}>
		    	<IndexRoute component={ResultMain} />
		    </Route>
		    <Route path="/my" component={RouterHandler}>
		    	<IndexRoute component={MyMain} />
		    </Route>
		    <Route path="/upload" component={RouterHandler}>
		    	<IndexRoute component={UploadMain} />
		    </Route>
		    <Route path="/login" component={RouterHandler}>
		    	<IndexRoute component={LoginMain} />
		    </Route>
		    <Route path="/Register" component={RouterHandler}>
		    	<IndexRoute component={RegisterMain} />
		    </Route>
		  </Router>
		);
	}
}

export default indexRouter;