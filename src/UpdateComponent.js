import React,{ useState,Component } from 'react';
import Axios from 'axios';
import {Link} from "react-router-dom";
import { Button, Form, FormGroup, Label, Input,Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle,Container,Row,Col } from 'reactstrap';

class UpdateComponent extends Component{


    constructor(props) {
        super(props);
        this.state = {
            author:props.item.Author,
            des:props.item.Des,
            id:props.item.ID,
            url:props.item.Url
        }
    }

    handleSubmit=(event)=> {
        const id='bdf12721-5b61-4e2d-835a-e2ca52146aca'
        const author='abc'
        const des='abc'
        Axios.put('https://10sxc24sfi.execute-api.us-east-1.amazonaws.com/dev/',{
           "id":id,
           "author":author,
           "des":des
        }
        )
        .then(res=>console.log(res))
        .catch(err=>console.log(err))
        event.preventDefault();
        this.setState({
            author:'',
            des:'',
            id:'',
            url:''
        })
      }

    onChangeAuthor=(e)=>{
        this.setState({
            author:e.target.value
        })
        
    }
    onChangeDes=(e)=>{
        this.setState({
            des:e.target.des
        })
        
    }
    render(){
            return (
                <Container>
                    <img className="desimg" src={this.props.item.Url} alt="Image" />   
                    <Form onSubmit={this.handleSubmit}>
                        
                        <FormGroup>
                            <Label for="auth">Title:</Label>
                            <Input type="text" id="auth" name="author" onChange={this.onChangeAuthor} value={this.state.author}/>   
                        </FormGroup>
                        <FormGroup>
                            <Label>Description:</Label>
                            <Input type="textarea" onChange={this.onChangeDes} name="des" value={this.state.des}/>
                            
                        </FormGroup>
                        <Link to="/"><Button color="primary">Submit</Button></Link>
                    </Form>
                    
                    {/* <button onClick={()=>onUpdate(item.Url,item.ID)}>Update</button> */}
                    
                    <Button className="bupadd"><Link to="/">back</Link></Button>
                    
                    
                </Container>
            )
    }
}

export default UpdateComponent;