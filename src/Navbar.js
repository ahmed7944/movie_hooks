import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <Link to='/src/Description.js'>Description</Link>
      <Link to='/src/Trailer.js'>Trailer</Link>
      <Link to='/src/components/Movie.js'>Movie</Link>
    </div>
  )
}

export default Navbar

