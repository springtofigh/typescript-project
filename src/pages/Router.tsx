import { Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Blogs from "./Blogs";
import About from "./About";
import Home from "./Home";


export default function Pages() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/about" element={<About />} />
        </Routes>
    )
}