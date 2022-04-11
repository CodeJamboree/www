import Template from '../components/Template';
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import logo from "../assets/logo256x256.png";
import Paper from "@mui/material/Paper";

const Home = () => <Template>
    <Grid container spacing={0} direction="column" alignItems="center" justifyContent="center" style={{ minHeight: '80vh' }}>
        <Grid item xs={3}>
            <img src={logo} />
        </Grid>
        <Grid item xs={3}>
            <Typography variant="h4" color="secondary">
                Code Jamboree LLC
            </Typography>
        </Grid>
        <Grid item xs={3}>
            <Paper variant="outlined">
                <Typography variant="body2" color="inherit">
                    Consulting services for frontend, backend, and fullstack development.
                </Typography>
            </Paper>
        </Grid>
    </Grid>

</Template>;

export default Home;
