import Hero from "../components/Hero"
import HomeCard from '../components/HomeCards'
import JobListings from '../components/JobListings'
import ViewAll from '../components/ViewAllJobs'
const HomePage = () => {
  return (
    <div>
        <Hero />
        <HomeCard />
        <JobListings isHome={true}/>
        <ViewAll />
    </div>
  )
}

export default HomePage