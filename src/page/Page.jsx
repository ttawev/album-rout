import React from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import photos from '../photos.json'

const Page = () => {

  const params = useParams()
  
    
  return (
    <div >
      <ul style={{display: 'flex', alignItems: 'flex-start', justifyContent: 'center', gap: '10px', padding: '20px 15px', flexWrap: 'wrap'}}>
      {photos.filter(el => el.albumId === params.num * 1).map(list => (
        
          <li key={list.id} style={{width: '200px'}}>
            <img style={{width: '150px', height: '150px'}} src={list.url} alt="img" />
            <p>{list.title}</p>
          </li>
        
      ))
        
      }
      </ul>

      <Link className='link' to={'/'}>Home</Link>
    </div>

  )
}



export default Page