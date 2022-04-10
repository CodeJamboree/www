import { useMemo } from 'react';

import Header from './Header';
import Footer from './Footer';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

interface ITemplate {
    children: JSX.Element;
}

const Template = ({ children }: ITemplate) => {

    const prefersDarkColorScheme = useMediaQuery('(prefers-color-scheme: dark)');

    const theme = useMemo(
        () =>
          createTheme({
            palette: {
              mode: prefersDarkColorScheme ? 'dark' : 'light',
            },
          }),
        [prefersDarkColorScheme]
      );
    
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Header />
            {children}
            <Footer />
        </ThemeProvider>
    );
}

export default Template;
