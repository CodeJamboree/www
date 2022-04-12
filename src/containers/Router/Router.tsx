import { Suspense } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Contact from "../Contact";
import Home from "../Home";
import Fallback from "./Fallback";
import Template from "./Template";
import FallbackMessage from "../../components/FallbackMessage";

const Router = () => (
    <HashRouter>
        <Suspense fallback={<FallbackMessage message="Loading Template"/>}>
            <Template>
                <Suspense fallback={<Fallback />}>
                    <Routes>
                        <Route path="/contact" element={< Contact />} />
                        <Route path="*" element={< Home />} />
                    </Routes>
                </Suspense>
            </Template>
        </Suspense>
    </HashRouter>
);

export default Router;
