import React, { useState } from 'react'

function Contador(props){
    
    const [cont,setCont] = useState(0)

    return(
        <div>
        <div>{cont}</div>
        <button onClick={() => {setCont(anterior=>anterior -1)}}>-</button>
        <button onClick={() => {setCont(anterior=>anterior +1)}}>+</button>
        </div>
    )

}


export default Contador;