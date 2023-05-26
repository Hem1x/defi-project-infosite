import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import MainLayout from './layouts/MainLayout';
import About from './components/pages/About'
import Community from './components/pages/Community'
import FAQ from './components/pages/FAQ'
import News from './components/pages/News'
import Partners from './components/pages/Partners'
import Roadmap from './components/pages/Roadmap'
import Team from './components/pages/Team'
import WhatDeFi from './components/pages/WhatDeFi/WhatDeFi'
import Vacancies from './components/pages/Vacancies'
import Main from './components/pages/Main'


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<MainLayout />}>
            <Route path='main' element={<Main />}/>
            <Route path='about' element={<About />}/>
            <Route path='community' element={<Community />}/>
            <Route path='faq' element={<FAQ />}/>
            <Route path='news' element={<News />}/>
            <Route path='partners' element={<Partners />}/>
            <Route path='roadmap' element={<Roadmap />}/>
            <Route path='team' element={<Team />}/>
            <Route path='vacancies' element={<Vacancies />}/>
            <Route path='what-is-defi' element={<WhatDeFi />}/>
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
