import React, { Component } from 'react';
import AddPicture from './AddPicture';

class UploadForm extends React.Component{
    constructor(props) {
        super(props);
        this.checkPostage = this.checkPostage.bind(this);
    }
    checkPostage(){
       $(this.refs.postage).toggleClass('checked');
    }

    render(){
        return(
            <form action="" className="upload-form" id="upload_form">
                <AddPicture lebelFor='picture'/>
                <div  className="form-group">
                    <textarea name="introduction" id="introduction" placeholder="详细描述几成新，购买事件都有助于吸引跟多人关注哦！" rows="5"></textarea>
                </div>

                <div className="form-group">
                    <label htmlFor="price">想卖</label>
                    <input className="price" placeholder="￥0.00" type="text" name="price" id="price" />
                </div>

                <div className="form-group">
                    <label>包邮</label>
                    <label ref="postage" className="postage check-box" htmlFor="postage"></label>
                    <input className="hide" type="checkbox" name="postage" id="postage" onClick={this.checkPostage}/>
                </div>

                <p className="contact">联系方式</p>
                <div className="form-group">
                    
                    <label htmlFor="phone">手机</label>
                    <input name="phone" className="phone" id="phone" placeholder="(必填)" type="number"/>
                </div>

                <div className="form-group submit-group">
                    <input type="submit" value="完成" className="submit-btn"/>
                </div>
                <input type="file" name="picture" id="picture" hidden="hidden"/>
            </form>
        );
    }
}

export default UploadForm;
