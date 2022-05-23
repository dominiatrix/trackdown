import React from 'react'
import index from '../img/index.jpeg'
function Annonce() {
  return (
      <div>
    <div className='text-center Poppins vert title mt-5' style={{backgroundColor : '#333'}}>TOUS LES AVIS DE RECHERCHE</div>
    <div class="container ">
  <div class="row row-cols-4 mt-5">
    <div class="col">
     <div className="card " style={{width: '16rem'}}>
  <img src={index} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
   <center> <a href="#" className="btn bck text-white"> Voir plus</a> </center>
  </div>
</div>

    </div>
    <div class="col">
    <div className="card" style={{width: '16rem'}}>
  <img src={index} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
   <center> <a href="#" className="btn bck text-white">Voir plus</a></center>
  </div>
</div>
</div>
    <div class="col">
    <div className="card" style={{width: '16rem'}}>
  <img src={index} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
   <center> <a href="#" className="btn bck text-white">Voir plus</a></center>
  </div>
</div>

    </div>
    <div class="col">
    <div className="card" style={{width: '16rem'}}>
  <img src={index} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <center><a href="#" className="btn bck text-white">Voir plus</a></center>
  </div>
</div>

    </div>
  </div>
</div>
    
    </div>
  )
}

export default Annonce