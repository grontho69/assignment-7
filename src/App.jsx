import Container from "./components/Container";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import bannerImg from "./assets/vector1.png"
import Banner from "./components/Banner";
import { ToastContainer } from "react-toastify";



function App() {
  return (
    <div>
      <Navbar />
    
      {/*Banner*/}
            <Container>
                <div className=" mt-20 mb-10 grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">
              <div  className=" flex   rounded-md w-full h-62.5 bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1))]
       ">
                  <img className=" overflow-hidden h-62.5" src={bannerImg} alt="" />
                  
                  <div className=" flex flex-col items-center justify-center flex-1  "><h1 className=" text-white font-bold text-center " >In-Progress</h1>
                    <p className=" text-white  text-4xl">0</p></div>
                  
                <img className=" overflow-hidden h-62.5 scale-x-[-1]" src={bannerImg} alt="" />
       </div>
              <div  className=" flex flex-1 w-full rounded-md  h-62.5 bg-[linear-gradient(90deg,rgba(84,207,103.68,1),rgba(0,130,122.2,1))]
       ">
                  <img className=" grid-cols-1 overflow-hidden h-62.5" src={bannerImg} alt="" />
                  
                  <div className=" flex flex-col items-center justify-center flex-1 "><h1 className=" font-bold text-center text-white" >Resolved</h1>
                    <p className=" text-white text-4xl">0</p></div>
                  
                  <img className=" grid-cols-1 overflow-hidden h-62.5 scale-x-[-1]" src={bannerImg} alt="" />
       </div>
      </div>
      </Container>
         
      {/*task section*/}
      <Container>
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
  
  
  <div className="lg:col-span-2">
    <h2 className="text-xl font-semibold mb-4">Customer Tickets</h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Ticket Card */}
      <div className="bg-white rounded-lg p-5 shadow-sm border">
        {/* Header */}
        <div className="flex items-start justify-between">
          <h3 className="font-semibold text-sm">
            Login Issues - Can't Access Account
          </h3>

          <span className="flex items-center gap-2 text-xs bg-green-100 text-green-600 px-3 py-1 rounded-full">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            Open
          </span>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-500 mt-2 line-clamp-2">
          Customer is unable to log in to their account. They've tried
          resetting their password multiple times but still...
        </p>

       
        <div className="mt-4 flex items-center justify-between text-xs text-gray-500">
          <div className="flex items-center gap-2">
            <span>#1001</span>
            <span className="text-red-500 font-semibold">HIGH PRIORITY</span>
          </div>

          <div className="flex items-center gap-3">
            <span>John Smith</span>
            <span className="flex items-center gap-1">
              📅 1/15/2024
            </span>
          </div>
        </div>
      </div>

      {/* Duplicate cards as needed */}
    </div>
  </div>

  
  <div className="bg-white rounded-lg p-1   h-fit">
    <h2 className="text-xl font-semibold">Task Status</h2>
    <p className="text-sm text-gray-500 mt-1">
      Select a ticket to add to Task Status
    </p>

    

    
    <div className="mt-6">
      <h3 className="font-semibold text-lg">Resolved Task</h3>
      <p className="text-sm text-gray-500 mt-2">
        No resolved tasks yet.
      </p>
    </div>
  </div>

</div>

      </Container>
<ToastContainer/>
      <Footer/>
    </div>
  );
}
export default App;