import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './../../App.css'
import { GetSingleProduct } from "../../Firebase";

// 1. get product id
// 2. get product data
// 3 . display product

function SelectedItem() {
    const param = useParams();
    const [product, setProduct] = useState();
    const { id } = param;

    useEffect(() => {
        getData();
    }, []);

    async function getData() {
        const res = await GetSingleProduct(id);
        setProduct(res);
    }

    console.log("product-->", product);

    return (
        <div className="details-container">
            {/* /////////////// image slider ///////////////// */}
            <div id="carouselExampleIndicators" className="crausel-sig-item carousel slide">
                <div className="carousel-indicators">
                    <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to="0"
                        className="active"
                        aria-current="true"
                        aria-label="Slide 1"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to="1"
                        aria-label="Slide 2"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to="2"
                        aria-label="Slide 3"
                    ></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={product?.url} className="d-block w-100" alt="..." />
                    </div>
                </div>
                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="prev"
                >
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="next"
                >
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            {/* /////////////// image slider ///////////////// */}
            <div className="user-detail-card card">
                <div className="card-body">
                    <div className="topside">
                        <div className="leftside">
                            <div className="image"></div>
                        </div>
                        <div className="rigthside">
                            <h6>Uzair Khan</h6>
                            <p>Member since Dec 2020</p>
                            <span>See profile</span>
                        </div>
                    </div>
                    <a href="#" className="btn btn-primary">Show Phone Number</a>
                    <a href="#" className="btn btn-outline-primary">Chat</a>
                </div>
            </div>
            <div className="user-detail-card card">
                <div className="card-body">
                        <div className="rigthside">
                            <h6>Uzair Khan</h6>
                            <p>Member since Dec 2020</p>
                            <span>See profile</span>
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default SelectedItem;
