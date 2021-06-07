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

import React, { useState } from 'react'
import LinkIcon from '@material-ui/icons/Link';
import AddCircleRoundedIcon from '@material-ui/icons/AddCircleRounded';
import SaveOutlinedIcon from '@material-ui/icons/SaveOutlined';



const useStyles = makeStyles((theme) =>{

    
    return{

            rootContainer:{
                // height: '100vh',  remember the magic is here
                padding:theme.spacing(3)
            },
            formcontrol:{
                margin:theme.spacing(3),
                width:"60%",
                background:"#caf7e3",
                padding :theme.spacing(3)
                
            },
            title :{
                textAlign :"center"

            },
            TextField:{
                display:'block'
            },
            addButton:{
                width: 60,
                height: 60
            },
            saveButton:{
                textAlign :"center",
                justifyContent:'center'
            }

        }
})

const Links = () => {
    const classes = useStyles()

    const [value, setValue] = useState('female')
    const handleChange = (event) => {
        setValue(event.target.value);
      };

    return (
        <Container className ={classes.rootContainer}>
            <Paper className = {classes.formcontrol}>
                <Grid container  spacing = {3}>
                    <Grid item xs = {12} className = {classes.title}>
                        <div>
                            <Typography variant = "h4">
                                Manage you Links
                            </Typography>
                        </div>
                    </Grid>
                    
                    <Grid container spacing = {2}>

                    <Grid item xs = {12} sm = {4}>
                        <TextField 
                            color ="primary"
                            variant = "outlined"
                            label = "URL Discription"
                            fullWidth
                            multiline
                            rows = {8}
                        />
                    </Grid>

                    <Grid item xs ={12} sm = {8}>
                        <TextField 
                            className = {classes.TextField}
                            color ="primary"
                            variant = "outlined"
                            label = "Url"
                            fullWidth
                        />
                    </Grid>
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
                    <Grid item >
                        <div className = {classes.saveButton} >
                            <Button 
                            size = "large"
                            variant = "outlined"
                            color = "primary"
                            endIcon = {<SaveOutlinedIcon />}
                            >
                                Save Link
                            
                            </Button>

                        </div>
                        

                    </Grid>
                </Grid>
            </Paper>

            
            
            
        </Container>
    )
}

export default Links
