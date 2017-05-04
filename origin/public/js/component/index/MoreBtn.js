import React, { Component } from 'react';
import { Link } from 'react-router';

class MoreBtn extends React.Component{
	constructor(props) {
		super(props);
		this.moreClick = this.moreClick.bind(this);
	}

	moreClick(){
		$(this.refs.moreBtn).toggleClass('off');
	}

	render(){
		return(
			<div ref="moreBtn" className='more-btn off' onClick={this.moreClick}>
				<Link to="/upload" className='publish'>发布</Link>
				<Link to={(this.props.login ? '/my' : '/login')} className='my'>我</Link>
			</div>
		);
	}
}

export default MoreBtn;