import React, { Component } from 'react';
import Banner from '../common/Banner';
import GoodsItem from './GoodsItem';
import GoodsHeader from './GoodsHeader';
import MoreBtn from './MoreBtn';
import Style from '../../../style/index.less';

class Main extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			login: 0,
		};

		this.hot_sale_list = [
			{
				img: '/public/img/01.jpg',
				name: 'SALE 潮牌男装联合',
				introduction: '商品描述，一句话描述 商品描述，一句话描述 商品描述，一句话描述 ',
				price: '￥100.00'
			}
		];

		this.goods_list = [
			{
				img: '/public/img/01.jpg',
				name: 'SALE 潮牌男装联合',
				introduction: '商品描述，一句话描述 商品描述，一句话描述 商品描述，一句话描述 ',
				price: '￥100.00'
			},
			{
				img: '/public/img/01.jpg',
				name: 'SALE 潮牌男装联合',
				introduction: '商品描述，一句话描述 商品描述，一句话描述 商品描述，一句话描述 ',
				price: '￥100.00'
			},
			{
				img: '/public/img/01.jpg',
				name: 'SALE 潮牌男装联合',
				introduction: '商品描述，一句话描述 商品描述，一句话描述 商品描述，一句话描述 ',
				price: '￥100.00'
			},
			{
				img: '/public/img/01.jpg',
				name: 'SALE 潮牌男装联合',
				introduction: '商品描述，一句话描述 商品描述，一句话描述 商品描述，一句话描述 ',
				price: '￥100.00'
			},
			{
				img: '/public/img/01.jpg',
				name: 'SALE 潮牌男装联合',
				introduction: '商品描述，一句话描述 商品描述，一句话描述 商品描述，一句话描述 ',
				price: '￥100.00'
			},
		]

		//存储登录态 0为未登录
		this.login = 1100;

		this.checkLogin = this.checkLogin.bind(this);
	}

	checkLogin(){
		var _this = this,
			url = '//localhost:3000/users/checkLogin',
			data = {};
		$.get(url, data, function(ret){
			if (ret.code == 0) {
				var login = ret.result.login;
				_this.setState({
					login 
				});
			}else{
				console.log('error', ret.msg)
			}
		})
		console.log(this.login,'checkLogin')
	}

	componentWillMount() {
		this.checkLogin();
	}

	componentDidMount() {
		console.log(this.login, 'componentDidMount')
	}

	render(){
		return (
			<div>
				<header className='hide'>
					<Banner clsName='index-banner hide' imgPath='/public/img/01.jpg' />
				</header>
				<div className="headlines"></div>
				<div className='hot-sale'>
					<div className="title"><div className="line"><span>人气推荐</span></div></div>

					<ul className="hot-list-wrap">
						{this.hot_sale_list.map((item, i) => <GoodsItem key={i} item={item} />)}
					</ul>
				</div>
				<div className="goods-list-wrap" data-lo={this.state.login}>
					<GoodsHeader />
					<ul className="goods-list">
						{this.goods_list.map((item, i) => <GoodsItem key={i} item={item} />)}
					</ul>
				</div>
				<MoreBtn login={this.state.login} />
			</div>
		);
	}
}

export default Main;