import React from 'react'
import {Button, Container, Grid, Paper, Typography,Card, FormLabel, Radio ,FormControlLabel,Checkbox} from "@material-ui/core"
import { makeStyles } from '@material-ui/core'
import TextField from '@material-ui/core/TextField';
import SaveRoundedIcon from '@material-ui/icons/SaveRounded';

import { green } from '@material-ui/core/colors';
import AddIcon from '@material-ui/icons/Add';

const usestyles = makeStyles((theme)=>{
    return{
        root:{
            flexGrow:1,
            padding:theme.spacing(3)
        },
        title:{
            width:"60%",
        },
        titleContainer:{
           textAlign:'center',
           marginBottom:theme.spacing(4)
        },
        keywordsContainer:{
            height: "150px",
            marginRight:theme.spacing(2)
            // background:'#845460',
            // border:'solid 1px #845460',
            // borderRadius : 10
        },
        button:{
            margin: theme.spacing(1),
        },
        mainCard:{
            padding:theme.spacing(5),
            margin:theme.spacing(3),
            background:'#caf7e3'
        },
        saveContainer:{
            textAlign:'center',
            width:'60%'
        }
    }
    
})

export const Create = () => {
    const classes = usestyles()
    return (
        <Container className = {classes.root}>
            <Card className = {classes.mainCard} elevation = {5}>
                <Grid  container spacing = {3}>
                    <Grid item xs = {12}  className= {classes.titleContainer}>
                        <TextField 
                        className = {classes.title}
                            label="Topic /Title"
                            variant="outlined"
                            color="primary"
                            fullWidth
                        /> 
                    </Grid>
                    <Grid container>
                        <Grid item xs = {4} >
                            <FormControlLabel control={<Checkbox links="checkedC" />} label="Links" />
                            <FormControlLabel control={<Checkbox keywords ="checkedC" />} label="Keywords" />
                            <div className = {classes.keywordsContainer}> 
                                <TextField 
                                    label="Keywords /Questions "
                                    variant="outlined"
                                    color="primary"
                                    helperText="Separate keyWorks with #"
                                    multiline
                                    rows = {5}
                                    fullWidth
                            />
                            </div> 
                        </Grid>
                        <Grid item xs = {8}>
                            <TextField
                                id="outlined-helperText"
                                label="Notes"
                                variant="outlined"
                                multiline
                               fullWidth
                                rows =  {10}
                                />
                            </Grid>
                    </Grid>
                    <Grid item xs = {12}>
                        <TextField
                            label="One line Summary "
                            variant="outlined"
                            defaultValue="Summary :::"
                        
                            fullWidth
                            rows =  {1}
                            />
                    </Grid>

                    <Grid item xs = {12} className = {classes.saveContainer}>
                        <Button
                            variant="contained"
                            color="primary"
                            size="large"
                            className={classes.button}
                            startIcon={<SaveRoundedIcon />}
                
                        >
                            Save
                        </Button>

                        </Grid>
                </Grid>
            </Card>
            
        </Container>
    )
}
