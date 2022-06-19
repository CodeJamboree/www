import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Icon from "@mui/material/Icon";
import * as selectors from "../../state/settings/selectors";
import Button from "@mui/material/Button";

import positions from "./positions";
import { useSelector } from "react-redux";
import Devicon from "../../components/Devicon";

const Jobs = () => {
  const name = useSelector(selectors.selectName);
  const emailUrl = useSelector(selectors.selectContactEmailUrl);
  const email = useSelector(selectors.selectContactEmail);

  return (
    <>
      <Typography variant="h3" color="primary">
        Employment
      </Typography>
      <Typography variant="body2">
        Are you interested in joining the team? We offer retirement &amp; health
        benefits.
      </Typography>
      <Paper variant="outlined">
        <List sx={{ width: "100%", bgColor: "background.paper" }}>
          {positions.map(({ title, icon, details, location }, i) => (
            <ListItem key={`${title}_${i}`} alignItems="flex-start">
              <ListItemAvatar>
                <Icon>{icon}</Icon>
              </ListItemAvatar>
              <ListItemText
                primary={`${title} (${location})`}
                secondary={
                  <>
                    {details?.map(({ header, text, icons }, i) => (
                      <Typography
                        key={`details_${i}`}
                        component="span"
                        sx={{ display: "block", marginBottom: "5px" }}
                        variant={header ? "body1" : "body2"}
                        color={header ? "text.primary" : "text.secondary"}
                      >
                        {text}
                        <Typography
                          sx={{
                            display: "flex",
                            flexDirection: "row",
                            flexWrap: "wrap",
                            gap: "10px",
                          }}
                          component="span"
                          variant={"h5"}
                          color="text.primary"
                        >
                          {icons?.map((icon) => (
                            <Devicon key={icon} icon={icon} />
                          ))}
                        </Typography>
                      </Typography>
                    ))}

                    <Button
                      variant="text"
                      component="a"
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{ textTransform: "none" }}
                      color="info"
                      href={`${emailUrl}?subject=${encodeURIComponent(
                        `Resume for ${title}: [YOUR NAME HERE]`
                      )}&body=${encodeURIComponent(
                        `${name},\r\n\r\nI am interested in joining the team. Please see my attached resume as a candidate for the following position: ${title} (${location})\r\n\r\nThank you,\r\nYOUR NAME HERE`
                      )}`}
                    >
                      Email Resume to {email}
                    </Button>
                  </>
                }
              />
            </ListItem>
          ))}
        </List>
      </Paper>
    </>
  );
};
export default Jobs;
