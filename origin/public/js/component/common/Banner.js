import React, { Component } from 'react';

class Banner extends React.Component{
	render(){
		return(
			<div className={this.props.clsName}>
				<img src={this.props.imgPath} />
			</div>
		);
	}
}

export default Banner;