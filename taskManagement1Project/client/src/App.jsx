import { BrowserRouter,Routes,Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home"
import UserLogin from "./pages/UserLogin";
const App=()=>{
  return(
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
       <Route index element={<Home/>}/>
       <Route path="home" element={<Home/>}/>
    
       <Route path="userlogin" element={<UserLogin/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}
export default App;