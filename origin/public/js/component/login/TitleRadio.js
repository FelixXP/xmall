import React, { Component } from 'react';

class TitleRadio extends React.Component{
	constructor(props) {
		super(props);
		this.onLabelClick = this.onLabelClick.bind(this);
	}

	onLabelClick(){
		var dom = $(this.refs.titleLable);
		if (!dom.is(".checked")) {
			$(".title-label").removeClass("checked");
			dom.addClass("checked");
		}
	}

	render(){
		return(
			<div>
				<label onClick={this.onLabelClick} ref='titleLable' className={"title-label " + (this.props.cls ? this.props.cls : '')} htmlFor={this.props.id}><img src={this.props.img} /></label>
				<input  className="hide " type="radio" name={this.props.name} value={this.props.img} id={this.props.id}/>
			</div>
		);
	}
}

export default TitleRadio;