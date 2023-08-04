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

    const CONFIGBestPlayerA = {

        "container": {

            "alignItems": "center",
            "display": "flex",
            "flexDirection": "row",
            "position": "relative",
            "width": "50%"

        },

        "playerImage": {

            "height": "130%",
            "left": "9%", 
            "bottom": "10%",
            "position": "absolute",
            "width": "16%", 
            "zIndex": "300"

        },

        "playerName": {

            "container": {

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
                "textShadow": "0 0 0.1vw white",
                "textTransform": "uppercase"

            }

        },

        "playerNameAndRoleContainer": {

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

        "playerRole": {

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
                "textShadow": "0 0 0.1vw white",
                "textTransform": "uppercase"

            }

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
                "textShadow": "0 0 0.2vw white",
                "textTransform": "uppercase"

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

        }

    }

    const CONFIGBestPlayerB = {

        "container": {

            "alignItems": "center",
            "display": "flex",
            "flexDirection": "row",
            "position": "relative",
            "width": "50%"

        },

        "playerImage": {

            "height": "130%",
            "bottom": "10%", 
            "position": "absolute", 
            "right": "9%",
            "width": "16%",
            "zIndex": "300"

        },

        "playerName": {

            "container": {

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
                "textShadow": "0 0 0.1vw white",
                "textTransform": "uppercase"

            }

        },

        "playerNameAndRoleContainer": {

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

        "playerRole": {

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
                "justifyContent": "left",
                "paddingLeft": "7%",
                "width": "75%"

            },

            "typography": {

                "fontFamily": "Oswald",
                "fontSize": `${(15/1366)*100}vw`,
                "textShadow": "0 0 0.1vw white",
                "textTransform": "uppercase"

            }

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
            "textTransform": "uppercase",
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
            "textTransform": "uppercase",
            "width": "31.6%",

        }

    }

    const CONFIGPlayingTeamsAndMatchName = {

        "container": {

            "alignItems": "center",
            "display": "flex",
            "flexDirection": "row",
            "gap": "11%",
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
            "textTransform": "uppercase",
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
            //"paddingRight": "1%",
            "textAlign": "center",
            "textTransform": "uppercase",
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
            //"paddingLeft": "1%",
            "textAlign": "center",
            "textTransform": "uppercase",
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

    const CONFIGTeamALogo = {

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

            "height": "40%"

        }

    }

    const CONFIGTeamBLogo = {

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
                        id="teamANameTypography"
                        style={{
                            ...CONFIGPlayingTeamsAndMatchName.palaniTuskersTypography
                        }}
                    >
                        {/* PALANI TUSKERS */}
                        MANCHESTER UNITED
                    </Typography>
                    <Typography
                        id="matchNameTypography"
                        style={{
                            ...CONFIGPlayingTeamsAndMatchName.match7Typography
                        }}
                    >
                        {/* MATCH 7 */}
                        LEAGUE MATCH
                    </Typography>
                    <Typography
                        id="teamBNameTypography"
                        style={{
                            ...CONFIGPlayingTeamsAndMatchName.nilgiriKnightsTypography
                        }}
                    >
                        {/* NILGIRI KNIGHTS */}
                        CHELSEA
                    </Typography>
                </Box>
                <Box 
                    id="allTimescoreContainer" 
                    style={{
                        ...CONFIGFullTime.container
                    }}
                >
                    <Typography 
                        id="teamAallTimescoreValueTypography"
                        style={{
                            ...CONFIGFullTime.palaniTuskerstypography
                        }}
                    >
                        {/* 30 */}
                        5
                    </Typography>
                    <Typography 
                        id="allTimescoreTypography"
                        style={{
                            ...CONFIGFullTime.fullTimeTypography
                        }}
                    >
                        {/* FULL TIME */}
                        GOALS
                    </Typography>
                    <Typography
                        id="teamBallTimescoreValueTypography" 
                        style={{
                            ...CONFIGFullTime.nilgiriKnightstypography
                        }}
                    >
                        {/* 18 */}
                        3
                    </Typography>
                </Box>
                <Box 
                    id="score1Container"
                    style={{
                        ...CONFIGPoints.container
                    }}
                >
                    <Typography 
                        id="teamAscore1ValueTypography" 
                        style={{
                            ...CONFIGPoints.palaniTuskersPoints
                        }}
                    >
                        {/* 16 */}
                        20
                    </Typography>
                    <Typography 
                        id="score1Typography" 
                        style={{
                            ...CONFIGPoints.pointsTypography
                        }}
                    >
                        {/* RAID POINTS */}
                        SHOTS
                    </Typography>
                    <Typography 
                        id="teamBscore1ValueTypography" 
                        style={{
                            ...CONFIGPoints.nilgiriKnightsPoints
                        }}
                    >
                        {/* 11 */}
                        16
                    </Typography>
                </Box>
                <Box 
                    id="score2Container"
                    style={{
                        ...CONFIGPoints.container
                    }}
                >
                    <Typography 
                        id="teamAscore2ValueTypography" 
                        style={{
                            ...CONFIGPoints.palaniTuskersPoints
                        }}
                    >
                        {/* 11 */}
                        15
                    </Typography>
                    <Typography 
                        id="score2Typography" 
                        style={{
                            ...CONFIGPoints.pointsTypography
                        }}
                    >
                        {/* TACKLE POINTS */}
                        SHOTS ON TARGET
                    </Typography>
                    <Typography 
                        id="teamBscore1ValueTypography" 
                        style={{
                            ...CONFIGPoints.nilgiriKnightsPoints
                        }}
                    >
                        {/* 7 */}
                        10
                    </Typography>
                </Box>
                <Box 
                    id="score3Container"
                    style={{
                        ...CONFIGPoints.container
                    }}
                >
                    <Typography 
                        id="teamAscore3ValueTypography" 
                        style={{
                            ...CONFIGPoints.palaniTuskersPoints
                        }}
                    >
                        {/* 2 */}
                        5
                    </Typography>
                    <Typography 
                        id="score3Typography" 
                        style={{
                            ...CONFIGPoints.pointsTypography
                        }}
                    >
                        {/* ALL OUT POINTS */}
                        SHOTS OFF TARGET
                    </Typography>
                    <Typography 
                        id="teamBscore3ValueTypography" 
                        style={{
                            ...CONFIGPoints.nilgiriKnightsPoints
                        }}
                    >
                        6
                    </Typography>
                </Box>
                <Box 
                    id="score4Container"
                    style={{
                        ...CONFIGPoints.container
                    }}
                >
                    <Typography 
                        id="teamAscore4ValueTypography" 
                        style={{
                            ...CONFIGPoints.palaniTuskersPoints
                        }}
                    >
                        {/* 1 */}
                        10
                    </Typography>
                    <Typography 
                        id="score4Typography" 
                        style={{
                            ...CONFIGPoints.pointsTypography
                        }}
                    >
                        {/* EXTRAS */}
                        SAVES
                    </Typography>
                    <Typography 
                        id="teamBscore4ValueTypography" 
                        style={{
                            ...CONFIGPoints.nilgiriKnightsPoints
                        }}
                    >
                        {/* 0 */}
                        7
                    </Typography>
                </Box>
                <Box 
                    id="score5Container"
                    style={{
                        ...CONFIGPoints.container
                    }}
                >
                    <Typography
                        id="teamAscore5ValueTypography" 
                        style={{
                            ...CONFIGPoints.palaniTuskersPoints
                        }}
                    >
                        {/* 0 */}
                        55%
                    </Typography>
                    <Typography 
                        id="score5Typography" 
                        style={{
                            ...CONFIGPoints.pointsTypography
                        }}
                    >
                        {/* SUPER RAIDS */}
                        POSSESSION
                    </Typography>
                    <Typography 
                        id="teamBscore5ValueTypography" 
                        style={{
                            ...CONFIGPoints.nilgiriKnightsPoints
                        }}
                    >
                        {/* 1 */}
                        45%
                    </Typography>
                </Box>
                <Box 
                    id="score6Container"
                    style={{
                        ...CONFIGPoints.container
                    }}
                >
                    <Typography 
                        id="teamAscore6ValueTypography" 
                        style={{
                            ...CONFIGPoints.palaniTuskersPoints
                        }}
                    >
                        {/* 1 */}
                        3
                    </Typography>
                    <Typography 
                        id="score6Typography" 
                        style={{
                            ...CONFIGPoints.pointsTypography
                        }}
                    >
                        {/* SUPER TACKLES */}
                        YELLOW CARDS
                    </Typography>
                    <Typography 
                        id="teamBscore6ValueTypography" 
                        style={{
                            ...CONFIGPoints.nilgiriKnightsPoints
                        }}
                    >
                        {/* 0 */}
                        5
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
                id="teamALogoContainer"
                style={{
                    ...CONFIGTeamALogo.container
                }}
            >
                <img 
                    id="teamALogo" 
                    // src="https://feed.yuvakabaddi.com/YKS-2022-SE/teamLogos/569.png"
                    src="https://www.pngall.com/wp-content/uploads/12/Manchester-United-F.C.-Logo-PNG-Image.png"
                    style={{
                        ...CONFIGTeamALogo.logo
                    }}
                >
                </img>
            </Box>
            <Box
                id="teamBLogoContainer"
                style={{
                    ...CONFIGTeamBLogo.conntainer
                }}
            >
                <img 
                    id="teamBLogo"
                    // src="https://www.bullscore.com/feature_img_cron/logos/kabaddi/151.png"
                    src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c4e1.png"
                    style={{
                        ...CONFIGTeamBLogo.logo
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
                    id="bestPlayerAContainer"
                    style={{
                        ...CONFIGBestPlayerA.container
                    }}
                >
                    <img
                        id="bestPlayerATeamLogo" 
                        // src="https://feed.yuvakabaddi.com/YKS-2022-SE/teamLogos/569.png"
                        src="https://www.pngall.com/wp-content/uploads/12/Manchester-United-F.C.-Logo-PNG-Image.png"
                        style={{
                            ...CONFIGBestPlayerA.teamLogo
                        }}
                    >  
                    </img>
                    <img
                        id="bestPlayerAImage"
                        // src="https://static.yuvakabaddi.com/images/player-images/6618.png"
                        src="https://www.footyrenders.com/render/marcus-rashford-68-390x326.png"
                        style={{
                            ...CONFIGBestPlayerA.playerImage
                        }}
                    >
                    </img>
                    <Box 
                        id="bestPlayerANameAndRoleContainer"
                        style={{
                            ...CONFIGBestPlayerA.playerNameAndRoleContainer
                        }}
                    >
                        <Box
                            id="bestPlayerANameContainer"
                            style = {{
                                ...CONFIGBestPlayerA.playerName.container
                            }}
                        >
                            <Typography 
                                id="bestPlayerANameTypography"
                                style={{
                                    ...CONFIGBestPlayerA.playerName.typography
                                }}
                            >
                                {/* S.MUKESHKANNAN */}
                                MARCUS RASHFORD
                            </Typography>
                        </Box>
                        <Box
                            id="bestPlayerARoleContainer"
                            style={{
                                ...CONFIGBestPlayerA.playerRole.container
                            }}
                        >
                            <Typography
                                id="bestPlayerARoleTypography"
                                style={{
                                    ...CONFIGBestPlayerA.playerRole.typography
                                }}
                            >
                                {/* BEST RAIDER */}
                                BEST ATTACKER
                            </Typography>
                        </Box>
                    </Box>
                    <Box 
                        id="bestPlayerAPointsContainer"
                        style={{
                            ...CONFIGBestPlayerA.points.container
                        }}
                    >
                        <Typography
                            id="bestPlayerAPointsNameTypography"
                            style={{
                                ...CONFIGBestPlayerA.points.name
                            }}
                        >
                            {/* RAID POINTS */}
                            GOALS SCORED
                        </Typography>
                        <Typography
                            id="bestPlayerAPointsValueTypography"
                            style={{
                                ...CONFIGBestPlayerA.points.value
                            }}
                        >
                            {/* 4 */}
                            3
                        </Typography>
                    </Box>
                </Box>
                <Box 
                    id="bestPlayerBContainer"
                    style={{
                        ...CONFIGBestPlayerB.container
                    }}
                >
                    <Box 
                        id="bestPlayerBPointsContainer"
                        style={{
                            ...CONFIGBestPlayerB.points.container
                        }}
                    >
                        <Typography 
                            id="bestPlayerBPointsNameTypography"
                            style={{
                                ...CONFIGBestPlayerB.points.name
                            }}
                        >
                            {/* TACKLE POINTS */}
                            SHOTS BLOCKED
                        </Typography>
                        <Typography
                            id="bestPlayerBPointsValueTypography" 
                            style={{
                                ...CONFIGBestPlayerB.points.value
                            }}
                        >
                            {/* 4 */}
                            5
                        </Typography>
                    </Box>
                    <Box 
                        id="bestPlayerBNameAndRoleContainer"
                        style={{
                            ...CONFIGBestPlayerB.playerNameAndRoleContainer
                        }}
                    >
                        <Box
                            id="bestPlayerBNameContainer"
                            style = {{
                                ...CONFIGBestPlayerB.playerName.container
                            }}
                        >
                            <Typography
                                id="bestPlayerBNameTypography"
                                style={{
                                    ...CONFIGBestPlayerB.playerName.typography
                                }}
                            >
                                {/* PURUSHOTHAMAN PALANIVELU */}
                                LISANDRO MARTINEZ
                            </Typography>
                        </Box>
                        <Box
                            id="bestPlayerBRoleContainer" 
                            style={{
                                ...CONFIGBestPlayerB.playerRole.container
                            }}
                        >
                            <Typography 
                                id="bestPlayerBRoleTypography" 
                                style={{
                                    ...CONFIGBestPlayerB.playerRole.typography
                                }}
                            >
                                BEST DEFENDER
                            </Typography>
                        </Box>
                    </Box>
                    <img
                        id="bestPlayerBImage"
                        // src="https://static.yuvakabaddi.com/images/player-images/6638.png"
                        src="https://www.footyrenders.com/render/lisandro-martinez-4-303x540.png"
                        style={{
                            ...CONFIGBestPlayerB.playerImage
                        }}
                    >
                    </img>
                    <img
                        id="bestPlayerBTeamLogo" 
                        // src="https://feed.yuvakabaddi.com/YKS-2022-SE/teamLogos/569.png"
                        src="https://www.pngall.com/wp-content/uploads/12/Manchester-United-F.C.-Logo-PNG-Image.png"
                        style={{
                            ...CONFIGBestPlayerB.teamLogo
                        }}
                    >
                    </img>
                </Box>
            </Box>
        </Box>
    );
}

export default App;
