// import { React, useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import "./../cards/style.css";
// import Image from "./../../5-star-rating-review-star-transparent-free-png.webp";
// import ImageSlider from '../ImageSlider'

// function SelectItem() {
//   const [product, setProduct] = useState();
//   const { id } = useParams();

//   useEffect(() => {
//     getAllProducts();
//   }, []);
//   console.log(id);
//   const getAllProducts = () => {
//     fetch(`https://dummyjson.com/products/${id}`)
//       .then((res) => res.json())
//       .then((res) => setProduct(res));
//   };

//   console.log("single item", product);
//   return (
//     <div className="card-container">
//      <div id="carouselExample" class="carousel slide">
//   <div class="carousel-inner">
//     <ImageSlider images={product?.images}/>
//   </div>
//   <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
//     <span class="carousel-control-prev-icon" aria-hidden="true"></span>
//     <span class="visually-hidden">Previous</span>
//   </button>
//   <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
//     <span class="carousel-control-next-icon" aria-hidden="true"></span>
//     <span class="visually-hidden">Next</span>
//   </button>
// </div>
//       {/* /////// side card ////////// */}
//       <div class="card selected-card2">
//         <div class="profile-items">
//           <img className="profile" src={product?.thumbnail} />
//           <h6 className="profile-name">{product?.brand}</h6>
//         </div>
//         <div className="card-detail">
//           <p className="time">posted ago</p>
//           <p className="Price">Price - ${product?.price}</p>
//           <p>Brand - {product?.brand}</p>
//           <p>Category - {product?.category}</p>
//           <p>Title - {product?.title}</p>
//           <p>{product?.description}</p>
//           <div className="rewiew-section">
//             <img className="rewiew" src={Image} />
//             <p>{product?.rating}</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default SelectItem;
