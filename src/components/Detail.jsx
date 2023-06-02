import React, { useEffect } from 'react'
import { useState } from 'react';
import { Routes, Route, useParams } from 'react-router-dom';
import Profile from './Profile';

const Detail = () => {
    let { show } = useParams();
    console.log(show);

    const [result,setResult] = useState([]);
    useEffect(() => {
      async function logJSONData() {
        const response = await fetch(`https://api.tvmaze.com/shows/${show}`);
        const jsonData = await response.json();
        console.log(jsonData);
        if(jsonData){
          setResult(jsonData);
        }else{
          setResult(none)
        }
        console.log("Result is Details ",result)
      }
      logJSONData();
    
    }, [])
    
    if(result){
        return (<Profile data={result} />)

      }
    else{
        return(<div>Data not found</div>)
    }
}

export default Detail