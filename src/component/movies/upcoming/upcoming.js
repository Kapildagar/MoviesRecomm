import React, { useEffect,useState } from "react"
import {  useSelector } from "react-redux/es/hooks/useSelector"
import { fetchupcominmovies, selectAllupcoming } from "../../../store/moviesSlice/moviesSlice"
import { useDispatch } from "react-redux";
import Card from "../card";
import Header from "../header/header";
import '../card.css'
import ReactLoading from 'react-loading';
;

export default function Upcoming(){
      const populardata=useSelector(selectAllupcoming).results;
      const dispatch=useDispatch();
      const type="spinningBubbles";
      const[isloading,setisloading]=useState(true);
    
      useEffect(()=>{
        setTimeout(()=>{
           setisloading(false)
        },1500)
      })
      useEffect(()=>{
        dispatch(fetchupcominmovies());
      },[])
    return(<>
       <Header />
        <h1 style={{color:"white" ,margin:"10px 40px"}}>Upcoming</h1>
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