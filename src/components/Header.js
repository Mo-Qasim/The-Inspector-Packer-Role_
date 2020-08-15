import React, { useEffect } from 'react';
import WOW from 'wowjs';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Container, Typography } from '@material-ui/core';
import { headerStyle } from './jss/style';
import fullSizeImg from '../images/hero-bg.png'

const useStyles = makeStyles(headerStyle)


function CareerDev() {

    useEffect(() => {
        new WOW.WOW().init();
    }, []);

    const classes = useStyles();

    return (
        <>
            <div className={classes.wrapper}>
                <Container align="center">
                    <Grid className="wow animate__animated animate__fadeInUp" container>
                        <Grid xs={false} sm={2}></Grid>
                        <Grid xs={12} sm={8}>
                            <Typography className={`${classes.h2}`} variant="h2">
                                The Inspector Packer Role
                                         </Typography>
                            <Typography className={classes.h5} variant="h4">
                                An entry-level job with career opportunity                     </Typography>

                            <Typography className={classes.para} variant="subtitle1" paragraph>
                                Inspector packers support the operations of the world’s largest plastic houseware manufacturer. You get fantastic starting pay, discounts on product, and a career path that leads.  </Typography>
                        </Grid>
                        <Grid xs={false} sm={2}></Grid>
                    </Grid>
                </Container>
                <img className="hide_img" width="100%" src={fullSizeImg} alt="Career Journey" />
            </div>
        </>
    );
}

export default CareerDev;
