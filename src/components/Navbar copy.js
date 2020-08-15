import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Container, Link } from '@material-ui/core'

import { navStyle } from './jss/style';

import logo from '../images/marathon-logo.png'

const useStyles = makeStyles(navStyle)

export default function ButtonAppBar() {

    const [toggle, setToggle] = useState(false);
    const [nav, setnav] = useState(false);
    window.onscroll = function () { scrollFunction() };

    function scrollFunction() {
        let top = false;
        if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
            console.log("yes")
            top = false;
        } else {
            console.log("no")
            top = true;
        }
        setnav(top);
    }
    const classes = useStyles();

    return (
        <div className={classes.root}>



            <AppBar className={nav ? "nav_menu navTop" : "nav_menu navBelow"} position="fixed">
                <Container>
                    <Toolbar>

                        <Typography className={classes.title}>

                            <img src={logo} style={{ marginTop: "5px" }} width="32px" alt="marathon staffing" />

                        </Typography>

                        <div className="nhid_belowMD">
                            <Link className={classes.link} href="#" variant="body2">
                                HOME
                            </Link>
                            <Link className={classes.link} href="#" variant="body2">
                                TEAM MEMBERS
                            </Link>
                            <Link className={classes.link} href="#" variant="body2">
                                EMPLOYERS
                            </Link>
                            <Link className={classes.link} href="#" variant="body2">
                                PUBLIC SECTOR
                            </Link>
                            <Link className={classes.link} href="#" variant="body2">
                                COMMUNITY PARTNERS
                            </Link>
                            <Link className={classes.link} href="#" variant="body2">
                                LOCATIONS
                            </Link>
                        </div>

                        <div onClick={() => setToggle(!toggle)} className="nhid_aboveLG">
                            <IconButton edge="start" className={classes.menuButton} aria-label="menu">
                                <MenuIcon />
                            </IconButton>

                        </div>

                    </Toolbar>
                </Container>
            </AppBar>


            <div className={toggle ? "show nav_menu nhid_aboveLG" : "hide nav_menu nhid_aboveLG"}>
                <Link className={classes.link2} href="#" variant="body2">
                    HOME
                            </Link>
                <Link className={classes.link2} href="#" variant="body2">
                    TEAM MEMBERS
                            </Link>
                <Link className={classes.link2} href="#" variant="body2">
                    EMPLOYERS
                            </Link>
                <Link className={classes.link2} href="#" variant="body2">
                    PUBLIC SECTOR
                            </Link>
                <Link className={classes.link2} href="#" variant="body2">
                    COMMUNITY PARTNERS
                            </Link>
                <Link className={classes.link2} href="#" variant="body2">
                    LOCATIONS
                            </Link>
            </div>


        </div >
    );
}


