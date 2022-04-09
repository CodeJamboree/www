import { ReactNode } from "react";

interface ITemplate {
    children: JSX.Element;
}

const Template = ({ children }: ITemplate) => children;

export default Template;
