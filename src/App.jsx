import Banner from "./Components/Banner"
import Navbar from "./Components/Navbar"


function App() {


  return (
    <div className="bg-[#ebe0cc] pt-5">

      <div className=" h-[100vh] max-w-7xl mx-auto ">
        <Navbar></Navbar>
        <Banner></Banner>
      </div>

    </div>
  )
}

export default App
