import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({

    card: {

        backgroundColor: "#616161",
        height: "100vh",
        margin: "auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"

    }
    ,

    action__area: {
        height: "99vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
        flexDirection: "column"
    }
    ,
    media: {
        padding: theme.spacing(5)
    }

}));
