import { Suspense } from "react";
import Fallback from "./Fallback";
import { HashRouter, Route, Routes } from "react-router-dom";
import Contact from "../containers/Contact";
import Home from "../containers/Home";

const Router = () => (
    <Suspense fallback={<Fallback message="Loading Route" />}>
        <HashRouter>
            <Routes>
                <Route path="/contact" element={< Contact />} />
                <Route path="*" element={< Home />} />
            </Routes>
        </HashRouter>
    </Suspense>
);

export default Router;
