import React from 'react'

import Movie from './Movie';


function MovieList({movies}) {
  return (
    <div>
      {movies.length ? movies.map(elm=><Movie movie={elm}/>):<h2>not found</h2>}
     
    </div>
  )
}

export default MovieList;
