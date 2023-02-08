import {CardMovie } from './CardMovie'
import { useContext , useEffect } from 'react'
import { MovieContext } from '../contexts/moviesContext.jsx'
export function ListMovies(){
  const { movies }  = useContext(MovieContext);
  useEffect(()=>{
  },[]);
  return(
    <div className="container grid grid-cols-3 grid-row-3 p-3 gap-3">
    {  
      movies.map((movie,index ) =>{
        return <CardMovie 
        key={movie.id} name={movie.name} punctuation={movie.punctuation} 
        casting={movie.casting}
        path_image_location={movie.path_image_location}
        ></CardMovie>
      })
    }
    </div>
  )
}
