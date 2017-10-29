import React from 'react';

const AboutMe = (props) => {
	return (
		   <div className='aboutMe' id='aboutme'>
               <h2>ABOUT ME</h2>
               <article>
                  <p>姓名 王尉，出生日期93.1.21</p>
                  <p>陕西安康</p>
                  <p>西安文理毕业于2016年</p>
               </article>
               <footer>
                   {React.Children.map(props.children, child => child)}
               </footer>
		   </div>
		  );
};

export default AboutMe;