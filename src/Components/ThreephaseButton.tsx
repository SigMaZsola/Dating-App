import React from 'react'

type ThreephaseButtonProps = {
  label: string
  onClick: () => void
}

const ThreephaseButton: React.FC<ThreephaseButtonProps> = ({ label, onClick }) => {
  return (
    
      <button className="btnThree" onClick={onClick}>
        {label}
      </button>
    
  )
}

export default ThreephaseButton