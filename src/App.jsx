import { 
  Route, 
  createBrowserRouter,
  createRoutesFromElements, 
  RouterProvider 
} from 'react-router-dom'

// import Hero from "./components/Hero"
// import HomeCards from "./components/HomeCards"
// import JobListings from "./components/JobListings"
// import Navbar from "./components/Navbar"
// import ViewAllJobs from "./components/ViewAllJobs"
import HomePage from './pages/HomePage'
import MainLayout from './layouts/MainLayout'
import JobsPage from './pages/JobsPage'
import NotFound from './pages/NotFound'
import JobPage, { jobLoader } from './pages/JobPage'
import AddJobPage from './pages/AddJobPage'

 const addJob = async (newJob) => {
    await fetch('http://localhost:8000/jobs', {
    method:'POST',
    headers:{
      'Content-Type':'application.json'
    },
    body:JSON.stringify(newJob),
   });
   return; 
 };

 //Delete Job
 const deleteJob = async (id) => {
    await fetch(`http://localhost:8000/jobs/${id}`,{
    method:'DELETE',
   });
   return;
 }
const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>
         <Route index element= {<HomePage />} />
         <Route path='/jobs' element={<JobsPage />} />
         <Route path='*' element ={<NotFound />} />
         <Route path='jobs/:id' element={<JobPage deleteJob={deleteJob} />} loader={jobLoader} />
         <Route path='add-jobs' element={<AddJobPage addJobSubmit={addJob} />}/>
      </Route>
    )
)

const App = () => {
  return (
    //  <>
    //  <Navbar />
    //  <Hero/>
    //  <HomeCards />
    //  <JobListings />
    //  <ViewAllJobs />
    //  </>
     <RouterProvider router={router} />
  )
}

export default App