import {
    Container, 
    Grid,
    Radio,
    FormLabel,
    FormControl,
    RadioGroup,
    FormControlLabel, 
    makeStyles,
    Paper,
    TextField,
    Typography, 
    Button,
    IconButton} from '@material-ui/core'

import AddCircleRoundedIcon from '@material-ui/icons/AddCircleRounded';
import React, { useState } from 'react'
const useStyles  = makeStyles((theme)=>{
    return{
        mainContainer:{
            background:"#f8a488",
            margin:theme.spacing(3)
           
        },
        title:{
            textAlign :"center"
        }
    }
})

const Scripts = () => {
    const classes = useStyles()

    const [value, setValue] = useState('female')
    const handleChange = (event) => {
        setValue(event.target.value);
      };
    return (

        <Paper className = {classes.mainContainer}>
            <Container  >
            <Grid Container>
                <Grid item xs = {12} className ={classes.title}>
                    <div>
                        <Typography variant = "h5">
                            Hello magafa
                        </Typography>
                    </div>

                </Grid>
                <Grid item>
        
                <TextField
                    id="outlined-helperText"
                    label="Notes"
                    variant="outlined"
                    multiline
                    fullWidth
                    rows =  {10}
                    />
                    
                </Grid>

                <Grid item xs = {12}>
                        <FormControl  color ="secondary" >
                            <FormLabel >Link Type</FormLabel>
                            <RadioGroup row aria-label="links" name="links" value={value} onChange={handleChange}>
                                <FormControlLabel value="works" control={<Radio />} label="Work" />
                                <FormControlLabel value="web" control={<Radio />} label="Web" />
                                <FormControlLabel value="blockChain" control={<Radio />} label="Blockchain" />
                                <IconButton
                                    size = "medium"
                                    label = "dhsjhdeh"
                                    className = {classes.addButton}
                                >
                                    <AddCircleRoundedIcon/>
                                </IconButton>
                            </RadioGroup>
                        </FormControl>

                </Grid>

            </Grid>
        </Container>

        </Paper>
    )
}

export default Scripts
