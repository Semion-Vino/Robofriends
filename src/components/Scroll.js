import React from 'react';

const Scroll = (props) => {
  return (<
    div style={{ overflow: 'scroll', border: '1px solid rgba(213, 206, 166, 1)', height: '800px' }}>
    {props.children} </div>
  )
}
export default Scroll