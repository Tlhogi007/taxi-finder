import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({


    avatar: {
        margin: theme.spacing(10),

    },
    card: {
        // backgroundColor: "#eceff1",
        backgroundColor: "#eceff1",
        display: "flex",
        alignItems: "center",
        margin: theme.spacing(2),

    },

    content: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
    }


}));
