import React from 'react'

const NameText = (prop) => {
  const {name} = prop;
  return (
    <div>
      <p className='font-mono font-bold name text-left tracking-wide'>
        {name}
      </p>
    </div>
  )
}

export default NameText
