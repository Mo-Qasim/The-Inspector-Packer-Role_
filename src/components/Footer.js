import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link, Grid, Container, Typography } from '@material-ui/core';

import { footerStyle } from './jss/style'


import logo from '../images/marathon-logo.png'

const useStyles = makeStyles(footerStyle)

function Footer() {

    const classes = useStyles();

    return (
        <>
            <footer className={classes.footer}>
                <Container align="center">
                    <Grid container>
                        <Grid xs={false} sm={2}></Grid>
                        <Grid xs={12} sm={8}>
                            <img width="40" src={logo} alt="marathon staffing" />

                            <Grid container>
                                <Grid xs={2} md={4}>
                                </Grid>
                                <Grid className={classes.mrgtop} xs={2} md={1}>
                                    <Link className={classes.link} href="#" variant="body2">
                                        HOME
                                </Link>
                                </Grid>
                                <Grid className={classes.mrgtop} xs={2} md={1}>
                                    <Link className={classes.link} href="#" variant="body2">
                                        ABOUT
                                </Link>
                                </Grid>
                                <Grid className={classes.mrgtop} xs={2} md={1}>
                                    <Link className={classes.link} href="#" variant="body2">
                                        JOBS
                                </Link>
                                </Grid>
                                <Grid className={classes.mrgtop} xs={2} md={1}>
                                    <Link className={classes.link} href="#" variant="body2">
                                        CONTACT&nbsp;US
                                </Link>
                                </Grid>
                                <Grid xs={2} md={4}>
                                </Grid>
                            </Grid>

                            <Typography className={classes.footerText} variant="subtitle1" paragraph>
                                Copyright © 2020 Marathon Staffing. All Rights Reserved   </Typography>
                        </Grid>
                        <Grid xs={false} sm={2}></Grid>
                    </Grid>
                </Container>
            </footer>

        </>
    );
}

export default Footer;
