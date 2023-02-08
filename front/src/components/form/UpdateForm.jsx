import Select from 'react-select';
import { useContext , useEffect , useState } from 'react';
import  { MovieContext } from '../../contexts/moviesContext'
export const UpdateForm = () => {
  
  const [ options , setOptions] = useState([]);
  const [ selected , setSelected] = useState(-1);
  const [ index , setIndex ] = useState(-1);
  const [ nameSelected , setNameSelected] = useState('');
  const [ scoreSelected, setScoreSelected] = useState();
  const [ selectedCast , setSelectedCast] = useState([]);
  const { movies , updateMovies } = useContext(MovieContext);
  const [ newMovie, setNewMovie] = useState({
    name:'',
    punctuation: 0,
    casting : []
  });
  let copy = [];
  
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
    let selectedMovie = movies.find( x =>  x.id === e.value)
    setIndex(selectedMovie.id);
    setNameSelected(selectedMovie.name);
    setScoreSelected(selectedMovie.punctuation);
    setSelectedCast(selectedMovie.casting);
    setNewCasting([...selectedMovie.casting]);
    setNewMovie({...newMovie,casting : selectedMovie.casting});
  }

  const [ newName , setNewName] = useState('');
  function handleNameInput(e){
    const {name ,value} =  e.target;
    setNewMovie({...newMovie,name:value});
    setNewName(value);
  }
  const [ newScore , setNewScore ] = useState();
  function handleScoreInput(e){
    const { name , value} = e.target;
    setNewScore(value);
    setNewMovie({...newMovie,punctuation:value});
  }
  const [ newCasting , setNewCasting ] = useState(selectedCast);
  function handleNewCast(e,i){
    newCasting[i] = e.target.value; 
    if(e.target.value == ''){
      newCasting[i] = selectedCast[i];
    }
    setNewMovie({...newMovie,casting : newCasting});

  }
  function handleSubmit(e){
    e.preventDefault();
    updateMovies(index,newMovie);

  }

  return(
    <>
      <Select options={options} onChange={handleSelect}/>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" value={newName} placeholder={nameSelected} onChange={handleNameInput}/>
        <input type="number" name="punctuation" value={newScore} placeholder={scoreSelected} onChange={handleScoreInput}/>
        <label >Casting : </label>
    {
      selectedCast.map((cast,index)=>{
        return <input key={index} indexd={index} name={index} type="text" placeholder={cast} onChange={ e => handleNewCast(e,index)} />
      })
        
    }
        <button type="submit" onClick={handleSubmit}> 
          Send Changes
        </button>
      </form>
    </>
  )
}
