import { useMemo } from 'react';

import Header from './Header';
import Footer from './Footer';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Button from '@mui/material/Button';
import buildTheme from './buildTheme';

interface ITemplate {
    children: JSX.Element;
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
            {children}
<p>
            <Button color="primary">primary</Button>
            <Button color="primary" variant="contained">contained</Button>
            <Button color="primary" variant="outlined">outlined</Button>
 </p>
 <p>
            <Button color="secondary">secondary</Button>
            <Button color="secondary" variant="contained">contained</Button>
            <Button color="secondary" variant="outlined">outlined</Button>
 </p>
 <p>
            <Button color="info">info</Button>
            <Button color="info" variant="contained">contained</Button>
            <Button color="info" variant="outlined">outlined</Button>
 </p>
 <p>
            <Button color="success">success</Button>
            <Button color="success" variant="contained">contained</Button>
            <Button color="success" variant="outlined">outlined</Button>
 </p>
 <p>
            <Button color="warning">warning</Button>
            <Button color="warning" variant="contained">contained</Button>
            <Button color="warning" variant="outlined">outlined</Button>
 </p>
 <p>
            <Button color="error">error</Button>
            <Button color="error" variant="contained">contained</Button>
            <Button color="error" variant="outlined">outlined</Button>
 </p>
            <Footer />
        </ThemeProvider>
    );
}

export default Template;
