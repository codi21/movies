import { useState , useEffect } from 'react';
import { useContext  } from 'react';
import { MovieContext } from '../../contexts/moviesContext' 
export function FormAddMovie (){
  const [ actor , setActor ] = useState('');
  const {createMovie , movies,setMovies} = useContext(MovieContext);
  const [ movie, setMovie] = useState({name: '',punctuation: 0 , casting:[] , path_image_location :""});
  useEffect(()=>{
  },[])

  function handleSetCast(e){
    e.preventDefault();
    //setCasting([...casting,actor]); 
    const casting = [...movie.casting,actor];
    console.log(casting);
    setMovie({...movie,
      casting});
    console.log(movie);
    setActor('');
  }
  function handleActorChange(e){
    e.preventDefault();
    setActor(e.target.value);
    
  }
  function handleStars(e){
    e.preventDefault();
    setMovie({...movie,punctuation:e.target.value});
  }
  function handleName(e){
    e.preventDefault();
    setMovie({...movie,name:e.target.value});
  }
  function handleSubmit(e){
    e.preventDefault();
    console.log(movie);
    setMovie({name:'',punctuation:0,casting:[],path_image_location:""});

    createMovie(movie);

    setMovies([...movies,movie])
  
  }
  function handleImageLocation(e){
    setMovie({ ...movie,
      path_image_location: e.target.value
    })

  }

  return(
    <form  className="container grid grid-cols-2 grid-row-3"> 
      <div>
        <label>Pelicula :</label>
        <input type="text" value={movie.name} onChange={handleName}/>
      </div>

      <div>
        <label>Casting :</label> 
        <input type="text" value={actor} onChange={handleActorChange}/>
          <button onClick={handleSetCast}>Add Actor/Actress</button>
        <ul>
          {
           movie.casting.map((value,index)=>{
             return <li key={index}>{value}</li>
           })
          }
        </ul>
      </div>
      <div>
        <label>Puncutation :</label> 
        <input type="number" value={movie.punctuation} onChange={handleStars} />
      </div>
      <div>
      <label>Image location:</label> 
      <input type="text" name="path_image_location"  onChange={handleImageLocation}/>
      </div>
      <div>
      <button onClick={handleSubmit} >Send Movie </button>
      </div>
    </form>
  )
}

