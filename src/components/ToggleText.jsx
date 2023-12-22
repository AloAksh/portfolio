import React,{useState} from 'react'

const ToggleText = ({text, children}) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    setIsVisible(!isVisible);
  }
  return (
    <>
      <p className='block font-semibold text2' onClick={handleClick}>
        {text}
      </p>
      {isVisible && <div>{children}</div>}
    </>
  )
}

export default ToggleText
