import React, { useState, useEffect, useCallback } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
function App() {

    // To remove the default margin and scrolls in the body
	useEffect(() => {

		document.body.style.margin = "0";
		document.body.style.overflow = "hidden";

	},[])

    return ( 
        <Box 
            id="mainContainer" 
            style={{
                alignItems: "center",
                backgroundImage: "url('https://thumbs.dreamstime.com/b/full-stadium-neoned-colorful-flashlights-background-full-stadium-neoned-colorful-flashlights-background-flyer-197148262.jpg')",
                backgroundSize: "cover",
                display: "flex",
                flexDirection: "column",
                gap: "1vh",
                height: "100vh",
                justifyContent: "center",
                position: "relative",
                width: "100vw",
            }}
        >
            <Box 
                id="matchSummaryContainer"
                style={{
                    alignItems: "center",
                    background: "linear-gradient(to right, rgba(200, 2, 101, 1), rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9), rgb(58, 213, 208))",
                    clipPath: "polygon(0% 0%, 100% 0%, 95% 100%, 5% 100%)",
                    border: "1px solid white",
                    boxShadow: "0px 0px 4px white",
                    backgroundClip: "padding-box",
                    boxSizing: "border-box",
                    display: "flex",
                    height: "10%",
                    justifyContent: "center",
                    marginTop: `${(8/768)*100}vh`,
                    width: `${(736/1366)*100}vw`,
                }}
            >
                <Typography 
                    id="matchSummaryText"
                    style={{
                        color: "rgb(252, 252, 252)",
                        fontFamily: "Oswald",
                        fontSize: `${(32/1366)*100}vw`,
                        fontWeight: "700",
                        textShadow: "0px 0px 10px rgb(35, 193, 255)",
                        textTransform: "uppercase",
                    }}
                >
                    MATCH SUMMARY
                </Typography>
            </Box>
            <Stack 
                id="scoreBoardContainer"
                spacing={2}
                style={{
                    alignItems: "center",
                    background: "linear-gradient(to right,rgba(200, 2, 101, 0.8),rgb(0, 0, 0),rgb(0, 0, 0),rgba(46, 133, 142, 0.8))",
                    boxShadow: "0px 0px 3px white",
                    display: "flex",
                    flexDirection: "column",
                    height: "74%",
                    position: "relative",
                    width: `${(660/1366)*100}vw`,
                }}
            >
                <Box 
                    id="top" 
                    style={{
                        alignItems: "center",
                        display: "flex",
                        flexDirection: "row",
                        gap: `${(40/1366)*100}vw`,
                        marginTop: `${(81/768)*100}vh`,
                        position: "absolute",
                    }}
                >
                    <Typography
                        id="topTypography1"
                        style={{
                            background: "linear-gradient(to right, rgb(160, 0, 80), transparent)",
                            color: "white",
                            fontSize: `${(14/1366)*100}vw`,
                            fontWeight: "600",
                            fontFamily: "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif",
                            height: `${(47/768)*100}vh`,
                            paddingTop: `${(16/768)*100}vh`,
                            paddingBottom: "41vh",
                            textAlign: "center",
                            transform: "scaleY(1.5)",
                            width: `${(150/1366)*100}vw`,
                        }}
                    >
                        PALANI TUSKERS
                    </Typography>
                    <Typography
                        id="topTypography2"
                        style={{
                            color: "white",
                            fontFamily: "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif",
                            fontSize: `${(18/1366)*100}vw`,
                            fontWeight: "600",
                            height: `${(51/768)*100}vh`,
                            paddingTop: `${(14/768)*100}vh`,
                            paddingBottom: `${(340/768)*100}vh`,
                            transform: "scaleY(1.4)",
                            textAlign: "center",
                            width: `${(180/1366)*100}vw`,
                        }}
                    >
                        MATCH 7
                    </Typography>
                    <Typography
                        id="topTypography3"
                        style={{
                            background: "linear-gradient(to left, #3caeaa, transparent)",
                            color: "white",
                            fontFamily: "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif",
                            fontSize: `${(14/1366)*100}vw`,
                            fontWeight: "600",
                            paddingTop: `${(16/768)*100}vh`,
                            paddingBottom: "41vh",
                            height: `${(47/768)*100}vh`,
                            textAlign: "center",
                            transform: "scaleY(1.5)",
                            width: `${(150/1366)*100}vw`,
                        }}
                    >
                        NILGIRI KNIGHTS
                    </Typography>
                </Box>
                <Box 
                    id="fullTime" 
                    style={{
                        alignItems: "center",
                        borderRadius: "5px",
                        background: "linear-gradient(to bottom, #f7f7f7,rgb(170, 170, 170),#f7f7f7)",
                        display: "flex",
                        gap: `${(32/1366)*100}vw`,
                        height: `${(68/768)*100}vh`,
                        justifyContent: "center",
                        marginTop: `${(84/768)*100}vh`,
                        outline: "3px solid rgb(156, 156, 156)",
                        width: `${(601/1366)*100}vw`,
                        zIndex: "50",
                    }}
                >
                    <Typography 
                        id="fullTimeTypography1"
                        style={{
                            alignItems: "center",
                            background: "linear-gradient(to bottom, rgb(200, 2, 100),rgb(126, 0, 63) 80%)",
                            color: "white",
                            display: "flex",
                            fontSize: `${(52/1366)*100}vw`,
                            fontFamily: "'Bebas Neue'",
                            fontWeight: "600",
                            height: `${(75/768)*100}vh`,
                            justifyContent: "center",
                            width: `${(150/1366)*100}vw`,
                            zIndex: "100",
                        }}
                    >
                        30
                    </Typography>
                    <Typography 
                        style={{
                            color: "black",
                            fontSize: `${(33/1366)*100}vw`,
                            fontFamily: "'Bebas Neue'",
                            fontWeight: "600",
                            transform: "scaleX(1.2)",
                            textAlign: "center",
                            width: `${(200/1366)*100}vw`,
                        }}
                    >
                        FULL TIME
                    </Typography>
                    <Typography 
                        style={{
                            alignItems: "center",
                            background: "linear-gradient(to bottom, #3ad5d0,#268a8a 80%)",
                            color: "white",
                            display: "flex",
                            fontFamily: "'Bebas Neue'",
                            fontSize: `${(52/1366)*100}vw`,
                            fontWeight: "600",
                            height: `${(75/768)*100}vh`,
                            justifyContent: "center",
                            width: `${(150/1366)*100}vw`,
                            zIndex: "100",
                        }}
                    >
                        18
                    </Typography>
                </Box>
                <Box 
                    id="raidPoints"
                    style={{
                        alignItems: "center",
                        background: "linear-gradient(to right, rgba(200, 2, 101, 0.8),transparent 40%,transparent 60%,rgba(58, 213,208, 0.8) 100%)",
                        borderRadius: "40px",
                        display: "flex",
                        flexDirection: "row",
                        gap: `${(42/1366)*100}vw`,
                        height: `${(47/768)*100}vh`,
                        justifyContent: "center",
                        width: `${(609/1366)*100}vw`,
                        zIndex: "50",
                    }}
                >
                    <Typography 
                        id="palaniTuskersRaidPoints" 
                        style={{
                            alignItems: "center",
                            background: "linear-gradient(to bottom, rgb(200, 2, 100),rgb(126, 0, 63) 80%)",
                            color: "white",
                            display: "flex",
                            fontFamily: "'Bebas Neue'", 
                            fontWeight: "600",
                            fontSize: `${(30/1366)*100}vw`,
                            height: `${(47/768)*100}vh`,
                            justifyContent: "center",
                            width: `${(150/1366)*100}vw`,
                        }}
                    >
                        16
                    </Typography>
                    <Typography 
                        id="raidPoints_" 
                        style={{
                            color: "white",
                            fontFamily: "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif",
                            fontSize: `${(19/1366)*100}vw`,
                            fontWeight: "600",
                            transform: "scaleY(1.3)",
                            textAlign: "center",
                            width: `${(180/1366)*100}vw`,
                        }}
                    >
                        RAID POINTS
                    </Typography>
                    <Typography 
                        id="nilgiriKnightsRaidPoints" 
                        style={{
                            alignItems: "center",
                            background: "linear-gradient(to bottom, #3ad5d0,#268a8a 80%)",
                            color: "white",
                            display: "flex",
                            fontFamily: "'Bebas Neue'", 
                            fontWeight: "600",
                            fontSize: `${(30/1366)*100}vw`,
                            height: `${(47/768)*100}vh`,
                            justifyContent: "center",
                            width: `${(150/1366)*100}vw`
                        }}
                    >
                        11
                    </Typography>
                </Box>
                <Box 
                    id="tacklePoints"
                    style={{
                        alignItems: "center",
                        background: "linear-gradient(to right, rgba(200, 2, 101, 0.8),transparent 40%,transparent 60%,rgba(58, 213,208, 0.8) 100%)",
                        borderRadius: "40px",
                        display: "flex",
                        flexDirection: "row",
                        gap: `${(42/1366)*100}vw`,
                        height: `${(47/768)*100}vh`,
                        justifyContent: "center",
                        width: `${(609/1366)*100}vw`,
                        zIndex: 50,
                    }}
                >
                    <Typography 
                        id="palani-tuskers-tackle-points" 
                        style={{
                            alignItems: "center",
                            background: "linear-gradient(to bottom, rgb(200, 2, 100),rgb(126, 0, 63) 80%)",
                            color: "white",
                            display: "flex",
                            fontFamily: "'Bebas Neue'", 
                            fontWeight: "600",
                            fontSize: `${(30/1366)*100}vw`,
                            height: `${(47/768)*100}vh`,
                            justifyContent: "center",
                            width: `${(150/1366)*100}vw`
                        }}
                    >
                        11
                    </Typography>
                    <Typography 
                        id="tacklePoints" 
                        style={{
                            color: "white",
                            fontFamily: "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif",
                            fontSize: `${(19/1366)*100}vw`,
                            fontWeight: "600",
                            transform: "scaleY(1.3)",
                            textAlign: "center",
                            width: `${(180/1366)*100}vw`
                        }}
                    >
                        TACKLE POINTS
                    </Typography>
                    <Typography 
                        id="nilgiriKnightsTacklePoints" 
                        style={{
                            alignItems: "center",
                            background: "linear-gradient(to bottom, #3ad5d0,#268a8a 80%)",
                            color: "white",
                            display: "flex",
                            fontFamily: "'Bebas Neue'", 
                            fontWeight: "600",
                            fontSize: `${(30/1366)*100}vw`,
                            height: `${(47/768)*100}vh`,
                            justifyContent: "center",
                            width: `${(150/1366)*100}vw`
                        }}
                    >
                        7
                    </Typography>
                </Box>
                <Box 
                    id="allOutPoints"
                    style={{
                        alignItems: "center",
                        background: "linear-gradient(to right, rgba(200, 2, 101, 0.8),transparent 40%,transparent 60%,rgba(58, 213,208, 0.8) 100%)",
                        borderRadius: "40px",
                        display: "flex",
                        flexDirection: "row",
                        gap: `${(42/1366)*100}vw`,
                        height: `${(47/768)*100}vh`,
                        justifyContent: "center",
                        width: `${(609/1366)*100}vw`,
                        zIndex: "50",
                    }}
                >
                    <Typography 
                        id="palaniTuskersAllOutPoints" 
                        style={{
                            alignItems: "center",
                            background: "linear-gradient(to bottom, rgb(200, 2, 100),rgb(126, 0, 63) 80%)",
                            color: "white",
                            display: "flex",
                            fontFamily: "'Bebas Neue'", 
                            fontWeight: "600",
                            fontSize: `${(30/1366)*100}vw`,
                            height: `${(47/768)*100}vh`,
                            justifyContent: "center",
                            width: `${(150/1366)*100}vw`
                        }}
                    >
                        2
                    </Typography>
                    <Typography 
                        id="tacklePoints" 
                        style={{
                            color: "white",
                            fontFamily: "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif",
                            fontSize: `${(19/1366)*100}vw`,
                            fontWeight: "600",
                            transform: "scaleY(1.3)",
                            textAlign: "center",
                            width: `${(180/1366)*100}vw`
                        }}
                    >
                        ALL OUT POINTS
                    </Typography>
                    <Typography 
                        id="nilgiriKnightsTacklePoints" 
                        style={{
                            alignItems: "center",
                            background: "linear-gradient(to bottom, #3ad5d0,#268a8a 80%)",
                            display: "flex",
                            color: "white",
                            fontFamily: "'Bebas Neue'", 
                            fontWeight: "600",
                            fontSize: `${(30/1366)*100}vw`,
                            height: `${(47/768)*100}vh`,
                            justifyContent: "center",
                            width: `${(150/1366)*100}vw`
                        }}
                    >
                        0
                    </Typography>
                </Box>
                <Box 
                    id="extras"
                    style={{
                        alignItems: "center",
                        background: "linear-gradient(to right, rgba(200, 2, 101, 0.8),transparent 40%,transparent 60%,rgba(58, 213,208, 0.8) 100%)",
                        borderRadius: "40px",
                        display: "flex",
                        flexDirection: "row",
                        gap: `${(42/1366)*100}vw`,
                        height: `${(47/768)*100}vh`,
                        justifyContent: "center",
                        width: `${(609/1366)*100}vw`,
                        zIndex: "50",
                    }}
                >
                    <Typography 
                        id="palaniTuskersExtras" 
                        style={{
                            alignItems: "center",
                            background: "linear-gradient(to bottom, rgb(200, 2, 100),rgb(126, 0, 63) 80%)",
                            color: "white",
                            display: "flex",
                            fontFamily: "'Bebas Neue'", 
                            fontWeight: "600",
                            fontSize: `${(30/1366)*100}vw`,
                            height: `${(47/768)*100}vh`,
                            justifyContent: "center",
                            width: `${(150/1366)*100}vw`
                        }}
                    >
                        1
                    </Typography>
                    <Typography 
                        id="extras_" 
                        style={{
                            color: "white",
                            fontFamily: "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif",
                            fontSize: `${(19/1366)*100}vw`,
                            fontWeight: "600",
                            transform: "scaleY(1.3)",
                            textAlign: "center",
                            width: `${(180/1366)*100}vw`
                        }}
                    >
                        EXTRAS
                    </Typography>
                    <Typography 
                        id="nilgiriKnightsExras_" 
                        style={{
                            alignItems: "center",
                            background: "linear-gradient(to bottom, #3ad5d0,#268a8a 80%)",
                            color: "white",
                            display: "flex",
                            fontFamily: "'Bebas Neue'", 
                            fontWeight: "600",
                            fontSize: `${(30/1366)*100}vw`,
                            height: `${(47/768)*100}vh`,
                            justifyContent: "center",
                            width: `${(150/1366)*100}vw`
                        }}
                    >
                        0
                    </Typography>
                </Box>
                <Box 
                    id="superRaids"
                    style={{
                        alignItems: "center",
                        background: "linear-gradient(to right, rgba(200, 2, 101, 0.8),transparent 40%,transparent 60%,rgba(58, 213,208, 0.8) 100%)",
                        borderRadius: "40px",
                        display: "flex",
                        flexDirection: "row",
                        gap: `${(42/1366)*100}vw`,
                        height: `${(47/768)*100}vh`,
                        justifyContent: "center",
                        width: `${(609/1366)*100}vw`,
                        zIndex: "50",
                    }}
                >
                    <Typography
                        id="palaniTuskersSuperRaids" 
                        style={{
                            alignItems: "center",
                            background: "linear-gradient(to bottom, rgb(200, 2, 100),rgb(126, 0, 63) 80%)",
                            color: "white",
                            display: "flex",
                            fontFamily: "'Bebas Neue'", 
                            fontWeight: "600",
                            fontSize: `${(30/1366)*100}vw`,
                            height: `${(47/768)*100}vh`,
                            justifyContent: "center",
                            width: `${(150/1366)*100}vw`
                        }}
                    >
                        0
                    </Typography>
                    <Typography 
                        id="superRaids_" 
                        style={{
                            color: "white",
                            fontFamily: "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif",
                            fontSize: `${(19/1366)*100}vw`,
                            fontWeight: "600",
                            transform: "scaleY(1.3)",
                            textAlign: "center",
                            width: `${(180/1366)*100}vw`
                        }}
                    >
                        SUPER RAIDS
                    </Typography>
                    <Typography 
                        id="nilgiriKnightsSuperRaids" 
                        style={{
                            alignItems: "center",
                            background: "linear-gradient(to bottom, #3ad5d0,#268a8a 80%)",
                            color: "white",
                            display: "flex",
                            fontFamily: "'Bebas Neue'", 
                            fontWeight: "600",
                            fontSize: `${(30/1366)*100}vw`,
                            height: `${(47/768)*100}vh`,
                            justifyContent: "center",
                            width: `${(150/1366)*100}vw`
                        }}
                    >
                        1
                    </Typography>
                </Box>
                <Box 
                    id="superTackles"
                    style={{
                        alignItems: "center",
                        background: "linear-gradient(to right, rgba(200, 2, 101, 0.8),transparent 40%,transparent 60%,rgba(58, 213,208, 0.8) 100%)",
                        borderRadius: "40px",
                        display: "flex",
                        flexDirection: "row",
                        gap: `${(42/1366)*100}vw`,
                        height: `${(47/768)*100}vh`,
                        justifyContent: "center",
                        width: `${(609/1366)*100}vw`,
                        zIndex: "50",
                    }}
                >
                    <Typography 
                        id="palaniTuskersSuperRaids" 
                        style={{
                            alignItems: "center",
                            background: "linear-gradient(to bottom, rgb(200, 2, 100),rgb(126, 0, 63) 80%)",
                            color: "white",
                            display: "flex",
                            fontFamily: "'Bebas Neue'", 
                            fontWeight: "600",
                            fontSize: `${(30/1366)*100}vw`,
                            height: `${(47/768)*100}vh`,
                            justifyContent: "center",
                            width: `${(150/1366)*100}vw`
                        }}
                    >
                        1
                    </Typography>
                    <Typography 
                        id="superRaids_" 
                        style={{
                            color: "white",
                            fontFamily: "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif",
                            fontSize: `${(19/1366)*100}vw`,
                            fontWeight: "600",
                            transform: "scaleY(1.3)",
                            textAlign: "center",
                            width: `${(180/1366)*100}vw`
                        }}
                    >
                        SUPER TACKLES
                    </Typography>
                    <Typography 
                        id="nilgiriKnightsSuperRaids" 
                        style={{
                            alignItems: "center",
                            background: "linear-gradient(to bottom, #3ad5d0,#268a8a 80%)",
                            color: "white",
                            display: "flex",
                            fontFamily: "'Bebas Neue'", 
                            fontWeight: "600",
                            fontSize: `${(30/1366)*100}vw`,
                            height: `${(47/768)*100}vh`,
                            justifyContent: "center",
                            width: `${(150/1366)*100}vw`
                        }}
                    >
                        0
                    </Typography>
                </Box>
                <Box 
                    id="leftContainer"
                    style={{
                        height: "100%",
                        width: "1%",
                        backgroundColor: "rgba(200, 2, 101, 0.8)",
                        borderRadius: "10px",
                        position: "absolute",
                        top: "0%",
                        left: "1%",
                        marginTop: "0px",
                    }}
                >
                </Box>
                <Box 
                    id="rightContainer"
                    style={{
                        height: "100%",
                        width: "1%",
                        backgroundColor: "rgba(58, 213, 208, 0.8)",
                        borderRadius: "10px",
                        position: "absolute",
                        top: "0%",
                        right: "1%",
                        marginTop: "0px",
                    }}
                >
                </Box>
            </Stack>
            <Box 
                id="palaniTuskersLogoContainer"
                style={{
                    alignItems: "center",
                    backgroundColor: "rgba(160, 0, 80, 0.5)",
                    clipPath: "polygon(100% 20%, 0% 0%, 0% 100%, 100% 80%)",
                    display: "flex",
                    height: "100%",
                    justifyContent: "center",
                    top: "0%",
                    left: "0%",
                    position: "absolute",
                    width: `${(353/1366)*100}vw`,
                    zIndex: "100",
                }}
            >
                <img 
                    id="palaniTuskersLogo" 
                    src="https://feed.yuvakabaddi.com/YKS-2022-SE/teamLogos/569.png"
                    style={{
                        height: "40vh",
                    }}
                >
                </img>
            </Box>
            <Box
                id="nilgiriKnightsLogoContainer"
                style={{
                    alignItems: "center",
                    backgroundColor: "rgba(46, 133, 142, 0.5)",
                    clipPath: "polygon(100% 0%, 0% 20%, 0% 80%, 100% 100%)",
                    display: "flex",
                    height: "100%",
                    justifyContent: "center",
                    top: "0%",
                    right: "0%",
                    position: "absolute",
                    width: `${(353/1366)*100}vw`,
                    zIndex: "100",
                }}
            >
                <img 
                    id="nilgiriKnightsLogo"
                    src="https://www.bullscore.com/feature_img_cron/logos/kabaddi/151.png"
                    style={{
                        height: "40vh",
                    }}
                >
                </img>
            </Box>
            <Box 
                id="bestPlayerContainer"
                style={{
                    display: "flex",
                    flexDirection: "row",
                    height: "12%",
                    justifyContent: "center",
                }}
            >
                <Box
                    id="palaniTuskersBestPlayerMainContainer"
                    style={{
                        alignItems: "center",
                        display: "flex",
                        flexDirection: "row",
                        position: "relative",
                    }}
                >
                    <img  
                        src="https://feed.yuvakabaddi.com/YKS-2022-SE/teamLogos/569.png"
                        style={{
                            height: `${(85/768)*100}vh`,
                            left: "-7%",
                            position: "absolute",
                            top: "-25%",
                            zIndex: "300",
                        }}
                    >  
                    </img>
                    <img 
                        src="https://static.yuvakabaddi.com/images/player-images/6618.png"
                        style={{
                            height: `${(93/768)*100}vh`,
                            left: "12%", 
                            marginTop: `${(-25/768)*100}vh`,
                            position: "absolute", 
                            zIndex: "300",
                        }}
                    >
                    </img>
                    <Box 
                        id="palaniTuskersBestPlayerSubContainer"
                        style={{
                            width: `${(250/1366)*100}vw`,
                            height: `${(70/768)*100}vh`,
                            borderWidth: `${(50/1366)*100}vw`,
                            borderLeftStyle: "solid",
                            borderColor: "rgb(224, 224, 224)",
                            backgroundColor: "rgb(126, 0, 63)",
                            clipPath: "polygon(100% 0%, 0% 0%, 0% 100%, 90% 100% )",
                            zIndex: "200",
                        }}
                    >
                            <Typography 
                                id="palaniTuskersPlayerName"
                                style={{
                                    color: "white",
                                    fontFamily: "Oswald",
                                    fontSize: `${(15/1366)*100}vw`,
                                    fontWeight: "400",
                                    marginLeft: `${(110/1366)*100}vw`,
                                    marginTop: `${(3/768)*100}vh`,
                                    position: "absolute",
                                }}
                            >
                                S.MUKESHKANNAN
                            </Typography>
                        <Box
                            id="bestRaiderTextContainer"
                            style={{
                                alignItems: "center",
                                backgroundColor: "black",
                                color: "white",
                                display: "flex",
                                float: "left",
                                fontFamily: "Oswald",
                                fontSize: `${(15/1366)*100}vw`,
                                height: `${(37/768)*100}vh`,
                                justifyContent: "right",
                                marginTop: `${(35/768)*100}vh`,
                                position: "absolute",
                                paddingRight: `${(20/1366)*100}vw`,
                                clipPath: "polygon(100% 0%, 0% 0%, 0% 100%, 93% 100% )",
                                width: `${(180/1366)*100}vw`,
                            }}
                        >
                            <Typography
                                id="bestRaiderText"
                                style={{
                                    fontFamily: "Oswald",
                                    fontSize: `${(15/1366)*100}vw`,
                                }}
                            >
                                BEST RAIDER
                            </Typography>
                        </Box>
                    </Box>
                    <Box 
                        id="palaniTuskersPointsContainer"
                        style={{
                            alignItems: "center",
                            backgroundColor: "rgb(126, 0, 63)",
                            color: "white",
                            display: "flex",
                            flexDirection: "column",
                            fontFamily: "Oswald",
                            fontSize: `${(15/1366)*100}vw`,
                            fontWeight: "400",
                            height: `${(70/768)*100}vh`,
                            justifyContent: "center",
                            clipPath: "polygon(100% 0%, 22% 0%, 0% 100%, 75% 100% )",
                            textAlign: "center",
                            width: "10vw",
                            position: "relative",
                            left: "-6%",
                        }}
                    >
                        <Typography
                            id="palaniTuskersPointsText"
                            style={{
                                fontFamily: "Oswald",
                                fontSize: `${(15/1366)*100}vw`,
                                paddingLeft: "10%",
                            }}
                        >
                            RAID POINTS
                        </Typography>
                        <Typography
                            id="palaniTuskersPointsValue" 
                            style={{
                                fontFamily: "Oswald",
                                fontSize: `${(20/1366)*100}vw`,
                            }}
                        >
                            4
                        </Typography>
                    </Box>
                </Box>
                <Box 
                    id="nilgiriKnightPointsMainContainer"
                    style={{
                        alignItems: "center",
                        display: "flex",
                        flexDirection: "row",
                    }}
                >
                    <Box 
                        id="nilgiriKnightPointsSubContainer"
                        style={{
                            alignItems: "center",
                            backgroundColor: "rgb(46, 133, 142)",
                            color: "white",
                            clipPath: "polygon(78% 0%, 0% 0%, 22% 100%, 100% 100%)",
                            display: "flex",
                            flexDirection: "column",
                            fontFamily: "Oswald",
                            fontSize: `${(15/1366)*100}vw`,
                            fontWeight: "400",
                            height: `${(70/768)*100}vh`,
                            justifyContent: "center",
                            textAlign: "center",
                            width: "10vw",
                            right: "-6%",
                            position: "relative",

                        }}
                    >
                        <Typography 
                            id="nilgiriKnightPointsText"
                            style={{
                                fontFamily: "Oswald",
                                fontSize: `${(15/1366)*100}vw`,
                                paddingRight: "10%",
                            }}
                        >
                            TACKLE POINTS
                        </Typography>
                        <Typography
                            id="nilgiriKnightPointsValue" 
                            style={{
                                fontFamily: "Oswald",
                                fontSize: `${(20/1366)*100}vw`,
                            }}
                        >
                            4
                        </Typography>
                    </Box>
                    <Box 
                        id="nilgiriKnightsBestPlayerMainContainer"
                        style={{
                            backgroundColor: "rgb(46, 133, 142)",
                            borderWidth: `${(50/1366)*100}vw`,
                            borderRightStyle: "solid",
                            borderColor: "rgb(224, 224, 224)",
                            height: `${(70/768)*100}vh`,
                            width: `${(250/1366)*100}vw`,
                            zIndex: "200",
                            clipPath: "polygon(100% 0%, 0% 0%, 10% 100%, 100% 100%)",
                            position: "relative",
                        }}
                    >
                        <Box 
                            id="nilgiriKnightsBestPlayerAndLogoContainer"
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "right",
                            }}
                        >
                            <Typography
                                id="nilgiriKnightsBestPlayerName"
                                style={{
                                    color: "white",
                                    fontFamily: "Oswald",
                                    fontSize: `${(15/1366)*100}vw`,
                                    fontWeight: "400",
                                    marginRight: `${(110/1366)*100}vw`,
                                    marginTop: `${(3/768)*100}vh`,
                                    position: "absolute",
                                }}
                            >
                                PURUSHOTHAMAN
                            </Typography>
                        </Box>
                        <Box
                            id="nilgiriKnightsBestDefenderContainer" 
                            style={{
                                alignItems: "center", 
                                backgroundColor: "black",
                                color: "white",
                                display: "flex",
                                float: "right",
                                fontFamily: "Oswald",
                                fontSize: `${(15/1366)*100}vw`,
                                height: `${(37/768)*100}vh`,
                                marginTop: `${(35/768)*100}vh`,
                                paddingLeft: `${(20/1366)*100}vw`,
                                width: `${(180/1366)*100}vw`,
                                clipPath: "polygon(100% 0%, 0% 0%, 7% 100%, 100% 100%)",
                            }}
                        >
                            <Typography 
                                id="nilgiriKnightsBestDefenderText" 
                                style={{
                                    fontFamily: "Oswald",
                                    fontSize: `${(15/1366)*100}vw`,
                                }}
                            >
                                BEST DEFENDER
                            </Typography>
                        </Box>
                    </Box>
                    <img  
                        src="https://www.bullscore.com/feature_img_cron/logos/kabaddi/151.png"
                        style={{
                            height: `${(85/768)*100}vh`,
                            marginRight: `${(-85/1366)*100}vw`, 
                            position: "relative",
                            right: "12%",
                            top: "-25%",
                            zIndex: "300",
                        }}
                    >
                    </img>
                    <img  
                        src="https://static.yuvakabaddi.com/images/player-images/6638.png"
                        style={{
                            height: `${(93/768)*100}vh`,
                            marginTop: `${(-25/768)*100}vh`, 
                            position: "absolute", 
                            zIndex: "300",
                            right: "21.1%",
                        }}
                    >
                    </img>
                </Box>
            </Box>
        </Box>
    );
}

export default App;
