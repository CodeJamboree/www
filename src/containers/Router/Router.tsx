import { Suspense } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Contact from "../Contact";
import Home from "../Home";
import Fallback from "../Fallback";

const Router = () => (
    <HashRouter>
        <Suspense fallback={<Fallback />}>
            <Routes>
                <Route path="/contact" element={< Contact />} />
                <Route path="*" element={< Home />} />
            </Routes>
        </Suspense>
    </HashRouter>
);

export default Router;
