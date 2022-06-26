import React from 'react'
import {Link,Outlet,useNavigate} from 'react-router-dom'

function Movie({movie}) {
  const navigate = useNavigate()
  const goMovie=()=>{
    navigate(-1)
  }
  return (
    <div className='text_justify'>
      <span> {movie.Title} </span>
      <span>{movie.Description}</span>
      <span>{movie.Rating}</span>
      <img src={movie.Url} alt="img"/>
      <span>{movie.posterurl}</span>
      <Link to="Description"></Link>
      <Link to="Trailer"></Link>
      <Link to="Movie"></Link>
      <button onClick={goMovie}>go movie</button>
      <Outlet></Outlet>
    </div>
  )
}

export default Movie
