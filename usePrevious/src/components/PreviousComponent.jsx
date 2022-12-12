import { useState } from 'react'
import usePrevious from '../hooks/usePrevious'

export default function PreviousComponent() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('Alex')
  const previousCount = usePrevious(count)

  return (
    <div>
      <div>
        {count} - {previousCount}
      </div>
      <div>{name}</div>
      <button onClick={() => setCount((currentCount) => currentCount + 1)}>
        Increment
      </button>
      <button
        onClick={() => setName((prev) => (prev === 'Alex' ? 'Josu' : 'Alex'))}
      >
        Change Name
      </button>
    </div>
  )
}
