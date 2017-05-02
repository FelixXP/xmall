import React, { Component } from 'react';

class GoodsImgList extends React.Component{
	render(){
		return(
			<ul className="goods-img-box img-list">

				{
					this.props.imgs.map((item, i) => 
						<li className="list-item" key={i}><img src={item} /></li>  
					)
				}
                          
           
				<div className="slider-icon">
					<span className="active"></span>
					<span></span>
					<span></span>
				</div>
            </ul>
		);
	}
}

export default GoodsImgList;