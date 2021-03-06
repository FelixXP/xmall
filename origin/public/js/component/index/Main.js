import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Banner from '../common/Banner';
import GoodsItem from './GoodsItem';
import SearchBar from './SearchBar';
import GoodsHeader from './GoodsHeader';
import MoreBtn from './MoreBtn';
import Style from '../../../style/index.less';

class Main extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			login: 0,
		};

		this.checkLogin = this.checkLogin.bind(this);
		this.initParam = this.initParam.bind(this);
		this.globalClick = this.globalClick.bind(this);
	}

	globalClick(e){
		e.stopPropagation();
		$('.more-btn').addClass('off');
	}

	initParam(){
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
				img: '/public/img/02.jpg',
				name: 'SALE 潮牌男装联合',
				introduction: '商品描述，一句话描述 商品描述，一句话描述 商品描述，一句话描述 ',
				price: '￥100.00'
			},
			{
				img: '/public/img/03.jpg',
				name: 'SALE 潮牌男装联合',
				introduction: '商品描述，一句话描述 商品描述，一句话描述 商品描述，一句话描述 ',
				price: '￥100.00'
			},
			{
				img: '/public/img/02.jpg',
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
				img: '/public/img/03.jpg',
				name: 'SALE 潮牌男装联合',
				introduction: '商品描述，一句话描述 商品描述，一句话描述 商品描述，一句话描述 ',
				price: '￥100.00'
			},
		]

		//存储登录态 0为未登录
		this.login = 1100;
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
	}

	componentWillMount() {
		this.checkLogin();
		this.initParam();
	}

	componentDidMount() {
	}

	render(){
		return (
			<div onClick={this.globalClick}>
				<header>
					<SearchBar/>
				</header>
				<div className="headlines hide"></div>
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