import { BrowserRouter, Routes, Route } from "react-router-dom";

import StoryRandom from "../pages/StoryRandom";
import Archive from "../pages/StoryArchive";
import Home from "../pages/Home";

import Navbar from "../components/Navbar";

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="stories" element={<StoryRandom/>}/>
                <Route path="stories/:tweet_id" element={<StoryRandom/>}/>
                <Route path="stories/archive" element={<Archive/>}/>
            </Routes>
        </BrowserRouter>
    )
}
