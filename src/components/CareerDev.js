import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Container, Typography } from '@material-ui/core';

import { careerDevStyle } from './jss/style'

import fullSizeImg from '../images/career-journey-map.png'

const useStyles = makeStyles(careerDevStyle)

function CareerDev() {

    const classes = useStyles();

    return (
        <>
            <div className={classes.wrapper}>
                <Container align="center">
                    <Grid container>
                        <Grid xs={false} sm={2}></Grid>
                        <Grid className="wow animate__animated animate__fadeInUp" xs={12} sm={8}>
                            <Typography className={classes.h2} variant="h2">
                                Career Development               </Typography>
                            <Typography className={classes.h5} variant="h4">
                                Many paths forward.                      </Typography>

                            <Typography className={classes.para} variant="subtitle1" paragraph>
                                Starting here can lead anywhere. 95% of all promotions are internal. Learn production. Move to shipping. Join the quality team or participate in the maintenance-in-training or leadership-in-training programs. If you are hungry to grow, the choice is yours.      </Typography>
                        </Grid>
                        <Grid xs={false} sm={2}></Grid>
                    </Grid>
                </Container>
            </div>
            <a href={fullSizeImg} data-featherlight="image">
                <img width="100%" id="image" src={fullSizeImg} alt="Career Journey" />
            </a>
        </>
    );
}

export default CareerDev;
