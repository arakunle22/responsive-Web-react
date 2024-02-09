// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages-links/Home';
import Product from './components/pages-links/Product';
import Apps from './components/pages-links/Apps';
import Blog from './components/pages-links/Blog';
import Pricing from './components/pages-links/Pricing'
import './App.css';

const App = () => {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {/* Set the default route to the Home component */}
                    <Route path="/" element={<Home />} />
                    {/* Add a route for the Product component */}
                    <Route path="/product" element={<Product />} />
                    <Route path="/apps" element={<Apps />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/pricing" element={<Pricing />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
