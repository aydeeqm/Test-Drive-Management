import React from 'react';
import { connect } from 'redux-zero/react';

const Product=({item,index})=>{
    return(
        <li className="course media group" key={index}>
         <div>
          <h3>{item.placa}</h3>
          <h2>{item.modelo}</h2>
        </div>
      </li>
    )
}
const Modelo=({modelo})=>{
    
     
    return(
        <div>
            {
            modelo.map((item,index)=>{
                return <Product key ={index} item={item} index={index}/>
            })
            }
        </div>
    )
}


class   Catalogo  extends React.Component { 
    constructor (props) {
        super (props);
        this.state  = { modelo :  null} 
    }

    render  ()   {
      const {successLogin, data,selected } = this.props;
      let list = data.map((item,index)=>{
          return(
              <button onClick = {(e) => this.setState ({ modelo : item.modelo} ) } >{item.marca}</button>
          )
      });
      let list2 ;
      if ( this.state.modelo) {
          list2 = <Modelo modelo = {this.state.modelo} />
      }
    return (
       <div className="main-content courses">
         <div className="course-header group">
           <h2> Catalogo</h2> 

         </div>
         <ul>
              {list}
        </ul>
        <ul>
              {list2}
        </ul>
        
       </div>
    );   
 }
}

export default Catalogo;