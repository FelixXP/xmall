import React, { Component } from 'react';
import Header from '../common/Header';
import { Link, browserHistory } from 'react-router';
import Style from '../../../style/my.less';

class Main extends React.Component{
	constructor(props) {
		super(props);
		this.data = {
			img: '/public/img/02.jpg',
			name: 'Alex',
			publish: 12,
			liked: 1,
			phone: 18814128046,
			time: '2017-05-01'
		}
		this.onLogout = this.onLogout.bind(this);
	}

	onLogout(){
		var _this = this,
			url = '//localhost:3000/users/logout',
			data = {};
		$.post(url, data, function(ret){
			if (ret.code == 0) {
				browserHistory.push('/');
			}else{
				console.log('error', ret.msg)
			}
		});
	}

	render(){
		return(
			<div className="profile-wrap">
				<Header title='我' clsName='head' share='hide' />
			    <div className="profile-head profile-group">
			        <div className="header">
			            <div className="img-box">
			                <img src={this.data.img} />
			            </div>
			            <div className="name">
			                <p>{this.data.name}</p>
			            </div>
			        </div>

			        <div className="footer">
			            <div className="item">
				            <Link to="/result?type=myPublish">
				                <h3>我的发布</h3>
				                <p>{this.data.publish}</p>
			                </Link>
			            </div>
			            <div className="item">
			            	<Link to="/result?type=myLike">
				                <h3>我的点赞</h3>
				                <p>{this.data.liked}</p>
			                </Link>
			            </div>
			        </div>
			    </div>

			    <div className="profile-phone profile-group">
			        <p>
			            我的手机
			            <span className="text fl-right">{this.data.phone}</span>
			        </p>
			    </div>
			    <div className="profile-time profile-group">
			        <p>
			            注册时间
			            <span className="text fl-right">{this.data.time}</span>
			        </p>
			    </div>

			    <div onClick={this.onLogout} className="profile-exit profile-group">
			        <p>退出登录</p>
			    </div>
			</div>
		);
	}
}

export default Main;