import { BrowserRouter, Routes, Route } from "react-router-dom";

import Stories from "./Stories";
import Archive from "./Archive";
// import Home from "./Home";

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Stories />} />
                <Route path="stories" element={<Stories />} />
                <Route path="stories/archive" element={<Archive />} />
            </Routes>
        </BrowserRouter>
    )
}