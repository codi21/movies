import { NavLink } from 'react-router-dom'
export const Navbar = () => {
  return (
    <div className="">
      <ol className="grid grid-cols-4 text-center border-b-2 border-slate-600">
        <li className="hover:bg-gray-800 hover:text-white hover:cursor-pointer" >
          <NavLink to="/home">Home</NavLink>
        </li>
        <li className="hover:bg-gray-800 hover:text-white cursor-pointer">
          <NavLink to="/add-movie">Add Movie</NavLink>
        </li>
        <li className="hover:text-white hover:bg-gray-800 cursor-pointer">
          <NavLink to="/delete-movie">Delete Movie</NavLink>
        </li>
        <li className="hover:text-white hover:bg-gray-800 cursor-pointer">
          <NavLink to="/update-movie">Update Movie</NavLink>
        </li>
      </ol>
    </div>
  )
}
