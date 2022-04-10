import { useState } from 'react';
import { useSelector } from "react-redux";
import { useNavigate, useLocation } from 'react-router-dom';
import * as settingsSelectors from '../state/settings/selectors';
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import ContactsIcon from '@mui/icons-material/Contacts';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

const Header = (): JSX.Element => {
    let navigate = useNavigate();
    let location = useLocation();

    const [bottomNavigationValue, setBottomNavigationValue] = useState(
        location.pathname
    );

    const onChangeBottomNavigation = (_event: any, value: string) => {
        setBottomNavigationValue(value);
        navigate(value);
    };

    const license = useSelector(settingsSelectors.selectLicense);
    return (
        <AppBar position="fixed" color="secondary" style={{ top: 'auto', bottom: 0 }}>
            <Container maxWidth="xl" disableGutters>
                <Box sx={{ display: { xs: 'block', md: 'none' } }}>

                    <BottomNavigation
                        value={bottomNavigationValue}
                        onChange={onChangeBottomNavigation}
                    >
                        <BottomNavigationAction
                            label="Home"
                            value="/"
                            icon={<HomeIcon />}
                        />
                        <BottomNavigationAction
                            label="Contact"
                            value="/contact"
                            icon={<ContactsIcon />}
                        />
                    </BottomNavigation>
                </Box>
            </Container>

            <Typography component="div" sx={{ flexGrow: 1 }}>
                {license}
            </Typography>
        </AppBar>
    );
}
export default Header;
