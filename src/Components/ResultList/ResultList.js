import React from 'react';
import Movie from '../Movie/Movie';

const ResultList = (props) => {
   
    return (
    <div className='container'>
        <div className='box' style={{overflowY: 'scroll', lineHeight: '1.5', boxShadow: '0 20px 30px #004085', marginLeft: '5px'}}>
                {
                    props.movies.map((movie, i) => {
                        return (
                            <Movie key={i} show={movie}  image={movie.poster_path}/>
                        )
                    })
                }
        </div>
    </div>
    )}

export default ResultList;