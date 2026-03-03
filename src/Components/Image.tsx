import React, { useState } from 'react'
import ThreephaseButton from './ThreephaseButton'
import Timer from './Timer'

const Image = () => {
  const options = ["left", "right", "meh"];
  const [index, setIndex] = useState<number>(0);

  const handleClick = () => {
    setIndex(prev => (prev === options.length - 1 ? 0 : prev + 1));
  }

  return (
    <div style={{ width: "400px", height: "800px" , padding:"350px 0px 0px 0px", margin: "auto"}}>
      <Timer 
        canStart={true} 
        value={options[index]} 
      />

      <ThreephaseButton 
        label={options[index]} 
        onClick={handleClick} 
      />
    </div>
  )
}

export default Image