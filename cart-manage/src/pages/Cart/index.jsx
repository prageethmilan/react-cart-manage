import {Component} from "react";
import {ValidatorForm} from "react-material-ui-form-validator";
import {Autocomplete, Grid, TextField, Typography} from "@mui/material";
import {DesktopDatePicker} from "@mui/x-date-pickers";
import {LocalizationProvider} from "@mui/x-date-pickers";
import {AdapterDateFns} from "@mui/x-date-pickers/AdapterDateFns";

class Cart extends Component {
    constructor(props) {
        super(props);
        this.state={
            value:''
        }
    }

    handleChange = (newValue) => {
        this.setValue(newValue);
    };

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
                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                <DesktopDatePicker
                                    label="Date desktop"
                                    inputFormat="MM/dd/yyyy"
                                    value={this.state.value}
                                    onChange={this.handleChange}
                                    renderInput={(params) => <TextField {...params} />}
                                />
                            </LocalizationProvider>
                        </Grid>
                    </Grid>
                </ValidatorForm>
            </>
        );
    }
}

export default Cart