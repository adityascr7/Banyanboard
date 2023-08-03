import React, { useState, useEffect, useCallback } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

function App() {

    const CONFIGBestPlayersContainer = {

        "display": "flex",
        "flexDirection": "row",
        "height": "12%",
        "justifyContent": "center",
        "width": "75%"

    }

    const CONFIGFullTime = {

        "container": {

            "alignItems": "center",
            "background": "linear-gradient(to bottom, #f7f7f7,rgb(170, 170, 170),#f7f7f7)",
            "border": "3%",
            "borderColor": "rgb(156, 156, 156)",
            "borderRadius": `${(9/1366)*100}vw`,
            "borderStyle": "solid",
            "display": "flex",
            "gap": "5.7%",
            "height": "11.7%",
            "justifyContent": "center",
            "marginTop": `${(84/768)*100}vh`,
            "width": "90.5%",
            "zIndex": "50"

        },

        "fullTimeTypography": {

            "color": "black",
            "fontFamily": "Bebas Neue",
            "fontSize": `${(33/1366)*100}vw`,
            "fontWeight": "600",
            "textAlign": "center",
            "transform": "scaleX(1.2)",
            "width": "35.6%"

        },

        "nilgiriKnightstypography": {

            "alignItems": "center",
            "background": "linear-gradient(to bottom, #3ad5d0,#268a8a 80%)",
            "color": "white",
            "display": "flex",
            "fontFamily": "Bebas Neue",
            "fontSize": `${(52/1366)*100}vw`,
            "fontWeight": "600",
            "height": "110%",
            "justifyContent": "center",
            "width": "23.2%",
            "zIndex": "100"

        },

        "palaniTuskerstypography": {

            "alignItems": "center",
            "background": "linear-gradient(to bottom, #b0025c, #6e0e4c 80%)",
            "color": "white",
            "display": "flex",
            "fontFamily": "'Bebas Neue'",
            "fontSize": `${(52/1366)*100}vw`,
            "fontWeight": "600",
            "height": "110%",
            "justifyContent": "center",
            "width": "23.2%",
            "zIndex": "100"

        }

    }

    const CONFIGMainContainer = {

        "alignItems": "center",
        "backgroundSize": "cover",
        "backgroundImage": "url('https://thumbs.dreamstime.com/b/full-stadium-neoned-colorful-flashlights-background-full-stadium-neoned-colorful-flashlights-background-flyer-197148262.jpg')",
        "display": "flex",
        "flexDirection": "column",
        "gap": "0.7%",
        "height": "100vh",
        "justifyContent": "center",
        "position": "relative",
        "width": "100vw"

    }

    const CONFIGMatchSummary = {

        "insideContainer": {

            "alignItems": "center",
            "background": "linear-gradient(to bottom, rgb(91 8 60), rgb(82 13 58))",
            // "background": "linear-gradient(to bottom, rgb(32 1 20), rgb(53 10 32))",
            // "background": "linear-gradient(to bottom, rgb(50 1 20), rgb(70 10 32))",
            "clipPath": "polygon(0% 0%, 100% 0%, 97% 100%, 3% 100%)",
            "display": "flex",
            "height": "97%",
            "justifyContent": "center",
            "width": "99.6%"

        },

        "outsideContainer": {

            "alignItems": "center",
            "backgroundColor": "white",
            "clipPath": "polygon(0% 0%, 100% 0%, 97% 100%, 3% 100%)",
            "display": "flex",
            "height": "9%",
            "justifyContent": "center",
            "marginTop": "0.5%",
            "width": "48.3%"

        },

        "typography": {

            "color": "rgb(252, 252, 252)",
            "fontFamily": "Oswald",
            "fontSize": `${(36/1366)*100}vw`,
            "fontWeight": "700",
            "textTransform": "uppercase"

        }

    }

    const CONFIGBestDefender = {

        "container": {

            "alignItems": "center",
            "display": "flex",
            "flexDirection": "row",
            "position": "relative",
            "width": "50%"

        },

        "playerName": {

            "container": {

                "background": "linear-gradient(to bottom, rgb(111, 19, 56), rgb(63, 13, 49))",
                "borderColor": "rgba(58, 213, 208, 0.7)",
                "borderRightStyle": "solid",
                "borderWidth": `${(35/1366)*100}vw`,
                "clipPath": "polygon(100% 0%, 0% 0%, 4.5% 100%, 100% 100%)",
                "height": "80%",
                "position": "relative",
                "width": "70%",
                "zIndex": "200"

            },

            "nameContainer": {

                "alignItems": "center",
                "display": "flex",
                "height": "50%",
                "justifyContent": "flex-start"

            },

            "typography": {

                "color": "white",
                "fontFamily": "Oswald",
                "fontSize": `${(15/1366)*100}vw`,
                "fontWeight": "400",
                "marginLeft": "10%",
                "overflowWrap": "break-word",
                "textShadow": "0 0 0.1vw white"

            }

        },

        "playerImage": {

            "height": "130%",
            "bottom": "10%", 
            "position": "absolute", 
            "right": "9%",
            "width": "16%",
            "zIndex": "300"

        },

        "points": {

            "container": {

                "alignItems": "center",
                "background": "linear-gradient(to bottom ,rgb(153, 33, 91), rgb(80, 17, 56))",
                "color": "white",
                "clipPath": "polygon(88% 0%, 0% 0%, 14.4% 100%, 100% 100%)",
                "display": "flex",
                "flexDirection": "column",
                "fontFamily": "Oswald",
                "fontSize": `${(15/1366)*100}vw`,
                "fontWeight": "400",
                "height": "80%",
                "justifyContent": "center",
                "left": "2.6%",
                "position": "relative",
                "textAlign": "center",
                "width": "30%",



            },

            "name": {

                "alignItems": "center",
                "display": "flex",
                "fontFamily": "Oswald",
                "fontSize": `${(15/1366)*100}vw`,
                "height": "50%",
                "paddingRight": "10%",
                "textShadow": "0 0 0.2vw white"

            },

            "value": {

                "alignItems": "center",
                "display": "flex",
                "fontFamily": "Oswald",
                "fontSize": `${(20/1366)*100}vw`,
                "height": "50%",
                "textShadow": "0 0 0.2vw white"

            }

        },

        "teamLogo": {

            "height": "90%",
            "position": "absolute",
            "right": "-10%",
            "top": "-25%",
            "zIndex": "300"

        },

        "text": {

            "container": {

                "alignItems": "center", 
                "backgroundColor": "black",
                "color": "white",
                "clip-path": "polygon(100% 0%, 3% 0%, 0% 100%, 100% 100%)",
                "display": "flex",
                "float": "right",
                "fontFamily": "Oswald",
                "fontSize": `${(15/1366)*100}vw`,
                "height": "50%",
                "paddingLeft": "7%",
                "width": "75%"

            },

            "typography": {

                "fontFamily": "Oswald",
                "fontSize": `${(15/1366)*100}vw`,
                "textShadow": "0 0 0.1vw white"

            }

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
            "width": "27.3%",
            "zIndex": "100"

        },

        "logo": {

            "height": "40%"

        }

    }

    const CONFIGBestRaider = {

        "container": {

            "alignItems": "center",
            "display": "flex",
            "flexDirection": "row",
            "position": "relative",
            "width": "50%"

        },

        "playerName": {

            "container": {

                "background": "linear-gradient(to bottom, rgb(111, 19, 56), rgb(63, 13, 49))",
                "borderColor": "rgba(58, 213, 208, 0.7)",
                "borderLeftStyle": "solid",
                "borderWidth": `${(35/1366)*100}vw`,
                "clipPath": "polygon(100% 0%, 0% 0%, 0% 100%, 95.5% 100%)",
                "height": "80%",
                "position": "relative",
                "width": "70%",
                "zIndex": "200"

            },

            "nameContainer": {

                "alignItems": "center",
                "display": "flex",
                "height": "50%",
                "justifyContent": "flex-end"

            },

            "typography": {

                "color": "white",
                "fontFamily": "Oswald",
                "fontSize": `${(15/1366)*100}vw`,
                "fontWeight": "400",
                "marginRight": "10%",
                "overflowWrap": "break-word",
                "textShadow": "0 0 0.1vw white"

            }

        },

        "playerImage": {

            "height": "130%",
            "left": "9%", 
            "bottom": "10%",
            "position": "absolute",
            "width": "16%", 
            "zIndex": "300"

        },

        "points":{

            "container": {

                "alignItems": "center",
                "background": "linear-gradient(to bottom ,rgb(153, 33, 91), rgb(80, 17, 56))",
                "color": "white",
                "clipPath": "polygon(100% 0%, 11.4% 0%, 0% 100%, 85% 100%)",
                "display": "flex",
                "flexDirection": "column",
                "fontFamily": "Oswald",
                "fontSize": `${(15/1366)*100}vw`,
                "fontWeight": "400",
                "height": "80%",
                "justifyContent": "center",
                "position": "relative",
                "right": "2.6%",
                "textAlign": "center",
                "width": "30%"
            },

            "name": {

                "alignItems": "center",
                "display": "flex",
                "fontFamily": "Oswald",
                "fontSize": `${(15/1366)*100}vw`,
                "height": "50%",
                "paddingLeft": "10%",
                "textShadow": "0 0 0.2vw white"

            },

            "value": {

                "alignItems": "center",
                "display": "flex",
                "fontFamily": "Oswald",
                "fontSize": `${(20/1366)*100}vw`,
                "height": "50%",
                "textShadow": "0 0 0.2vw white"

            }

        },

        "teamLogo": {

            "height": "90%",
            "left": "-10%",
            "position": "absolute",
            "top": "-25%",
            "zIndex": "300"

        },

        "text": {

            "container": {

                "alignItems": "center",
                "backgroundColor": "black",
                "color": "white",
                "clipPath": "polygon(97% 0%, 0% 0%, 0% 100%, 100% 100%)",
                "display": "flex",
                "float": "left",
                "fontFamily": "Oswald",
                "fontSize": `${(15/1366)*100}vw`,
                "height": "50%",
                "justifyContent": "right",
                "paddingRight": "7%",
                "width": "75%"

            },

            "typography": {

                "fontFamily": "Oswald",
                "fontSize": `${(15/1366)*100}vw`,
                "textShadow": "0 0 0.1vw white"

            }

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
            "width": "27.3%",
            "zIndex": "100"

        },

        "logo": {

            "height": "40%",

        }

    }

    const CONFIGPoints = {

        "container": {

            "alignItems": "center",
            "background": "linear-gradient(to right, rgba(176, 2, 92, 0.8),transparent 40%,transparent 60%,rgba(58, 213,208, 0.8) 100%)",
            "borderRadius": `${(40/1366)*100}vw`,
            "display": "flex",
            "flexDirection": "row",
            "gap": "7.4%",
            "height": "9.5%",
            "justifyContent": "center",
            "width": "92%",
            "zIndex": "50"

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
            "width": "22.8%"

        },

        "palaniTuskersPoints": {

            "alignItems": "center",
            "background": "linear-gradient(to bottom, #b0025c, #6e0e4c 80%)",
            "color": "white",
            "display": "flex",
            "fontFamily": "'Bebas Neue'", 
            "fontWeight": "600",
            "fontSize": `${(30/1366)*100}vw`,
            "height": "100%",
            "justifyContent": "center",
            "width": "22.8%"

        },

        "pointsTypography": {

            "color": "white",
            "fontFamily": "Oswald",
            "fontSize": `${(23/1366)*100}vw`,
            "fontWeight": "600",
            "textAlign": "center",
            "width": "31.6%",

        }

    }

    const CONFIGPlayingTeamsAndMatchName = {

        "container": {

            "alignItems": "center",
            "display": "flex",
            "flexDirection": "row",
            "gap": "10%",
            "height": "100%",
            "justifyContent": "center",
            "position": "absolute",
            "width": "85%"

        },

        "match7Typography": {

            "color": "white",
            "fontFamily": "Oswald",
            "fontSize": `${(22/1366)*100}vw`,
            "fontWeight": "600",
            "height": "37%",
            "paddingTop": "3%",
            "paddingBottom": `${(340/768)*100}vh`,
            "textAlign": "center",
            "width": "31.6%"

        },

        "nilgiriKnightsTypography": {

            "background": "linear-gradient(to left, #3caeaa, transparent)",
            "color": "white",
            "fontFamily": "Oswald",
            "fontSize": `${(18/1366)*100}vw`,
            "fontWeight": "600",
            "height": "41.1%",
            "paddingTop": `${(28/768)*100}vh`,
            "paddingBottom": "41vh",
            "paddingRight": "1%",
            "textAlign": "right",
            "width": "22.8%"

        },

        "palaniTuskersTypography": {

            "background": "linear-gradient(to right, #a50055, transparent)",
            "color": "white",
            "fontSize": `${(18/1366)*100}vw`,
            "fontWeight": "600",
            "fontFamily": "Oswald",
            "height": "41.1%",
            "paddingTop": `${(28/768)*100}vh`,
            "paddingBottom": "41vh",
            "paddingLeft": "1%",
            "textAlign": "left",
            "width": "22.8%"

        }

    }

    const CONFIGScoreBoard = {

        "container": {

            "alignItems": "center",
            "background": "linear-gradient(to right,rgba(110, 14, 76, 0.9),rgb(0, 0, 0),rgb(0, 0, 0),rgba(46, 133, 142, 0.8))",
            "boxShadow": "0vw 0vw 0.3vw white",
            "display": "flex",
            "flexDirection": "column",
            "gap": `${(14/768)*100}vh`,
            "height": "76%",
            "position": "relative",
            "width": "45.4%"

        },

        "leftContainer": {

            "backgroundColor": "rgba(200, 2, 101, 0.8)",
            "borderRadius": `${(14/1366)*100}vw`,
            "height": "100%",
            "left": "0.5%",
            "marginTop": `${(0/768)*100}vh`,
            "position": "absolute",
            "width": "1%"

        },

        "rightContainer": {

            "backgroundColor": "rgba(58, 213, 208, 0.8)",
            "borderRadius": `${(14/1366)*100}vw`,
            "height": "100%",
            "marginTop": `${(0/768)*100}vh`,
            "position": "absolute",
            "right": "0.5%",
            "width": "1%"

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
                id="matchSummaryOutsideContainer"
                style={{
                    ...CONFIGMatchSummary.outsideContainer
                }}
            >
                <Box 
                    id="matchSummaryInsideContainer"
                    style={{
                        ...CONFIGMatchSummary.insideContainer
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
            </Box>
            <Stack 
                id="scoreBoardContainer"
                //spacing={1.6}
                style={{
                    ...CONFIGScoreBoard.container
                }}
            >
                <Box 
                    id="playingTeamsAndMatchNameContainer" 
                    style={{
                        ...CONFIGPlayingTeamsAndMatchName.container
                    }}
                >
                    <Typography
                        id="palaniTuskersNameTypography"
                        style={{
                            ...CONFIGPlayingTeamsAndMatchName.palaniTuskersTypography
                        }}
                    >
                        PALANI TUSKERS
                    </Typography>
                    <Typography
                        id="matchNameTypography"
                        style={{
                            ...CONFIGPlayingTeamsAndMatchName.match7Typography
                        }}
                    >
                        MATCH 7
                    </Typography>
                    <Typography
                        id="nilgiriKnightsNameTypography"
                        style={{
                            ...CONFIGPlayingTeamsAndMatchName.nilgiriKnightsTypography
                        }}
                    >
                        NILGIRI KNIGHTS
                    </Typography>
                </Box>
                <Box 
                    id="fullTimeContainer" 
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
                        id="fullTimeNameTypography"
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
                    id="raidPointsContainer"
                    style={{
                        ...CONFIGPoints.container
                    }}
                >
                    <Typography 
                        id="raidPointsPalaniTuskersScoreTypography" 
                        style={{
                            ...CONFIGPoints.palaniTuskersPoints
                        }}
                    >
                        16
                    </Typography>
                    <Typography 
                        id="raidPointsNameTypography" 
                        style={{
                            ...CONFIGPoints.pointsTypography
                        }}
                    >
                        RAID POINTS
                    </Typography>
                    <Typography 
                        id="raidPointsNilgiriKnightsScoreTypography" 
                        style={{
                            ...CONFIGPoints.nilgiriKnightsPoints
                        }}
                    >
                        11
                    </Typography>
                </Box>
                <Box 
                    id="tacklePointsContainer"
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
                        id="tacklePointsNameTypography" 
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
                id="bestPlayersContainer"
                style={{
                    ...CONFIGBestPlayersContainer
                }}
            >
                <Box
                    id="bestRaiderContainer"
                    style={{
                        ...CONFIGBestRaider.container
                    }}
                >
                    <img
                        id="bestRaiderTeamLogo" 
                        src="https://feed.yuvakabaddi.com/YKS-2022-SE/teamLogos/569.png"
                        style={{
                            ...CONFIGBestRaider.teamLogo
                        }}
                    >  
                    </img>
                    <img
                        id="bestRaiderPlayerImage"
                        src="https://static.yuvakabaddi.com/images/player-images/6618.png"
                        style={{
                            ...CONFIGBestRaider.playerImage
                        }}
                    >
                    </img>
                    <Box 
                        id="bestRaiderPlayerContainer"
                        style={{
                            ...CONFIGBestRaider.playerName.container
                        }}
                    >
                        <Box
                            id="bestRaiderPlayerNameContainer"
                            style = {{
                                ...CONFIGBestRaider.playerName.nameContainer
                            }}
                        >
                            <Typography 
                                id="bestRaiderPlayerNameTypography"
                                style={{
                                    ...CONFIGBestRaider.playerName.typography
                                }}
                            >
                                S.MUKESHKANNAN
                            </Typography>
                        </Box>
                        <Box
                            id="bestRaiderTextContainer"
                            style={{
                                ...CONFIGBestRaider.text.container
                            }}
                        >
                            <Typography
                                id="bestRaiderTextTypography"
                                style={{
                                    ...CONFIGBestRaider.text.typography
                                }}
                            >
                                BEST RAIDER
                            </Typography>
                        </Box>
                    </Box>
                    <Box 
                        id="bestRaiderRaidPointsContainer"
                        style={{
                            ...CONFIGBestRaider.points.container
                        }}
                    >
                        <Typography
                            id="bestRaiderRaidPointsNameTypography"
                            style={{
                                ...CONFIGBestRaider.points.name
                            }}
                        >
                            RAID POINTS
                        </Typography>
                        <Typography
                            id="bestRaiderRaidPointsTypography" 
                            style={{
                                ...CONFIGBestRaider.points.value
                            }}
                        >
                            4
                        </Typography>
                    </Box>
                </Box>
                <Box 
                    id="bestDefenderContainer"
                    style={{
                        ...CONFIGBestDefender.container
                    }}
                >
                    <Box 
                        id="bestDefenderTacklePointsContainer"
                        style={{
                            ...CONFIGBestDefender.points.container
                        }}
                    >
                        <Typography 
                            id="bestDefenderTacklePointsNameTypography"
                            style={{
                                ...CONFIGBestDefender.points.name
                            }}
                        >
                            TACKLE POINTS
                        </Typography>
                        <Typography
                            id="bestRaiderTacklePointsTypography" 
                            style={{
                                ...CONFIGBestDefender.points.value
                            }}
                        >
                            4
                        </Typography>
                    </Box>
                    <Box 
                        id="bestDefenderPlayerContainer"
                        style={{
                            ...CONFIGBestDefender.playerName.container
                        }}
                    >
                        <Box
                            id="bestDefenderPlayerNameContainer"
                            style = {{
                                ...CONFIGBestDefender.playerName.nameContainer
                            }}
                        >
                            <Typography
                                id="bestDefenderPlayerNameTypography"
                                style={{
                                    ...CONFIGBestDefender.playerName.typography
                                }}
                            >
                                PURUSHOTHAMAN PALANIVELU
                            </Typography>
                        </Box>
                        <Box
                            id="bestDefenderTextContainer" 
                            style={{
                                ...CONFIGBestDefender.text.container
                            }}
                        >
                            <Typography 
                                id="bestDefenderTextTypography" 
                                style={{
                                    ...CONFIGBestDefender.text.typography
                                }}
                            >
                                BEST DEFENDER
                            </Typography>
                        </Box>
                    </Box>
                    <img
                        id="bestDefenderPlayerImage"
                        src="https://static.yuvakabaddi.com/images/player-images/6638.png"
                        style={{
                            ...CONFIGBestDefender.playerImage
                        }}
                    >
                    </img>
                    <img
                        id="bestDefenderTeamLogo" 
                        src="https://feed.yuvakabaddi.com/YKS-2022-SE/teamLogos/569.png"
                        style={{
                            ...CONFIGBestDefender.teamLogo
                        }}
                    >
                    </img>
                </Box>
            </Box>
        </Box>
    );
}

export default App;
