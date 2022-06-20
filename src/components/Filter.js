import React from 'react'

function Filter(props) {
const handleChange=(e)=>{
  props.handleFilter(e.target.value)
}
  return (
    <div>
      search: <input type="text" placeholder='search' onChange={handleChange}/>
    </div>
  )
}

export default Filter;
