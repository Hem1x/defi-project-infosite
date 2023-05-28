import React from 'react'

const Search = ({searchQuery, setSearchQuery, ...props}) => {
  return (
    <input
        {...props} 
        type="text" 
        placeholder='Search FAQ' 
        value={searchQuery} 
        onChange={(e) => setSearchQuery(e.target.value)}
    />
  )
}

export default Search