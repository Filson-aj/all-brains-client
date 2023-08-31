import { useState, useEffect } from 'react'
import moment from 'moment'

const DateTime = () => {
  const [currentTime, setCurrentTime] = useState(moment(Date.now()))

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(moment(Date.now()))
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return moment(currentTime).format('dddd MMMM yyyy, hh:mm:ss A')
}

export default DateTime
