import "./index.css";
import FbImageLibrary from "react-fb-image-grid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { faComment } from "@fortawesome/free-regular-svg-icons";
import { faShare } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Emoji from "../Emojis";

function fbPost(props) {
  let [like, setLike] = useState(false);

  const [isHoverd, setIsHoverd] = useState(false);

  function mouseHover() {
    setIsHoverd(true);
  }

  function likeFunction() {
    setLike(!like);
  }

  return (
    <div className="container-one">
      <div className="fbContainer">
        <img className="prfImage" src={props.product.thumbnail} />
        <h5 className="Prf-name">{props.product.title}</h5>
      </div>
      <h6>posted ago</h6>
      <br />
      <div className="Description">
        <p>{props.product.description}</p>
        <li> Brand - {props.product.brand}</li>
        <li> Category - {props.product.category}</li>
        <li>Price - ${props.product.price}</li>
      </div>
      <div>
        <FbImageLibrary
          className="fb-images-lib"
          images={props.product.images}
        />
      </div>
      <div className="likes">
        <FontAwesomeIcon
          onMouseOver={mouseHover}
          onClick={likeFunction}
          className={like ? "liked-icon" : "like-icon"}
          icon={faThumbsUp}
        />
        {isHoverd ? <Emoji /> : ""}
        <FontAwesomeIcon
          className="comment-icon"
          icon={faComment}
          style={{ color: "#ffffff" }}
        />
        <FontAwesomeIcon
          className="comment-icon"
          icon={faShare}
          style={{ color: "#ffffff" }}
        />
      </div>
    </div>
  );
}

export default fbPost;
