import React from 'react';
import {Container} from 'flux/utils';
import HomeStore from '../stores/homeStore';

import './home.scss';
import Name from '../components/name';
import Menu from '../components/menu';
import About from '../components/aboutMe';
import Works from '../components/works';
import Carousel from '../components/Carousel';
import Contact from '../components/contact';
import homeAction from '../actions/homeAction';
import log from '../utils/log';

@log
class Home extends React.Component {

    static getStores() {
        return [HomeStore];
    }

    static calculateState() {
        return {
            workList: HomeStore.getState().list,
            comments: HomeStore.getState().comments
        }
    }

    componentDidMount() {
        homeAction.loadWorks();
        homeAction.getComment();
    }

    addComment() {
        homeAction.addComment({comment: this.refs.comment.value});
    }
    removeComment() {

    }

    render() {
        const bg = {height: '100%'};
        const list = ['HOME', 'ABOUT ME', 'MY WORKS', 'CONTACT'];
        const items = this.state.workList;
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
            <Carousel/>
            <Contact></Contact>
            <div style={{marginBottom: '200px'}}>
                添加评论: <input width='200' ref='comment'/>
                <button width='50px' onClick={() => {
                    this.addComment()
                }}>add
                </button>
                {console.log(this.state)}
                {this.state.comments && this.state.comments.map((val, inx) => {
                    return <div key={inx}>{val.comment}
                        <button onClick={() => {this.removeComment()}}></button>
                    </div>
                })}
            </div>
        </div>)
    }

    componentWillReceiveProps() {
    }

    shouldComponentUpdate() {
        return true;
    }

    componentWillUpdate() {
    }

    componentDidUpdate() {
    }

}

export default Container.create(Home);
