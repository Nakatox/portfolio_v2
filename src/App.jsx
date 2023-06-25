import { useEffect, useState } from 'react'
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Header from './Components/Header';
import Home from './Pages/Home';
import Notfound from './Pages/Notfound';
import Projects from './Pages/Projects';
import Timeline from './Pages/Timeline';
import Resume from './Pages/Resume';
import { getAllRepositories } from './Services/API';


function App() {

  const [repo, setrepo] = useState([])

    useEffect(async () => {
        const data = await getAllRepositories()
        setrepo(data)
    }, [])

  return ( 
  <BrowserRouter>
    <Header />
    <Routes>
      <Route exact path="/" element={<Home />}/>
      <Route exact path="/about" element={<Timeline />}/>
      <Route exact path="/projects" element={<Projects data={repo} />}/>
      <Route exact path="/resume" element={<Resume />}/>
      <Route path="*" element={<Notfound />}/>
    </Routes>
  </BrowserRouter>
  )
}

export default App
