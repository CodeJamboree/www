import { ReactNode } from "react";
import appData from '../appData';

interface ITemplate {
    children: JSX.Element;
}

const Template = ({ children }: ITemplate) => 
<div>
    {appData.name}
    <hr />
    {children}
    <hr />
    {appData.license}

</div>

export default Template;
