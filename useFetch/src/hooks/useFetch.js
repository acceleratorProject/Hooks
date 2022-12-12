import { useState, useEffect } from 'react'
export default function (url) {
  const [data, setData] = useState(null)
  useEffect(() => {
    try {
      fetch(url)
        .then((res) => res.json())
        .then((data) => setData(data))
    } catch (error) {
      console.log(error)
    }
  }, [url])
  return [data]
}
