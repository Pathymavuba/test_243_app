import React from 'react'
import './styled.css'
import Video from '../../components/Video'

const Candidat = () => {
  return (
    <div className='parent-candidat'>
      <h5>Voici les vidéo de Mira Moricho</h5>
      <div className='list-video'>
          <Video />
      </div>
    </div>
  )
}

export default Candidat