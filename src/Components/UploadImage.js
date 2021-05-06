import React, { useState } from 'react';
import ImageUploader from 'react-images-upload';
import Axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

const UploadComponent=props=>(
    <form>
        <label>
            Title:
            <input id='urlInput' type='text' onChange={props.onAuthorChange} value={props.author}></input>
        </label>
        <label>
            Description:
            <input id='urlInput' type='text' onChange={props.onDesChange} value={props.des}></input>
        </label>
        <ImageUploader
            key='image-uploader'
            withIcon={true}
            singleImage={true}
            withPreview={true}
            label="Maximum size file: 5MB"
            buttonText='Choose an image'
            onChange={props.onImage}
            imgExtension={['.jpg','.png','.jpeg']}
            maxFileSize={5242880}></ImageUploader>

    </form>
)


const UploadImage=({setAddImg,setGetReq,getReq})=>{

    const [progress,setProgress]=useState('getUpload');
    const [url,setImageURL]=useState(undefined);
    const [errorMessage,setErrorMessage]=useState('');
    const [author,setAuthor]=useState('');
    const [des,setDes]=useState('');

    const onAuthorChange=e=>{
        setAuthor(e.target.value)
    }
    const onDesChange=e=>{
        setDes(e.target.value)
    }
    const onImage=async (failedImages,sucessImages)=>{
        // if(!url){
        //     console.log('missing url');
        //     setErrorMessage('Missing a url to upload to')
        //     setProgress('uploadError');
        //     return 
        // }
        setProgress('uploading')

        try{
            console.log('sucessImages',sucessImages)
            const parts=sucessImages[0].split(';')
            const mime=parts[0].split(':')[1]
            const name=parts[1].split('=')[1]
            const data=parts[2];
            const id=uuidv4(); 
            const res = await Axios.post('https://wjul14yk1h.execute-api.us-east-1.amazonaws.com/dev',{mime,name,image:data,author,des,id})
            console.log(res)
            //setImageURL(res.data.imageURL)
            setProgress('uploaded')

        }catch(err){
            console.log('error in upload',err);
            setErrorMessage(err.message)
            setProgress('uploadError');
            
        }

    }

    const content=()=>{
        switch(progress){
            case 'getUpload':
                return <UploadComponent onImage={onImage} onAuthorChange={onAuthorChange} 
                onDesChange={onDesChange} author={author} des={des} />
            case 'uploading':
                return <h2>Uploading ...</h2>
            case 'uploaded':
                setAddImg(false)
                setGetReq(getReq+1)
                return <div></div>
            case 'uploadError':
                return (
                    <>
                        <div>Error message= {errorMessage}</div>
                        <UploadComponent onImage={onImage} onAuthorChange={onAuthorChange} 
                            onDesChange={onDesChange} author={author} des={des} />
                    </>
                )
        }
    }

    return(
        <div>
            {content()}
        </div>
    )
}

export default UploadImage;