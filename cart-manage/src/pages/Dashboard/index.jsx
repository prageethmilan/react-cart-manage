import {Component} from "react";
import {Button, Grid, Typography} from "@mui/material";
import {withStyles} from "@mui/styles";
import {styleSheet} from "./style";

class Dashboard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {classes} = this.props
        return (
            <>
                <Grid container spacing={3} direction={"row"} style={{backgroundColor: "aqua"}}>
                    <Grid item lg={3} md={3} xs={3} sm={3}>
                        <Button variant={"outlined"} color={"primary"} style={{margin: "1vw"}}>Dashboard</Button>
                    </Grid>
                    <Grid item lg={6} md={6} xs={6} sm={6} display={"flex"} alignItems={"center"}
                          justifyContent={"center"}>
                        <Button variant={"contained"} color={"primary"} style={{margin: "1vw"}}>Products</Button>
                        <Button variant={"contained"} color={"primary"} style={{margin: "1vw"}}>Cart</Button>
                    </Grid>
                    <Grid item lg={3} md={3} sm={3} xs={3} display={"flex"} alignItems={"center"}
                          justifyContent={"flex-end"}>
                        <Typography variant={"h6"} marginRight={"1vw"}>Name</Typography>
                    </Grid>
                </Grid>

                <Grid container spacing={3}>
                    <Grid item lg={6} md={6} xs={12} sm={12} display={"flex"} alignItems={"center"}
                          justifyContent={"center"}>
                        <div className={classes.dashContainer}>
                            <Typography variant={"h3"} textAlign={"center"} marginTop={"10px"}>Products</Typography>
                            <Typography variant={"h1"} textAlign={"center"} marginTop={"50px"}>100</Typography>
                        </div>
                    </Grid>
                    <Grid item lg={6} md={6} xs={12} sm={12} display={"flex"} alignItems={"center"}
                          justifyContent={"center"}>
                        <div className={classes.dashContainer}>
                            <Typography variant={"h3"} textAlign={"center"} marginTop={"10px"}>Cart</Typography>
                            <Typography variant={"h1"} textAlign={"center"} marginTop={"50px"}>50</Typography>
                        </div>
                    </Grid>
                </Grid>
                <Grid container spacing={3}>
                    <Grid item lg={12} md={12} xs={12} sm={12} display={"flex"} alignItems={"center"}
                          justifyContent={"center"}>
                        <div className={classes.dashContainer}>
                            <Typography variant={"h3"} textAlign={"center"} marginTop={"10px"}>Users</Typography>
                            <Typography variant={"h1"} textAlign={"center"} marginTop={"50px"}>60</Typography>
                        </div>
                    </Grid>
                </Grid>
            </>
        );
    }
}

export default withStyles(styleSheet)(Dashboard)