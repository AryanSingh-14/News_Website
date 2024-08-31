import React from 'react'
import image from '../assets/image.jpg'
const NewsItem = ({title,desc,src,url}) => {
  return (
 <>
       <div className="card d-inline-block mb-3 bg-dark text-light my-5 mx-5" style={{width:"345px"}}>
         <img src={src?src:image} className="card-img-top" style={{width:"343px" ,height:"200px"}} alt="image"/>
           <div className="card-body">
           <h5 className="card-title">{title.slice(0,50)}</h5>
              <p className="card-text">{desc?desc.slice(0,90):"News is......"} </p>
             
             <a href={url} className="btn btn-primary">Read More..</a>
            </div>
       </div>
       </> 
  )
}

export default NewsItem