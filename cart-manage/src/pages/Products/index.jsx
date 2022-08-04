import {Component} from "react";
import {TextValidator, ValidatorForm} from "react-material-ui-form-validator";
import {Grid, Typography} from "@mui/material";
import {Autocomplete} from "@mui/material";
import {TextField} from "@mui/material";

class Products extends Component{
    constructor(props) {
        super(props);
    }


    render() {
        return(
            <>
                <ValidatorForm ref="form" className="pt-2">
                    <Grid container className="pt-2" spacing={3}>
                        <Grid item lg={12} xs={12} sm={12} md={12}>
                            <Typography variant="h2" fontWeight={"bold"}>Product Manage</Typography>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6}>
                            <Typography variant="subtitle1">Title</Typography>
                            <TextValidator
                                placeholder="Title"
                                variant="outlined"
                                size="small"
                                style={{width: '100%'}}
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
                                validators={['required']}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6}>
                            <Typography variant="subtitle1">Category</Typography>
                            <Autocomplete
                                disablePortal
                                id="combo-box-demo"
                                // options={top100Films}
                                sx={{ width: "100%" }}
                                renderInput={(params) => <TextField {...params} label="Categories" />}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6}>
                            <Typography variant="subtitle1">Description</Typography>
                            <TextValidator
                                placeholder="Description"
                                variant="outlined"
                                size="large"
                                style={{width: '100%'}}
                                validators={['required']}
                            />
                        </Grid>
                    </Grid>
                </ValidatorForm>
            </>
        );
    }
}

export default Products