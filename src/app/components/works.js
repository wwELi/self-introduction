import React from 'react';

const Works = ({items = []}) => {
	return (
		   <div className='works' id='myworks'>
             <h2>MY WORKS</h2>
              <article>
                  <p>A selection of recent projects I've been working on: landing pages, websites, email marketing...</p>
              </article>
              <article className='items'>
                 {items.map(i => ( <div className='chunk' data-desc={i}>
                                       <div>VIEW</div>
                                   </div>))}
              </article>
		   </div>
		  );
};

export default Works;