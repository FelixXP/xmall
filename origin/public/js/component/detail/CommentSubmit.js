import React, { Component } from 'react';

class CommentSubmit extends React.Component{

	constructor(props) {
		super(props);
        this.addComment = this.addComment.bind(this);
	}

    addComment(){
        var comment = this.props.comment,
        	value = this.refs.comnentInput.value;

        console.log(value)
    
    	if (value){
	        var newComment = {
	            name: 'Felix',
	            user_img: '/public/img/03.jpg',
	            time: (new Date()).toLocaleString(),
	            content: value,
	            parent_name: '',
	            parent_content: ''
	        }

	        this.props.addComment(newComment);
	        this.refs.comnentInput.value = '';
    		
    	}


        this.setState({
            comment
        });
    }


	render(){
		return(
		    <div className="comment-input-bar">
		        <input ref="comnentInput" className="comment-input" type="text" name="comment" id="comment" placeholder="点击输入你的评论" />
		        <a href="javascript:;" onClick={this.addComment} className="sumbit-btn fl-right">发送</a>
		    </div>
		);
	}
}

export default CommentSubmit;