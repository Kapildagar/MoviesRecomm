import React from "react";
import './details.css'
import img from "./img/739722.jpg";

const Details=(props)=>{

    const genre=props.object.genres
    
    return(
        <>
            <div className="main">
             <div className="img1">{props.object.backdrop_path?<img src={`https://image.tmdb.org/t/p/w500${props.object.backdrop_path}`} alt="backimg" />:<img src={img} alt="backimg" />}</div>
            <div className="information" >
            <div className="img2"><img src={`https://image.tmdb.org/t/p/w500${props.object.poster_path}`} alt="backimg" /></div>
             <div className="info">
               {props.object.original_name?<h1>{props.object.original_name}</h1>:<h1>{props.object.original_title}</h1>}
                <div>
                 <span className="mar">{props.object.vote_average}</span>
                 <span ><i className="fa-solid fa-star"/>
                 </span><span className="mar">{props.object.vote_count}</span>
                 <span ><i class="fa-solid fa-square-poll-vertical"></i></span></div>
                 <span className="mar">{props.object.runtime}</span>
                 <span><i className="fa-solid fa-timer" /></span>
                 <div className="genre">
                  {genre?.map((ge)=>{
                return(<>
                       <div className="genbutton">{ge.name}</div>
                       </>)
                       
            })}</div>
            </div>
                  </div>
                 
            <div className="para">
            <h1 >overview</h1>
            <p >{props.object.overview}</p>
            </div>
            </div>
        </>
    )
}

export default Details