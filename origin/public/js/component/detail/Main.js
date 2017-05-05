import React, { Component } from 'react';
import Header from '../common/Header';
import Goods from './Goods';
import Comment from './Comment';
import Style from '../../../style/detail.less';


class Main extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			comment: 1
		}
		this.initParam = this.initParam.bind(this);
		this.setItem = this.setItem.bind(this);

	}

	setItem(item){
		this.setState({
			item
		});
	}

	componentWillMount() {
		this.initParam();
	}


	initParam(){
		this.goods={
			imgs: ['/public/img/01.jpg'],
			price: '100.00',
			info: {
				user_img: '/public/img/02.jpg',
				user_name: '米多多',
				create_time: '2017-04-25 15:48',
				introduction: '商品描述，全新，可小刀，免邮面交 商品描述，全新，可小刀，免邮面交 商品描述，全新，可小刀，免邮面交 ',
				postage: 1,
				phone: '188*****046'
			}
		}
	}
	
	render(){
		return(
			<div className='detail-main'>
				<Header title='商品详情' clsName='detail-head' />
				<Goods goods={this.goods} />
				<Comment setItem = {this.setItem.bind(this)} />
			</div>
		);
	}
}

export default Main;