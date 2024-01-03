import "./index.css";
import FbImageLibrary from "react-fb-image-grid";

function fbPost(props) {
  return (
    <div className="container-one">
      <div className="fbContainer">
        <img className="prfImage" src={props.product.thumbnail} />
        <h3 className="Prf-name">{props.product.title}</h3>
      </div>
      <br />
      <div className="Description">
        {" "}
        <p>{props.product.description}</p>
      </div>
      <div>
        <FbImageLibrary
          className="fb-images-lib"
          images={props.product.images}
        />{" "}
      </div>
      <div className="likes">
      {/* <i class="fa-regular fa-thumbs-up" style="color: #ffffff;"></i> */}
      </div>
    </div>
  );
}

export default fbPost;
