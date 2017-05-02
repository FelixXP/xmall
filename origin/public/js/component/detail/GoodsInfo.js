import React, { Component } from 'react';

class GoodsInfo extends React.Component{
	render(){
		return(
			<div className="goods-info-wrap">
				<div className="user-info">
					<div className="head-portrait">
                        <img src={this.props.goodsInfo.user_img} />               
                    </div>
                    <div className="info-right">
                        <p className="name">{this.props.goodsInfo.user_name}</p>
                        <p className="time">{this.props.goodsInfo.create_time}</p>
                    </div>
					
				</div>
				<div className="goods-introduction-wrap">
					<p className="introduction">{this.props.goodsInfo.introduction}</p>
					<div className="goods-tabs">
						<span className="tab tab-left tab-orange">{this.props.goodsInfo.postage ? '包邮' : '不包邮'}</span>
						<span className="tab tab-right tab-blue phone">{this.props.goodsInfo.phone}</span>
					</div>
				</div>
			</div>
		);
	}
}

export default GoodsInfo;