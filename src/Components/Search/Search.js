import React from 'react'
import './Search.css'

const Search = (props) => {
    return (
        <div className='card-list'>
           {props.news.map(item=>(
               <div className="card">
                   <img className='card--image' src={item.urlToImage} alt='' />
                   <div className="card--content">
                    <h3 className="card--title">{item.title}</h3>
                        <p><small>AUTHOR: {item.author}</small></p>
                           <p><small>Date And Time: {item.publishedAt}</small></p>
                        <p className="card--desc">{item.description}</p>
                    </div>
               </div>
           ))}
        </div>
    )
}

export default Search
