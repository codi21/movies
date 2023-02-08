import { pool } from '../../db.js';
export const getMovies = async(req,res) => {
  const movies = await pool.query('SELECT * FROM movies');
  res.send(movies[0]);
}
export const getMoviesByPage = async(req,res) => {
  const page =  req.params.page;
  const offset = ( page - 1 ) * 9 ;
  const movies = await pool.query('SELECT * FROM movies LIMIT 9 OFFSET ?',offset);
  res.send(movies[0]);
}

export const getMovie = async(req,res) => {
  const [movie] = await pool.query('SELECT * FROM movies WHERE id= ?',[req.params.id]);
  res.json(movie[0]);
}
export const createMovie = async(req,res) => {
  const { name , casting , punctuation , path_image_location } = req.body; 
  console.log(path_image_location);

  try{
    const [row] = await pool.query('INSERT INTO movies(name,punctuation,casting,path_image_location) VALUES(?, ?,?,?)',[name,punctuation,JSON.stringify(casting),path_image_location]);
    res.send({
      insertId : row.insertId,
       name,
       punctuation,
       casting
    });
  }catch(e){
    res.status(500).json({
      message : 'Error'
    });
  }
}


export const updateMovie = async(req,res) => {
  const id = req.params.id;
  console.log(id);
  const { name , casting  , punctuation , path_image_location } = req.body.movie;
  console.log(name);
  try {
    const resQuery = await pool.query('UPDATE movies SET name=IFNULL(?,name),punctuation=IFNULL(?,punctuation),casting=IFNULL(?,casting),path_image_location=IFNULL(?,path_image_location) WHERE id=?', [name,punctuation,JSON.stringify(casting),path_image_location,id]);
   res.send({
     resQuery
   });
  }catch(e){
    console.log(e);
  }
}
export const deleteMovie =async(req,res) => {
  const params = req.params.id;
  try{
    console.log(typeof params); 
    const movieDeleted = await pool.query('DELETE FROM movies WHERE id = ? ', [params])
   res.send(
     movieDeleted
   )
  }catch(err){
    console.error(err);
  }
}
