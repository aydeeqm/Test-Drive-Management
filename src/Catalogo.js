import React from 'react';
import { connect } from 'redux-zero/react';
import './Catalogo.css';

const Product=({item,index})=>{
    return(
        <div className="col-lg-2  text-center" key={index}>
          <img className="img-responsive" src={item.img}/>
          <h5>{item.modelo}</h5>
      </div>
    )
}
const Modelo=({modelo})=>{
    
     
    return(
        
        <div className="col-lg-offset-2 cont-modelo">
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
              <button className="btn btn-type" onClick = {(e) => this.setState ({ modelo : item.modelo} ) } >
                <img className="marcaLogo"  src={item.logo} key={index}/>
              </button>
          )
      });
      let list2 ;
      if ( this.state.modelo) {
          list2 = <Modelo modelo = {this.state.modelo} />
      }
    return (
       <div className="container-fluid text-center">
        <div className="headercatalogo">
             <img className="logoebiz" alt="logoebiz" src="./img/logoblanco.png" />
        </div>    
         <div className="row">
            <div className="container cont-catalogo">
            <div className="col-lg-12 col-xs-12">
            <h2 className="text-AzulPantone">Seleccione una Marca</h2> 
           </div>
         </div>
         <div className="container">
              {list}
        </div>
        <div className="container carslist">
              {list2}
        </div>
        </div>
       </div>
    );   
 }
}

export default Catalogo;