import React, { Component } from 'react'
import Display from './recom_item'

export default class recomm extends Component {
    constructor(){
        super();
        this.state={recomm:[]}
    }
    componentDidMount(){
        fetch('http://localhost:5000/api/myrecomm').then(response =>  response.json())
        .then(recomms => {
            this.setState({recomm: recomms},()=>{
                console.log('recom',this.state.recomm);
            })
        })
    }

    render() {
        if(this.state.recomm)
        return (
            this.state.recomm.map(item=>{
                return(
                <Display movie={item}/>
                )
            })
        )
        else
        return(<div></div>)
    }
}
