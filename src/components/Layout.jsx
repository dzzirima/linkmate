import { Drawer, List, ListItem, ListItemText, makeStyles, Typography,ListItemIcon } from '@material-ui/core'
import React from 'react'
import NotesIcon from '@material-ui/icons/Notes';
import HomeIcon from '@material-ui/icons/Home';
import DeveloperModeOutlinedIcon from '@material-ui/icons/DeveloperModeOutlined';
import LinkIcon from '@material-ui/icons/Link';
import { useHistory } from 'react-router';



const drawWidth = 200
const useStyles = makeStyles((theme) =>({
    root:{
        display:'flex',
    },
    page:{
        width:'100%',
        //This is the background color of al the pages that will be displayed...
        // background:'#1e6f5c'
    },
    draw:{
        width:drawWidth,
        
    },
    drawPaper:{
        width:drawWidth
    },
    title:{
        padding :theme.spacing(2)

    }
}));

const menuItems = [
    {
        name:"Home",
        location:"/Home",
        icon :< HomeIcon/>
    },
    {
        name:"Notes",
        location:"/Create",
        icon :< NotesIcon />
    },
    {
        name:"Link",
        location:"/links",
        icon :< LinkIcon/>
    },{
        name:"Scripts",
        location:"/Scripts",
        icon:<DeveloperModeOutlinedIcon/>
    }
];

const Layout = ({children}) => {
    const classes = useStyles()
    const history = useHistory()
    return (
        <div  className = {classes.root}>
            {/* App Bar */}
            {/* side Bar */}
            <div >
                <Drawer className = {classes.draw} 
                    variant = "permanent"
                    anchor = "left"
                    classes ={{paper:classes.drawPaper}}
                >
                    <div className =  {classes.title}>
                    <Typography 
                    
                    variant = "h5"
                    >
                        Home of Links..
                    </Typography>
                        
                    </div>
                   

                    <List >
                        {
                            menuItems.map((item) =>(
                                <ListItem 
                                    button
                                    key ={item.name}
                                    onClick = {()=>{
                                        console.log("dfdhfhui hsahd ")
                                        
                                        history.push(item.location)}
                                    }
                        
                                >
                                    <ListItemText primary = {item.name} />
                                    <ListItemIcon> {item.icon}</ListItemIcon>
                                </ListItem>    
                            ))
                        }
                    </List>
                </Drawer>
            </div>

            <div className = {classes.page}>
                {children}

            </div>

         
        </div>
      
    )
}

export default Layout
