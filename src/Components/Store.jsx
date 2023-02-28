import React from 'react'

function Store({image, name, location, website}) {
  return (
    <div className='Store' style={{padding: "15px", margin: "20px", border:"solid 1px", borderRadius: "10px"}}>
      <img src={image} style={{width: "300px", height: "200px"}}/>
      <h3>{name}</h3>
      <h5>{location}</h5>
      <a href={website}>
        <button type="button">Go Website</button>
      </a>
    </div>
  )
}

export default Store