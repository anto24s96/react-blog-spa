import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import DefaultLayout from "./pages/DefaultLayout";
import Posts from "./pages/Posts";
import SinglePost from "./pages/SinglePost";

export default function () {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<DefaultLayout />}>
                    <Route index element={<Home />} />
                    <Route path="posts" element={<Posts />} />
                    <Route path="posts/:slug" element={<SinglePost />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
