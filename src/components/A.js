//1. Import Area

import { B } from "./B";


//2. Functional Defination Area
//Lets create a components

let A = props =>{
    let data1='data1';
    console.log(props);
    return  (
              <> 
                <div>
                    Parent {data1} {props.children} {props.name} {props.surname}
                    <div>Child</div>
                </div>
                <B data3={props.name}></B>
              </>
            )
  }


//3 Export
//3.1 Default export
export default A;

//3.2  Named Export