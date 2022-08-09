import {Component} from "react";
import {TextValidator, ValidatorForm} from "react-material-ui-form-validator";
import {Autocomplete, Button, Grid, TextField, Typography} from "@mui/material";
import ProductService from "../../services/ProductService";
import GDSESnackBar from "../../Components/SnackBar";
import $ from "jquery";
import {Link} from "react-router-dom";

class Products extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formData: {
                title: '',
                price: '',
                description: '',
                image: '',
                category: ''
            },
            categories: [],
            alert:false,
            message:'',
            severity:''
        }
    }

    componentDidMount() {
        this.loadCategories();
    }

    loadCategories = async () => {
        let res = await ProductService.fetchProductCategories();
        console.log(res);

        if (res.status === 200) {
            this.setState({
                categories: res.data
            })
        }
    }

    saveProduct = async () => {
        let formData = this.state.formData;
        if (formData.category!='' && formData.image!='') {
            let res = await ProductService.postProduct(formData);
            if (res.status === 200) {
                this.setState({
                    alert: true,
                    message: 'Product Saved Successfully',
                    severity: 'success'
                })
                this.clearFields();
            } else {
                this.setState({
                    alert: true,
                    message: 'Product Not Saved',
                    severity: 'error'
                })
            }
        } else {
            this.setState({
                alert: true,
                message: 'Please fill all the data',
                severity: 'error'
            })
        }
    }

    clearFields = () => {
        this.setState({
            formData:{
                title: '',
                price: '',
                description: '',
                image: '',
                category: ''
            }
        })
    }

    render() {
        return (
            <>
                <ValidatorForm ref="form" className="pt-2" onSubmit={this.saveProduct}>
                    <Grid container className="pt-2" spacing={3}>
                        <Grid item lg={6} xs={6} sm={6} md={6}>
                            <Typography variant="h2" fontWeight={"bold"}>Product Manage</Typography>
                        </Grid>
                        <Grid item lg={6} xs={6} sm={6} md={6} display={"flex"} alignItems={"center"} justifyContent={"flex-end"}>
                            <Link to={"/dashboard"}><Button variant={"contained"} type={"button"} color={"primary"}>Home</Button></Link>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6}>
                            <Typography variant="subtitle1">Title</Typography>
                            <TextValidator
                                placeholder="Title"
                                variant="outlined"
                                size="small"
                                style={{width: '100%'}}
                                value={this.state.formData.title}
                                onChange={(e) => {
                                    let formData = this.state.formData;
                                    formData.title = e.target.value;
                                    this.setState({formData});
                                }}
                                validators={['required']}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6}>
                            <Typography variant="subtitle1">Price</Typography>
                            <TextValidator
                                placeholder="Price"
                                variant="outlined"
                                size="small"
                                style={{width: '100%'}}
                                value={this.state.formData.price}
                                onChange={(e) => {
                                    let formData = this.state.formData;
                                    formData.price = e.target.value;
                                    this.setState({formData});
                                }}
                                validators={['required']}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6}>
                            <Typography variant="subtitle1">Category</Typography>
                            <Autocomplete
                                disablePortal
                                id="combo-box-demo"
                                options={this.state.categories}
                                value={this.state.formData.category}
                                onChange={(e, value) => {
                                    let formData = this.state.formData;
                                    formData.category = value;
                                    this.setState({formData});
                                }}
                                sx={{width: "100%"}}
                                renderInput={(params) => <TextField {...params} />}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6}>
                            <Typography variant="subtitle1">Description</Typography>
                            <TextValidator
                                placeholder="Description"
                                variant="outlined"
                                size="large"
                                style={{width: '100%'}}
                                value={this.state.formData.description}
                                onChange={(e) => {
                                    let formData = this.state.formData;
                                    formData.description = e.target.value;
                                    this.setState({formData});
                                }}
                                validators={['required']}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6}>
                            <Typography variant="subtitle1">Image</Typography>
                            <input
                                id="inputFile"
                                type={"file"}
                                style={{fontSize: "20px"}}
                                onChange={(e) => {
                                    let formData = this.state.formData;
                                    formData.image = e.target.value;
                                    this.setState({formData});
                                }}
                            />
                        </Grid>
                    </Grid>
                    <Grid container marginTop={"10px"} direction={"row"} alignItems={"center"}
                          justifyContent={"flex-end"}>
                        <Button variant={"contained"} color={"warning"}
                                style={{marginLeft: "10px", marginRight: "10px"}} onClick={this.clearFields}>Clear</Button>
                        <Button variant={"contained"} color={"primary"} type={"submit"}
                                style={{marginLeft: "10px", marginRight: "10px"}}
                        >Save</Button>
                    </Grid>
                </ValidatorForm>
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

export default Products