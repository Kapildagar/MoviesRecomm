import React, { useEffect, useState} from "react"
import ReactLoading from 'react-loading';
import Skeleton from "react-loading-skeleton"
import Header from "../header/header"
import Card from "../card"
import "../card.css"
import { fetchmovies,
   selectAllmovies ,
   selectAllstatus,
   selectAllupcoming,
   fetchupcominmovies,
   fetchtopratedmovies,
   selectAlltoprated} from "../../../store/moviesSlice/moviesSlice"
import { useDispatch, useSelector } from "react-redux"
import { fetchseries, selectAllseries } from "../../../store/moviesSlice/tvseriesSlice"
import Tvcard from "../tvcard"

export default function Home(){
  const dispatch=useDispatch();
  const populardata=useSelector(selectAllmovies).results;
  const upcomingdata=useSelector(selectAllupcoming).results;
  const toprated=useSelector(selectAlltoprated).results;
  const poststatus=useSelector(selectAllstatus)
  const populartvshow=useSelector(selectAllseries).results;
  
 
   useEffect(()=>{
     
     dispatch(fetchmovies())
     dispatch(fetchupcominmovies())
     dispatch(fetchtopratedmovies())
     dispatch(fetchseries())
   },[dispatch])


 
    return(<>
    
   
    <Header />
    <h1 style={{color:"white" ,margin:"10px auto",width:"fit-content"}}>Movies</h1>
    <h1 style={{color:"white" ,margin:"10px 40px"}}>Popular</h1>
      <div className="container">
       
          {populardata?.map((items)=>{
           return( <Card  key={items.id} items={items}  />)
        })}
        </div>
         

        <h1 style={{color:"white" ,margin:"10px 40px"}}>upcoming</h1>
      <div className="container">
          {upcomingdata?.map((items)=>{
           return( <Card  key={items.id} items={items}/>)
        })}
        </div>

        <h1 style={{color:"white" ,margin:"10px 40px"}}>Top Rated</h1>
      <div className="container">
          {toprated?.map((items)=>{
           return( <Card  key={items.id} items={items}/>)
        })}
        </div>

        <h1 style={{color:"white" ,margin:"10px auto",width:"fit-content"}}>TV Show</h1>
    <h1 style={{color:"white" ,margin:"10px 40px"}}>Popular</h1>
      <div className="container">
          {populartvshow?.map((items)=>{
           return( <Tvcard  key={items.id} items={items} />)
        })}
        </div>
        
     </>)
}