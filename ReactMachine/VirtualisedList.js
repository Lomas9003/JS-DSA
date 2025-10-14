

import React, { useState } from 'react'


//child componet
const List = ({list , height , width, itemheight}) => {

        const [indices , setIndices] = useState([0 , Math.floor(height / itemheight)])
        console.log(indices)

        const handleScroll = (e) => {
            const scrollTop = e.target.scrollTop
            const newStartIndex = Math.floor(scrollTop / itemheight)
            const newEndIndex = newStartIndex + Math.floor(height / itemheight)
            setIndices([newStartIndex , newEndIndex])
        }

        const virtual = list.slice(indices[0] , indices[1] + 1);
        console.log(virtual)
        const boxheight = list.length * itemheight 
        console.log(boxheight)
    return (

        <div  onScroll={handleScroll} style={{height : height , width, background: "grey", overflow: "auto"}}>
        <div className='itemContainer' 
        style={{height: boxheight,
            position: "relative",
        }}
        >
            {
                virtual.map((item , index) => (
                    <div 
                    style={{height: itemheight , 
                         background: "coral",
                         borderTop: "5px solid grey",
                         position: "absolute",
                         top: (indices[0] + index) * itemheight,
                         width: "100%",
                         textAlign: "center",
                    }}
                    >
                       Item: {item}
                    </div>
                ))
            }
        </div>
        </div>
    )
}


// Parent component
const VirtualList = () => {
    const list = Array.from({length: 1000} , (_ , index) => index + 1)
    // console.log(list)
  return (
    <div >
        <h1>Virtualized List</h1>
    <div className='virtulalist'>
        
        <List list = {list} height = {500} width = {300} itemheight = {35}/>
    </div>
    </div>
  )
}

export default VirtualList

