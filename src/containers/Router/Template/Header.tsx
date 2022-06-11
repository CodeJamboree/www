import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useLocation } from 'react-router-dom';

import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import Avatar from "@mui/material/Avatar";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

import * as settingsSelectors from '../../../state/settings/selectors';
import logo from "../../../assets/logo256x256.png";
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

    const currentPage = pages.find(p => p.value === page) ?? pages[0];

    const handleChange = (_event: React.SyntheticEvent, value: any) => {
        navigate(value);
    }

    const name = useSelector(settingsSelectors.selectName);
    return (
        <AppBar position="static" color="primary">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography variant="h6" noWrap component="div">
                        <Avatar alt={name} src={logo} />
                    </Typography>
                    <Box sx={{ mr: 2, display: { xs: 'none', md: 'block' } }}>
                        <Tabs value={currentPage?.value} variant="fullWidth" textColor="inherit" indicatorColor="secondary" onChange={handleChange}>
                            {pages.map(({ label, value }) => <Tab key={value} label={label} value={value} />)}
                        </Tabs>
                    </Box>
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <Typography variant="caption" noWrap component="div">
                            {name}
                            <Typography variant="subtitle1" noWrap component="div">
                                {currentPage?.label}
                            </Typography>
                        </Typography>
                    </Box>
                    <Box sx={{ flexGrow: 1, mr: 2, textAlign: 'right', display: { xs: 'none', md: 'block' } }}>
                        <Typography variant="h4" noWrap component="div">
                            {name}
                        </Typography>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}


export default Header;
