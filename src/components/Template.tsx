import Header from './Header';
import Footer from './Footer';

interface ITemplate {
    children: JSX.Element;
}

const Template = ({ children }: ITemplate) => 
<>
    <Header />
    {children}
    <Footer />
</>

export default Template;
