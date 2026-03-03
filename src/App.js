
import { BrowserRouter,Routes,Route } from "react-router-dom"
import Home from "./pages/Home"
import FoundForm from "./pages/FoundForm"
import LostForm from "./pages/LostForm"
import Header from "./components/Header"
import Signup from "./pages/Signup"
import Login from "./pages/Login"
import ProtectedRoute from "./components/ProtectedRoute"
import ItemDetails from "./pages/ItemDetails"
import About from "./pages/About"
import Contact from "./pages/Contact"

export default function App(){

    return (
       <BrowserRouter>
       <div className=" min-h-screen bg-gradient-to-b from-[#3B6291] via-[#7A8DA1] to-[#E7BD67]">
        <Header></Header>
        <main className="container mx-auto px-4 py-10">
            <Routes>
                <Route path="/" element={<Home></Home>}/>
                <Route path="/about" element={<About></About>} />
                <Route path="/contact" element={<Contact/>} />
                <Route path="/login" element={<Login></Login>}/>
                <Route path="/signup" element={<Signup></Signup>}/>
                <Route path="/details/:type/:id" element={<ItemDetails></ItemDetails>} />

                {/*protected Routes */}
                
                <Route
                path="/found" element={
                    <ProtectedRoute>
                        <FoundForm/>
                    </ProtectedRoute>
                }
                />
            
                <Route
                path="/lost" element={
                    <ProtectedRoute>
                        <LostForm/>
                    </ProtectedRoute>
                }
                />
            </Routes>
        </main>
       </div>
       </BrowserRouter>

    )
}