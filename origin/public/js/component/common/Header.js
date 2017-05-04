import React, { Component } from 'react';

class Header extends React.Component{
	constructor(props) {
		super(props);
		this.onReturn = this.onReturn.bind(this);
	}

	onReturn(){
		history.back();
	}

	render(){
		return(
			<header className={"page-head "+this.props.clsName}>
		        <a onClick={this.onReturn} href="javascript:;" className="icon icon-return"></a>
		        <a href="javascript:;" className={"icon icon-share " + (this.props.share ? this.props.share : '')}></a>
		        <h1>{this.props.title}</h1>
			</header>
		);
	}
}

export default Header;