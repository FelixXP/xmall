import React, { Component } from 'react';
import { Link } from 'react-router';
import Style from '../../../style/login.less';

class Login extends React.Component{
	render(){
		return(
			<div className="login-bg">
				<div className="login-wrap">
					<h1>Welcome</h1>
					<form className="login-form" action="//localhost:3000/users/login" method="post">
					    <div className="form-group group-login">
					        <input type="text" name="name" id="name" placeholder="帐号" />
					    </div>
					    <div className="form-group group-password">
					        <input type="password" name="password" id="password" placeholder="密码" />
					    </div>
					    <div className="form-group group-submit">
					        <input type="submit" name="submit" value="立即登录" id="submit"/>
					    </div>
					    <p className="resigter-link">
						    <Link to="/register">没有帐号？| 立即注册</Link>
					    </p>
					    <p className="return-link">
						    <Link to="/">返回首页</Link>
					    </p>
					</form>				
				</div>
			</div>
		);
	}
}

export default Login;