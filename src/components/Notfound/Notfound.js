import React from 'react'
import NotFound from '../../image/NotFound.svg' 

function Notfound() {
  return (
    <div style={{display: 'flex', justifyContent: 'center', alignItem: 'flex-start'}}>
        <img width={800} height={500} src={NotFound} alt="" title="notfound" />
    </div>
  )
}

export default Notfound