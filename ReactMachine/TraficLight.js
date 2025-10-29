import React, { useEffect, useState } from 'react'
import "./trafic.css"

const TrafficLight = () => {
    const [color , setColor] = useState("red")

    useEffect(() => {
        let timer = setTimeout(() => {
            setColor((pre) => {
                if(pre === "red") return "yellow"
                if(pre === "yellow") return "green"
                return "red"
            })
        },  color === "red" ? 3000 : color === "yellow" ? 1000 : 2000)

         return () => {
        clearTimeout(timer)
    }
    } , [color])

   
  return (
    <div className='tarfic-container'>
        <div className='trafficLight'>
                    {
                       ["red", "yellow", "green"].map((lightColor) => (
                                <div
                                    key={lightColor}
                                    className={`light ${lightColor} ${color === lightColor ? "active" : ""}`}
                                ></div>
                                ))

                        
                    }
                
        </div>
    </div>
  )
}

export default TrafficLight 