import React from 'react';
import { useState,useEffect } from 'react'
import Cards from './Cards';
const Search = () => {

    const [search, setSearch] = useState("all")

    const [result,setResult] = useState([])
  
    //Fetch Show details
    useEffect(() => {
      async function logJSONData() {
        const response = await fetch(`https://api.tvmaze.com/search/shows?q=${search}`);
        const jsonData = await response.json();
        console.log(jsonData);
        if(jsonData){
          setResult(jsonData);
        }else{
          setResult(none)
        }
      }
      logJSONData()
      console.log(logJSONData());
    }, [search])

  return (
    <>
    <label for="Search">Search</label><br/>
    <input className='border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none' id="Search" placeholder='Enter the show name ...' value={search} onChange={(e)=>setSearch(e.target.value)}/>
    <Cards result={result}/>
    </>
  )
  }


export default Search