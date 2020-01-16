import React from 'react';

const MovieInfo = (props) => {
    return (
        <div className='container'>
            <p className='f3 link dim black underline pa3 pointer' 
            onClick={props.closeMovieInfo} style={{marginLeft: '10'}}>Go back</p>
        <div className='box'>
            { props.currentMovie.poster_path === null ? <img src={`https://aliceasmartialarts.com/wp-content/uploads/2017/04/default-image.jpg`} alt='movie poster' style={{width: '200px', height: 250}}/> 
            : <img src={`https://image.tmdb.org/t/p/w185${props.currentMovie.poster_path}`} alt='movie poster' style={{width: '200px', height: 250}}/>}
        </div>
        <div className='col s12 m8'>
            <div className='info-container'>
                <p>{props.currentMovie.name}</p>
                <p>{props.currentMovie.first_air_date}</p>
                <p>{props.currentMovie.overview}</p>
            </div>
        </div>
        </div>
    )}

    export default MovieInfo;