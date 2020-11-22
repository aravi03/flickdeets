import React, { Component } from 'react'

export default class movielist extends Component {
    render() {
        return (
            this.props.movies.map(movie=>{
                if(movie.Poster!="N/A")
                return(
                    <div class="col-2 mx-5 my-5">
                    <div class="well text-center" id='movie_block'>
                        <a id='txt-white' href={'/movie?id='+movie.imdbID}>
                      <img  src={movie.Poster} id="poster"/>
                      <h3 className='py-3' id='movie_title'>{movie.Title}</h3>
                      {/* <a onclick="" class="btn btn-primary" href="#">Movie Details</a> */}
                      </a>
                    </div>
                  </div>
                )
            })
        )
    }
}
