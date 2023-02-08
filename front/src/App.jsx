import { useState } from 'react'
import './App.css'
import { ListMovies } from './components/ListMovies'
import { Title } from './components/Title'
import { AddMovie } from './pages/AddMovie'
import { DeleteMovie } from './pages/DeleteMovie'
import { UpdateMovie} from './pages/UpdateMovie'
import { Home } from './pages/Home';
import { Navbar } from './components/Navbar';
import { BrowserRouter as Router , Route , Routes , Navigate } from 'react-router-dom'

function App() {

  return (
    <>
      <Title/>
        <Router>
          <Navbar/> 
          <Routes>
          <Route path='/home' element={<Home/>}/>
          <Route path='/' element={<Navigate to="/home"/>}/>
          <Route path='/add-movie' element={ <AddMovie/>}/>
          <Route path='/delete-movie' element={ <DeleteMovie/>}/>
          <Route path='/update-movie' element={ <UpdateMovie/>}/>
          <Route path='*' element={<h1> Page Not Found </h1>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
