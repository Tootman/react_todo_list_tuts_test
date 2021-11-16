import React from 'react'

export default function Counter({stats}) {
  return (
    <div>
      <div>
       Counter: {stats.counter}
       </div>
       <div>
        myField: {stats.myField}
        </div>
    </div>
  )
}
