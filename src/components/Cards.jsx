import React from 'react'
import { Link } from 'react-router-dom';

import { AiFillStar } from 'react-icons/Ai';
const Cards = ({result}) => {
  console.log("result is Card ",result);
  try {
    if(result.length==0){
      return <div className='text-4xl text-black'> Not found no result</div>
    }
      const card = result.map(({show})=>{
      const {name,language,rating,image,premiered,id} = show;
      const {average} = rating;
      const {medium}=image;
      return(
        <Link key={id} className=" flex flex-col bg-white overflow-hidden border-b-4 w-1/4 p-5 shadow-lg" to={`/show/${id}`}>
        
        <img src={medium} alt={`Image of ${name}`}/>
        <div className="p-4 md:p-6 text-left">
        <p className="text-blue-500 font-semibold text-xs mb-1 leading-none">{premiered}</p>
        <div className="text-sm flex items-center justify-between">
        <p className="leading-none flex gap-2"><AiFillStar/>{average==null ? 'N/A': average}</p>
        <h3 className="font-semibold mb-2 text-xl leading-tight sm:leading-normal">{name}</h3>
        </div>
        </div>
        </Link>
        )})
        return (
          <div className='flex flex-wrap gap-8 justify-evenly mt-10  '>{card}</div>
        )
  } catch (error) {
      console.log(error)
    return <div className='text-4xl text-black'> Not found no result</div>

  }

}

export default Cards