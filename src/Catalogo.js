import React from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import { connect } from 'redux-zero/react';

const ItemImg=({name, marca})=>{
    return(
        <div class={"gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter hdpe"+ name}>
            <img src="https://i2.wp.com/farm8.staticflickr.com/7110/7578234590_7a6c552f74.jpg?resize=500%2C375" className="img-responsive"/> 
            <h2>{marca}</h2>
        </div>
    )
}

const Catalogo =({data})=>{
    return(
        <div class="container">
               <div class="row">
               <div class="gallery col-lg-12 col-md-12 col-sm-12 col-xs-12">
                   <h1 class="gallery-title">CATALOGO</h1>
               </div>
       
               <div align="center">
                   {/* <button class="btn btn-default filter-button" data-filter="all">All</button> */}
                   <button class="btn btn-default filter-button" data-filter="susuki">Susuki</button>
                   <button class="btn btn-default filter-button" data-filter="mazda">Mazda</button>
                   <button class="btn btn-default filter-button" data-filter="haval">Haval</button>
                   <button class="btn btn-default filter-button" data-filter="ds autommoviles">Ds Automoviles</button>
                   <button class="btn btn-default filter-button" data-filter="changan">Changan</button> 
                   <button class="btn btn-default filter-button" data-filter="great wall">Great Wall</button> 
                   <button class="btn btn-default filter-button" data-filter="citroen">Citroen</button>
                   <button class="btn btn-default filter-button" data-filter="jac motors">Jac Motors</button>              
               </div>
                <div>
                {
                    data.map((item,index)=>{
                    return <ItemImg key ={index} name={item.marca} marca={item.marca} index={index}/>
                        })
                }
                </div>
        </div>
    </div>        
    )
}

const mapToProps = ({ successLogin, data }) => ({ successLogin, data });
export default connect(mapToProps)(Catalogo);