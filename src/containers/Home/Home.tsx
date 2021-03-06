import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

import logo from "../../assets/logo256x256.png";
import * as selectors from "../../state/settings/selectors";
import { useSelector } from "react-redux";

const Home = () => {
  const name = useSelector(selectors.selectName);
  const tagline = useSelector(selectors.selectTagline);

  return (
    <>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: "80vh" }}
      >
        <Grid item xs={3}>
          <img src={logo} />
        </Grid>
        <Grid item xs={3}>
          <Typography variant="h4" color="secondary">
            {name}
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Paper variant="outlined">
            <Typography variant="body2" color="inherit">
              {tagline}
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
