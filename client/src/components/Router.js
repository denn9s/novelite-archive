import { BrowserRouter, Routes, Route } from "react-router-dom";

import Stories from "../pages/StoryRandom";
import Archive from "../pages/StoryArchive";
import Home from "../pages/Home";

import Navbar from "../components/Navbar";

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="stories" element={<Stories />} />
                <Route path="stories/archive" element={<Archive />} />
            </Routes>
        </BrowserRouter>
    )
}
