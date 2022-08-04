import {Component} from "react";
import {TextValidator, ValidatorForm} from "react-material-ui-form-validator";
import {Grid, Typography} from "@mui/material";
import {Button} from "@mui/material";
import {TableContainer,Table,TableHead,TableRow,TableCell,TableBody} from "@mui/material";
import {Paper} from "@mui/material";
import GDSESnackBar from "../../Components/SnackBar";


class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            alert:false,
            message:'',
            severity:''
        }
    }

    render() {
        return (
            <>
                <ValidatorForm ref="form" className="pt-2">
                    <Grid container className="pt-2" spacing={3}>
                        <Grid item lg={12} xs={12} sm={12} md={12}>
                            <Typography variant="h2" fontWeight={"bold"}>User Registration</Typography>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6}>
                            <Typography variant="subtitle1">First Name</Typography>
                            <TextValidator
                                placeholder="First Name"
                                variant="outlined"
                                size="small"
                                style={{width: '100%'}}
                                validators={['required']}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6}>
                            <Typography variant="subtitle1">Last Name</Typography>
                            <TextValidator
                                placeholder="Last Name"
                                variant="outlined"
                                size="small"
                                style={{width: '100%'}}
                                validators={['required']}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6}>
                            <Typography variant="subtitle1">Email</Typography>
                            <TextValidator
                                placeholder="Email"
                                variant="outlined"
                                size="small"
                                style={{width: '100%'}}
                                validators={['required']}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6}>
                            <Typography variant="subtitle1">Username</Typography>
                            <TextValidator
                                placeholder="Username"
                                variant="outlined"
                                size="small"
                                style={{width: '100%'}}
                                validators={['required']}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6}>
                            <Typography variant="subtitle1">Password</Typography>
                            <TextValidator
                                placeholder="Password"
                                variant="outlined"
                                size="small"
                                style={{width: '100%'}}
                                validators={['required']}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6}>
                            <Typography variant="subtitle1">City</Typography>
                            <TextValidator
                                placeholder="City"
                                variant="outlined"
                                size="small"
                                style={{width: '100%'}}
                                validators={['required']}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6}>
                            <Typography variant="subtitle1">Street</Typography>
                            <TextValidator
                                placeholder="Street"
                                variant="outlined"
                                size="small"
                                style={{width: '100%'}}
                                validators={['required']}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6}>
                            <Typography variant="subtitle1">Street No</Typography>
                            <TextValidator
                                placeholder="Street No"
                                variant="outlined"
                                size="small"
                                style={{width: '100%'}}
                                validators={['required']}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6}>
                            <Typography variant="subtitle1">Zip Code</Typography>
                            <TextValidator
                                placeholder="Zip Code"
                                variant="outlined"
                                size="small"
                                style={{width: '100%'}}
                                validators={['required']}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6}>
                            <Typography variant="subtitle1">Lat Value</Typography>
                            <TextValidator
                                placeholder="Lat Value"
                                variant="outlined"
                                size="small"
                                style={{width: '100%'}}
                                validators={['required']}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6}>
                            <Typography variant="subtitle1">Long Value</Typography>
                            <TextValidator
                                placeholder="Long Value"
                                variant="outlined"
                                size="small"
                                style={{width: '100%'}}
                                validators={['required']}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6}>
                            <Typography variant="subtitle1">Mobile No</Typography>
                            <TextValidator
                                placeholder="Mobile No"
                                variant="outlined"
                                size="small"
                                style={{width: '100%'}}
                                validators={['required']}
                            />
                        </Grid>
                    </Grid>
                    <Grid container marginTop={"10px"} direction={"row"} alignItems={"center"} justifyContent={"flex-end"}>
                        <Button variant={"contained"} color={"warning"} style={{marginLeft:"10px",marginRight:"10px"}}>Clear</Button>
                        <Button variant={"contained"} color={"primary"} type={"submit"} style={{marginLeft:"10px",marginRight:"10px"}}>Save</Button>
                    </Grid>
                </ValidatorForm>
                <Grid contaner style={{ marginTop: '15px' }}>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="customer table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="left">First Name</TableCell>
                                    <TableCell align="left">Last Name</TableCell>
                                    <TableCell align="left">Email</TableCell>
                                    <TableCell align="left">Username</TableCell>
                                    <TableCell align="left">Password</TableCell>
                                    <TableCell align="left">City</TableCell>
                                    <TableCell align="left">Street</TableCell>
                                    <TableCell align="left">Street No</TableCell>
                                    <TableCell align="left">Zip Code</TableCell>
                                    <TableCell align="left">Lat Value</TableCell>
                                    <TableCell align="left">Long Value</TableCell>
                                    <TableCell align="left">Mobile No</TableCell>
                                    <TableCell align="left">Action</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>

                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
                <GDSESnackBar
                    open={this.state.alert}
                    onClose={() => {
                        this.setState({ alert: false })
                    }}
                    message={this.state.message}
                    autoHideDuration={3000}
                    severity={this.state.severity}
                    variant="filled"
                />
            </>
        );
    }
}

export default User