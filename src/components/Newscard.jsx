import React from 'react'
import NewsItem from './NewsItem';
import { useState ,useEffect} from 'react';
import axios from 'axios';


const Newscard = ({type}) => {

  const [news,setNews]=useState([])
 

  useEffect(()=>{
    const fetches=async()=>{
      const url=`https://newsapi.org/v2/everything?q=${type}&apiKey=${import.meta.env.VITE_NEWS_API}`;

      
      try{
        const resp=await axios.get(url)
       
         setNews(resp.data.articles)
        
      }
      catch (error){
        console.error("Failed to fetch news", error);
      }
 
    }
      fetches() 
  },[type])

  return (
    <div>
      <h1 style={{textAlign:"center" , margin:"5px"}}><span className="badge bg-danger">Breaking News!</span></h1>
      <div >
      {
           news.map((news,index)=>(
              <NewsItem key={index} url={news.url} title={news.title}  desc={news.description} src={news.urlToImage}/>
           ))
      }
      </div>
     
       
    </div>
  )
}

export default Newscard