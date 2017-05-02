import React, { Component } from 'react';
import Banner from '../common/Banner';
import GoodsItem from './GoodsItem';
import GoodsHeader from './GoodsHeader';

class Main extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			hot_sale_list: [
				{
					img: '/public/img/01.jpg',
					name: 'SALE 潮牌男装联合',
					introduction: '商品描述，一句话描述 商品描述，一句话描述 商品描述，一句话描述 ',
					price: '￥100.00'
				}
			],

			goods_list: [
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
		};
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
						{this.state.hot_sale_list.map((item, i) => <GoodsItem key={i} item={item} />)}
					</ul>
				</div>
				<div className="goods-list-wrap">
					<GoodsHeader />
					<ul className="goods-list">
						{this.state.goods_list.map((item, i) => <GoodsItem key={i} item={item} />)}
					</ul>
				</div>
			</div>
		);
	}
}

export default Main;