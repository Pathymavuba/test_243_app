import React from 'react'
import "./styled.css"
import { MdDelete } from 'react-icons/md';


const List = () => {
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
        <th scope="col" class="text-center w-25">Post-Nom</th>
        <th scope="col" class="text-center">Actions</th>
        <th scope="col"></th>
      </tr>
    </thead>
    <tbody>
    <tr>
        <th scope="col"></th>
        <th scope="col" class="text-center">01</th>
        <th scope="col" class="text-center w-25">Mira</th>
        <th scope="col" class="text-center">Safi</th>
        <th scope="col" class="text-center w-25">Moricho</th>
        <th scope="col" class="text-center"> <MdDelete/></th>
        <th scope="col"></th>

    </tr>
  
      
   
    </tbody>
  </table>
    </div>
  )
}

export default List