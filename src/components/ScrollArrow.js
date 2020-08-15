import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ArrowUpwardSharpIcon from '@material-ui/icons/ArrowUpwardSharp';

import { topToBottomStyle } from './jss/style'


const useStyles = makeStyles(topToBottomStyle)


const ScrollArrow = () => {

    const [showScroll, setShowScroll] = useState(false)

    const checkScrollTop = () => {
        if (!showScroll && window.pageYOffset > 400) {
            setShowScroll(true)
        } else if (showScroll && window.pageYOffset <= 400) {
            setShowScroll(false)
        }
    };

    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('scroll', checkScrollTop)

    const classes = useStyles();


    return (
        <div className={showScroll ? "scrollTop up" : "scrollTop down"} onClick={scrollTop}>
            <ArrowUpwardSharpIcon className={`${classes.root} arrow`} />
        </div>
    );
}

export default ScrollArrow;