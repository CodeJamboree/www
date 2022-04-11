import { Suspense } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Contact from "../containers/Contact";
import Home from "../containers/Home";
import Fallback from "../containers/Fallback";

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
