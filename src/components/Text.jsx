import React from 'react'

const Text = (props) => {
    const {text} = props;
  return (
    <div>
      <p className='text text-left text-balance'>{text}</p>
    </div>
  )
}

export default Text
