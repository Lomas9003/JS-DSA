import React, { useState } from 'react' 

const thresold = 40;

const Infinitescroll = () => { 

    const [data , setData] = useState([... new Array(50)])   
    const [lodaing , setloading] = useState(false)

    const loadmore = () => { 
        setloading(true)
        setTimeout(() => {
            setData((prev) => [...prev , ...new Array(10)])
            setloading(false)
        }, 3000); 
        
    }

    const handelScroll = (e) => {  
        const scrollTop = e.target.scrollTop; 
        const clientHeight = e.target.clientHeight;
        const scrollHeight = e.target.scrollHeight;
    
        const remaingHeight = scrollHeight - (scrollTop + clientHeight) 
        console.log(remaingHeight);
        
        
        if(remaingHeight < thresold && !lodaing){
            loadmore()
        }
    }

  

  return (
    <div onScroll={handelScroll} className='container'>  
     {
        data.map((n,  index) => (
            <div className='row' key={index}>
                {index}
            </div>
        ))
     } 
     {
        lodaing && <div>Loding....</div>
     }
    </div>
  )
}

export default Infinitescroll