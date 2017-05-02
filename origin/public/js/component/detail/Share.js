import React, { Component } from 'react';

class Share extends React.Component{
	render(){
		return(
			<div className="share-bar">
				<div className="like">
                    <a href="javascript:;" className="icon like-icon"><span></span></a>
                    <p><span id="like-num">{this.props.liked}</span>人喜欢</p>
                </div>
                <div className="share">
                    <a href="javascript:;" className="icon share-icon"><span></span></a>
					<p>分享</p>
				</div>
			</div>
		);
	}
}

export default Share;