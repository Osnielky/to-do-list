import React, { Component } from 'react';

class Item extends Component{
	_remove(){
		if(this.props.onRemove)
			this.props.onRemove();
	}
	render(){
		return (
			<li>
				
				<div className="name">
					<span className="item-name">{this.props.data.name}</span>
					
				</div>
				
				<button className="remove" onClick={this._remove.bind(this)}>
					<i className="material-icons">X</i>
				</button>
			</li>
		)
	}
}


export default Item;