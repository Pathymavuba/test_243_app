import React from 'react'
import { Link } from 'react-router-dom'
import "./styled.css"

const Home = () => {
  return (
    <div className='parent'>
        <h1>Bienvenu sur Test_243</h1>
        <Link to="/list">
            <button className='btn-voir'>Voir la liste des candidats</button>
        </Link>
        
    </div>
  )
}

export default Home