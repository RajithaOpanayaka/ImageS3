import React,{ useState,useEffect } from 'react';
import Axios from 'axios';
import {motion} from 'framer-motion';

const ImageGrid=({setSelectedImg,getReq})=>{
    const [data,setData]=useState([]);

    useEffect(()=>{
        Axios.get("https://wjul14yk1h.execute-api.us-east-1.amazonaws.com/dev/")
        .then(res=>setData(res.data.Items))
    },[getReq])

    return(
        <div className="img-grid">
            {data && data.map(item=>(
                <div className="img-wrap" key={item.ID}
                onClick={()=>setSelectedImg(item)}>
                    <img src={item.Url}alt="image"/>
                </div>
            ))}
        </div>
    )
}

export default ImageGrid;