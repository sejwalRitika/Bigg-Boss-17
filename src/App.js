import React from "react";
import { Route, Routes } from "react-router-dom";
import Drama from "./Drama";
import Emotion from "./Emotion";
import Home from "./Home";
import Navbar from "./Navbar";
import Video from "./Video";
import "./style.css";
const App = () =>{
return(
<>
<Navbar/>
<Routes>
<Route path="/" Component={Home}/>
<Route path="/emotion" Component={Emotion}/>
<Route path="/drama" Component={Drama}/>
<Route path="/video" Component={Video}/>
</Routes>
</>
)
}
export default App;
