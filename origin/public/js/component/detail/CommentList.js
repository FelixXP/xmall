import React, { Component } from 'react';

class CommentList extends React.Component{
	render(){
		return(
            <li className="comment-list-item">
                <div className="comment-user">
                    <div className="user-portrait"><img src={this.props.item.user_img}/></div>
                    <div className="right-box">
                        <p className="name">{this.props.item.name}</p>
                        <p className="time">{this.props.item.time}</p>
                    </div>
                </div>
                <div className="comment-content">
                    <p>{this.props.item.content}</p>
                    <p className={this.props.item.parent_name ? 'comment-reply' : 'hide'}>
                        回复@{this.props.item.parent_name}的评论：{this.props.parent_content}
                    </p> 
                </div>
            </li>
		);
	}
}

export default CommentList;