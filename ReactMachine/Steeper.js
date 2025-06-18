
// some logix use in stepper and tab component 


import React, { useState } from 'react';
import './styles.css'

function Tabs({ tabs }) {

    const[activeIndex , setActiveIndex] = useState(0)

    const handelContinue = () => {
        if(activeIndex == tabs.length - 1) return
        setActiveIndex(activeIndex + 1)
    }

    const handelBack = () => {
         if(activeIndex == 0) return
        setActiveIndex(activeIndex - 1)
    }
    return (
        <div className="stepper">
            <div className="object">
                {
                    tabs.map((val ,index) => (
                        <div className = "container">
                            <div className={activeIndex === index ? "number active" : "number"}>{index + 1}
                                {index < tabs.length - 1  && <div className = {activeIndex === index ? "line active" : "line"}></div>}
                            </div>
                            <div className = "tittle">{val.title}</div>
                           
                        </div>
                ))
            }
            </div>

            <div>{tabs[activeIndex].content}</div>
         <div>
            <button onClick = {handelContinue}>Continue</button>
            <button onClick = {handelBack}>Back</button>
            </div>

        </div>
    );
}

export default Tabs;