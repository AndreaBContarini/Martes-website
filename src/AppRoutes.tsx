import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ChiSiamo from './pages/ChiSiamo';
import Blog2 from './pages/Blog2';
import CasiStudio from './pages/CasiStudio';
import BlogPost from './pages/BlogPost';
import CaseStudyPost from './pages/CaseStudyPost';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Cookies from './pages/Cookies';
import Newsletter from './pages/Newsletter';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/chi-siamo" element={<ChiSiamo />} />
      <Route path="/blog" element={<Blog2 />} />
      <Route path="/blog/:id" element={<BlogPost />} />
      <Route path="/casi-studio" element={<CasiStudio />} />
      <Route path="/casi-studio/:id" element={<CaseStudyPost />} />
      <Route path="/newsletter" element={<Newsletter />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="/cookies" element={<Cookies />} />
    </Routes>
  );
};

export default AppRoutes; 