import React, { Component } from 'react'
import Recomm from './recomm'
import Navbar from'./navbar'
export default class movie extends Component {
    constructor(){
        super();
        this.state={id:'',movie:{},recomm:[],score:''}
    }
    componentDidMount(){
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const id = urlParams.get('id')
        console.log('url is: '+id);
        this.setState({id: id},()=>{
            console.log('state is:'+this.state.id);
            fetch('http://www.omdbapi.com/?i='+this.state.id+'&plot=full&apikey=thewdb').then(response =>  response.json())
            .then(movie => {
                
                this.setState({movie: movie},()=>{
                    console.log(this.state.movie);
                })
            
            fetch('http://localhost:5000/api/getrecom/'+this.state.id).then(response =>  response.json())
            .then(recomms => {
                this.setState({recomm: recomms.recom},()=>{
                   
                })

            })
            
            
            });
            });
    }
    onClick()
    {   
        console.log('hello');
        // console.log('props',this.props.history.push('/about'))
        // this.props.history.push('/progress')
        (async () => {
            const rawResponse = await fetch('http://localhost:5000/api/rate', {
              method: 'POST',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({id:this.state.id,score:this.state.score})
            });
            // console.log(this.props.myplan);
           
          })();

        return true;

    }

    handleChange(event) {
        this.setState({score: event.target.value},()=>{
            console.log(this.state.score);
        });
        
      }






    render() {
        
        return (
            <div>
                <Navbar/>
                <br></br><br></br><br></br>
            <div class="movie_details mx-5 my-5" id="movie_details">

    
           
               <div class="row mt-5"><div class="col-4"></div>
                <div class="col-7 py-2" id="bg-black">
                <h2 class="txt">{this.state.movie.Title}</h2>
                </div>
                </div>
                <div class="row">
    <div class="col-4">
      
    <img src={ this.state.movie.Poster} class="thumbnail" id="movie_poster"/>
  
    </div>
      <div class="col-7">
        
        <ul class="list-group">
          <li class="list-group-item"><strong>Genre: </strong>{ this.state.movie.Genre}</li>
          <li class="list-group-item"><strong>Released: </strong>{ this.state.movie.Released}</li>
          <li class="list-group-item"><strong>Rated: </strong> {this.state.movie.Rated}</li>
          <li class="list-group-item"><strong>IMDB Rating: </strong>{this.state.movie.imdbRating}</li>
          <li class="list-group-item"><strong>Director: </strong>{this.state.movie.Director}</li>
          <li class="list-group-item"><strong>Writer: </strong>{this.state.movie.Writer}</li>
          <li class="list-group-item"><strong>Actors: </strong>{this.state.movie.Actors}</li>
          <li class="list-group-item"><strong>Plot: </strong>{this.state.movie.Plot}</li>

          </ul>
      </div>
      </div>
      
      
      </div><br></br><br></br>
 <div>     
 <form>
  <label for="quantity" id='quantity-txt'>Rate out of 10: </label>
  <input className='mx-3' type="number" id="quantity" name="quantity" min="1" max="10" onChange={(e) => this.handleChange(e)}/>
  {/* <input type="submit" class="btn-dark" onClick={(e) => this.onClick(e)}></input> */}
  <button type="submit" class="btn-dark" onClick={(e) => this.onClick(e)}>Submit</button>
</form>
</div>

      <div class="row-12 mt-5"><div class="col-12"></div>
        <div class="col-12 py-2" id="bg-black">
        <h2 class="txt">Movies similar to this</h2></div>
        </div><br></br><br></br>
        <div className='row px-5'>
      <Recomm recomms={this.state.recomm}/></div>
      </div>
            
        )
    }
}
