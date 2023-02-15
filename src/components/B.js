//1. Import Area
import React,{ Component } from "react"
import C from "./C";


// Defination area
//Lets define another compoent
export class B extends Component{
    //1. Properties
  
    //2. constructor
  
    //3. methods
    //Every class component must have render method
    render(){

      return (
                <React.Fragment>
                    <div> DOLLORINFOTECH {this.props.data3}  </div>
                    <C data4={this.props.data3}></C>
                </React.Fragment>
             );
    }
  }


//3. Export Area