import { useEffect, useState } from "react"

const Kepek = () => {
    
  const [asd, setAsd] = useState("")

  useEffect(()=>{
    fetch("kepek.json")
    .then(res => res.json())
    .then(data => setAsd(data[Math.floor(Math.random() * 10)+1]))
  },[])

  return (
    <div>
      <img src={asd} alt="" />
    </div>
  )
}

export default Kepek