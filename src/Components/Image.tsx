import React, { useState, useEffect } from 'react'
import ThreephaseButton from './ThreephaseButton'
import Timer from './Timer'

const Image = () => {
  const options = ["left", "right", "meh"];
  const [index, setIndex] = useState<number>(0);
  const [asd, setAsd] = useState("");
  const [startTimer, setStartTimer] = useState(false);

  const handleClick = () => {
    setIndex(prev => (prev === options.length - 1 ? 0 : prev + 1));
  }

  const genImage = () => {
    fetch("kepek.json")
      .then(res => res.json())
      .then(data => {
        setAsd(data[Math.floor(Math.random() * 10)+1])
        setStartTimer(true) // kép betöltve → indul a timer
      })
  }

  // első kép betöltése
  useEffect(() => {
    genImage()
  }, [])

  const handleTimerFinish = () => {
    setStartTimer(false)
    genImage()
  }

  return (
    <div
      style={{
        width: "400px",
        height: "800px",
        padding: "350px 0px 0px 0px",
        margin: "auto",
        backgroundImage: `url(${asd})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover'
      }}
    >
      <Timer 
        canStart={startTimer}
        value={options[index]}
        onFinish={handleTimerFinish}
      />

      <ThreephaseButton 
        label={options[index]} 
        onClick={handleClick} 
      />
    </div>
  )
}

export default Image