import {Component} from "react";
import {TextValidator, ValidatorForm} from "react-material-ui-form-validator";
import {
    Button,
    Grid,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography
} from "@mui/material";
import GDSESnackBar from "../../Components/SnackBar";
import UserService from "../../services/UserService";


class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formData: {
                email: '',
                username: '',
                password: '',
                name: {
                    firstname: '',
                    lastname: ''
                },
                address: {
                    city: '',
                    street: '',
                    number: '',
                    zipcode: '',
                    geolocation: {
                        lat: '',
                        long: ''
                    }
                },
                phone: ''
            },
            alert: false,
            message: '',
            severity: '',
            btnLabel:'Save',
            btnColor:'primary'
        }
    }

    saveUser = async () => {
        let formData = this.state.formData;

        let res = await UserService.postUser(formData);

        console.log(res);

        if (res.status === 201) {
            this.setState({
                alert: true,
                message: res.data.message,
                severity: 'success'
            });
        } else {
            this.setState({
                alert: true,
                message: "User not saved",
                severity: 'error'
            });
        }
    }

    render() {
        return (
            <>
                <ValidatorForm ref="form" className="pt-2" onSubmit={this.saveUser}>
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
                                value={this.state.formData.name.firstname}
                                onChange={(e) => {
                                    let formData = this.state.formData;
                                    formData.name.firstname = e.target.value;
                                    this.setState({formData})
                                }}
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
                                value={this.state.formData.name.lastname}
                                onChange={(e) => {
                                    let formData = this.state.formData;
                                    formData.name.lastname = e.target.value;
                                    this.setState({formData})
                                }}
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
                                value={this.state.formData.email}
                                onChange={(e) => {
                                    let formData = this.state.formData;
                                    formData.email = e.target.value;
                                    this.setState({formData})
                                }}
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
                                value={this.state.formData.username}
                                onChange={(e) => {
                                    let formData = this.state.formData;
                                    formData.username = e.target.value;
                                    this.setState({formData})
                                }}
                                validators={['required']}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6}>
                            <Typography variant="subtitle1">Password</Typography>
                            <TextValidator
                                type="password"
                                placeholder="Password"
                                variant="outlined"
                                size="small"
                                style={{width: '100%'}}
                                value={this.state.formData.password}
                                onChange={(e) => {
                                    let formData = this.state.formData;
                                    formData.password = e.target.value;
                                    this.setState({formData})
                                }}
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
                                value={this.state.formData.address.city}
                                onChange={(e) => {
                                    let formData = this.state.formData;
                                    formData.address.city = e.target.value;
                                    this.setState({formData})
                                }}
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
                                value={this.state.formData.address.street}
                                onChange={(e) => {
                                    let formData = this.state.formData;
                                    formData.address.street = e.target.value;
                                    this.setState({formData})
                                }}
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
                                value={this.state.formData.address.number}
                                onChange={(e) => {
                                    let formData = this.state.formData;
                                    formData.address.number = e.target.value;
                                    this.setState({formData})
                                }}
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
                                value={this.state.formData.address.zipcode}
                                onChange={(e) => {
                                    let formData = this.state.formData;
                                    formData.address.zipcode = e.target.value;
                                    this.setState({formData})
                                }}
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
                                value={this.state.formData.address.geolocation.lat}
                                onChange={(e) => {
                                    let formData = this.state.formData;
                                    formData.address.geolocation.lat = e.target.value;
                                    this.setState({formData})
                                }}
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
                                value={this.state.formData.address.geolocation.long}
                                onChange={(e) => {
                                    let formData = this.state.formData;
                                    formData.address.geolocation.long = e.target.value;
                                    this.setState({formData})
                                }}
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
                                value={this.state.formData.phone}
                                onChange={(e) => {
                                    let formData = this.state.formData;
                                    formData.phone = e.target.value;
                                    this.setState({formData})
                                }}
                                validators={['required']}
                            />
                        </Grid>
                    </Grid>
                    <Grid container marginTop={"10px"} direction={"row"} alignItems={"center"}
                          justifyContent={"flex-end"}>
                        <Button variant={"contained"} color={"warning"}
                                style={{marginLeft: "10px", marginRight: "10px"}}>Clear</Button>
                        <Button variant={"contained"} color={this.state.btnColor} type={"submit"}
                                style={{marginLeft: "10px", marginRight: "10px"}} onClick={this.saveUser}>{this.state.btnLabel}</Button>
                    </Grid>
                </ValidatorForm>
                <Grid contaner style={{marginTop: '15px'}}>
                    <TableContainer component={Paper}>
                        <Table sx={{minWidth: 650}} aria-label="customer table">
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
                        this.setState({alert: false})
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