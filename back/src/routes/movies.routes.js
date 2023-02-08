import { Router } from 'express';
import { getMovies , getMoviesByPage , createMovie , updateMovie,deleteMovie} from'../controllers/movies.controller.js';

const router = Router();

router.get('/movies', getMovies);
router.get('/movies/:page', getMoviesByPage);

router.post('/movies', createMovie);
router.patch('/movies/:id', updateMovie);
router.delete('/movies/:id', deleteMovie);
export default router;
