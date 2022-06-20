import React from 'react'

function Movie({movie}) {
  return (
    <div className='text_justify'>
      <span> {movie.Title} </span>
      <span>{movie.Description}</span>
      <span>{movie.Rating}</span>
      <img src={movie.Url} alt="img"/>
      <span>{movie.posterurl}</span>
    </div>
  )
}

export default Movie
