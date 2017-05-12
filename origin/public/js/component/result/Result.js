import React, { Component } from 'react';
import Header from '../common/Header';
import GoodsItem from '../index/GoodsItem';
import Style from '../../../style/result.less';

class Result extends React.Component{
	constructor(props) {
		super(props);
		this.initParam = this.initParam.bind(this);
		
	}
	initParam(){
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

		var type = this.props.location.query.type;
		switch(type){
			case 'search':
				this.title = '搜索结果';
				break;
			case 'myPublish':
				this.title = '我的发布';
				break;
			case 'myLike':
				this.title = '我的点赞';
				break;
		}
	}

	componentWillMount() {
		this.initParam();

	}
	render(){
		return(
			<div>
				<Header title={this.title}/>
				<div className="result-list-wrap goods-list-wrap">
					<ul className="goods-list">
						{this.goods_list.map((item, i) => <GoodsItem key={i} item={item} />)}
					</ul>
				</div>
			</div>
		);
	}
}

export default Result;