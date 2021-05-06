import React from 'react';
import {Link} from "react-router-dom";
const Modal=({selectedImg,setSelectedImg})=>{

    const handleClick=(e)=>{
        if(e.target.classList.contains('backdrop')){
            setSelectedImg(null);
        }
        
    }

    return(
        <div className="backdrop" onClick={handleClick}>
            <Link to='/item'><img src={selectedImg.Url} alt="enlarged pic"/></Link>
            
        </div>
    )
}

export default Modal;