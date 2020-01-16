import React from 'react';
import './Movie.css'

const Movie = (props) => {
    return (
        <div className="dt mw6 center pt0 pb5 pv5-m pv6-ns">
            <div className="db dtc-ns v-mid-ns">
            {props.image == null 
                ? <img src={`https://aliceasmartialarts.com/wp-content/uploads/2017/04/default-image.jpg`} alt='movie poster' style={{width: '200px', height: 250}}/> 
                : <img src={`https://image.tmdb.org/t/p/w185${props.image}`} alt='movie poster' style={{width: '200px', height: 250}}/>}
            <a href={`https://www.themoviedb.org/tv/${props.show.id}?language=en-US`}>Details</a>
            </div>
            <div className="db dtc-ns v-mid ph2 pr0-ns pl3-ns">
                <ul>
                    <li style={{color: '#6495ED', fontFamily: 'italic'}}>Title: {props.show.name}</li>
                    <li style={{color: '#B8860B', fontFamily: 'italic'}}>First Aired: {props.show.first_air_date}</li>
                    <li style={{color: '#228B22', fontFamily: 'italic'}}>{props.show.overview}</li>
                </ul>
            </div>
            </div>
    )
}

export default Movie;