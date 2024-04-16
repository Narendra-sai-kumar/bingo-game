import Bingobody from "./Bingobody";
import React from 'react'

const Bingo = () => {
  return (


    <div className="bingo">
        <div className="bingo-header">
                <h1>Bingo Game</h1>
        </div>
        
            <Bingobody  rows={5}/>
       
        
    </div>
  )
}

export default Bingo