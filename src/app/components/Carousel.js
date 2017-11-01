import React from 'react';
import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';

const carouseHander = (refs) => {
  let interval = null;
  const keys = Array.from(refs.imgs.children);
  const dots = Array.from(refs.dots.children);
  return (next = 0) => {
    const cycle = () => {
      keys.forEach((key, index) => {
          if(next === index) {
            keys[index].style.zIndex = 99;
            dots[index].style.background = '#ff5000';
          } else {
            keys[index].style.zIndex = 0;
            dots[index].style.background = '#FFF';
          }
          
       });
    next++;
    }
    interval && clearInterval(interval);
    cycle();
    interval = setInterval(() => {
       next = next > keys.length - 1 ? 0 : next;
       cycle();
    }, 5000);

    return {
      clear() {
        clearInterval(interval);
      }
    }

  }

}

export default class Carousel extends React.Component{

    componentWillMount() {
        this.imgs = [img1, img2, img3];
    }

    componentDidMount(){
      this.carouse = carouseHander(this.refs);
      this.ins = this.carouse();
    }

    componentWillUnmount() {
      this.ins.clear();
    }
  
     choose(index, e) {
      this.ins = this.carouse(index);
    }

    render() {
        return (<div className="carousel">
                    <div ref='imgs'>
                       {this.imgs.map((img, index) => <img key={`${index}_img`} src={img} ref={`img${index}`}></img>)}
                    </div>
                    <div className="chooseBtn" ref='dots'>
                        {this.imgs.map((img, index) => (<span key={`${index}_icon`} onClick={(e) => {this.choose(index, e)}}></span>))}
                    </div>
                    {
                    /*<div className='nextPrev'>
                        <span></span>
                        <span></span>
                    </div>*/}
                </div>)

    }
}

