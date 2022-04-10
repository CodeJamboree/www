import { useSelector } from "react-redux";
import * as settingsSelectors from '../state/settings/selectors';
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";

const Header = (): JSX.Element => {
    const license = useSelector(settingsSelectors.selectLicense);
    return (
        <AppBar position="fixed" color="secondary" style={{top: 'auto', bottom: 0}}>
            <Typography component="div" sx={{flexGrow: 1}}>
                {license}
            </Typography>
        </AppBar>
    );
}
export default Header;
