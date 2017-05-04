import React, { Component } from 'react';
import { Link } from 'react-router';
import TitleRadio from './TitleRadio';
import Style from '../../../style/login.less';

class Register extends React.Component{
	render(){
		return(
			<div className="login-bg">
				<div className="register-wrap login-wrap">
					<h1>Welcome</h1>
					<form className="form-wrap" action="#" method="post">
					    <div className="form-group group-login">
					        <label className="register-label" htmlFor="name">帐号</label><input type="text" name="name" id="name"/>
					    </div>
					    <div className="form-group group-password">
					        <label className="register-label" htmlFor="password">密码</label><input type="password" name="password" id="password" />
					    </div>
					    <div className="form-group group-phone">
					        <label className="register-label" htmlFor="phone">手机</label><input type="text" name="phone" id="phone" />
					    </div>

					    <div className="form-group group-title">
					    	<p>选择头像</p>
					    	<TitleRadio cls="checked" id="title1" img="/public/img/01.jpg" name="title" />
					    	<TitleRadio id="title2" img="/public/img/02.jpg" name="title" />
					    	<TitleRadio id="title3" img="/public/img/03.jpg" name="title" />
					    	<TitleRadio id="title4" img="/public/img/01.jpg" name="title" />
					    </div>
					    <div className="form-group group-submit">
					        <input type="submit" name="submit" value="立即注册" id="submit"/>
					    </div>
					    <p className="resigter-link">
						    <Link to="/login">已有帐号？| 立即登录</Link>
					    </p>
					</form>				
				</div>
			</div>
		);
	}
}

export default Register;