import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <h1>Bienvenu sur Test_243</h1>
        <Link to="/">
            <button>Voir la liste des candidats</button>
        </Link>
        
    </div>
  )
}

export default Home