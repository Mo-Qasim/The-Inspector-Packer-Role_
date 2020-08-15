import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Button, Container, Typography } from '@material-ui/core';

import { nextStepStyle } from './jss/style'

import logo from '../images/MarathonStaffing-Logo.png'

const useStyles = makeStyles(nextStepStyle)

function NextStep() {
    const classes = useStyles();
    return (
        <div className={classes.wrapper}>
            <Container align="center">
                <Grid container>
                    <Grid xs={false} sm={2}></Grid>
                    <Grid xs={12} sm={8}>
                        <img className={`wow animate__animated animate__fadeInUp`} src={logo} alt="marathon staffing" />
                        <Typography className={classes.text} variant="subtitle1" paragraph>
                            Marathon Staffing was founded to help people achieve. Over the course of the last 30 years, we have helped over 250,000 people find a great job. We are revolutionizing the hiring experience by making it fast and easy. This project is part of a serious of projects we are undertaking to 'rethink' the hiring experience.
                     </Typography>
                        <Button className={`${classes.btn} wow animate__animated animate__fadeInUp`} color="primary" variant="contained" size="large"> VISIT OUR SITE </Button>
                    </Grid>
                    <Grid xs={false} sm={2}></Grid>
                </Grid>
            </Container>
        </div>

    )
}


export default NextStep

