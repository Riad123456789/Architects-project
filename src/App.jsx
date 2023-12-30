import Awards from "./Components/Awards"
import Banner from "./Components/Banner"
import Experience from "./Components/Experience"
import Features from "./Components/Features"
import Foother from "./Components/Foother"
import Navbar from "./Components/Navbar"
import Sponser from "./Components/Sponser"


function App() {


  return (
    <div>
      <div className="bg-[#ebe0cc] pt-5 px-3 pb-6">
        <div className="  max-w-7xl mx-auto ">
          <Navbar></Navbar>
          <Banner></Banner>
        </div>
      </div>
      <Features></Features>
      <Experience></Experience>
      <Awards></Awards>
      <Sponser></Sponser>
      <Foother></Foother>
    </div>
  )
}

export default App
