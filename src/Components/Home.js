
import React from "react";
import axios from "axios";
import aboutImg from "../Images/about2.jpg"
import Recipe from "./Recipe";



class Home extends React.Component {
  constructor(props){
    super(props)
    this.state=({value:"",data:[]})
  }
   handleOnClick = async() => {
    const APP_ID = "";
      const API_KEY = " ";
      
    const fetchData = await axios.get( `https://api.edamam.com/search?app_id=${APP_ID}&app_key=${API_KEY}&q=${this.state.value}`);
    this.setState({ data: fetchData.data.hits});
    console.log(fetchData.hits);
    
   }
    handleChange =(event) => {
      this.setState({value: event.target.value});
  };
  render(){
    return <div>
        
      <input className="input" placeholder=" Enter your choice of dish here ( for example pizza)" value={this.state.value} onChange={this.handleChange}/>
      <button className="button" onClick={this.handleOnClick}>Search Recipe </button>
      
    <form>

    </form>
    {this.state.data.slice(0,9).map(recipe=>(
      <Recipe recipe={recipe}/>
    ))}
     <img src={aboutImg} className="App-logo2" alt="logo" />
   </div>
      }}
  export default Home;
