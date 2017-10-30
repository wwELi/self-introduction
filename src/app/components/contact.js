import React from 'react';
import event from '../utils/event';
import downFile from '../utils/downloadFile';

function down() {
    downFile('images/bg.jpg');
}

const Contact = ({items = []}) => {
	return (
		   <div className='contact' id='contact'>
             <h2>GET IN TOUCH</h2>
             <a onClick={() => down()}>15202428824@163.com</a>
		   </div>
		  );
};

export default Contact;