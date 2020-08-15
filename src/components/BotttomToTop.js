import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Button, Container } from '@material-ui/core';

import { topToBottomStyle } from './jss/style'

import ScrollArrow from './ScrollArrow'


const useStyles = makeStyles(topToBottomStyle)


function BottomToTop() {

    const classes = useStyles();

    return (
        <Container>
            <div className="bottomBtns">

                <Button className={classes.btn} color="primary" variant="contained" size="large"> APPLY NOW </Button>
                <ScrollArrow />


            </div>

        </Container>
    )
}


export default BottomToTop