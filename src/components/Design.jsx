import React from 'react'

const Design = ({className,children}) => {
  return (
    <div className={`w-full h-full bg-white rounded-2xl ${className}`}>
      {children}
    </div>
  )
}

export default Design
