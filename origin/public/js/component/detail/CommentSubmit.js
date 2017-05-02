import React, { Component } from 'react';

class CommentSubmit extends React.Component{
	render(){
		return(
		    <div className="comment-input-bar">
		        <input className="comment-input" type="text" name="comment" id="comment" placeholder="点击输入你的评论" />
		        <a href="javascript:;" className="sumbit-btn fl-right">发送</a>
		    </div>
		);
	}
}

export default CommentSubmit;