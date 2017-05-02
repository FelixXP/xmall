import React, { Component } from 'react';

class GoodsItem extends React.Component{
	render(){
		return(
			<li className="list-item">
				<a href="javascript:;">
					<div className="img-box">
						<img src={this.props.item.img} />
					</div>
					<div className="info">
						<div className="name">{this.props.item.name}</div>
						<div className="introduction-wrap">
							<span className="introduction">{this.props.item.introduction}</span>
							<span className="price">{this.props.item.price}</span>
						</div>
					</div>
				</a>
			</li>
		);
	}
}

export default GoodsItem;