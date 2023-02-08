import { useState , useEffect , useContext , createContext } from 'react'



export const MovieContext = createContext()

export  function MoviesContextProvider (props) {
  const [ movies , setMovies ] = useState([]); 
  const URL = 'http://localhost:8000/api/movies'
  async function getData() {
      const data = await fetch('http://localhost:8000/api/movies');
      const jsonData =  await data.json();
      const arrayData = Array.from(jsonData);
      setMovies(arrayData);
  }

  useEffect(() =>{
    getData();
    console.log('hola');
  },[])

  async function createMovie(movie){
    console.log('la movie antes de enviar es ' , movie);
    const sendMovie = await fetch(URL, {
      method: 'POST',
      headers : {
        'Content-Type': 'application/json'
      },
      body : JSON.stringify(movie)
    })
  }
  async function deleteMovie(id){
    const resp = await fetch(URL+`/${id}`,{
      method: 'DELETE'
    });
    let pos = movies.map( e => e.id ).indexOf(id);
    movies.splice(pos,1);
    setMovies(movies);
  }
  async function updateMovies(id , movie){
    console.log(movie);
    console.log(id);
    try{
      const resp = await fetch(URL+`/${id}`,{
        method: 'PATCH',
        headers:{
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({movie})
      })
      let pos = movies.map(m => m.id).indexOf(id);
      console.log(pos);
      movies[pos] = movie;
      
    }catch(e){
      console.error(e);
    }
  }


  return(
    <MovieContext.Provider value={{movies,setMovies , createMovie , deleteMovie , updateMovies}} >
      {props.children}
    </MovieContext.Provider>
  )
}
