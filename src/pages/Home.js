import { Map, Messages } from "../components";
import Typist from "react-typist"
import logo from "../images/quicloc8-logo.png";
import {
    Grid,
    Paper,
    Button,
    CardMedia,
    CardActionArea,
    CardContent,
    Typography,
    CardActions,
    Card,
} from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Link } from "react-router-dom";
import MessageIcon from "@material-ui/icons/Message";
import useStyles from "../styles";

function Home() {
    const classes = useStyles();
    return (
        <Grid container>
            <Grid item md={4} sm={6} xs={12}>
                <Card className={classes.card} variant="outlined" square>
                    <CardActionArea className={classes.action__area}>
                        <CardMedia
                            className={classes.media}
                            component="img"
                            alt="Quickloc8 logo"
                            image={logo}
                            title="Quickloc8 logo"
                        />

                        <CardContent style={{ textAlign: "center" }}>
                            <Typography gutterBottom variant="h4" component="h1">
                                Welcome To Quickloc8
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                <Typist>

                                    Track Each Movement Of Your Taxis,<Typist.Delay ms={500} /> Where It Is At All Times <Typist.Delay ms={500} />{" "} And
                                    Trips Made
                                </Typist>
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Link to="/message" style={{ textDecoration: "none" }}>
                                <Button
                                    style={{ backgroundColor: "#ff5722" }}
                                    variant="contained"
                                    className={classes.button}
                                    endIcon={<MessageIcon style={{ color: "white" }} />}
                                >
                                    See Messages
                                </Button>
                            </Link>
                        </CardActions>
                    </CardActionArea>
                </Card>
            </Grid>
            <Grid item md={8} sm={6} xs={12}>
                <Paper>
                    <Map />
                </Paper>
            </Grid>
        </Grid>
    );
}

export default Home;
