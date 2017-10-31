import React from 'react';
import event from '../utils/event';
import downFile from '../utils/downloadFile';
import downExcel from '../utils/downExcel';

function down() {
    downExcel('b.docx');
}

const Contact = ({items = []}) => {
	return (
		   <div className='contact' id='contact'>
             <h2>GET IN TOUCH</h2>
             <a onClick={() => down()}>15202428824@163.com</a>
			   <div className="concent_icon">
				   <span className="icon iconfont icon-youxiang"></span>
				   <span className="icon iconfont icon-wechat"></span>
				   <span className="icon iconfont icon-github"></span>
			   </div>
		   </div>
		  );
};

export default Contact;