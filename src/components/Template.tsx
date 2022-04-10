import Header from './Header';
import Footer from './Footer';

interface ITemplate {
    children: JSX.Element;
}

const Template = ({ children }: ITemplate) => 
<div>
    <Header />
    <hr />
    {children}
    <hr />
    <Footer />
</div>

export default Template;
