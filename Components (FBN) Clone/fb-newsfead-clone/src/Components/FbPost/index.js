import "./index.css";
import FbImageLibrary from "react-fb-image-grid";

function fbPost(props) {
  return (
    <div className="container">
      <div className="fbContainer">
        <img className="prfImage" src={props.product.thumbnail} />
        <h3 className="Prf-name">{props.product.title}</h3>
      </div>
      <br />
      <div>
        <p>{props.product.description}</p>
        <FbImageLibrary
          className="fb-images-lib"
          images={props.product.images}
        />
      </div>
    </div>
  );
}

export default fbPost;
