import React, { Component } from 'react'
import Display from './recom_item'
export default class recomm extends Component {

   

    render() {
    
    console.log('hello',this.props.recomms)
        
        return (
            this.props.recomms.map(item=>{
                return(
                <Display movie={JSON.parse(item)}/>
                )
            })
        )
        
    }
}
