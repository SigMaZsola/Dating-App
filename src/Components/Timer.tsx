import React, { useEffect, useState } from 'react'

type TimerProps = {
  value: string
  canStart: boolean
}

const Timer: React.FC<TimerProps> = ({ value, canStart }) => {
  const [seconds, setSeconds] = useState<number>(3)

  useEffect(() => {
    if (!canStart) return

    setSeconds(3)

    const interval = setInterval(() => {
      setSeconds(prev => {
        if (prev <= 1) {
          clearInterval(interval)
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [canStart])

  return (
    <div className='timer'>
      {canStart ? seconds : null}
    </div>
  )
}

export default Timer