import logo from './logo.svg';

import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="flex">
    <BrowserRouter>
      <Navigation />
          <Routes>
            <Route path="/thepage" element={<Home />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/Fotos" element={<Fotos />} />
            <Route path="/Hobbies" element={<Videos />} />
            <Route path="/Blogs" element={<Blogs />} />
        </Routes >
  </BrowserRouter>
  </div>
  );
}

export default App;
