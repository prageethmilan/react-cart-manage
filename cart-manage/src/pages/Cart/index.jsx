import {TextValidator, ValidatorForm} from "react-material-ui-form-validator";
import {
    Autocomplete,
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
import * as React from 'react';
import {Component} from 'react';
import TextField from '@mui/material/TextField';
/*import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'*/
import './style.css'
import {DatePicker, LocalizationProvider} from "@mui/x-date-pickers";
import {AdapterDateFns} from "@mui/x-date-pickers/AdapterDateFns";
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import UserService from "../../services/UserService";
import ProductService from "../../services/ProductService";
import GDSESnackBar from "../../Components/SnackBar";
import $ from "jquery"
import CartService from "../../services/CartService";

class Cart extends Component {

    constructor(props) {
        super(props);
        this.state = ({
            formData: {
                userId: '',
                date: new Date().toISOString().slice(0, 10),
                products: []
            },
            username: '',
            productTitles: [],
            product: '',
            productId: '',
            qty: 0,
            usernames: [],
            icon: <CheckBoxOutlineBlankIcon fontSize="small"/>,
            checkedIcon: <CheckBoxIcon fontSize="small"/>,
            alert: false,
            message: '',
            severity: ''
        })
    }

    getUsernames = async () => {
        let res = await UserService.fetchUsers();
        const array = [];
        for (let i = 0; i < res.data.length; i++) {
            array[i] = {
                username: res.data[i].username,
                userId: res.data[i].id
            }
        }
        this.setState({
            usernames: array
        })
    }

    getProductTitles = async () => {
        let res = await ProductService.fetchProducts();
        const array = [];
        for (let i = 0; i < res.data.length; i++) {
            array[i] = {
                title: res.data[i].title,
                id: res.data[i].id
            }
        }
        this.setState({
            productTitles: array
        })
    }

    componentDidMount() {
        this.getUsernames();
        this.getProductTitles();
    }

    addToCart = () => {
        if (this.state.productId != "" && this.state.qty != 0 && this.state.qty != "") {
            const product = {
                productId: this.state.productId,
                quantity: this.state.qty
            }
            this.state.formData.products.push(product);
            $('#tblCart').empty();
            for (let product of this.state.formData.products) {
                let row =
                    `<tr>
                    <td>${product.productId}</td>
                    <td>${product.quantity}</td>
                 </tr>`
                $('#tblCart').append(row);
            }
        } else {
            this.setState({
                alert: true,
                message: 'Please select a product',
                severity: 'error'
            })
        }
    }

    saveCart = async () => {
        let formData = this.state.formData;
        let res = await CartService.postCart(formData);

        if (res.status === 200) {
            this.setState({
                alert: true,
                message: 'Cart Saved Successfully',
                severity: 'success'
            })
            this.clearTable();
            this.clearFields();
        } else {
            this.setState({
                alert: true,
                message: 'Cart Not Saved',
                severity: 'error'
            })
        }
    }

    clearTable = () => {
        $('#tblCart').empty();
    }

    clearFields = () => {
        this.state = ({
            formData: {
                userId: '',
                date: new Date().toISOString().slice(0, 10),
                products: []
            },
            username: '',
            product: '',
            productId: '',
            qty: 0
        })
    }


    render() {
        return (
            <>
                <ValidatorForm ref="form" className="pt-2" onSubmit={this.addToCart}>
                    <Grid container className="pt-2" spacing={3}>
                        <Grid item lg={12} xs={12} sm={12} md={12}>
                            <Typography variant="h2" fontWeight={"bold"}>Cart Manage</Typography>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6}>
                            <Typography variant="subtitle1">Username</Typography>
                            <Autocomplete
                                disablePortal
                                id="combo-box-demo"
                                options={this.state.usernames}
                                getOptionLabel={
                                    (option) => option.username
                                }
                                onChange={(e, value) => {
                                    let formData = this.state.formData;
                                    if (value != null) {
                                        formData.userId = value.userId;
                                        this.setState({formData})
                                    } else {
                                        formData.userId = '';
                                        this.setState({formData})
                                    }
                                }}
                                sx={{width: "100%"}}
                                renderInput={(params) => <TextField {...params} placeholder="Username"/>}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6}>
                            <Typography variant="subtitle1">Date</Typography>
                            {/*<DatePicker
                                selected={this.state.date}
                                dateFormat="yyyy-MM-dd"
                                onChange={this.selectDate}
                            />*/}
                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                <DatePicker
                                    value={this.state.formData.date}
                                    onChange={(e) => {
                                        let date = new Date(e).toISOString().slice(0, 10);
                                        let formData = this.state.formData;
                                        formData.date = date;
                                        this.setState({formData})
                                    }}
                                    renderInput={(params) => <TextField {...params} style={{width: "100%"}}/>}
                                    inputFormat="yyyy-MM-dd"
                                />
                            </LocalizationProvider>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6}>
                            <Typography variant={"subtitle1"}>Product Title</Typography>
                            <Autocomplete
                                disablePortal
                                id="combo-box-demo"
                                options={this.state.productTitles}
                                getOptionLabel={
                                    (option) => option.title
                                }
                                onChange={(e, value) => {
                                    let product = this.state.product
                                    let productId = this.state.productId;
                                    if (value != null) {
                                        product = value.title;
                                        productId = value.id;
                                        this.state.product = product;
                                        this.state.productId = productId;
                                    } else {
                                        this.state.product = '';
                                        this.state.productId = '';
                                    }
                                }}
                                sx={{width: "100%"}}
                                renderInput={(params) => <TextField {...params} placeholder="Product Titles"/>}
                            />
                        </Grid>
                        <Grid item lg={3} md={3} xs={6} sm={6}>
                            <Typography variant={"subtitle1"}>Qty</Typography>
                            <TextValidator
                                placeholder="Qty"
                                variant="outlined"
                                size="small"
                                style={{width: '100%'}}
                                onChange={(e) => {
                                    let qty = this.state.qty;
                                    qty = e.target.value;
                                    this.state.qty = qty;
                                }}
                            />
                        </Grid>
                        <Grid item lg={3} md={3} xs={6} sm={6} display={"flex"} flexDirection={"row"}
                              alignItems={"center"} justifyContent={"flex-start"}>
                            <Button variant={"contained"} color={"success"} type={"submit"}
                                    style={{marginLeft: "10px", marginRight: "10px"}}>Add</Button>
                            <Button variant={"contained"} color={"warning"}
                                    style={{marginLeft: "10px", marginRight: "10px"}}>Clear</Button>
                        </Grid>
                    </Grid>
                    <hr/>
                </ValidatorForm>
                <Grid contaner style={{marginTop: '15px'}}>
                    <TableContainer component={Paper}>
                        <Table sx={{minWidth: 650}} aria-label="customer table" border={"1px solid black"}>
                            <TableHead>
                                <TableRow>
                                    <TableCell align="center">Product Id</TableCell>
                                    <TableCell align="center">Qty</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody id="tblCart">

                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
                <Grid container marginTop={"10px"} direction={"row"} alignItems={"center"}
                      justifyContent={"flex-end"}>
                    <Button variant={"contained"} color={"warning"}
                            style={{marginLeft: "10px", marginRight: "10px"}}>Clear</Button>
                    <Button variant={"contained"} color={"primary"} type={"submit"}
                            style={{marginLeft: "10px", marginRight: "10px"}} onClick={this.saveCart}>Save</Button>
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

export default Cart