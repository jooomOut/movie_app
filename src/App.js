import React from 'react';
import axios from 'axios';
import Movie from './Movie';
import './App.css';

class App extends React.Component{

state = {
    isLoading: true,
    movies: []
};

getMovies = async () => {
    const {
        data : {
            data : {movies}
        }
    } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating")
    this.setState( {movies:movies, isLoading: false});
}
async componentDidMount(){
    this.getMovies();
    
}

    render() {
        const { isLoading, movies } = this.state;
        return (
        <section class="container">
            {this.state.isLoading ? 
                <div class="loader">
                    <span class="loader_text">Loading...</span>
                </div>
                : 
                <div class="movies">
                    {
                        movies.map(movie => {
                            console.log(movie);
                            return(
                            <Movie 
                            key={movie.id}
                            id={movie.id} 
                            year={movie.year} summary={movie.summary} title={movie.title} 
                            poster={movie.medium_cover_image}
                            genres={movie.genres}/>
                            )
                        })
                    }
                </div>
            }
        </section>
        );
    }
}
export default App;
