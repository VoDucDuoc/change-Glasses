import React, { Component } from 'react'

export default class GlassItem extends Component {
    render() {
        let {item, deoKinh} = this.props;
        return (
            
                <img onClick={()=>{
                    deoKinh(item);
                }} src={item.url} style={{width: 150, height: 100}} alt=""/>
            
        )
    }
}
