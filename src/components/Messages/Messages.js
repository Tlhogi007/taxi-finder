import Message from "./Message/Message";
import Pagination from "../Pagination/Pagination"
import messages from "../../api/messages.json";

import { Grid, Container, Typography, AppBar, Toolbar, IconButton, Button } from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';

import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import useStyles from "./styles";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const Messages = () => {
    const classes = useStyles();

    const history = useHistory()
    //Pagination
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(10);

    //Get Current Page
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = messages.slice(indexOfFirstItem, indexOfLastItem)

    //Change Page
    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    return (
        <Grid maxWidth="300" xs={12} sm={12} md={12} style={{ backgroundColor: "silver" }}>
            <AppBar position="static" style={{ backgroundColor: "#ff5722" }}>
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        Messages
          </Typography>

                </Toolbar>
            </AppBar>
            {/* {
                messages.sort((start,end) =>{

                    return start.display > end.display ? 1 : -1
                })
            } */}
            <Grid container justify="center" spacing={1}>
                {messages.map((msg) => (
                    <Grid item xs={12} sm={12} md={12}>

                        <Message msg={msg} />
                    </Grid>
                ))}

                <Button
                    style={{ backgroundColor: "#ff5722" }}
                    variant="contained"
                    className={classes.button}
                    startIcon={<ArrowBackIcon style={{ color: "white" }} />}
                    onClick={() => history.goBack()}
                >
                    GO back
                                </Button>
            </Grid>

            <Pagination
                itemsPerPage={itemsPerPage}
                totalMessages={messages.length}
                paginate={paginate}
            />

        </Grid>
    );
};

export default Messages;
