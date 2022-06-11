import { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "../Contact";
import SocialMedia from "../SocialMedia";
import Jobs from "../Jobs";
import Home from "../Home";
import Fallback from "./Fallback";
import Template from "./Template";
import FallbackMessage from "../../components/FallbackMessage";
import pages from './pages';

const [
    ,
    { value: contactPath},
    { value: socialPath},
    { value: joinPath}
] = pages;

const Router = () => (
    <BrowserRouter>
        <Suspense fallback={<FallbackMessage message="Loading Template"/>}>
            <Template>
                <Suspense fallback={<Fallback />}>
                    <Routes>
                        <Route path={contactPath} element={< Contact />} />
                        <Route path={socialPath} element={< SocialMedia />} />
                        <Route path={joinPath} element={< Jobs />} />
                        <Route path="*" element={< Home />} />
                    </Routes>
                </Suspense>
            </Template>
        </Suspense>
    </BrowserRouter>
);

export default Router;
