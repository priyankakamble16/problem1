import React, { useState } from 'react'

const Problem1 = () => {
    const [name,setname]=useState('Priyanka');

    const getNameSeparated=()=>{
        setname(name);
        if(name.split().sort()){
            return name
        }
    }
  return (
    <div>
        <button onClick={()=>getNameSeparated()}>Get Name separated</button>
        {name}
    </div>
  )
}

export default Problem1
