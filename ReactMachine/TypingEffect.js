import React, { useEffect, useRef, useState } from 'react'


const Type = ({text , duration}) => {

    const [val ,setVal] = useState(text)
    const valRef = useRef({stat: 1 , end: 0})

    useEffect(() => {
      const Interval =   setInterval(() => {
            if(valRef.current.end === val.length){
                valRef.current.stat = -1
            }else if(valRef.current.stat === 0){
                valRef.current.stat = 1
            }
             valRef.current.end +=  valRef.current.stat
                setVal(val.slice(0 , valRef.current.end))
      }, duration)

        return () => {
            clearInterval(Interval)
        }
    }, [])
    return (
        <div>
           <p
           style = {{
            font: "2xl"
           }}
           > {val}</p>
        </div>
    )
}

const TypingEffect = () => {
  return (
    <div 
    style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
    }}
    >

    <Type
    text = "I am a frontend developer"
    duration = {100}
    />
        
    </div>
  )
}

export default TypingEffect