import React, { Component } from 'react';
import {Link} from 'react-router';
import GoodsImgLis from './GoodsImgList';
import GoodsInfo from './GoodsInfo';
import Share from './Share';

class Goods extends React.Component{
	render(){
		return(
			<div className="goods-wrap">
				<GoodsImgLis imgs={this.props.goods.imgs} />
				<p className="price-bar">
					<span className="price">{'￥' + this.props.goods.price}</span>
					<Link to="/chat" className="want-btn">
						<span className="tab">私聊</span>
					</Link>
				</p>
				<GoodsInfo goodsInfo={this.props.goods.info} />
				<Share liked="20" />


			</div>
		);
	}
}

export default Goods;