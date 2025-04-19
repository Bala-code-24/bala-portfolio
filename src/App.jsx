import { BrowserRouter, Routes, Route } from "react-router-dom";
import { 
  About, 
  Contact, 
  Experience, 

  Hero, 
  Navbar, 
  Tech, 
  Works, 
  StarsCanvas 
} from "./components";
import ProjectDetails from "./components/ProjectDetails"; // Default import

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
        </div>
        
        <Routes>
          {/* Home Route */}
          <Route path="/" element={
            <>
              <Hero />
              <About />
              <Experience />
              <Tech />
              <Works />
              
              <div className='relative z-0'>
                <Contact />
                <StarsCanvas />
              </div>
            </>
          } />

<Route path="/projects" element={<Works />} />
<Route path="/projects/:projectId" element={<ProjectDetails />} /> 
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
