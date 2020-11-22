import React, { Component } from 'react'

export default class recom_item extends Component {
    constructor(){
        super();
        this.state={movie:{}}
    }
    componentDidMount(){
        fetch('http://www.omdbapi.com/?i='+this.props.movie.imdb_id+'&plot=full&apikey=thewdb').then(response =>  response.json())
        .then(movie => {
            this.setState({movie: movie},()=>{
                    // console.log('hu',this.state.movie)
            })
        })
    }
   
    render() {
        // this.setState({movie: this.props.movie},()=>{
        //     console.log('a',this.state.movie);
        // })
        
        if(this.state.movie)
        return (
            <div >
                <div className='mx-4 my-5'>
                <div class="col-1">
                <div class="well text-center" id='movie_block'>
                    <a id='txt-white' href={'/movie?id='+this.state.movie.imdbID}>
                  <img src={ this.state.movie.Poster} id="recomm_poster"/>
                  <h3 className='py-3' id='movie_title'>{this.state.movie.Title}</h3>
                  </a>
                </div></div>
                </div>
            </div>
        )
        else
        return(<div></div>)
    }
}
