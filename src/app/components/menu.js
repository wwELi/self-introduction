
import React from 'react';
import event from '../utils/event';

export default class Menu extends React.Component{
	constructor() {
		super();

		this.state = {
			className: 'hide_icon',
			hide: true
		}
	}

    changeIcon() {
    	this.state.hide = !this.state.hide;
    	const className = this.state.hide ? 'hide_icon' : 'show_icon';
    	this.refs.content.style.display = this.state.hide ? 'none' : '';
    	this.setState({className});
    	event.on('closeMenu', this.changeIcon.bind(this)); 
    }

    scroll(item) {
    	location.hash = `#${item.toLowerCase().replace(/\s+/g, "")}`;
        event.broadcast('closeMenu');
    }

	render() {
		return (

               <div className = 'menu'>
                   <div className = {this.state.className} onClick = {() => this.changeIcon()}></div>
                   <div ref = 'content' style={{display: 'none'}}>
                      <div className='bg'></div>
                      <div className='menu_list'>
                         {this.props.list.map((item, index) => {
                         	return <div key={index} onClick={() => this.scroll(item)}>{item}</div>;
                         })}
                      </div>
                   </div>
               </div>

			)
	}
} 