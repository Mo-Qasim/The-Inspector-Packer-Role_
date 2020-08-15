import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Container, Typography } from '@material-ui/core';

import { descriptionStyle } from './jss/style'

import img1 from '../images/earn-more.png'
import img2 from '../images/making-a-difference.png'
import img3 from '../images/reliable-hours.png'
import img4 from '../images/helping-achieve.png'


const useStyles = makeStyles(descriptionStyle)

function Footer() {

    const classes = useStyles();

    return (


        <Container align="center">

            <Grid className={`${classes.wrapper} wow animate__animated animate__fadeInUp`} container alignItems="center" spacing={3}>
                <Grid item xs={12} md={6}>
                    <img width="80%" src={img1} alt="" />
                </Grid>

                <Grid className={classes.padd} item xs={12} md={6}>
                    <Typography className={classes.h2} variant="h3">
                        Compensation
                    </Typography>
                    <Typography className={classes.h5} variant="h4">
                        Strong base. Attendance bonus. Room to grow.
                    </Typography>
                    <Typography className={classes.para} variant="subtitle1" paragraph>
                        Starting base is between X and Y. In addition to your base pay you are eligible for a $3.50 per hour earned attendance bonus. Even better, in as little as 90 days you could be eligible to ‘roll over’ that would lead to a pay bump plus access to great benefits including a retirement plan.
                    </Typography>
                </Grid>
            </Grid>


            <Grid className={`${classes.wrapper} wow animate__animated animate__fadeInUp`} container alignItems="center" spacing={3}>
                <Grid item xs={12} md={6}>
                    <img width="80%" src={img2} alt="" />
                </Grid>

                <Grid className={classes.padd} item xs={12} md={6}>
                    <Typography className={classes.h2} variant="h3">
                        Job Duties
                    </Typography>
                    <Typography className={classes.h5} variant="h4">
                        Inspect for quality. Prepare for shipping.
                    </Typography>
                    <Typography className={classes.para} variant="subtitle1" paragraph>
                        Work to help people live better more organized lives by making sure the products they buy are high quality. Inspector packers check for product completeness, color quality, and excess plastic (flash). They complete any finishing work and pack product for shipping.
                     </Typography>
                </Grid>
            </Grid>



            <Grid className={`${classes.wrapper} wow animate__animated animate__fadeInUp`} container alignItems="center" spacing={3}>
                <Grid item xs={12} md={6}>
                    <img width="80%" src={img3} alt="" />
                </Grid>

                <Grid className={classes.padd} item xs={12} md={6}>
                    <Typography className={classes.h2} variant="h3">
                        Schedule
                    </Typography>
                    <Typography className={classes.h5} variant="h4">
                        Full-time. Day or Night. Regular OT.
                    </Typography>
                    <Typography className={classes.para} variant="subtitle1" paragraph>
                        Marathon employees work 12 hour rotating shifts. Shift changes are at 7 am and 7 pm. Earn eight hours of OT every other week. Make full-time money only working 15 days a month.  </Typography>
                </Grid>
            </Grid>



            <Grid className={`${classes.wrapper} wow animate__animated animate__fadeInUp`} container alignItems="center" spacing={3}>
                <Grid item xs={12} md={6}>
                    <img width="80%" src={img4} alt="" />
                </Grid>

                <Grid className={classes.padd} item xs={12} md={6}>
                    <Typography className={classes.h2} variant="h3">
                        30-day onboarding program
                    </Typography>
                    <Typography className={classes.h5} variant="h4">
                        Start here. Go anywhere.
                    </Typography>
                    <Typography className={classes.para} variant="subtitle1" paragraph>
                        All new Marathon employees participate in a 30-day onboarding program that starts during the initial orientation class and carries through their first 30 days on the job. At the end of the program, graduates are recognized with rewards </Typography>
                </Grid>
            </Grid>


        </Container>


    );
}

export default Footer;
