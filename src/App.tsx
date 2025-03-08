import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ChiSiamo from './pages/ChiSiamo';
import Blog2 from './pages/Blog2';
import CasiStudio from './pages/CasiStudio';
import BlogPost from './pages/BlogPost';
import CaseStudyPost from './pages/CaseStudyPost';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Cookies from './pages/Cookies';
import CookieBanner from './components/CookieBanner';
import { HelmetProvider } from 'react-helmet-async';

function App() {
  return (
    <HelmetProvider>
      <Router basename="/">
        <div className="min-h-screen bg-gradient-to-b from-black via-black to-[#274f36] text-white">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/chi-siamo" element={<ChiSiamo />} />
            <Route path="/blog" element={<Blog2 />} />
            <Route path="/blog/:id" element={<BlogPost />} />
            <Route path="/casi-studio" element={<CasiStudio />} />
            <Route path="/casi-studio/:id" element={<CaseStudyPost />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/cookies" element={<Cookies />} />
          </Routes>
          <Footer />
          <CookieBanner />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;