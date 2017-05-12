import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';

class SearchBar extends React.Component{
	constructor(props) {
		super(props);
		this.onSearch = this.onSearch.bind(this);
	}

	onSearch(){
		browserHistory.push('/result?type=search&keyword=1101');
	}
	render(){
		return(
			<div className="search-bar">
				<span className="icon icon-search"></span>
				<input name="keyword" id="keyword" type="text" placeholder="搜索你想要的商品"/>
				<a href="javascript:;" onClick={this.onSearch} className="icon icon-to-result fl-right"></a>
			</div>
		);
	}
}

export default SearchBar;