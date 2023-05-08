import React from 'react'
import data from '../../data.json'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center',}}>
      <div className='container'>
            {data.map((el, index) => (
                <Link key={index} to={`/page/${el.id}`} className='link'>
  
                  <h2>{el.title}</h2>
                  <p>Album #{el.id}</p>
                  
                </Link>
            ))}
          </div>
  
          
    </div>
  )
}

export default Nav