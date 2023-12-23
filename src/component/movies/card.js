
import { useEffect, useState } from "react"
import "./card.css"
import { Link } from "react-router-dom";


export default function Card(props){
    const [value,setvalue]=useState(false)
   
     function toogle(){
        setvalue(!value);
     }
   
     
   
    return(<>
      {
        
      <Link to={`/movie/${props.items.id}`}> <div className="card" onMouseEnter={toogle} onMouseLeave={toogle}>
         <div className="imgs"><img  src={`https://image.tmdb.org/t/p/w500${props.items.poster_path}`} alt="imdbimage"/></div>
        <div className="moviecontent" style={{display:value? "":"none"} }> 
        <div className="title"> <span>{props.items.original_title}</span></div>
        <div className="rating"><div><i className="fa-solid fa-star"></i></div><span>{props.items.vote_average}</span></div>
        <p  className="overview">{props.items.overview.slice(0,100)}</p>
      </div>
      </div>
      </Link> 
      }
      </>
    )
    
}