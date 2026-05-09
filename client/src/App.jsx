import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import LandingPage from "./pages/LandingPage";
import Dashboard from "./adminComponents/Dashboard";
import AddProjects from "./adminPages/manageProjects/AddProjects";
import ProjectAction from "./adminPages/manageProjects/ProjectActions";
import ProfileAction from "./adminPages/manageProfile/ProfileActions";
import Message from "./adminPages/Message";
import UpdateProject from "./adminPages/manageProjects/UpdateProject";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/update-project/:id" element={<UpdateProject />} />
         <Route path="/messages" element={<Message/>}/>
         <Route path="/profile-actions" element={<ProfileAction/>}/>
         <Route path="/project-actions" element={<ProjectAction/>}/>
        <Route path="/add-project" element={<AddProjects/>}/>
        <Route path="/admin" element={<Dashboard/>}/>
         <Route path="/" element={<LandingPage/>} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
