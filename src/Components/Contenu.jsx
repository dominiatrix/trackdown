import React from 'react'
import boy from '../img/boy.jpg'
import girl from '../img/girl.jpg'
import index from '../img/index.jpeg'

function Contenu() {
  return (
      <div className='Contenu'>
     <div className='text-center Poppins vert title mt-5' style={{backgroundColor : '#333'}}> RETROUVEZ TOUT CE QUI A DISPARU </div>
   <div id="carouselExampleControls" className="carousel slide " data-bs-ride="carousel" style={{width:600, marginTop : 50, marginLeft : 400,}}>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={boy} className="d-block w-100" alt="..." />
      <div class="carousel-caption d-none d-md-block shad">
        <h5>Alao boukar</h5>
        <p>Perdu lors de festivites</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={girl} className="d-block w-100" alt="..." />
      <div class="carousel-caption d-none d-md-block shad">
        <h5>Jemima que</h5>
        <p>Perdue apres l'ecole</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={index} className="d-block w-100" alt="..." />
      <div class="carousel-caption d-none d-md-block shad">
        <h5>Alcatel one touch</h5>
        <p>On m'a vole ca</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>
<div className='banner'  style={{marginTop : -200}}>
<div className='Poppins bol '  style={{paddingTop : 300, textAlign: 'left'}}> Personnes disparues recemments</div>
 <div class="container mt-5">
  <div class="row align-items-start">
    <div class="col">
    <img src={boy} alt="..." className="round"></img>
    </div>
    <div class="col">
    <img src={girl} alt="..." className="round"></img>
    </div>
    <div class="col">
    <img src={boy} alt="..." className="round"></img>
    </div>
  </div>
  </div>
</div>
<div className='banner'  style={{marginTop : 0}}>
<div className='Poppins bol '  style={{paddingTop : 100, textAlign: 'left'}}> Possessions egarees recemments</div>
 <div class="container mt-5">
  <div class="row align-items-start">
    <div class="col">
    <img src={index} alt="..." className="round"></img>
    </div>
    <div class="col">
    <img src={girl} alt="..." className="round"></img>
    </div>
    <div class="col">
    <img src={girl} alt="..." className="round"></img>
    </div>
  </div>
  </div>
</div>
</div>

  )
}

export default Contenu