import React, { useEffect,useState } from "react"
import {  useSelector } from "react-redux/es/hooks/useSelector"
import { fetchtopratedmovies, selectAlltoprated } from "../../../store/moviesSlice/moviesSlice"
import { useDispatch } from "react-redux";
import Card from "../card";
import Header from "../header/header";
import '../card.css'
import ReactLoading from 'react-loading';
;

export default function Toprated(){
      const populardata=useSelector(selectAlltoprated).results;
      const dispatch=useDispatch();
      const type="spinningBubbles";
      const[isloading,setisloading]=useState(true);
    
      useEffect(()=>{
        setTimeout(()=>{
           setisloading(false)
        },2000)
      },[])
      useEffect(()=>{
        dispatch(fetchtopratedmovies());
      },[])
    return(<>
       <Header />
        <h1 style={{color:"white" ,margin:"10px 40px"}}>Top Rated</h1>
        {isloading?
      <div style={{ width: "fit-content", margin: "200px auto 0"}}>
            <ReactLoading type={type} color={"white"} height={150} width={150} />
         </div>
    :
      <div className="containers">
          {populardata?.map((items)=>{
           return( <Card  key={items.id} items={items}/>)
        })}
        </div>}
    </>)
}