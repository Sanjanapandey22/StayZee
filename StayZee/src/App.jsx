import Home from "./pages/Home"
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"
import { Route, Routes } from "react-router-dom"
import AllRooms from "./pages/AllRooms"
import RoomDetails from "./pages/RoomDetails"
import ExclusiveOffers from "./Components/ExclusiveOffers"
import Profile from "./pages/Profile"
import WishList from "./pages/WishList"


function App() {
  

  return (
    <>
    <Routes>

    <Route path ='/' element= {<><Navbar/><Home/><Footer/></>} />
    <Route path ='/rooms' element= {<><Navbar/><AllRooms/> </> }/>
      <Route path="/rooms/:id" element={<RoomDetails />} />
      <Route path ='/profile' element={<><Navbar/><Profile/><Footer/></>} />
      <Route path ='/wishlist' element={<><Navbar/><WishList/><Footer/></>} />
   </Routes>
    </>
  )
}

export default App
