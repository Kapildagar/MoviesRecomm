import React, { useEffect, useState } from "react";
import Header from "../header/header";
import ReactLoading from 'react-loading';
import Details from "./details";
import { useParams } from "react-router-dom";

const Detailpage = () => {
   const { id } = useParams();
   console.log(id)

   const [Object, setobject] = useState({});
   const type="spinningBubbles";
 

   useEffect(() => {
      fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=5b3006765f2e152b781df0121aa15d51`)
         .then(response => response.json())
         .then(data => setobject(data))
         .catch(err => console.log(err))
   }, [])

   return (<>
      <Header />
      {Object ?
         <Details object={Object} />:
         <div style={{ width: "fit-content", margin: "200px auto 0" ,height:"65vh"}}>
            <ReactLoading type={type} color={"white"} height={150} width={150} />
         </div>
         
      }
           </>)
      
}
export default Detailpage