import React from 'react'
import useToggle from '../hooks/useToggle'

// Usage
export default function Component() {
  const [toggle, setToggle] = useToggle(false)

  return (
    <button onClick={setToggle}>
      {`Toggle Status: ${toggle}`}
    </button>
  )
}
