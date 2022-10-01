import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";
import About from "./views/About";
import Home from "./views/Home";
import Projects from "./views/Projects";
import V404 from "./views/V404";

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route index element={<Home/>}/>
                <Route path="projets" element={<Projects/>}/>
                <Route path="about" element={<About/>}/>
                <Route path="about" element={<About/>}/>
                <Route path="*" element={<V404/>}/>
            </Route>
        </Routes>
    </BrowserRouter>
    
  );
}

export default App;
