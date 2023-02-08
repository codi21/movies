import { useState , useEffect } from 'react'
import { useContext } from 'react'
import { MovieContext } from '../contexts/moviesContext'
import { AiTwotoneStar} from 'react-icons/ai'
import generic from '../assets/generic.png'

export function CardMovie({id,name, punctuation , casting , path_image_location}){
  
  let myHTML = <AiTwotoneStar/>
  let bb = [];
  for( let i = 0 ; i <  punctuation ; i++){
    bb.push(<AiTwotoneStar key={i}/>);
  }
  return(
    <div className="container border-2 flex  flex-col justify-center rounded-md  max-w-xs shadow-2xl">
      <div className="p-2 flex justify-center " >
        <img src={path_image_location} className=""/>

      </div>
      <h1 className="text-center text-lg font-medium pt-2">{name}</h1>
      <ul className="flex flex-row gap-2 justify-center" > 
        {
          casting.map((actor,index) => {
            return <li key={index}>{actor}</li>
          })
        }
      </ul>
      <div className="flex flex-row justify-center text-amber-300 p-4">
        {bb}
      </div>
    </div>

  )
}
