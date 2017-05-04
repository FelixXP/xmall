import React, { Component } from 'react';
import { Link } from 'react-router';

class GoodsItem extends React.Component{
	render(){
		return(
			<li className="list-item">
				<Link to="/detail?id=1001">
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
				</Link>
			</li>
		);
	}
}

export default GoodsItem;