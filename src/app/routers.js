
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import React from 'react';	

import Home from './container/home';

export default (
       <Router>
          <Route path='/' component={Home}/>
       </Router>
	)