import Banner from "./Components/Banner"
import Features from "./Components/Features"
import Navbar from "./Components/Navbar"


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
    </div>
  )
}

export default App
