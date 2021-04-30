import React from 'react';
import Axios from 'axios';
import {Link} from "react-router-dom";
import {Button} from 'reactstrap';

const DetailComponent=({item,setSelectedImg})=>{

    const onDelete=(url,id)=>{
        const name=url.split('com/')[1]
        setSelectedImg(null)
        Axios.delete('https://wjul14yk1h.execute-api.us-east-1.amazonaws.com/dev/',{
           params:{
               name
               ,id
           }
        }
        )
        .then(res=>console.log(res))
        .catch(err=>console.log(err))
    }

    return (
        <div>
            <img className="delimg" src={item.Url} alt="Image"/>
            <h4>~{item.Author}~</h4>
            <h5>{item.Des}</h5>
            <button className="button2" onClick={()=>onDelete(item.Url,item.ID)}><Link to="/">Delete</Link></button>
            <button className="button3"><Link to="/update">Update</Link></button>
            <button className="button1"><Link to="/">back</Link></button>
        </div>
    )
}

export default DetailComponent;