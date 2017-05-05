import React, { Component } from 'react';
import CommentList from './CommentList';
import CommentSubmit from './CommentSubmit';


class Comment extends React.Component{
	constructor(props) {
		super(props);
        this.state = {
            comment: 2
        }
        this.initParam = this.initParam.bind(this);
        this.addComment = this.addComment.bind(this);
	}

    addComment(item){
        var comment = this.state.comment;

        if(item){
            this.comment_list.push(item);
            comment++;
        }

        this.setState({
            comment
        });
    }




    initParam(){
        this.comment_count = 100;
        this.comment_list = [
            {
                name: '韦滨',
                user_img: '/public/img/02.jpg',
                time: '2017-04-25 15:48',
                content: '东西还在吗？ 东西还在吗？ 东西还在吗？ 东西还在吗？ 东西还在吗？',
                parent_name: '',
                parent_content: ''
            },
            {
                name: '韦滨',
                user_img: '/public/img/02.jpg',
                time: '2017-04-25 15:48',
                content: '东西还在吗？ 东西还在吗？ 东西还在吗？ 东西还在吗？ 东西还在吗？',
                parent_name: 'Felix',
                parent_content: '什么鬼'
            }
        ];
    }

    componentWillMount() {
        this.initParam();
    }

	render(){
		return(
            <div>
                <div className="comment-wrap">
                    <div className="comment-head">
                        <p>
                            <span className="icon icon-comment"></span>
                            评论
                            <span className="comment-count">{this.comment_count}</span>
                            条
                        </p>
                    </div>

                    <div className="comment-list-wrap">
                        <ul className="comment-list">
                        	{
                        		this.comment_list.map((item, i) => <CommentList key={i} item={item} />)
                        	}
                        </ul>
                    </div>
                </div>
                <CommentSubmit addComment={this.addComment.bind(this)} />
            </div>
		);
	}
}

export default Comment;