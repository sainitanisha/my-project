import { NavLink,Route,Routes } from "react-router-dom";
import { Add } from "./components/Add";
import { Findall } from "./components/Findall";
import { Find } from "./components/Find";
import { Delete } from "./components/Delete";
import { Update } from "./components/Update";
import { Footer } from "./Footer";
import './App.css';



function App(){
    return(
        <div>
            <h1 style={{ color:" white", backgroundColor:"red", width:"100%",margin:"auto", height:"37px",textAlign:"center"}}><marquee>  Employees Management System</marquee>
            
            </h1>
           
            <nav>
                <NavLink to={"/"}>➕Add</NavLink>
                <NavLink to={"/Update"}>🔃Update</NavLink>
                <NavLink to={"/Delete"}>❌Delete</NavLink>
                <NavLink to={"/find"}>🔍Find</NavLink>
                <NavLink to={"/Findall"}>🕵Findall</NavLink>
            
            </nav>
            <hr/>
            <Routes>
                <Route path="/" element={<Add/>}/>
                <Route path="/Update" element={<Update/>}/>
                <Route path="/Delete" element={<Delete/>}/>
                <Route path="/Find" element={<Find/>}/>
                <Route path="/Findall" element={<Findall/>}/>
            </Routes>

           <Footer/>
        </div>
    )
}
export default App;