export const headerStyle = {
    wrapper: {
        padding: "40px 0",
    },
    h2: {
        color: "#111111",
        marginTop: "116px",
        fontSize: "64px",
        marginBottom: "25px",
        fontWeight: "700",
    },
    h5: {
        color: "#333",
        marginBottom: "25px",
        fontSize: "40px",
        fontWeight: "500",
    },
    para: {
        color: "#111111",
        marginBottom: "30px",
        fontWeight: "300",
        fontSize: "18px",
    },
    '@media(max-width: 767px) ': {

        h2: {
            fontSize: "34px",
        },
        h5: {
            fontSize: "20px",
        },
        para: {
            lineHeight: "normal",
            fontSize: "21px",
        }
    }
}

export const navStyle = {
    root: {

        flexGrow: 1,

    },
    menuButton: {
        color: "#444"
    },
    title: {
        flexGrow: 1,
    },
    link: {
        color: "#444",
        padding: "10px 15px",
        fontSize: "12px",
        fontWeight: "500",
        transition: "0.2s ease-in",

        '&:hover': {
            textDecoration: "none",
            color: "#000",
        }
    },
    link2: {
        color: "#444",
        padding: "10px 15px",
        fontSize: "12px",
        fontWeight: "500",
        margin: "0 auto",
        marginBottom: "12px",
        transition: "0.2s ease-in",

        '&:hover': {
            textDecoration: "none",
            color: "#000",
        }
    },
}

export const topToBottomStyle = {
    root: {
        color: "#fff",

    },
    btn: {
        fontSize: "13px",
        fontWeight: "400",
        padding: "11px 28px",
        borderRadius: "0",
        backgroundColor: "#2490e2",

        '&:hover': {
            backgroundColor: "#2490e2",
        }
    }
}


export const careerDevStyle = {
    wrapper: {
        paddingTop: "40px",
        marginTop: "26px",
    },
    h2: {
        color: "#1D5F9A",
        fontWeight: "700",
    },
    h5: {
        color: "#fff",
        fontWeight: "400",
    },
    para: {
        fontSize: "21px",
        margin: "20px auto 40px",
        color: "#111111",
        lineHeight: "1.4",
    },
    '@media(max-width: 767px) ': {
        h2: {
            fontSize: "34px",
        },
        h5: {
            fontSize: "28px",
        },
    }
}


export const descriptionStyle = {
    wrapper: {
        marginBottom: "86px",
    },
    padd: {
        padding: "0 50px !important",
    },
    h2: {
        color: "#1D5F9A",
        fontSize: "60px",
        fontWeight: "600",
    },
    h5: {
        color: "#888",
        fontWeight: "400",
    },
    para: {
        fontSize: "21px",
        color: "#111111",
        lineHeight: "1.4",
        margin: "20px 0",
    },
    '@media(max-width: 767px) ': {
        padd: {
            padding: "0 20px !important",
        },
        h2: {
            fontSize: "33px",
        },
        h5: {
            fontSize: "26px",
        },
    }
}

export const footerStyle = {
    footer: {
        paddingTop: "60px",
        backgroundColor: "#fff",

    },
    footerText: {
        marginTop: "12px",
        marginBottom: "58px",
        color: "#707570",
        fontSize: "14px",
    },
    mrgtop: {
        marginTop: "12px",
    },
    link: {
        color: "#707570",

        '&:hover': {
            textDecoration: "none",
            color: "#444",
        }
    }
}


export const nextStepStyle = {
    wrapper: {
        backgroundColor: "#1D5F9A",
        marginTop: "50px",
        paddingTop: "5em",
    },
    text: {
        marginTop: "20px",
        fontSize: "18px",
        fontWeight: "300",
        lineHeight: "1.5em",
        color: "#fff",
    },
    btn: {
        borderRadius: "0",
        border: "2px solid #2490e2",
        backgroundColor: "#2490e2",
        marginTop: "2em",
        marginBottom: "5em",

        '&:hover': {
            border: "2px solid #2490e2",
            background: "transparent",
            outline: "none",
            color: "#2490e2",
            borderColor: "#2490e2",
        }
    }
}