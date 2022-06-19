import { useDispatch, useSelector } from "react-redux";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import IconButton from "@mui/material/Button";

import * as actions from "../../../state/preferences/actions";
import * as selectors from "../../../state/preferences/selectors";

const ThemeButton = () => {
  const dispatch = useDispatch();

  const isDarkMode = useSelector(selectors.selectIsDarkMode);

  const onClick = () => {
    dispatch(actions.changeDarkModePreference(!isDarkMode));
  };

  const label = `Change to ${isDarkMode ? "light" : "dark"} mode`;

  return (
    <IconButton
      size="small"
      onClick={onClick}
      aria-label={label}
      color="inherit"
    >
      {isDarkMode ? <DarkModeIcon /> : <LightModeIcon />}
    </IconButton>
  );
};

export default ThemeButton;
