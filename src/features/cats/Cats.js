import React,{useEffect} from "react";
import {useSelector,useDispatch} from 'react-redux'
import CatList from "./CatList"
import {fetchCats} from "./catsSlice"

function Cats() {
 const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(fetchCats())
  },[dispatch])
  const catPics= useSelector((state=>state.entities))
 
  return (
    <div>
      <h1>CatBook</h1>
      <CatList catPics={catPics}/>
    </div>
  );
}

export default Cats;
