import React from 'react'
import { useEffect } from 'react';
import { AiFillStar,AiFillClockCircle } from 'react-icons/Ai';



const Profile = ({data}) => {
  console.log("Profile Data  is ",typeof(data));
  console.log("prifile data is ",data)
  try {
    const {name,genres,image,language,premiered,rating,summary} = data;
    const {average} = rating;
    const {medium} = image;  
    return (
      <div class="max-w-lg mx-auto my-10 bg-white rounded-lg shadow-md p-5">
      <img class="w-32 h-32 rounded-2xl  mx-auto" src={medium}/>
      <h2 class="text-center text-2xl font-semibold mt-3">{name}</h2>
      <p class="text-center text-gray-600 mt-1">{language}</p>
      <div class="flex justify-center mt-5">
      {genres.map(element => {
        console.log(element)
        return(
          <div className=" border border-indigo-500 bg-indigo-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-indigo-600 focus:outline-none focus:shadow-outline">{element}</div>
        )
      })}
    </div>
      <div class="mt-5">
      <div className='flex gap-2 justify-evenly'>
      <p className="leading-none flex gap-2"><AiFillStar/>{average == null ? 'N/A': average}</p>
      <p className="leading-none flex gap-2"><AiFillClockCircle/>{premiered == null ? 'N/A': premiered}</p>
      </div>
        {
          <p className="text-gray-600 mt-2"> <div dangerouslySetInnerHTML={{ __html: summary }} /></p>
        }
  <button className="m-5 bg-gradient-to-b w-max mx-auto text-blue-500 font-semibold from-slate-100 to-blue-150 px-10 py-3 rounded-2xl shadow-blue-400 shadow-md border-b-4 hover border-b border-blue-200 hover:shadow-sm transition-all duration-500">Book Show</button>
      </div>
    </div>
    )
  } catch (error) {
    return <div>Fetching Result</div>
    
  }
 
}


export default Profile