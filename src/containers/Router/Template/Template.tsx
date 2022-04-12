import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from './Header';
import Footer from './Footer';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import Container from '@mui/material/Container';
import useMediaQuery from '@mui/material/useMediaQuery';
import buildTheme from './buildTheme';
import * as selectors from '../../../state/preferences/selectors';
import * as actions from '../../../state/preferences/actions';

interface ITemplate {
    children: React.ReactNode;
}

const Template = ({ children }: ITemplate) => {
    const dispatch = useDispatch();

    const prefersDarkColorScheme = useMediaQuery('(prefers-color-scheme: dark)');

    useEffect(() => {
        dispatch(actions.changeDarkModePreference(prefersDarkColorScheme))
    }, [prefersDarkColorScheme])

    const isDarkMode = useSelector(selectors.selectIsDarkMode);
    const theme = useMemo(() => buildTheme(isDarkMode), [isDarkMode]);

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
