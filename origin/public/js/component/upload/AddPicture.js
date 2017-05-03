import React, { Component } from 'react';

class AddPicture extends React.Component{
	render(){
		return(
            <div className="add-pag-box">
                <a href="javascript:;" className="add-page">
                    <label htmlFor={this.props.lebelFor}>
                        <p><img src="/public/img/icon_add_img.png" /></p>
                        <p><span>添加照片</span></p>
                    </label>
                </a>
            </div>
		);
	}
}

export default AddPicture;