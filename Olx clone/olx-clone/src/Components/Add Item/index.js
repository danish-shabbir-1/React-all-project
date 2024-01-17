import React, { useState } from 'react'
import './../cards/style.css'
import { AddSalePost } from '../Firebase'



const AddItem = () => {

const [title, setTitle] = useState()
const [description, setDescription] = useState()
const [price, setPrice] = useState()
const [image, setImage] = useState()


const Publish = async (addInfo) => {
    try {
        const addInfoResponse = await AddSalePost({title , description , price , image}) 
        console.log(addInfoResponse);
    } catch (e) {
        alert(e.massage)
    }

}

  return (
<div className="signup-container">
   
      <input onChange={(e) => setTitle(e.target.value)}  type="text" placeholder="Title" />
      <input onChange={(e) => setDescription(e.target.value)}  type="text" placeholder="Description" />
      <input onChange={(e) => setPrice(e.target.value)}  type="number" placeholder="Price" />
      <input onChange={(e) => setImage(e.target.value)}  type="file" placeholder="Images" />
      <button onClick={Publish}>PubList</button>

    </div>
  )
}

export default AddItem
