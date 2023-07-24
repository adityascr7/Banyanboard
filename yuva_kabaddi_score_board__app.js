import React, { useState, useEffect, useCallback } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
function App() {

    const CONFIGMainContainer = {

        "alignItems": "center",
        "backgroundImage": "url('https://thumbs.dreamstime.com/b/full-stadium-neoned-colorful-flashlights-background-full-stadium-neoned-colorful-flashlights-background-flyer-197148262.jpg')",
        "backgroundSize": "cover",
        "display": "flex",
        "flexDirection": "column",
        "gap": "1vh",
        "height": "100vh",
        "justifyContent": "center",
        "position": "relative",
        "width": "100vw"

    }
    const CONFIGMatchSummary = {

        "container": {

            "alignItems": "center",
            "background": "linear-gradient(rgb(162 0 80), rgb(126, 0, 63) 80%)",
            "border": "1px solid white",
            "boxShadow": "0px 0px 4px white",
            "backgroundClip": "padding-box",
            "boxSizing": "border-box",
            "clipPath": "polygon(0% 0%, 100% 0%, 96% 100%, 4% 100%)",
            "display": "flex",
            "height": "10%",
            "justifyContent": "center",
            "marginTop": `${(8/768)*100}vh`,
            "width": `${(720/1366)*100}vw`

        },

        "typography": {

            "color": "rgb(252, 252, 252)",
            "fontFamily": "Oswald",
            "fontSize": `${(32/1366)*100}vw`,
            "fontWeight": "700",
            // "textShadow": "0px 0px 10px rgb(35, 193, 255)",
            "textTransform": "uppercase"

        }

    }
    const CONFIGscoreBoard = {

        "container": {
            "alignItems": "center",
            "background": "linear-gradient(to right,rgba(200, 2, 101, 0.8),rgb(0, 0, 0),rgb(0, 0, 0),rgba(46, 133, 142, 0.8))",
            "boxShadow": "0px 0px 3px white",
            "display": "flex",
            "flexDirection": "column",
            "height": "74%",
            "position": "relative",
            "width": `${(660/1366)*100}vw`
        },

        "leftContainer": {
            "height": "100%",
            "width": "1%",
            "backgroundColor": "rgba(200, 2, 101, 0.8)",
            "borderRadius": "10px",
            "position": "absolute",
            "top": "0%",
            "left": "1%",
            "marginTop": "0px",
        },

        "rightContainer": {
            "height": "100%",
            "width": "1%",
            "backgroundColor": "rgba(58, 213, 208, 0.8)",
            "borderRadius": "10px",
            "position": "absolute",
            "top": "0%",
            "right": "1%",
            "marginTop": "0px",
        }

    }
    const CONFIGrivalryTeamsAndMatchNumber = {

        "container": {
            "alignItems": "center",
            "display": "flex",
            "flexDirection": "row",
            "gap": `${(40/1366)*100}vw`,
            "marginTop": `${(0/768)*100}vh`,
            "position": "absolute"
        },

        "palaniTuskersTypography": {
            "background": "linear-gradient(to right, rgb(160, 0, 80), transparent)",
            "color": "white",
            "fontSize": `${(17/1366)*100}vw`,
            "fontWeight": "600",
            "fontFamily": "Roboto Condensed",
            "height": `${(225/768)*100}vh`,
            "paddingTop": `${(28/768)*100}vh`,
            "paddingBottom": "41vh",
            "textAlign": "left",
            "paddingLeft": "1%",
            "width": `${(150/1366)*100}vw`
        },

        "match7Typography": {
            "color": "white",
            "fontFamily": "Roboto Condensed",
            "fontSize": `${(22/1366)*100}vw`,
            "fontWeight": "600",
            "height": `${(201/768)*100}vh`,
            "paddingTop": `${(18/768)*100}vh`,
            "paddingBottom": `${(340/768)*100}vh`,
            "textAlign": "center",
            "width": `${(180/1366)*100}vw`
        },

        "nilgiriKnightsTypography": {
            "background": "linear-gradient(to left, #3caeaa, transparent)",
            "color": "white",
            "fontFamily": "Roboto Condensed",
            "fontSize": `${(17/1366)*100}vw`,
            "fontWeight": "600",
            "paddingTop": `${(28/768)*100}vh`,
            "paddingBottom": "41vh",
            "paddingRight": "1%",
            "height": `${(225/768)*100}vh`,
            "textAlign": "right",
            "width": `${(150/1366)*100}vw`
        }

    }
    const CONFIGpoints = {

        "container": {
            "alignItems": "center",
            "background": "linear-gradient(to right, rgba(200, 2, 101, 0.8),transparent 40%,transparent 60%,rgba(58, 213,208, 0.8) 100%)",
            "borderRadius": "40px",
            "display": "flex",
            "flexDirection": "row",
            "gap": `${(42/1366)*100}vw`,
            "height": `${(47/768)*100}vh`,
            "justifyContent": "center",
            "width": `${(609/1366)*100}vw`,
            "zIndex": "50"
        },

        "palaniTuskersPoints": {
            "alignItems": "center",
            "background": "linear-gradient(to bottom, rgb(200, 2, 100),rgb(126, 0, 63) 80%)",
            "color": "white",
            "display": "flex",
            "fontFamily": "'Bebas Neue'", 
            "fontWeight": "600",
            "fontSize": `${(30/1366)*100}vw`,
            "height": `${(47/768)*100}vh`,
            "justifyContent": "center",
            "width": `${(150/1366)*100}vw`
        },

        "pointsTypography": {
            "color": "white",
            "fontFamily": "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif",
            "fontSize": `${(19/1366)*100}vw`,
            "fontWeight": "600",
            "transform": "scaleY(1.3)",
            "textAlign": "center",
            "width": `${(180/1366)*100}vw`,
        },

        "nilgiriKnightsPoints": {
            "alignItems": "center",
            "background": "linear-gradient(to bottom, #3ad5d0,#268a8a 80%)",
            "color": "white",
            "display": "flex",
            "fontFamily": "'Bebas Neue'", 
            "fontWeight": "600",
            "fontSize": `${(30/1366)*100}vw`,
            "height": `${(47/768)*100}vh`,
            "justifyContent": "center",
            "width": `${(150/1366)*100}vw`
        }

    }
    const CONFIGpalaniTuskersLogo = {

        "container": {
            "alignItems": "center",
            "backgroundColor": "rgba(160, 0, 80, 0.5)",
            "clipPath": "polygon(100% 20%, 0% 0%, 0% 100%, 100% 80%)",
            "display": "flex",
            "height": "100%",
            "justifyContent": "center",
            "top": "0%",
            "left": "0%",
            "position": "absolute",
            "width": `${(353/1366)*100}vw`,
            "zIndex": "100"
        },
        
        "logo": {
            "height": "40vh",
        }

    }
    const CONFIGnilgiriKnightsLogo = {

        "conntainer": {
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
            zIndex: "100"
        },

        "logo": {
            "height": "40vh"
        }

    }
    const CONFIGbestPlayerContainer = {
        
        "display": "flex",
        "flexDirection": "row",
        "height": "12%",
        "justifyContent": "center"

    }
    const CONFIGpalaniTuskersBestPlayer = {

        "container": {
            "alignItems": "center",
            "display": "flex",
            "flexDirection": "row",
            "position": "relative"
        },
        
        "teamLogo": {
            "height": `${(85/768)*100}vh`,
            "left": "-7%",
            "position": "absolute",
            "top": "-25%",
            "zIndex": "300"
        },

        "playersLogo": {
            "height": `${(93/768)*100}vh`,
            "left": "12%", 
            "marginTop": `${(-25/768)*100}vh`,
            "position": "absolute", 
            "zIndex": "300"
        },

        "palaniTuskersBestPlayerName": {

            "container": {
                "width": `${(250/1366)*100}vw`,
                "height": `${(70/768)*100}vh`,
                "borderWidth": `${(50/1366)*100}vw`,
                "borderLeftStyle": "solid",
                "borderColor": "rgba(58, 213, 208, 0.7)",
                "backgroundColor": "rgb(126, 0, 63)",
                "clipPath": "polygon(100% 0%, 0% 0%, 0% 100%, 94% 100% )",
                "zIndex": "200",
            },

            "typography": {
                "color": "white",
                "fontFamily": "Oswald",
                "fontSize": `${(15/1366)*100}vw`,
                "fontWeight": "400",
                "marginLeft": `${(110/1366)*100}vw`,
                "marginTop": `${(3/768)*100}vh`,
                "position": "absolute"
            },

            "bestRaiderText": {

                "container": {
                    "alignItems": "center",
                    "backgroundColor": "black",
                    "color": "white",
                    "display": "flex",
                    "float": "left",
                    "fontFamily": "Oswald",
                    "fontSize": `${(15/1366)*100}vw`,
                    "height": `${(37/768)*100}vh`,
                    "justifyContent": "right",
                    "marginTop": `${(35/768)*100}vh`,
                    "position": "absolute",
                    "paddingRight": `${(20/1366)*100}vw`,
                    "clipPath": "polygon(100% 0%, 0% 0%, 0% 100%, 93% 100% )",
                    "width": `${(180/1366)*100}vw`
                },

                "typography": {

                    "fontFamily": "Oswald",
                    "fontSize": `${(15/1366)*100}vw`,

                }

            }

        },

        "palaniTuskersPoints":{

            "container": {
                "alignItems": "center",
                "backgroundColor": "rgb(126, 0, 63)",
                "color": "white",
                "display": "flex",
                "flexDirection": "column",
                "fontFamily": "Oswald",
                "fontSize": `${(15/1366)*100}vw`,
                "fontWeight": "400",
                "height": `${(70/768)*100}vh`,
                "justifyContent": "center",
                "clipPath": "polygon(100% 0%, 13% 0%, 0% 100%, 84% 100% )",
                "textAlign": "center",
                "width": "10vw",
                "position": "relative",
                "left": "-3.5%"
            },

            "typography": {
                "fontFamily": "Oswald",
                "fontSize": `${(15/1366)*100}vw`,
                "paddingLeft": "10%"
            },
            
            "value": {
                "fontFamily": "Oswald",
                "fontSize": `${(20/1366)*100}vw`
            }

        }

    }
    const CONFIGnigiriKnightsBestPlayer = {
        
        "container": {
            "alignItems": "center",
            "display": "flex",
            "flexDirection": "row",
            "position": "relative"
        },

        "nilgiriKnightsPoints": {

            "container": {
                "alignItems": "center",
                "backgroundColor": "rgb(126, 0, 63)",
                "color": "white",
                "clipPath": "polygon(85% 0%, 0% 0%, 14% 100%, 100% 100%)",
                "display": "flex",
                "flexDirection": "column",
                "fontFamily": "Oswald",
                "fontSize": `${(15/1366)*100}vw`,
                "fontWeight": "400",
                "height": `${(70/768)*100}vh`,
                "justifyContent": "center",
                "textAlign": "center",
                "width": "10vw",
                "right": "-4%",
                "position": "relative"
            },

            "typography": {
                "fontFamily": "Oswald",
                "fontSize": `${(15/1366)*100}vw`,
                "paddingRight": "10%"
            },

            "value": {
                "fontFamily": "Oswald",
                "fontSize": `${(20/1366)*100}vw`
            }

        },

        "nilgiriKnightsBestPlayerMainContainer": {

            "container": {
                "backgroundColor": "rgb(126, 0, 63)",
                "borderWidth": `${(50/1366)*100}vw`,
                "borderRightStyle": "solid",
                "borderColor": "rgba(58, 213, 208, 0.7)",
                "height": `${(70/768)*100}vh`,
                "width": `${(250/1366)*100}vw`,
                "zIndex": "200",
                "clipPath": "polygon(100% 0%, 0% 0%, 7% 100%, 100% 100%)",
                "position": "relative"
            },

            "nilgiriKnightsBestPlayerAndLogoContainer": {

                "container": {
                    "display": "flex",
                    "flexDirection": "row",
                    "justifyContent": "right",
                },

                "nilgiriKnightsBestPlayerName": {
                    "color": "white",
                    "fontFamily": "Oswald",
                    "fontSize": `${(15/1366)*100}vw`,
                    "fontWeight": "400",
                    "marginRight": `${(110/1366)*100}vw`,
                    "marginTop": `${(3/768)*100}vh`,
                    "position": "absolute"
                }

            },

            "nilgiriKnightsBestDefender": {

                "container": {
                    "alignItems": "center", 
                    "backgroundColor": "black",
                    "color": "white",
                    "display": "flex",
                    "float": "right",
                    "fontFamily": "Oswald",
                    "fontSize": `${(15/1366)*100}vw`,
                    "height": `${(37/768)*100}vh`,
                    "marginTop": `${(35/768)*100}vh`,
                    "paddingLeft": `${(20/1366)*100}vw`,
                    "width": `${(180/1366)*100}vw`,
                    "clipPath": "polygon(100% 0%, 0% 0%, 7% 100%, 100% 100%)"
                },

                "typography": {

                    "fontFamily": "Oswald",
                    "fontSize": `${(15/1366)*100}vw`

                }

            }

        },

        "teamLogo": {

            "height": `${(85/768)*100}vh`,
            "marginRight": `${(-85/1366)*100}vw`, 
            "position": "relative",
            "right": "12%",
            "top": "-25%",
            "zIndex": "300"

        },

        "playersLogo": {
            "height": `${(93/768)*100}vh`,
            "marginTop": `${(-25/768)*100}vh`, 
            "position": "absolute", 
            "zIndex": "300",
            "right": "8%"
        }

    }

    // To remove the default margin and scrolls in the body
	useEffect(() => {

		document.body.style.margin = "0";
		document.body.style.overflow = "hidden";

	},[])

    return ( 
        <Box 
            id="mainContainer" 
            style={{
                ...CONFIGMainContainer
            }}
        >
            <Box 
                id="matchSummaryContainer"
                style={{
                    ...CONFIGMatchSummary.container
                }}
            >
                <Typography 
                    id="matchSummaryTypography"
                    style={{
                        ...CONFIGMatchSummary.typography
                    }}
                >
                    MATCH SUMMARY
                </Typography>
            </Box>
            <Stack 
                id="scoreBoardContainer"
                spacing={2}
                style={{
                    ...CONFIGscoreBoard.container
                }}
            >
                <Box 
                    id="rivalryTeamsAndMatchNumber" 
                    style={{
                        ...CONFIGrivalryTeamsAndMatchNumber.container
                    }}
                >
                    <Typography
                        id="palaniTuskersTypography"
                        style={{
                            ...CONFIGrivalryTeamsAndMatchNumber.palaniTuskersTypography
                        }}
                    >
                        PALANI TUSKERS
                    </Typography>
                    <Typography
                        id="match7Typography"
                        style={{
                            ...CONFIGrivalryTeamsAndMatchNumber.match7Typography
                        }}
                    >
                        MATCH 7
                    </Typography>
                    <Typography
                        id="nilgiriKnightsTypography"
                        style={{
                            ...CONFIGrivalryTeamsAndMatchNumber.nilgiriKnightsTypography
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
                        ...CONFIGpoints.container
                    }}
                >
                    <Typography 
                        id="palaniTuskersRaidPoints" 
                        style={{
                            ...CONFIGpoints.palaniTuskersPoints
                        }}
                    >
                        16
                    </Typography>
                    <Typography 
                        id="raidPoints_" 
                        style={{
                            ...CONFIGpoints.pointsTypography
                        }}
                    >
                        RAID POINTS
                    </Typography>
                    <Typography 
                        id="nilgiriKnightsRaidPoints" 
                        style={{
                            ...CONFIGpoints.nilgiriKnightsPoints
                        }}
                    >
                        11
                    </Typography>
                </Box>
                <Box 
                    id="tacklePoints"
                    style={{
                        ...CONFIGpoints.container
                    }}
                >
                    <Typography 
                        id="palaniTuskersTacklePoints" 
                        style={{
                            ...CONFIGpoints.palaniTuskersPoints
                        }}
                    >
                        11
                    </Typography>
                    <Typography 
                        id="tacklePoints" 
                        style={{
                            ...CONFIGpoints.pointsTypography
                        }}
                    >
                        TACKLE POINTS
                    </Typography>
                    <Typography 
                        id="nilgiriKnightsTacklePoints" 
                        style={{
                            ...CONFIGpoints.nilgiriKnightsPoints
                        }}
                    >
                        7
                    </Typography>
                </Box>
                <Box 
                    id="allOutPoints"
                    style={{
                        ...CONFIGpoints.container
                    }}
                >
                    <Typography 
                        id="palaniTuskersAllOutPoints" 
                        style={{
                            ...CONFIGpoints.palaniTuskersPoints
                        }}
                    >
                        2
                    </Typography>
                    <Typography 
                        id="tacklePoints" 
                        style={{
                            ...CONFIGpoints.pointsTypography
                        }}
                    >
                        ALL OUT POINTS
                    </Typography>
                    <Typography 
                        id="nilgiriKnightsTacklePoints" 
                        style={{
                            ...CONFIGpoints.nilgiriKnightsPoints
                        }}
                    >
                        0
                    </Typography>
                </Box>
                <Box 
                    id="extras"
                    style={{
                        ...CONFIGpoints.container
                    }}
                >
                    <Typography 
                        id="palaniTuskersExtras" 
                        style={{
                            ...CONFIGpoints.palaniTuskersPoints
                        }}
                    >
                        1
                    </Typography>
                    <Typography 
                        id="extras_" 
                        style={{
                            ...CONFIGpoints.pointsTypography
                        }}
                    >
                        EXTRAS
                    </Typography>
                    <Typography 
                        id="nilgiriKnightsExras_" 
                        style={{
                            ...CONFIGpoints.nilgiriKnightsPoints
                        }}
                    >
                        0
                    </Typography>
                </Box>
                <Box 
                    id="superRaids"
                    style={{
                        ...CONFIGpoints.container
                    }}
                >
                    <Typography
                        id="palaniTuskersSuperRaids" 
                        style={{
                            ...CONFIGpoints.palaniTuskersPoints
                        }}
                    >
                        0
                    </Typography>
                    <Typography 
                        id="superRaids_" 
                        style={{
                            ...CONFIGpoints.pointsTypography
                        }}
                    >
                        SUPER RAIDS
                    </Typography>
                    <Typography 
                        id="nilgiriKnightsSuperRaids" 
                        style={{
                            ...CONFIGpoints.nilgiriKnightsPoints
                        }}
                    >
                        1
                    </Typography>
                </Box>
                <Box 
                    id="superTackles"
                    style={{
                        ...CONFIGpoints.container
                    }}
                >
                    <Typography 
                        id="palaniTuskersSuperRaids" 
                        style={{
                            ...CONFIGpoints.palaniTuskersPoints
                        }}
                    >
                        1
                    </Typography>
                    <Typography 
                        id="superRaids_" 
                        style={{
                            ...CONFIGpoints.pointsTypography
                        }}
                    >
                        SUPER TACKLES
                    </Typography>
                    <Typography 
                        id="nilgiriKnightsSuperRaids" 
                        style={{
                            ...CONFIGpoints.nilgiriKnightsPoints
                        }}
                    >
                        0
                    </Typography>
                </Box>
                <Box 
                    id="leftContainer"
                    style={{
                        ...CONFIGscoreBoard.leftContainer
                    }}
                >
                </Box>
                <Box 
                    id="rightContainer"
                    style={{
                        ...CONFIGscoreBoard.rightContainer
                    }}
                >
                </Box>
            </Stack>
            <Box 
                id="palaniTuskersLogo"
                style={{
                    ...CONFIGpalaniTuskersLogo.container
                }}
            >
                <img 
                    id="palaniTuskersLogo" 
                    src="https://feed.yuvakabaddi.com/YKS-2022-SE/teamLogos/569.png"
                    style={{
                        ...CONFIGpalaniTuskersLogo.logo
                    }}
                >
                </img>
            </Box>
            <Box
                id="nilgiriKnightsLogo"
                style={{
                    ...CONFIGnilgiriKnightsLogo.conntainer
                }}
            >
                <img 
                    id="nilgiriKnightsLogo"
                    src="https://www.bullscore.com/feature_img_cron/logos/kabaddi/151.png"
                    style={{
                        ...CONFIGnilgiriKnightsLogo.logo
                    }}
                >
                </img>
            </Box>
            <Box 
                id="bestPlayerContainer"
                style={{
                    ...CONFIGbestPlayerContainer
                }}
            >
                <Box
                    id="palaniTuskersBestPlayer"
                    style={{
                        ...CONFIGpalaniTuskersBestPlayer.container
                    }}
                >
                    <img
                        id="palaniTuskersBestPlayerTeamLogo" 
                        src="https://feed.yuvakabaddi.com/YKS-2022-SE/teamLogos/569.png"
                        style={{
                            ...CONFIGpalaniTuskersBestPlayer.teamLogo
                        }}
                    >  
                    </img>
                    <img
                        id="palaniTuskersBestPlayerPlayer'sLogo"
                        src="https://static.yuvakabaddi.com/images/player-images/6618.png"
                        style={{
                            ...CONFIGpalaniTuskersBestPlayer.playersLogo
                        }}
                    >
                    </img>
                    <Box 
                        id="palaniTuskersBestPlayerNameContainer"
                        style={{
                            ...CONFIGpalaniTuskersBestPlayer.palaniTuskersBestPlayerName.container
                        }}
                    >
                        <Typography 
                            id="palaniTuskersPlayerNameTypography"
                            style={{
                                ...CONFIGpalaniTuskersBestPlayer.palaniTuskersBestPlayerName.typography
                            }}
                        >
                            S.MUKESHKANNAN
                        </Typography>
                        <Box
                            id="bestRaiderText"
                            style={{
                                ...CONFIGpalaniTuskersBestPlayer.palaniTuskersBestPlayerName.bestRaiderText.container
                            }}
                        >
                            <Typography
                                id="bestRaiderText"
                                style={{
                                    ...CONFIGpalaniTuskersBestPlayer.palaniTuskersBestPlayerName.bestRaiderText.typography
                                }}
                            >
                                BEST RAIDER
                            </Typography>
                        </Box>
                    </Box>
                    <Box 
                        id="palaniTuskersPoints"
                        style={{
                            ...CONFIGpalaniTuskersBestPlayer.palaniTuskersPoints.container
                        }}
                    >
                        <Typography
                            id="palaniTuskersPointsTypography"
                            style={{
                                ...CONFIGpalaniTuskersBestPlayer.palaniTuskersPoints.typography
                            }}
                        >
                            RAID POINTS
                        </Typography>
                        <Typography
                            id="palaniTuskersPointsValue" 
                            style={{
                                ...CONFIGpalaniTuskersBestPlayer.palaniTuskersPoints.value
                            }}
                        >
                            4
                        </Typography>
                    </Box>
                </Box>
                <Box 
                    id="nilgiriKnightBestPlayer"
                    style={{
                        ...CONFIGnigiriKnightsBestPlayer.container
                    }}
                >
                    <Box 
                        id="nilgiriKnightPoints"
                        style={{
                            ...CONFIGnigiriKnightsBestPlayer.nilgiriKnightsPoints.container
                        }}
                    >
                        <Typography 
                            id="nilgiriKnightPointsTypography"
                            style={{
                                ...CONFIGnigiriKnightsBestPlayer.nilgiriKnightsPoints.typography
                            }}
                        >
                            TACKLE POINTS
                        </Typography>
                        <Typography
                            id="nilgiriKnightPointsValue" 
                            style={{
                                ...CONFIGnigiriKnightsBestPlayer.nilgiriKnightsPoints.value
                            }}
                        >
                            4
                        </Typography>
                    </Box>
                    <Box 
                        id="nilgiriKnightsBestPlayerMainContainer"
                        style={{
                            ...CONFIGnigiriKnightsBestPlayer.nilgiriKnightsBestPlayerMainContainer.container
                        }}
                    >
                        <Box 
                            id="nilgiriKnightsBestPlayerAndLogoContainer"
                            style={{
                                ...CONFIGnigiriKnightsBestPlayer.nilgiriKnightsBestPlayerMainContainer.nilgiriKnightsBestPlayerAndLogoContainer.container
                            }}
                        >
                            <Typography
                                id="nilgiriKnightsBestPlayerName"
                                style={{
                                    ...CONFIGnigiriKnightsBestPlayer.nilgiriKnightsBestPlayerMainContainer.nilgiriKnightsBestPlayerAndLogoContainer.nilgiriKnightsBestPlayerName
                                }}
                            >
                                PURUSHOTHAMAN
                            </Typography>
                        </Box>
                        <Box
                            id="nilgiriKnightsBestDefender" 
                            style={{
                                ...CONFIGnigiriKnightsBestPlayer.nilgiriKnightsBestPlayerMainContainer.nilgiriKnightsBestDefender.container
                            }}
                        >
                            <Typography 
                                id="nilgiriKnightsBestDefenderText" 
                                style={{
                                    ...CONFIGnigiriKnightsBestPlayer.nilgiriKnightsBestPlayerMainContainer.nilgiriKnightsBestDefender.typography
                                }}
                            >
                                BEST DEFENDER
                            </Typography>
                        </Box>
                    </Box>
                    <img
                        id="nilgiriKnightsTeamLogo" 
                        src="https://www.bullscore.com/feature_img_cron/logos/kabaddi/151.png"
                        style={{
                            ...CONFIGnigiriKnightsBestPlayer.teamLogo
                        }}
                    >
                    </img>
                    <img
                        id="playersLogo"
                        src="https://static.yuvakabaddi.com/images/player-images/6638.png"
                        style={{
                            ...CONFIGnigiriKnightsBestPlayer.playersLogo
                        }}
                    >
                    </img>
                </Box>
            </Box>
        </Box>
    );
}

export default App;
