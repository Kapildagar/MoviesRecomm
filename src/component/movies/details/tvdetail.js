import React, { useEffect, useState } from "react";
import Header from "../header/header";
import Details from "./details";
import { useParams } from "react-router-dom";
import ReactLoading from 'react-loading';
const TvDetailpage=()=>{
           const {id}=useParams();
           console.log(id)

           const [Object,setobject]=useState({});
           const[isloading,setisloading]=useState(true);
           useEffect(()=>{
            setTimeout(()=>{
               setisloading(false)
            },1500)
          })

           useEffect(()=>{
              fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=5b3006765f2e152b781df0121aa15d51`)
              .then(response=>response.json())
              .then(data=>setobject(data))
              .catch(err=>console.log(err))
           },[])

           return(<>
              <Header/>
              {isloading?
              <div style={{ width: "fit-content", margin: "200px auto 0" ,height:"65vh"}}>
            <ReactLoading type={"spinningBubbles"} color={"white"} height={150} width={150} /></div>
            :
              <Details object={Object} />
             
         }
           </>)
}
export default TvDetailpage