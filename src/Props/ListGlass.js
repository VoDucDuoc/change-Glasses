import React, { Component } from "react";
import GlassItem from "./GlassItem";

export default class ListGlass extends Component {
    arrProduct = [

        { id: 1, price: 30, name: 'GUCCI G8850U', url: './img/v1.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },
    
        { id: 2, price: 50, name: 'GUCCI G8759H', url: './img/v2.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },
    
        { id: 3, price: 30, name: 'DIOR D6700HQ', url: './img/v3.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },
    
        { id: 4, price: 30, name: 'DIOR D6005U', url:  './img/v4.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },
    
        { id: 5, price: 30, name: 'PRADA P8750', url: './img/v5.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },
    
        { id: 6, price: 30, name: 'PRADA P9700', url: './img/v6.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },
    
        { id: 7, price: 30, name: 'FENDI F8750', url: './img/v7.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },
    
        { id: 8, price: 30, name: 'FENDI F8500', url: './img/v8.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },
    
        { id: 9, price: 30, name: 'FENDI F4300', url: './img/v9.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },
    
       ];
    state={
           product:        { id: 1, price: 30, name: 'GUCCI G8850U', url: './img/v1.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' }, 
    }
    
    deoKinh = (newProduct)=>{
        this.setState({
            product: newProduct
        })
    }

    renderList = () =>{
        return this.arrProduct.map((item, index)=>{
            return <div className="col-4" key={index}>
                <GlassItem deoKinh={this.deoKinh} item={item}/>
          </div>
        })
    }
  render() {
      
    return (
      <div className="container">
        <div className="row">
          <div className="col-6">
            <h2 className="center">Virtual Glass</h2>
            <div className="row">
              {this.renderList()}
              </div>
          </div>
          <div className="col-6">
            <div className="card" style={{width: 300, height: 600}}>
              <img className="card-img-top glass" style={{width: 300, height: 350}} src={'./img/model.jpg'} alt />
              <img className="card-img-top position-glass" style={{width: 150, height: 50}} src={this.state.product.url} alt />
              <div className="card-body bg-dark text-white">
                <h4 className="card-title">{this.state.product.name}</h4>
                <button className="btn btn-danger">${this.state.product.price}</button> <span style={{color: 'green'}}>Stocking</span>
                <p className="card-text">{this.state.product.desc}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
