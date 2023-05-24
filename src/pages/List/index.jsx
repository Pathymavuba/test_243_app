import React, { useEffect, useState } from 'react'
import "./styled.css"
import { MdDelete } from 'react-icons/md';
import { useNavigate } from "react-router-dom";

// import axios from 'axios';


const List = () => {
   const navigate = useNavigate()
   const [candidats,setCandidats]=useState([])


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
    })
   
   },[])
    console.log(candidats)
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
        <tr onClick={()=>navigate(`/candidat/${candidat.id}`)} key={index}>
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