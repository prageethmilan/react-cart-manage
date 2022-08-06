import {TextValidator, ValidatorForm} from "react-material-ui-form-validator";
import {Autocomplete, Button, Grid, Typography} from "@mui/material";
import * as React from 'react';
import {Component} from 'react';
import TextField from '@mui/material/TextField';
/*import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'*/
/*import './style.css'*/
import {DatePicker, LocalizationProvider} from "@mui/x-date-pickers";
import {AdapterDateFns} from "@mui/x-date-pickers/AdapterDateFns";
import {Checkbox} from "@mui/material";
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

class Cart extends Component {

    constructor(props) {
        super(props);
        this.state = ({
            date: new Date(),
            top100Films:[
                { title: 'The Shawshank Redemption', year: 1994 },
                { title: 'The Godfather', year: 1972 },
                { title: 'The Godfather: Part II', year: 1974 },
                { title: 'The Dark Knight', year: 2008 },
                { title: '12 Angry Men', year: 1957 },
                { title: "Schindler's List", year: 1993 },
                { title: 'Pulp Fiction', year: 1994 }
            ],
            icon:<CheckBoxOutlineBlankIcon fontSize="small" />,
            checkedIcon : <CheckBoxIcon fontSize="small" />
        })

    }
    selectDate=(e)=>{
        this.setState({date:e})
    }


    /*setValue = (value) => {
        let val = this.state.value;
        this.setState({
            value:val
        })
    }*/

    render() {
        return (
            <>
                <ValidatorForm ref="form" className="pt-2">
                    <Grid container className="pt-2" spacing={3}>
                        <Grid item lg={12} xs={12} sm={12} md={12}>
                            <Typography variant="h2" fontWeight={"bold"}>Cart Manage</Typography>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6}>
                            <Typography variant="subtitle1">Username</Typography>
                            <Autocomplete
                                disablePortal
                                id="combo-box-demo"
                                // options={top100Films}
                                sx={{width: "100%"}}
                                renderInput={(params) => <TextField {...params} label="Username"/>}
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
                                    value={this.state.date}
                                    onChange={this.selectDate}
                                    renderInput={(params) => <TextField {...params} style={{width:"100%"}}/>}
                                    inputFormat="yyyy-MM-dd"
                                />
                            </LocalizationProvider>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6}>
                            <Typography variant={"subtitle1"}>Product Title</Typography>
                            <Autocomplete
                                multiple
                                id="checkboxes-tags-demo"
                                options={this.state.top100Films}
                                disableCloseOnSelect
                                getOptionLabel={(option) => option.title}
                                renderOption={(props, option, { selected }) => (
                                    <li {...props}>
                                        <Checkbox
                                            icon={this.state.icon}
                                            checkedIcon={this.state.checkedIcon}
                                            style={{ marginRight: 8 }}
                                            checked={selected}
                                        />
                                        {option.title}
                                    </li>
                                )}
                                style={{ width: 500 }}
                                renderInput={(params) => (
                                    <TextField {...params} style={{width:"100%"}} />
                                )}
                            />
                        </Grid>
                        <Grid item lg={6} md={6} xs={12} sm={12}>
                            <Typography variant={"subtitle1"}>Qty</Typography>
                            <TextValidator
                                placeholder="Qty"
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
            </>
        );
    }
}

export default Cart