import './style.css'
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faThumbsUp, faFaceAngry, faSadTear, faLaugh } from "@fortawesome/free-solid-svg-icons";


const Emoji = ({emoji}) => {
    const [isHoverd, setIsHoverd] = useState(false)
    return (
        <FontAwesomeIcon icon={emoji} />   
    )
}

export default Emoji;