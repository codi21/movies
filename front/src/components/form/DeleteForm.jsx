import Select from 'react-select';
import { useContext , useEffect , useState } from 'react';
import  { MovieContext } from '../../contexts/moviesContext'
export const DeleteForm = () => {
  const URL = 'http://localhost:8000/api/movies'
  const [ options , setOptions] = useState([]);
  const [ selected , setSelected] = useState(-1);
  const [ index , setIndex] = useState(0);
  const { movies , deleteMovie, setMovies } = useContext(MovieContext);
  const newOptions = [];
  useEffect(()=>{

    movies.forEach((movie) => {
      newOptions.push({
        value: movie.id,
        label: movie.name
      })

      })
    setOptions(newOptions);
   
    
  },[movies]);
  function handleSelect(e) {
    setSelected(e.value)
  }
  async function deleteButton(e){
    e.preventDefault();
    deleteMovie(selected);
    const pos = options.map(e => e.value).indexOf(selected);
    options.splice(pos,1)
    setOptions(options);
    
  }
  return(
    <form>
      <Select options={options} onChange={handleSelect}/>
      <button onClick={deleteButton}>Delete Movie</button>
    </form>

  )
}
