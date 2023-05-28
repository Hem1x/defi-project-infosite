import React from 'react'

const Social = ({name, src}) => {
  return (
    <a href={name} target="_blank" rel="noopener noreferrer">
        <img src={src} alt={name} />
    </a>
  )
}

export default Social