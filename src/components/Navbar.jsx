 import { NavLink } from "react-router-dom"
 const Navbar = () => {
    const linkClass = ({isActive}) => isActive ? 'bg-black text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2' :'text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2'
     return (
     <nav className="bg-indigo-700 border-b border-indigo-500">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-6">
            <div className="flex items-center justify-between h-20">
                <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
                    <NavLink to="/" className="flex flex-shrink-0 items-center mr-4">
                        <img
                         className="h-10 w-auto"
                         src="images/logo.png" 
                        />
                         <span className="hidden md:block text-2xl text-white font-bold ml-2">React</span>
                    </NavLink>
                    <div className="ml-auto">
                        <div className="flex space-x-2">
                            <NavLink to="/" className={ linkClass}>Home</NavLink>
                            <NavLink to="/jobs" className={ linkClass}>Jobs</NavLink>
                            <NavLink to="/add-jobs" className={ linkClass}>Add jobs</NavLink>
                        </div>
                    </div> 
                </div>
            </div>
        </div>
      </nav>
    )
 }
 
 export default Navbar