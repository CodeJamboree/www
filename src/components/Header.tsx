import { useSelector } from "react-redux";
import * as settingsSelectors from '../state/settings/selectors';
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import logo from "../assets/logo256x256.png";
import Avatar from "@mui/material/Avatar";

const Header = (): JSX.Element => {
    const name = useSelector(settingsSelectors.selectName);
    return (
        <AppBar position="sticky" color="primary">
            <Toolbar>
                <Typography sx={{flexGrow: 1}}>
                <Avatar alt={name} src={logo} />
                </Typography>
                <Typography variant="h5">
                    {name}
                </Typography>
            </Toolbar>
        </AppBar>
    )
}
export default Header;
