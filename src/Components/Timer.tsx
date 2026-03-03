import React, { useEffect, useState } from 'react'

type TimerProps = {
  value: string
  canStart: boolean
  onFinish: () => void
}

const Timer: React.FC<TimerProps> = ({ canStart, onFinish }) => {
  const [seconds, setSeconds] = useState(3)

  useEffect(() => {
    if (!canStart) return

    setSeconds(3)

    const interval = setInterval(() => {
      setSeconds(prev => {
        if (prev <= 1) {
          clearInterval(interval)
          onFinish()
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [canStart])

  return <div className='timer'>{canStart ? seconds : null}</div>
}

export default Timer