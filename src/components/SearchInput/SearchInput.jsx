import React from 'react'

const SearchInput = ({searchQuery, setSearchQuery, ...props}) => {
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

export default SearchInput