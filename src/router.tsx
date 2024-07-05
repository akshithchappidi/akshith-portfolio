import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
// import About from './pages/About';
import Blogs from './pages/Blogs';
import BlogDetails from './pages/BlogDetails';
// import Tools from './pages/Tools';
// import ToolDetails from './pages/ToolDetails';

const AppRouter: React.FC = () => (
  <Router>
    <Routes>
    <Route path="/" element={<Home />} />
      {/* <Route path="/about" element={<About />} /> */}
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/blogs/:id" element={<BlogDetails />} />
      {/* <Route path="/tools" element={<Tools />} />
      <Route path="/tools/:id" element={<ToolDetails />} /> */}
    </Routes>
  </Router>
);

export default AppRouter;
