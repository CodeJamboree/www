import Typography from "@mui/material/Typography";
import CircularProgress from '@mui/material/CircularProgress';
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

const Fallback = () => {

    return <>
        <Grid container spacing={0} direction="column" alignItems="center" justifyContent="center" style={{ minHeight: '80vh' }}>
        <Grid item xs={3}>
        <CircularProgress />
        </Grid>
        <Grid item xs={3}>
            <Typography variant="h4" color="primary">
                Loading
            </Typography>
        </Grid>
        <Grid item xs={3}>
            <Paper variant="outlined">
                <Typography variant="body2" color="inherit">
                    Please wait while we fetch that for you...
                </Typography>
            </Paper>
        </Grid>
    </Grid>

    </>;
}
export default Fallback;
