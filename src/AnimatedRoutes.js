import React from 'react'
import {Routes, Route, useLocation} from 'react-router-dom'
import {AnimatePresence} from 'framer-motion'
import MainLayout from './layouts/MainLayout';
import About from './pages/About/About'
import Community from './pages/Community/Community'
import FAQ from './pages/FAQ/FAQ'
import News from './pages/News/News'
import Partners from './pages/Partners/Partners'
import Roadmap from './pages/Roadmap/Roadmap'
import Team from './pages//Team/Team'
import WhatDeFi from './pages/WhatDeFi/WhatDeFi'
import Vacancies from './pages/Vacancies/Vacancies'
import Main from './pages/Main/Main'

const AnimatedRoutes = () => {
    const location = useLocation()

    return (
        <AnimatePresence>
        <Routes location={location} key={location.pathname}>
            <Route path="/" element={<MainLayout />}>
            <Route path="/main" element={<Main />}/>
            <Route path="/about" element={<About />} />
            <Route path="/community" element={<Community />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/news" element={<News />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/roadmap" element={<Roadmap />} />
            <Route path="/team" element={<Team />} />
            <Route path="/vacancies" element={<Vacancies />} />
            <Route path="/what-is-defi" element={<WhatDeFi />} />
            </Route>
        </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes