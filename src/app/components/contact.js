import React from 'react';
import event from '../utils/event';

const Contact = ({items = []}) => {
	return (
		   <div className='contact' id='contact'>
             <h2>GET IN TOUCH</h2>
             <a onClick={() => event.broadcast('closeMenu')}>15202428824@163.com</a>
		   </div>
		  );
};

export default Contact;