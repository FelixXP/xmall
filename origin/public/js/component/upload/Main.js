import React, { Component } from 'react';
import Header from '../common/Header';
import UploadForm from './UploadForm';
import Style from '../../../style/upload.less';

class Main extends React.Component{
	render(){
		return(
			<div>
			    <Header title='商品详情' clsName='head' />
			    <UploadForm />
			</div>
		);
	}
}

export default Main;