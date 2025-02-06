import React, { useState } from 'react'

function Counter () {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={()=>setCount(prev => prev+1)}>Increase Count</button>
      <button onClick={()=>setCount(count - 1)}>Decrese Count</button>
    </div>
  )
}

export default Counter
