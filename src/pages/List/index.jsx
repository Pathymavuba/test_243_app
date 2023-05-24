import React, { useEffect} from 'react'
import "./styled.css"
import { MdDelete } from 'react-icons/md';
import { useNavigate } from "react-router-dom";
import candidatStore from '../../store/candidates';
import questionStore from '../../store/questions';
import applicationStore from '../../store/applications';
import currentIdStore from '../../store/currentId';


// import axios from 'axios';


const List = () => {
   const navigate = useNavigate()
  //  const [candidats,setCandidats]=useState([])
  // const [currentCandidatId,setCurrentCandidatId] = useState("")
  const candidats = candidatStore(state=>state.candidats)
  const setCandidats = candidatStore(state=>state.setCandidats)
  // const questions = questionStore(state=>state.questions)
  const setQuestions = questionStore(state=>state.setQuestions)
  // const applications = applicationStore(state=>state.applications)
  const setApplications = applicationStore(state=>state.setApplications)
  // const currentCandidatId = currentIdStore(state=>state.currentCandidatId)
  const setCurrentCandidatId = currentIdStore(state=>state.setCurrentCandidatId)
  const setCurrentappliId = currentIdStore(state=>state.setCurrentappliId)
  


   


  //  const getData = () =>{
  //    fetch("api.json",{
  //     headers : { 
  //       'Content-Type': 'application/json',
  //       'Accept': 'application/json'
  //      }
  //   })
  //   .then(response=>response.json())
  //   .then(data=>{
  //     console.log(data.candidates,"trigo")
  //     setCandidats(data.candidates)
  //   })
  //  }


   useEffect(()=>{
     fetch("api.json",{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    })
    .then(response=>response.json())
    .then(data=>{
      setCandidats(data.candidates)
      setQuestions(data.questions)
      setApplications(data.applications)

    })
   
   },[setCandidats,setQuestions,setApplications])
    // console.log(applications)
  return (
    <div className='parent-list'>
      <h1>Liste de tous les candidats ayant soumis</h1>
    <table className="table table-striped  table-fixed">
    <thead >
      <tr >
        <th scope="col"></th>
        <th scope="col" class="text-center">ID</th>
        <th scope="col" class="text-center w-25">Nom</th>
        <th scope="col" class="text-center">Prenom</th>
        <th scope="col" class="text-center w-25">Prenom/Nom</th>
        <th scope="col" class="text-center">Actions</th>
        <th scope="col"></th>
      </tr>
    </thead>
    <tbody>
      {
        candidats.map((candidat,index)=>{
          return(
        <tr onClick={()=>{ setCurrentCandidatId(candidat.id);setCurrentappliId(candidat.applicationId);navigate(`/candidat/${candidat.id}`) }} key={index} style={{cursor:"pointer"}}>
        <td ></td>
        <td class="text-center">{candidat.id}</td>
        <td class="text-center w-25">{candidat.name.split(" ")[1]}</td>
        <td class="text-center">{candidat.name.split(" ")[0]}</td>
        <td class="text-center w-25">{candidat.name}</td>
        <td class="text-center"> <MdDelete className='delete'/></td>
        <td></td>

    </tr>
          )
        })
      }
    </tbody>
  </table>
    
    
    </div>
  )
}

export default List