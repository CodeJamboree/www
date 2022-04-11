import { useMemo } from 'react';

import Header from './Header';
import Footer from './Footer';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Container from '@mui/material/Container';
import buildTheme from './buildTheme';

interface ITemplate {
    children: React.ReactNode;
}

const Template = ({ children }: ITemplate) => {

    const prefersDarkColorScheme = useMediaQuery('(prefers-color-scheme: dark)');
    const theme = useMemo(
        () =>
            buildTheme(prefersDarkColorScheme),
        [prefersDarkColorScheme]
    );

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Header />
            <Container>
            {children}
            </Container>
            <Footer />
        </ThemeProvider>
    );
}

export default Template;
