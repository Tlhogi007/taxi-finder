import {
    Card,
    CardHeader,
    IconButton,
    Avatar,
    Typography,
    CardContent,
    Container,
} from "@material-ui/core";
import StarRateIcon from "@material-ui/icons/StarRate";
import { makeStyles } from '@material-ui/core/styles';
import useStyles from "./styles";
import color from "../../../api/colors.json"
import Typist from "react-typist"
const Message = ({ msg: { message, subject, display } }) => {
    const classes = useStyles();

    function randomColor() {

        // let random = Math.floor(Math.random() * color.light.length)

        // console.log(`random: ${color.light.error}`);

        // console.log(color.light.primary)
        // return random;


        // const keys = Object.key(color)
        // const random = keys[Math.floor(Math.random() * keys.length)]
        // console.log(random);

        // return random
    }
    return (
        <div>

            <Card className={classes.card} >
                <Avatar className={classes.avatar} style={{ backgroundColor: randomColor() }}>{subject[0]}</Avatar>
                <Container>
                    <CardHeader
                        title={subject}
                        action={
                            <IconButton>
                                <Typography variant="body2" component="p">
                                    {display}
                                </Typography>
                            </IconButton>
                        }
                    />
                    <CardContent className={classes.content}>
                        <Typography variant="body2"  >
                            {message}
                        </Typography>

                        <IconButton>
                            <StarRateIcon fontSize="large" />

                        </IconButton>
                    </CardContent>
                </Container>
            </Card>
        </div>
    );
};

export default Message;
