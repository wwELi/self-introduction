import React from 'react';
import {render} from 'react-dom';
import './app/assets/icon/iconfont.css';
import Home from './app/container/home';
import Router from './app/routers';

console.log(Router, 'router...')

render(Router, document.getElementById('app'));