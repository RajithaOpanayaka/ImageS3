import React,{ useState,Component } from 'react';
import Axios from 'axios';
import {Link} from "react-router-dom";
import { Button, Form, FormGroup, Label, Input,Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle,Container,Row,Col,Alert } from 'reactstrap';

class UpdateComponent extends Component{


    constructor(props) {
        super(props);
        this.state = {
            author:props.item.Author,
            des:props.item.Des,
            id:props.item.ID,
            url:props.item.Url,
            submit:false
        }  
    }

    handleSubmit=(event)=> {
          const id=this.state.id
          const author=this.state.author
          const des=this.state.des
          Axios.put('https://10sxc24sfi.execute-api.us-east-1.amazonaws.com/dev/',{
                "id":id,
                "author":author,
                "des":des
              }
              )
            .then(res=>console.log(res))
            .catch(err=>console.log(err))
            //alert("Data Updated");
            this.setState({
                submit:true
            })
            event.preventDefault();
        
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
                    {this.state.submit && <Alert color="primary">Submitted</Alert>}
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
                        <Button color="primary">Submit</Button>
                    </Form>
                    
                    <Button className="bupadd" onClick={()=>this.setState({submit:false})}><Link to="/">back</Link></Button>
                    
                    
                </Container>
            )
    }
}

export default UpdateComponent;