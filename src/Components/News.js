import React,{useState} from 'react'
import './News.css'
import Today from './Today/Today'
import {Link,useHistory} from 'react-router-dom'
import Search from './Search/Search'
const News = () => {
    const [query ,setQuery]=useState('')
    const [news,setNews]=useState([])
    var today= ''

    const searchNews= async(e)=>{
        e.preventDefault()
        const url= `http://newsapi.org/v2/everything?q=${query}&apiKey=cb18821d520b4665b209a1ef063f024b`
         try{
             const res=await fetch(url)
             const data=await res.json()
             setNews(data.articles)
             console.log(data.articles)
         }
         catch(err){
             console.error(err)
         }
       
    }
  
    const date=()=>{

    today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    today = mm + '-' + dd + '-' + yyyy;
      }
    
    date()
  
  
    return (
         <div>
            <div className="card-container">
            <h1>The News Search App</h1>
            <form>  <input type="text" placeholder="" value={query} onChange={(e)=>setQuery(e.target.value)} ></input>
         
           <button   type="submit" onClick={searchNews}>Search</button>
           
          
           
            </form>
           
         </div>
                 <Search news={news} />
            </div>
        
    )
}

export default News
