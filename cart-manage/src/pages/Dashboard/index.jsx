import {Component} from "react";
import {Button, Grid, Typography} from "@mui/material";
import {withStyles} from "@mui/styles";
import {styleSheet} from "./style";
import ProductService from "../../services/ProductService";
import UserService from "../../services/UserService";
import CartService from "../../services/CartService";
import {Link} from "react-router-dom";

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productsCount: '0',
            cartCount: '0',
            userCount: '0'
        }
    }

    getProductsCount = async () => {
        let res = await ProductService.fetchProducts();
        if (res.status === 200) {
            this.setState({
                productsCount: res.data.length
            });
        }
    }

    getUsersCount = async () => {
        let res = await UserService.fetchUsers();
        if (res.status === 200) {
            this.setState({
                userCount: res.data.length
            });
        }
    }

    getCartsCount = async () => {
        let res = await CartService.fetchCarts();
        if (res.status === 200) {
            this.setState({
                cartCount: res.data.length
            });
        }
    }

    componentDidMount() {
        this.getProductsCount();
        this.getUsersCount();
        this.getCartsCount();
    }

    render() {
        const {classes} = this.props
        return (
            <>
                <Grid container spacing={3} direction={"row"} style={{backgroundColor: "aqua"}}>
                    <Grid item lg={3} md={3} xs={3} sm={3}>
                        <Link to={"/dashboard"}><Button variant={"outlined"} color={"primary"} style={{margin: "1vw"}}>Dashboard</Button></Link>
                    </Grid>
                    <Grid item lg={6} md={6} xs={6} sm={6} display={"flex"} alignItems={"center"}
                          justifyContent={"center"}>
                        <Link to={"/product"}><Button variant={"contained"} color={"primary"} style={{margin: "1vw"}}>Products</Button></Link>
                        <Link to={"/cart"}><Button variant={"contained"} color={"primary"} style={{margin: "1vw"}}>Cart</Button></Link>
                    </Grid>
                    <Grid item lg={3} md={3} sm={3} xs={3} display={"flex"} alignItems={"center"}
                          justifyContent={"flex-end"}>
                        <Typography variant={"h6"} marginRight={"1vw"}>Name</Typography>
                        <Link to={"/"}><Button variant={"outlined"} color={"primary"} style={{margin: "1vw"}}>Log out</Button></Link>
                    </Grid>
                </Grid>

                <Grid container spacing={3}>
                    <Grid item lg={6} md={6} xs={12} sm={12} display={"flex"} alignItems={"center"}
                          justifyContent={"center"}>
                        <div className={classes.dashContainer}>
                            <Typography variant={"h3"} textAlign={"center"} marginTop={"10px"}>Products</Typography>
                            <Typography variant={"h1"} textAlign={"center"}
                                        marginTop={"50px"}>{this.state.productsCount}</Typography>
                        </div>
                    </Grid>
                    <Grid item lg={6} md={6} xs={12} sm={12} display={"flex"} alignItems={"center"}
                          justifyContent={"center"}>
                        <div className={classes.dashContainer}>
                            <Typography variant={"h3"} textAlign={"center"} marginTop={"10px"}>Cart</Typography>
                            <Typography variant={"h1"} textAlign={"center"}
                                        marginTop={"50px"}>{this.state.cartCount}</Typography>
                        </div>
                    </Grid>
                </Grid>
                <Grid container spacing={3}>
                    <Grid item lg={12} md={12} xs={12} sm={12} display={"flex"} alignItems={"center"}
                          justifyContent={"center"}>
                        <div className={classes.dashContainer}>
                            <Typography variant={"h3"} textAlign={"center"} marginTop={"10px"}>Users</Typography>
                            <Typography variant={"h1"} textAlign={"center"}
                                        marginTop={"50px"}>{this.state.userCount}</Typography>
                        </div>
                    </Grid>
                </Grid>
            </>
        );
    }
}

export default withStyles(styleSheet)(Dashboard)