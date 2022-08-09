import {Component} from "react";
import {TextValidator, ValidatorForm} from "react-material-ui-form-validator";
import {withStyles} from "@mui/styles";
import {styleSheet} from "./style";
import {Button, Grid, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import LoginService from "../../services/LoginService";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formData:{
                username:'',
                password:''
            }
        }
    }

    loginUser = async () => {
        let formData = this.state.formData;
        let res = await LoginService.postLogin(formData);
        console.log(res);
    }

    render() {
        let {classes} = this.props
        return (
            <div className={classes.loginContainer}>
                <ValidatorForm ref="form" className="pt-2" onSubmit={this.loginUser}>
                    <Grid container className="pt-2" spacing={3} direction="row" alignItems="center"
                          justifyContent="center">
                        <Grid item lg={12} md={12} xs={12} sm={12}>
                            <Typography variant="h2" textAlign="center" fontWeight="bold">Login</Typography>
                        </Grid>
                        <Grid item lg={10} md={10} xs={10} sm={12} style={{paddingTop: "10vh"}}>
                            <Typography variant="subtitle1">Username</Typography>
                            <TextValidator
                                style={{width: "100%", backgroundColor: "white"}}
                                placeholder="Username"
                                variant="outlined"
                                size="small"
                                value={this.state.username}
                                onChange={(e) => {
                                    let formData = this.state.formData;
                                    formData.username = e.target.value;
                                    this.setState({formData});
                                }}
                                /*validators={['required']}*/
                            />
                        </Grid>
                        <Grid item lg={10} md={10} xs={10} sm={12}>
                            <Typography variant="subtitle1">Password</Typography>
                            <TextValidator
                                style={{width: "100%", backgroundColor: "white"}}
                                placeholder="Password"
                                type="password"
                                variant="outlined"
                                size="small"
                                value={this.state.password}
                                onChange={(e) => {
                                    let formData = this.state.formData;
                                    formData.password = e.target.value;
                                    this.setState({formData});
                                }}
                                /*validators={['required']}*/
                            />
                        </Grid>
                    </Grid>
                    <Grid container style={{marginTop: "20px"}} direction="row" alignItems="center"
                          justifyContent="center">
                        <Button variant="contained" type={"submit"} className="primary">Login</Button>
                    </Grid>
                    <Grid container style={{marginTop: "20px"}} direction="row" alignItems="center"
                          justifyContent="flex-start">
                        <Typography variant="h5" style={{marginLeft: "4vw", marginTop: "11vh"}}>Create new user
                            account? </Typography>
                        {/*<Link to="/">
                            <Button size="large" color="error" style={{marginTop: "11vh", fontSize: "larger"}}>Sign
                                Up</Button>
                        </Link>*/}
                        {/*<Link to="login">Sign Up</Link>*/}
                    </Grid>
                </ValidatorForm>
            </div>
        );
    }
}

export default withStyles(styleSheet)(Login)