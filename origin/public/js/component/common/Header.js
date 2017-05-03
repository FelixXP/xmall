import React, { Component } from 'react';

class Header extends React.Component{
	render(){
		return(
			<header className={"page-head "+this.props.clsName}>
		        <a href="javascript:;" className="icon icon-return"></a>
		        <a href="javascript:;" className={"icon icon-share " + (this.props.share ? this.props.share : '')}></a>
		        <h1>{this.props.title}</h1>
			</header>
		);
	}
}

export default Header;