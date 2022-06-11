
import Navbar from '../components/Navbar'
import Announcements from '../components/Announcements'
import Slider from '../components/Slider'
import Categories from '../components/Categories'

function Homepage() {
  return (
    <div>
        <Announcements/>
        <Navbar/>
        <Slider/>
        <Categories/>
    </div>
  )
}

export default Homepage