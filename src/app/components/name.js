import React from 'react';
import './comonent.scss';

const Name = ({title, desc, herf = () => {}}) => {
	return (<div className='name'>
                 <div onClick={() => herf()}>{title}</div>
                 <div>{desc}</div>  
		    </div>)
}
Name.propTypes = {
	title: React.PropTypes.string.isRequired,
	herf: React.PropTypes.func
}

export default Name;
