
import './App.css';
import React, { useState } from 'react';
import MovieList from './components/MovieList';
import Filter from './components/Filter';
import AddMovie from './components/AddMovie';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Rating } from 'react-simple-star-rating'



function App() {
  // eslint-disable-next-line no-unused-vars
  const [filter, setFilter] = useState("")
  const [rating, setRating] = useState(0) // initial rating value
  // eslint-disable-next-line no-unused-vars
  const [movies, setMovies] = useState([
  {
    Title: 'spider man',
    Description: 'man (1)',
    Rating: '30',
    Url:"https://tse3.mm.bing.net/th?id=OIP.jGgpUrGr_AVWVDm8cKLUGwHaEK&pid=Api&P=0&w=290&h=163",
    Posterurl:'https://www.youtube.com/watch?v=KG-8iiUw0L4'  
  },
  {
    Title: 'spider man',
    Description: 'man (2)',
    Rating: '50',
    Url:"https://tse3.mm.bing.net/th?id=OIP.jGgpUrGr_AVWVDm8cKLUGwHaEK&pid=Api&P=0&w=290&h=163",
    Posterurl:'https://www.youtube.com/watch?v=DzYsxuYmxSE'  
  },
  {
    Title: 'spider man',
    Description: 'man (3)',
    Rating: '40',
    Url:"https://tse3.mm.bing.net/th?id=OIP.jGgpUrGr_AVWVDm8cKLUGwHaEK&pid=Api&P=0&w=290&h=163",
    Posterurl:'https://www.youtube.com/watch?v=C6pSkJqciEc'  
  },
  ]);
  const handleFilter=(search)=>{
    setFilter(search)
  }
  const handleAddMovie=(val)=>{
    setMovies([...movies, val])
  }
  const handleRating = (rate) => {
    setRating(rate)
    
  }
  console.log(rating)
  return (
    <div className="App">
      <div className='row'>
      
      <Filter handleFilter={handleFilter}/>
      <Rating onClick={handleRating} ratingValue={rating} />
      <MovieList movies={movies.filter(elm=>elm.Title.toUpperCase().includes(filter.toUpperCase())&&(elm.Rating)>=(rating))}/>
      <AddMovie handleAddMovie={handleAddMovie}/>
      </div>
    </div>
  );
}

export default App;
