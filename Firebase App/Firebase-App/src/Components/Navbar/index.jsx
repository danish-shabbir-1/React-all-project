import React from 'react'
import './../../App.css'

const Navbar = () => {

function popUp() {
    const myModal = document.getElementById('myModal')
    const myInput = document.getElementById('myInput')
    
    myModal.addEventListener('shown.bs.modal', () => {
      myInput.focus()
    })
}

  return (
    <div>
<nav class="navbar navbar-dark navbar-expand-lg bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">DS STORE</a>
    <button class=" navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <form class="d-flex" role="search">
        <input class="Search form-control me-2" type="Search" placeholder="Search" aria-label="Search"/>
        <button class="search-Btn" type="submit">Search</button>
        <button type="button" class="sell-Btn search-Btn" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={popUp}>
        Sell
</button> 
        <i class="fa-solid fa-cart-shopping"></i>
        <i class="fa-solid fa-circle-user"></i>
      </form>
    </div>
  </div>
</nav>

{/* ///////////// modale here //////////// */}

<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
{/* ///////////// modale here //////////// */}
    </div>
  )
}

export default Navbar