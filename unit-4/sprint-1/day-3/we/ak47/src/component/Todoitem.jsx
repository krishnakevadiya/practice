

import React from 'react'

export default function Todoitem({title,status}) {
  return (
    <div>
        {title}{"-------->"}
        {status ? "COPlETED":"NOT COMPLETE"}
    </div>
  )
}
