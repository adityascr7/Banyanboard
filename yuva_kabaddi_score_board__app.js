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
            "width": `${(677/1366)*100}vw`

        },

        "typography": {

            "color": "rgb(252, 252, 252)",
            "fontFamily": "Oswald",
            "fontSize": `${(32/1366)*100}vw`,
            "fontWeight": "700",
            "textTransform": "uppercase"

        }

    }
    const CONFIGScoreBoard = {

        "container": {
            "alignItems": "center",
            "background": "linear-gradient(to right,rgba(200, 2, 101, 0.8),rgb(0, 0, 0),rgb(0, 0, 0),rgba(46, 133, 142, 0.8))",
            "boxShadow": "0px 0px 3px white",
            "display": "flex",
            "flexDirection": "column",
            "height": "77%",
            "position": "relative",
            "width": `${(620/1366)*100}vw`
        },

        "leftContainer": {
            "height": "100%",
            "width": "1%",
            "backgroundColor": "rgba(200, 2, 101, 0.8)",
            "borderRadius": "10px",
            "position": "absolute",
            "left": "0.5%",
            "marginTop": "0px",
        },

        "rightContainer": {
            "height": "100%",
            "width": "1%",
            "backgroundColor": "rgba(58, 213, 208, 0.8)",
            "borderRadius": "10px",
            "position": "absolute",
            "right": "0.5%",
            "marginTop": "0px",
        }

    }
    const CONFIGRivalryTeamsAndMatchNumber = {

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
            "fontSize": `${(18/1366)*100}vw`,
            "fontWeight": "600",
            "fontFamily": "Oswald",
            "height": `${(236/768)*100}vh`,
            "paddingTop": `${(28/768)*100}vh`,
            "paddingBottom": "41vh",
            "paddingLeft": "1%",
            "textAlign": "left",
            "width": `${(130/1366)*100}vw`
        },

        "match7Typography": {
            "color": "white",
            "fontFamily": "Oswald",
            "fontSize": `${(22/1366)*100}vw`,
            "fontWeight": "600",
            "height": `${(211/768)*100}vh`,
            "paddingTop": `${(18/768)*100}vh`,
            "paddingBottom": `${(340/768)*100}vh`,
            "textAlign": "center",
            "width": `${(180/1366)*100}vw`
        },

        "nilgiriKnightsTypography": {
            "background": "linear-gradient(to left, #3caeaa, transparent)",
            "color": "white",
            "fontFamily": "Oswald",
            "fontSize": `${(18/1366)*100}vw`,
            "fontWeight": "600",
            "height": `${(236/768)*100}vh`,
            "paddingTop": `${(28/768)*100}vh`,
            "paddingBottom": "41vh",
            "paddingRight": "1%",
            "textAlign": "right",
            "width": `${(130/1366)*100}vw`
        }

    }
    const CONFIGFullTime = {

        "container": {
            "alignItems": "center",
            "borderRadius": "5px",
            "background": "linear-gradient(to bottom, #f7f7f7,rgb(170, 170, 170),#f7f7f7)",
            "display": "flex",
            "gap": `${(32/1366)*100}vw`,
            "height": "11.7%",
            "justifyContent": "center",
            "marginTop": `${(84/768)*100}vh`,
            "outline": "3px solid rgb(156, 156, 156)",
            "width": `${(561/1366)*100}vw`,
            "zIndex": "50"
        },

        "palaniTuskerstypography": {
            "alignItems": "center",
            "background": "linear-gradient(to bottom, rgb(200, 2, 100),rgb(126, 0, 63) 80%)",
            "color": "white",
            "display": "flex",
            "fontSize": `${(52/1366)*100}vw`,
            "fontFamily": "'Bebas Neue'",
            "fontWeight": "600",
            "height": "110%",
            "justifyContent": "center",
            "width": `${(130/1366)*100}vw`,
            "zIndex": "100"
        },

        "nilgiriKnightstypography": {
            "alignItems": "center",
            "background": "linear-gradient(to bottom, #3ad5d0,#268a8a 80%)",
            "color": "white",
            "display": "flex",
            "fontSize": `${(52/1366)*100}vw`,
            "fontFamily": "'Bebas Neue'",
            "fontWeight": "600",
            "height": "110%",
            "justifyContent": "center",
            "width": `${(130/1366)*100}vw`,
            "zIndex": "100"
        },

        "fullTimeTypography": {
            "color": "black",
            "fontSize": `${(33/1366)*100}vw`,
            "fontFamily": "Bebas Neue",
            "fontWeight": "600",
            "transform": "scaleX(1.2)",
            "textAlign": "center",
            "width": `${(200/1366)*100}vw`
        }

    }
    const CONFIGPoints = {

        "container": {
            "alignItems": "center",
            "background": "linear-gradient(to right, rgba(200, 2, 101, 0.8),transparent 40%,transparent 60%,rgba(58, 213,208, 0.8) 100%)",
            "borderRadius": "40px",
            "display": "flex",
            "flexDirection": "row",
            "gap": `${(42/1366)*100}vw`,
            "height": "9.5%",
            "justifyContent": "center",
            "width": `${(569/1366)*100}vw`,
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
            "height": "100%",
            "justifyContent": "center",
            "width": `${(130/1366)*100}vw`
        },

        "pointsTypography": {
            "color": "white",
            "fontFamily": "Oswald",
            "fontSize": `${(23/1366)*100}vw`,
            "fontWeight": "600",
            //"transform": "scaleY(1.3)",
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
            "height": "100%",
            "justifyContent": "center",
            "width": `${(130/1366)*100}vw`
        }

    }
    const CONFIGPalaniTuskersLogo = {

        "container": {
            "alignItems": "center",
            "backgroundColor": "rgba(160, 0, 80, 0.5)",
            "clipPath": "polygon(100% 20%, 0% 0%, 0% 100%, 100% 80%)",
            "display": "flex",
            "height": "100%",
            "justifyContent": "center",
            "left": "0%",
            "position": "absolute",
            "top": "0%",
            "width": `${(373/1366)*100}vw`,
            "zIndex": "100"
        },
        
        "logo": {
            "height": "40vh",
        }

    }
    const CONFIGNilgiriKnightsLogo = {

        "conntainer": {
            "alignItems": "center",
            "backgroundColor": "rgba(46, 133, 142, 0.5)",
            "clipPath": "polygon(100% 0%, 0% 20%, 0% 80%, 100% 100%)",
            "display": "flex",
            "height": "100%",
            "justifyContent": "center",
            "position": "absolute",
            "right": "0%",
            "top": "0%",
            "width": `${(373/1366)*100}vw`,
            "zIndex": "100"
        },

        "logo": {
            "height": "40vh"
        }

    }
    const CONFIGBestPlayerContainer = {
        
        "display": "flex",
        "flexDirection": "row",
        "height": "12%",
        "justifyContent": "center"

    }
    const CONFIGPalaniTuskersBestPlayer = {

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
                "borderColor": "rgba(58, 213, 208, 0.7)",
                "backgroundColor": "rgb(126, 0, 63)",
                "borderWidth": `${(50/1366)*100}vw`,
                "borderLeftStyle": "solid",
                "clipPath": "polygon(100% 0%, 0% 0%, 0% 100%, 94% 100% )",
                "height": `${(70/768)*100}vh`,
                "width": `${(250/1366)*100}vw`,
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
                    "clipPath": "polygon(100% 0%, 0% 0%, 0% 100%, 93% 100% )",
                    "display": "flex",
                    "float": "left",
                    "fontFamily": "Oswald",
                    "fontSize": `${(15/1366)*100}vw`,
                    "height": `${(37/768)*100}vh`,
                    "justifyContent": "right",
                    "marginTop": `${(35/768)*100}vh`,
                    "position": "absolute",
                    "paddingRight": `${(20/1366)*100}vw`,
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
                "clipPath": "polygon(100% 0%, 13% 0%, 0% 100%, 84% 100% )",
                "display": "flex",
                "flexDirection": "column",
                "fontFamily": "Oswald",
                "fontSize": `${(15/1366)*100}vw`,
                "fontWeight": "400",
                "height": `${(70/768)*100}vh`,
                "justifyContent": "center",
                "left": "-3.5%",
                "position": "relative",
                "textAlign": "center",
                "width": "10vw"
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
    const CONFIGNigiriKnightsBestPlayer = {
        
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
            "right": "10%",
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
                spacing={1.6}
                style={{
                    ...CONFIGScoreBoard.container
                }}
            >
                <Box 
                    id="rivalryTeamsAndMatchNumber" 
                    style={{
                        ...CONFIGRivalryTeamsAndMatchNumber.container
                    }}
                >
                    <Typography
                        id="palaniTuskersTypography"
                        style={{
                            ...CONFIGRivalryTeamsAndMatchNumber.palaniTuskersTypography
                        }}
                    >
                        PALANI TUSKERS
                    </Typography>
                    <Typography
                        id="match7Typography"
                        style={{
                            ...CONFIGRivalryTeamsAndMatchNumber.match7Typography
                        }}
                    >
                        MATCH 7
                    </Typography>
                    <Typography
                        id="nilgiriKnightsTypography"
                        style={{
                            ...CONFIGRivalryTeamsAndMatchNumber.nilgiriKnightsTypography
                        }}
                    >
                        NILGIRI KNIGHTS
                    </Typography>
                </Box>
                <Box 
                    id="fullTime" 
                    style={{
                        ...CONFIGFullTime.container
                    }}
                >
                    <Typography 
                        id="fullTimePalaniTuskersScoreTypography"
                        style={{
                            ...CONFIGFullTime.palaniTuskerstypography
                        }}
                    >
                        30
                    </Typography>
                    <Typography 
                        id="fullTimeNilgiriKnightsScoreTypography"
                        style={{
                            ...CONFIGFullTime.fullTimeTypography
                        }}
                    >
                        FULL TIME
                    </Typography>
                    <Typography
                        id="fullTimeNilgiriKnightsScoreTypography" 
                        style={{
                            ...CONFIGFullTime.nilgiriKnightstypography
                        }}
                    >
                        18
                    </Typography>
                </Box>
                <Box 
                    id="raidPoints"
                    style={{
                        ...CONFIGPoints.container
                    }}
                >
                    <Typography 
                        id="palaniTuskersRaidPointsNumberTypography" 
                        style={{
                            ...CONFIGPoints.palaniTuskersPoints
                        }}
                    >
                        16
                    </Typography>
                    <Typography 
                        id="raidPointsTypography" 
                        style={{
                            ...CONFIGPoints.pointsTypography
                        }}
                    >
                        RAID POINTS
                    </Typography>
                    <Typography 
                        id="nilgiriKnightsRaidPointsNumberTypography" 
                        style={{
                            ...CONFIGPoints.nilgiriKnightsPoints
                        }}
                    >
                        11
                    </Typography>
                </Box>
                <Box 
                    id="tacklePoints"
                    style={{
                        ...CONFIGPoints.container
                    }}
                >
                    <Typography 
                        id="palaniTuskersTacklePointsNumberTypography" 
                        style={{
                            ...CONFIGPoints.palaniTuskersPoints
                        }}
                    >
                        11
                    </Typography>
                    <Typography 
                        id="tacklePointsTypography" 
                        style={{
                            ...CONFIGPoints.pointsTypography
                        }}
                    >
                        TACKLE POINTS
                    </Typography>
                    <Typography 
                        id="nilgiriKnightsTacklePointsNumberTypography" 
                        style={{
                            ...CONFIGPoints.nilgiriKnightsPoints
                        }}
                    >
                        7
                    </Typography>
                </Box>
                <Box 
                    id="allOutPoints"
                    style={{
                        ...CONFIGPoints.container
                    }}
                >
                    <Typography 
                        id="palaniTuskersAllOutPointsNumberTypography" 
                        style={{
                            ...CONFIGPoints.palaniTuskersPoints
                        }}
                    >
                        2
                    </Typography>
                    <Typography 
                        id="tacklePointsTypography" 
                        style={{
                            ...CONFIGPoints.pointsTypography
                        }}
                    >
                        ALL OUT POINTS
                    </Typography>
                    <Typography 
                        id="nilgiriKnightsTacklePointsNumberTypography" 
                        style={{
                            ...CONFIGPoints.nilgiriKnightsPoints
                        }}
                    >
                        0
                    </Typography>
                </Box>
                <Box 
                    id="extras"
                    style={{
                        ...CONFIGPoints.container
                    }}
                >
                    <Typography 
                        id="palaniTuskersExtrasNumberTypography" 
                        style={{
                            ...CONFIGPoints.palaniTuskersPoints
                        }}
                    >
                        1
                    </Typography>
                    <Typography 
                        id="extrasTypography" 
                        style={{
                            ...CONFIGPoints.pointsTypography
                        }}
                    >
                        EXTRAS
                    </Typography>
                    <Typography 
                        id="nilgiriKnightsExtrasNumberTypography" 
                        style={{
                            ...CONFIGPoints.nilgiriKnightsPoints
                        }}
                    >
                        0
                    </Typography>
                </Box>
                <Box 
                    id="superRaids"
                    style={{
                        ...CONFIGPoints.container
                    }}
                >
                    <Typography
                        id="palaniTuskersSuperRaidsNumberTypography" 
                        style={{
                            ...CONFIGPoints.palaniTuskersPoints
                        }}
                    >
                        0
                    </Typography>
                    <Typography 
                        id="superRaidsTypography" 
                        style={{
                            ...CONFIGPoints.pointsTypography
                        }}
                    >
                        SUPER RAIDS
                    </Typography>
                    <Typography 
                        id="nilgiriKnightsSuperRaidsNumberTypography" 
                        style={{
                            ...CONFIGPoints.nilgiriKnightsPoints
                        }}
                    >
                        1
                    </Typography>
                </Box>
                <Box 
                    id="superTackles"
                    style={{
                        ...CONFIGPoints.container
                    }}
                >
                    <Typography 
                        id="palaniTuskersSuperRaidsNumberTypography" 
                        style={{
                            ...CONFIGPoints.palaniTuskersPoints
                        }}
                    >
                        1
                    </Typography>
                    <Typography 
                        id="superRaidsTypography" 
                        style={{
                            ...CONFIGPoints.pointsTypography
                        }}
                    >
                        SUPER TACKLES
                    </Typography>
                    <Typography 
                        id="nilgiriKnightsSuperRaidsNumberTypography" 
                        style={{
                            ...CONFIGPoints.nilgiriKnightsPoints
                        }}
                    >
                        0
                    </Typography>
                </Box>
                <Box 
                    id="leftContainer"
                    style={{
                        ...CONFIGScoreBoard.leftContainer
                    }}
                >
                </Box>
                <Box 
                    id="rightContainer"
                    style={{
                        ...CONFIGScoreBoard.rightContainer
                    }}
                >
                </Box>
            </Stack>
            <Box 
                id="palaniTuskersLogo"
                style={{
                    ...CONFIGPalaniTuskersLogo.container
                }}
            >
                <img 
                    id="palaniTuskersLogo" 
                    src="https://feed.yuvakabaddi.com/YKS-2022-SE/teamLogos/569.png"
                    style={{
                        ...CONFIGPalaniTuskersLogo.logo
                    }}
                >
                </img>
            </Box>
            <Box
                id="nilgiriKnightsLogo"
                style={{
                    ...CONFIGNilgiriKnightsLogo.conntainer
                }}
            >
                <img 
                    id="nilgiriKnightsLogo"
                    src="https://www.bullscore.com/feature_img_cron/logos/kabaddi/151.png"
                    style={{
                        ...CONFIGNilgiriKnightsLogo.logo
                    }}
                >
                </img>
            </Box>
            <Box 
                id="bestPlayerContainer"
                style={{
                    ...CONFIGBestPlayerContainer
                }}
            >
                <Box
                    id="palaniTuskersBestPlayer"
                    style={{
                        ...CONFIGPalaniTuskersBestPlayer.container
                    }}
                >
                    <img
                        id="palaniTuskersBestPlayerTeamLogo" 
                        src="https://feed.yuvakabaddi.com/YKS-2022-SE/teamLogos/569.png"
                        style={{
                            ...CONFIGPalaniTuskersBestPlayer.teamLogo
                        }}
                    >  
                    </img>
                    <img
                        id="palaniTuskersBestPlayerPlayer'sLogo"
                        src="https://static.yuvakabaddi.com/images/player-images/6618.png"
                        style={{
                            ...CONFIGPalaniTuskersBestPlayer.playersLogo
                        }}
                    >
                    </img>
                    <Box 
                        id="palaniTuskersBestPlayerNameContainer"
                        style={{
                            ...CONFIGPalaniTuskersBestPlayer.palaniTuskersBestPlayerName.container
                        }}
                    >
                        <Typography 
                            id="palaniTuskersPlayerNameTypography"
                            style={{
                                ...CONFIGPalaniTuskersBestPlayer.palaniTuskersBestPlayerName.typography
                            }}
                        >
                            S.MUKESHKANNAN
                        </Typography>
                        <Box
                            id="bestRaiderText"
                            style={{
                                ...CONFIGPalaniTuskersBestPlayer.palaniTuskersBestPlayerName.bestRaiderText.container
                            }}
                        >
                            <Typography
                                id="bestRaiderText"
                                style={{
                                    ...CONFIGPalaniTuskersBestPlayer.palaniTuskersBestPlayerName.bestRaiderText.typography
                                }}
                            >
                                BEST RAIDER
                            </Typography>
                        </Box>
                    </Box>
                    <Box 
                        id="palaniTuskersPoints"
                        style={{
                            ...CONFIGPalaniTuskersBestPlayer.palaniTuskersPoints.container
                        }}
                    >
                        <Typography
                            id="palaniTuskersPointsTypography"
                            style={{
                                ...CONFIGPalaniTuskersBestPlayer.palaniTuskersPoints.typography
                            }}
                        >
                            RAID POINTS
                        </Typography>
                        <Typography
                            id="palaniTuskersPointsValue" 
                            style={{
                                ...CONFIGPalaniTuskersBestPlayer.palaniTuskersPoints.value
                            }}
                        >
                            4
                        </Typography>
                    </Box>
                </Box>
                <Box 
                    id="nilgiriKnightBestPlayer"
                    style={{
                        ...CONFIGNigiriKnightsBestPlayer.container
                    }}
                >
                    <Box 
                        id="nilgiriKnightPoints"
                        style={{
                            ...CONFIGNigiriKnightsBestPlayer.nilgiriKnightsPoints.container
                        }}
                    >
                        <Typography 
                            id="nilgiriKnightPointsTypography"
                            style={{
                                ...CONFIGNigiriKnightsBestPlayer.nilgiriKnightsPoints.typography
                            }}
                        >
                            TACKLE POINTS
                        </Typography>
                        <Typography
                            id="nilgiriKnightPointsValue" 
                            style={{
                                ...CONFIGNigiriKnightsBestPlayer.nilgiriKnightsPoints.value
                            }}
                        >
                            4
                        </Typography>
                    </Box>
                    <Box 
                        id="nilgiriKnightsBestPlayerMainContainer"
                        style={{
                            ...CONFIGNigiriKnightsBestPlayer.nilgiriKnightsBestPlayerMainContainer.container
                        }}
                    >
                        <Box 
                            id="nilgiriKnightsBestPlayerAndLogoContainer"
                            style={{
                                ...CONFIGNigiriKnightsBestPlayer.nilgiriKnightsBestPlayerMainContainer.nilgiriKnightsBestPlayerAndLogoContainer.container
                            }}
                        >
                            <Typography
                                id="nilgiriKnightsBestPlayerName"
                                style={{
                                    ...CONFIGNigiriKnightsBestPlayer.nilgiriKnightsBestPlayerMainContainer.nilgiriKnightsBestPlayerAndLogoContainer.nilgiriKnightsBestPlayerName
                                }}
                            >
                                PURUSHOTHAMAN
                            </Typography>
                        </Box>
                        <Box
                            id="nilgiriKnightsBestDefender" 
                            style={{
                                ...CONFIGNigiriKnightsBestPlayer.nilgiriKnightsBestPlayerMainContainer.nilgiriKnightsBestDefender.container
                            }}
                        >
                            <Typography 
                                id="nilgiriKnightsBestDefenderText" 
                                style={{
                                    ...CONFIGNigiriKnightsBestPlayer.nilgiriKnightsBestPlayerMainContainer.nilgiriKnightsBestDefender.typography
                                }}
                            >
                                BEST DEFENDER
                            </Typography>
                        </Box>
                    </Box>
                    <img
                        id="nilgiriKnightsTeamLogo" 
                        src="https://feed.yuvakabaddi.com/YKS-2022-SE/teamLogos/569.png"
                        style={{
                            ...CONFIGNigiriKnightsBestPlayer.teamLogo
                        }}
                    >
                    </img>
                    <img
                        id="playersLogo"
                        src="https://static.yuvakabaddi.com/images/player-images/6638.png"
                        style={{
                            ...CONFIGNigiriKnightsBestPlayer.playersLogo
                        }}
                    >
                    </img>
                </Box>
            </Box>
        </Box>
    );
}

export default App;
