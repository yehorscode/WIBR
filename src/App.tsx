import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Layout from "./pages/Layout/Layout";
import NotFound from "./pages/NotFound/NotFound";
import Quiz from "./pages/Quiz/Quiz";
import How from "./pages/How/How";
function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="*" element={<NotFound />} />
                    <Route index element={<Home />} />
                    <Route path="quiz" element={<Quiz />} />
                    <Route path="how" element={<How />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
