import React from 'react'
import './styled.css'
import Video from '../../components/Video'
import questionStore from '../../store/questions';
import applicationStore from '../../store/applications';
import currentIdStore from '../../store/currentId';
import candidatStore from '../../store/candidates';

const Candidat = () => {
   
  const questions = questionStore(state=>state.questions)
  const candidats = candidatStore(state=>state.candidats)
  const applications = applicationStore(state=>state.applications)
  const currentCandidatId = currentIdStore(state=>state.currentCandidatId)
  const currentappliId = currentIdStore(state=>state.currentappliId)



  return (
    <div className='parent-candidat'>
      <h5>Voici les vidéo de {candidats.find(item=>item.id===currentCandidatId).name}</h5>
      <div className='list-video'>
        {applications.filter(data=>
        data.id === currentappliId
        ).map((data)=>
         data.videos.map((item,key)=>{
          return(<Video src={item.src} question={questions.find(question=>question.id===item.questionId).question} key={key} />)
         })
         
        )}
          
      </div>
    </div>
  )
}

export default Candidat