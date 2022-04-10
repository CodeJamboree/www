import { useSelector } from "react-redux";
import * as settingsSelectors from '../state/settings/selectors';
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";

const Header = (): JSX.Element => {
    const name = useSelector(settingsSelectors.selectName);
    return (
        <AppBar position="sticky" color="primary">
            <Typography variant="h5" sx={{flexGrow: 1}}>
                {name}
            </Typography>
        </AppBar>
    )
}
export default Header;
