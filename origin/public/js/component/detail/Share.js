import React, { Component } from 'react';

class Share extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			liked: this.props.liked
		}
		this.onLike = this.onLike.bind(this);
	}

	onLike(){
		var liked = this.state.liked;
		liked++;
		 this.setState({
            liked
        });
	}

	render(){
		return(
			<div className="share-bar">
				<div className="like">
                    <a onClick={this.onLike} href="javascript:;" className="icon like-icon"><span></span></a>
                    <p><span id="like-num">{this.state.liked}</span>人喜欢</p>
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