//import logo from './logo.svg';
import './App.css';
import React,{Component} from 'react';

class App extends Component {
  constructor()
  {
    super();
    this.state={
      firstName:"",
      lastName:"",
      emailAddress:"",
      phoneNumber:"",
      password:""
    }
  }
  submit()
  {
    console.log(this.state)
     fetch('http://localhost:8000/accounts/list',{
      method:'post',
      mode:'no-cors',
      body:JSON.stringify(
        this.state
      ),
      headers:{
        'Accept':'application/json',
        'Content-type':'application/json',
      }
    }).then(function(response){
      response.json().then(function(resp){
        console.log(resp)
       //.then((response)=>response.json())
       //.then((json)=>console.log(json))
      })
    })
  }
  render(){
  return (
    <div className="App">
      <div className="col-sm-6 offset-sm-3">
      <h1>REGISTRATION FORM</h1>
      <input type="text" placeholder="Enter First Name" onChange={(item)=>{this.setState({firstName:item.target.value})}}/><br/><br/>
      <input type="text" placeholder="Enter Last Name" onChange={(item)=>{this.setState({lastName:item.target.value})}}/><br/><br/>
      <input type="email" placeholder="Enter Your Email" onChange={(item)=>{this.setState({emailAddress:item.target.value})}}/><br/><br/>
      <input type="number" placeholder="Enter Phone Number" onChange={(item)=>{this.setState({phoneNumber:item.target.value})}}/><br/><br/>
      <input type="password" placeholder="Enter Your Password" onChange={(item)=>{this.setState({password:item.target.value})}}/><br/>
      <button onClick={()=>{this.submit()}} className="btn btn-primary">Submit</button>
      </div>
    </div>
  );
}
}

export default App;
