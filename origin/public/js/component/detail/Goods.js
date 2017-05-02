import React, { Component } from 'react';
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
					<a href="javascript:;" className="want-btn">
						<span className="tab">我想要</span>
					</a>
				</p>
				<GoodsInfo goodsInfo={this.props.goods.info} />
				<Share liked="20" />


			</div>
		);
	}
}

export default Goods;