import React from 'react';
import {render} from 'react-dom';
import './app/assets/icon/iconfont.css';
import Home from './app/container/home';
import Router from './app/routers';

render(Router, document.getElementById('app'));