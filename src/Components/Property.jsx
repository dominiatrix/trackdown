import React from 'react'
import Declare from './Declare'

function Property() {
  return (
      <div>
    <div className='text-center Poppins vert title mt-5' style={{backgroundColor : '#333'}}>TOUTES MES PROPRIETES</div>
    <center class='mt-5'>
    <button type="button" class="btn btn-outline-success me-5" data-bs-toggle="modal" data-bs-target="#exampleModal">Declarer une possession</button>
    <button type="button" class="btn btn-outline-danger" data-bs-toggle="modal" data-bs-target="#exampleModal2">Lancer un avis de recherche</button>
    </center>
    </div>
  )
}

export default Property