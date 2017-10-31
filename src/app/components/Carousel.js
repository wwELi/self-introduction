import React from 'react';
import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';
export default class Carousel extends React.Component{

    componentWillMount() {
        this.imgs = [img1, img2, img3]
    }

    componentDidMount(){
        console.log('componentDidMount---');
        this.next = 0;
        this.keys = Object.keys(this.refs);
        this.refs[this.keys[0]].style.zIndex = 99;
        this.interval = this.interval || setInterval(() => {
            this.next = this.next > this.keys.length - 1 ? 0 : this.next;
            this.keys.forEach((key, index) => {
                if(index === this.next){
                    this.refs[key].style.zIndex = 99;
                } else {
                    this.refs[key].style.zIndex = 0;
                }
            });
            this.next ++;
        },5000);
    }

    choose(index) {
        console.log('this index---', index);
        this.next = index + 1;
        this.keys.forEach((key, i) => {
           if(i === index) {
               this.refs[key].style.zIndex = 99;
           } else {
               this.refs[key].style.zIndex = 0;
           }
        });
    }
    render() {
        return (<div className="carousel">
               {this.imgs.map((img, index) => <img src={img} ref={`img${index}`}/>)}
           <div className="chooseBtn">
               {this.imgs.map((img, index) => (<span onClick={() => {this.choose(index)}}></span>))}
           </div>
        </div>)

    }
}
