import { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "../Contact";
import SocialMedia from "../SocialMedia";
import Home from "../Home";
import Fallback from "./Fallback";
import Template from "./Template";
import FallbackMessage from "../../components/FallbackMessage";

const Router = () => (
    <BrowserRouter>
        <Suspense fallback={<FallbackMessage message="Loading Template"/>}>
            <Template>
                <Suspense fallback={<Fallback />}>
                    <Routes>
                        <Route path="/contact" element={< Contact />} />
                        <Route path="/socialmedia" element={< SocialMedia />} />
                        <Route path="*" element={< Home />} />
                    </Routes>
                </Suspense>
            </Template>
        </Suspense>
    </BrowserRouter>
);

export default Router;
