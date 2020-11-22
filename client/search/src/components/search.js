import React, { Component } from 'react'
import Movielist from './movielist';


export default class search extends Component {
    constructor(){
        super();
        this.state={movies:[],value:''}
    }
    
    handleChange(event) {
        this.setState({value: event.target.value},()=>{
            console.log(this.state.value);
            fetch('http://www.omdbapi.com?s='+ this.state.value+'&apikey=thewdb').then(response =>  response.json())
            .then(resData => {
                this.setState({movies:resData.Search,fetch_check:true},()=>{
                    console.log(this.state.movies); 
                })
               
            })
        });
        
      }

    render() {
        if(this.state.movies)
        return (
            <div>
            <div id='search_col' className='ml-5 col-8'>
            {/* <div className="ml-5 jumbotron" id="jt1"> */}
            {/* <h3 class="text-center">SEARCH FOR ANY MOVIE</h3> */}
            {/* <br/> */}
                <form id="search">
                <div className="row">
                    <div className='col'>
                    <input className="form-control" type="text" id="search_movies" name="search_movies" placeholder="Search for Movies...." onChange={(e) => this.handleChange(e)}></input>
                    </div>
                    <div className='row'>
                    <span className="input-group-btn">
                    {/* <button type="submit" class="btn btn-dark btn-block">Search</button> */}
                    </span> 
                    </div>
                </div>
              </form>
              {/* </div>   */}
            </div>
            <br/><br/>
        <div className='row'>
        <Movielist movies={this.state.movies}/>
        </div>
            </div>
        )
        else
        return (
            <div>
            <div id='search_col' className='ml-5'>
            {/* <div className="ml-5 jumbotron" id="jt1"> */}
            {/* <h3 class="text-center">SEARCH FOR ANY MOVIE</h3> */}
            {/* <br/> */}
                <form id="search">
                <div className="row">
                    <div className='col'>
                    <input className="form-control" type="text" id="search_movies" name="search_movies" placeholder="Search for Movies...." onChange={(e) => this.handleChange(e)}></input>
                    </div>
                    <div className='row'>
                    <span className="input-group-btn">
                    {/* <button type="submit" class="btn btn-dark btn-block">Search</button> */}
                    </span> 
                    </div>
                </div>
              </form>
              {/* </div>   */}
            </div>
        
            </div>
        )
    }
}
