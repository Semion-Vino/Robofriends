import React from 'react';

const Card = (props) => {
  return (<div className='bg-light-yellow dib br3 pa3 ma2 grow bw2 shadow-5'>
    <img src={`https://robohash.org/${props.id}?200x200`} alt="" />
    <div className="" >
      <h2> {props.name}</h2>
      <p> {props.email} </p>
      <p>lalalala</p>
    </div>
  </div>
  )
}
export default Card;