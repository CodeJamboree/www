import { useState, useEffect } from 'react';
import { useSelector } from "react-redux";
import { useNavigate, useLocation } from 'react-router-dom';

import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Icon from '@mui/material/Icon';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import * as settingsSelectors from '../../../state/settings/selectors';
import ThemeButton from './ThemeButton';
import pages from '../pages';

const Header = (): JSX.Element => {
    let navigate = useNavigate();
    let location = useLocation();

    const [page, setPage] = useState(
        location.pathname
    );

    useEffect(()=> {
        setPage(location.pathname);
    }, [location.pathname]);

    const onChangeBottomNavigation = (_event: any, value: string) => {
        setPage(value);
        navigate(value);
    };

    const license = useSelector(settingsSelectors.selectLicense);
    return (
        <AppBar position="fixed" color="secondary" style={{ top: 'auto', bottom: 0 }}>
            <Container maxWidth="xl" disableGutters>
                <Box sx={{ display: { xs: 'block', md: 'none' } }}>

                    <BottomNavigation
                        value={page}
                        onChange={onChangeBottomNavigation}
                    >
                        {pages.map(({ label, value, icon}) => 
                            <BottomNavigationAction
                            key={value}
                            label={label}
                            value={value}
                            icon={<Icon>{icon}</Icon>}
                        />
                        )}
                    </BottomNavigation>
                </Box>
            </Container>
            <Container sx={{display: 'flex'}}>
                <Typography variant='body2' component="div" sx={{ flexGrow: 1 }}>
                    {license}
                </Typography>

                <ThemeButton />
        </Container>
            
        </AppBar>
    );
}
export default Header;
