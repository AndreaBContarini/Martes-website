import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Layout } from './components/layout/Layout';
import { Home } from './pages/Home';

import { AITransformationPartner } from './pages/AITransformationPartner';
import { FormazioneAziendale } from './pages/FormazioneAziendale';
import { Prisma } from './pages/Prisma';
import { CasiStudio } from './pages/CasiStudio';
import { CaseStudyDetail } from './pages/CaseStudyDetail';
import { Blog } from './pages/Blog';
import { BlogDetail } from './pages/BlogDetail';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Cookies from './pages/Cookies';
import Newsletter from './pages/Newsletter';
import Templates from './pages/Templates';

import { Team } from './pages/Team';



const helmetContext = {};

function App() {
  return (
    <HelmetProvider context={helmetContext}>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="chi-siamo" element={<Team />} />
            <Route path="ai-transformation-partner" element={<AITransformationPartner />} />
            <Route path="formazione-aziendale" element={<FormazioneAziendale />} />
            <Route path="prisma" element={<Prisma />} />
            <Route path="casi-studio" element={<CasiStudio />} />
            <Route path="casi-studio/:id" element={<CaseStudyDetail />} />
            <Route path="blog" element={<Blog />} />
            <Route path="blog/:id" element={<BlogDetail />} />
            
            {/* Utilities */}

            <Route path="newsletter" element={<Newsletter />} />
            <Route path="templates" element={<Templates />} />

            {/* Legal */}
            <Route path="privacy" element={<Privacy />} />
            <Route path="terms" element={<Terms />} />
            <Route path="cookies" element={<Cookies />} />
            {/* Future Routes */}
            {/* <Route path="chi-siamo" element={<About />} /> */}
            {/* <Route path="soluzioni-custom" element={<CustomSolutions />} /> */}
            {/* <Route path="formazione-aziendale" element={<Training />} /> */}
            {/* <Route path="agente-reportistica" element={<PrismaAgent />} /> */}
            {/* <Route path="casi-studio" element={<CaseStudies />} /> */}
            {/* <Route path="casi-studio/:id" element={<CaseStudyDetail />} /> */}
            {/* <Route path="blog" element={<Blog />} /> */}
            {/* <Route path="blog/:id" element={<BlogPost />} /> */}
            {/* <Route path="privacy" element={<Privacy />} /> */}
            {/* <Route path="terms" element={<Terms />} /> */}
            {/* <Route path="cookies" element={<Cookies />} /> */}
          </Route>
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

export default App;
