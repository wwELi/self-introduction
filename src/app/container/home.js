import React from 'react';

import './home.scss';
import Name from '../components/name';
import Menu from '../components/menu';
import About from '../components/aboutMe';
import Works from '../components/works';
import Contact from '../components/contact';

export class Home extends React.Component{
	render() {
		const bg = {height: '100%'};
        const list = ['HOME', 'ABOUT ME', 'MY WORKS', 'CONTACT'];
        const items = ['item1', 'item2', 'item3', 'item4', 'item5', 'item6', 'item7', 'tem8'];
		return (<div style={bg}>
			       <Menu list={list}></Menu>
			       <div className='home' id='home'>
                     <Name title='Eli WANG' desc='this is desc'></Name>
			       </div>
			       <About>
                      <div>
                         <div>1.1</div>
                         <div>1.2</div>
                      </div>
                      <div>
                         <div>2.1</div>
                         <div>2.1</div>
                      </div>
                      <div>
                         <div>3.1</div>
                         <div>3.2</div>
                         <div>3.3</div>
                      </div>
			       </About>
			       <Works items={items}></Works>
			       <Contact></Contact>
			    </div>)
	}

}