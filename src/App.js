import axios from 'axios'
import React, { useEffect } from 'react'

import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const App = () => {
  const [images,setImages]=React.useState([])

  const getdata=async ()=>{
    axios.get("https://api.unsplash.com/photos/?client_id=7SVRVOn5ZxNnU1xZgYQ_Q-Nq0t8KhaEOabriPmsoI9I")
    .then(res=>{
      setImages(res.data)
      console.log(res.data);
    })
  }
  useEffect(()=>{
     getdata()
  },[])
  return (
    <div style={{margin:"4rem"}}>
     <Slide>
         {images.map((slideImage, index)=> (
            <div className="each-slide" key={index}>
              <div>
               <img src={slideImage.urls.small} alt="" style={{backgroundSize:"cover",objectFit:"cover"}} />
              </div>
            </div>
          ))} 
        </Slide>
    </div>
  )
}

export default App