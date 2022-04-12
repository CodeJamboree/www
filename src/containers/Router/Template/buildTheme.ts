import { createTheme } from '@mui/material/styles';

/*
Colors are from our company logo

Business Cards have a dark blue background

{...} (C & J as curly braces, with ellipses/code in between)

and Company Name

*/
const primaryFontName = "Avenir";
const darkIndegoBusinessCardBackground = '#000961';
const lightBlueC = '#0094da';
const lightGreenEllipses = '#93caa7';
const purpleJ = '#662483';
const purpleShadowJ = '#502264';
const grayTradeName = '#555454';
const yellowForShadow = '#d4d644'; // not in our logo

const lightPalette = {
    primary: {
        main: darkIndegoBusinessCardBackground,
    },
    secondary: {
        main: grayTradeName,
    },
    info: {
        main: lightBlueC,
    },
    success: {
        main: lightGreenEllipses,
    },
    warning: {
        main: purpleJ,
    },
    error: {
        main: purpleShadowJ,
        contrastText: yellowForShadow
    },
    contrastThreshold: 3,
    tonalOffset: 0.2
}
const darkPalette = {
    background: {
        paper:darkIndegoBusinessCardBackground
    },
    primary: {
        main: grayTradeName,
    },
    secondary: {
        main: lightBlueC,
    },
    info: {
        main: lightBlueC,
    },
    success: {
        main: lightGreenEllipses,
    },
    warning: {
        main: purpleJ,
    },
    error: {
        main: purpleShadowJ,
        contrastText: yellowForShadow
    },
    contrastThreshold: 3,
    tonalOffset: 0.2
}
// Avenir is the font used within our branding
const fontFamily = [
    primaryFontName,
    "Montserrat", // Similar to Avenir
    "Roboto",
    "Helvetica",
    "Arial",
    "sans-serif"
].map(name => `"${name}"`).join(",");

const buildTheme = (prefersDarkColorScheme: boolean) => createTheme({
    typography: {
      fontFamily
    },
    palette: {
      mode: prefersDarkColorScheme ? 'dark' : 'light',
        ...prefersDarkColorScheme ? darkPalette : lightPalette
      }
})

export default buildTheme;
