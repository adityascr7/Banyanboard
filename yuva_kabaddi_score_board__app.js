import React, { useState, useEffect, useCallback } from 'react';
import { useMediaQuery } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

function App() {

    // Manipulate these 10 things
    // borderRadius: `${tournamentData.style.CONFIGMatchPlayer1.typography.typographyFirstElement.borderRadiusRatio}vw`,
    // fontSize: `${getFontSize(tournamentData.style.CONFIG1.fontSizeFactor*tournamentData.style.CONFIGMatchPlayer1.typography.typographyFirstElement.fontSizeRatio)}vw`,
    // marginBottom: `${tournamentData.style.CONFIGMatchPlayer1.typography.typographyFirstElement.marginBottomRatio}vh`,
    // marginLeft: `${tournamentData.style.CONFIGMatchPlayer1.typography.typographyFirstElement.marginLeftRatio}vw`,
    // marginRight: `${tournamentData.style.CONFIGMatchPlayer1.typography.typographyFirstElement.marginRightRatio}vw`,
    // marginTop: `${tournamentData.style.CONFIGMatchPlayer1.typography.typographyFirstElement.marginTopRatio}vh`,
    // paddingBottom: `${tournamentData.style.CONFIGMatchPlayer1.typography.typographyFirstElement.paddingBottomRatio}vh`,
    // paddingLeft: `${tournamentData.style.CONFIGMatchPlayer1.typography.typographyFirstElement.paddingLeftRatio}vw`,
    // paddingRight: `${tournamentData.style.CONFIGMatchPlayer1.typography.typographyFirstElement.paddingRightRatio}vw`,
    // paddingTop: `${tournamentData.style.CONFIGMatchPlayer1.typography.typographyFirstElement.paddingTopRatio}vh`,

    // Pending (13-08-2023)

    // borderRadius --> borderRadiusRatio
    // borderWidth -->   borderWidthRatio
    // marginLeft -->  marginLeftRatio
    // marginRight -->  marginRightRatio
    // marginTop--> marginTopRatio
    // paddingRight --> paddingRightRatio


    const CONFIG1 = {

		"animationTiming": "1000ms",
		"fontSizeFactor": 1,
		"mobileScreenFactor": 2.5,
		"playerNameMaxLength": 20,
		"smallScreenFactor": 2,
        "teamAColor": "purple",
        "teamBColor": "green",
		"transitionDelay1": "0ms",
		"transitionDelay2": "500ms",
		"transitionDelay3": "1000ms",
		"transitionDelay4": "1500ms",
		"transitionDelay5": "2000ms",
		"transitionDelay6": "2500ms",
		"transitionDelay7": "3000ms",
		"transitionDelay8": "3500ms",
        "typographyColorUsual": "white",
        "typographyColorPrimaryScoreTypeName": "black",
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

            "bottom": "10%",
            "height": "130%",
            "left": "9%", 
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

                "color": CONFIG1.typographyColorUsual,
                "fontFamily": "Oswald",
                //"fontSize": `${(15/1366)*100}vw`,
                "fontSizeRatio": 1.1, // 1500/1366
                "fontWeight": "400",
                //"marginRight": "30px",
                "marginRightRatio": 2.2, //3000/1366
                "overflowWrap": "break-word",
                "textShadow": "0 0 0.2vw black",
                "textTransform": "uppercase"

            }

        },

        "playerNameAndRoleContainer": {

            "background": "linear-gradient(to bottom, rgb(111, 19, 56), rgb(63, 13, 49))",
            "borderColor": "rgba(58, 213, 208, 0.7)",
            "borderLeftStyle": "solid",
            //"borderWidth": `${(35/1366)*100}vw`,
            "borderWidthRatio": 2.56, // 3500/1366
            "clipPath": "polygon(100% 0%, 0% 0%, 0% 100%, 96.1% 100%)",
            "height": "80%",
            "position": "relative",
            "width": "70%",
            "zIndex": "200"

        },

        "playerRole": {

            "container": {

                "alignItems": "center",
                "backgroundColor": "black",
                "clipPath": "polygon(97% 0%, 0% 0%, 0% 100%, 100% 100%)",
                "display": "flex",
                "float": "left",
                "height": "50%",
                "justifyContent": "right",
                //"paddingRight": "7%",
                "paddingRightRatio": 1.83, // 2500/1366 
                "width": "75%"

            },

            "typography": {

                "color": CONFIG1.typographyColorUsual,
                "fontFamily": "Oswald",
                //"fontSize": `${(15/1366)*100}vw`,
                "fontSizeRatio": 1.1, // 1500/1366
                "textShadow": "0 0 0.1vw white",
                "textTransform": "uppercase"

            }

        },

        "points":{

            "container": {

                "alignItems": "center",
                "background": "linear-gradient(to bottom ,rgb(153, 33, 91), rgb(80, 17, 56))",
                "clipPath": "polygon(100% 0%, 10% 0%, 0% 100%, 86% 100%)",
                "display": "flex",
                "flexDirection": "column",
                "height": "80%",
                "justifyContent": "center",
                "position": "relative",
                "right": "2.3%",
                "textAlign": "center",
                "width": "30%"
            },

            "name": {

                "alignItems": "center",
                "color": CONFIG1.typographyColorUsual,
                "display": "flex",
                "fontFamily": "Oswald",
                //"fontSize": `${(15/1366)*100}vw`,
                "fontSizeRatio": 1.1, // 1500/1366
                "height": "50%",
                //"paddingLeft": "10%",
                "paddingLeftRatio": 0.44, // 600/1366
                "textShadow": "0 0 0.2vw black",
                "textTransform": "uppercase"

            },

            "value": {

                "alignItems": "center",
                "color": CONFIG1.typographyColorUsual,
                "display": "flex",
                "fontFamily": "Oswald",
                //"fontSize": `${(20/1366)*100}vw`,
                "fontSizeRatio": 1.46, // 2000/1366
                "height": "50%",
                "textShadow": "0 0 0.2vw black",

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

                "color": CONFIG1.typographyColorUsual,
                "fontFamily": "Oswald",
                //"fontSize": `${(15/1366)*100}vw`,
                "fontSizeRatio": 1.1, // 1500/1366
                "fontWeight": "400",
                //"marginLeft": "10%",
                "marginLeftRatio": 2.2, //3000/1366
                "overflowWrap": "break-word",
                "textShadow": "0 0 0.2vw black",
                "textTransform": "uppercase"

            }

        },

        "playerNameAndRoleContainer": {

            "background": "linear-gradient(to bottom, rgb(111, 19, 56), rgb(63, 13, 49))",
            "borderColor": "rgba(58, 213, 208, 0.7)",
            "borderRightStyle": "solid",
            //"borderWidth": `${(35/1366)*100}vw`,
            "borderWidthRatio": 2.56, // 3500/1366
            "clipPath": "polygon(100% 0%, 0% 0%, 4% 100%, 100% 100%)",
            "height": "80%",
            "position": "relative",
            "width": "70%",
            "zIndex": "200"

        },

        "playerRole": {

            "container": {

                "alignItems": "center", 
                "backgroundColor": "black",
                "clip-path": "polygon(100% 0%, 3% 0%, 0% 100%, 100% 100%)",
                "display": "flex",
                "float": "right",
                "height": "50%",
                "justifyContent": "left",
                //"paddingLeft": "7%",
                "paddingLeftRatio": 1.83, // 2500/1366 
                "width": "75%"

            },

            "typography": {

                "color": CONFIG1.typographyColorUsual,
                "fontFamily": "Oswald",
                //"fontSize": `${(15/1366)*100}vw`,
                "fontSizeRatio": 1.1, // 1500/1366
                "textShadow": "0 0 0.1vw white",
                "textTransform": "uppercase"

            }

        },

        "points": {

            "container": {

                "alignItems": "center",
                "background": "linear-gradient(to bottom ,rgb(153, 33, 91), rgb(80, 17, 56))",
                "clipPath": "polygon(89.4% 0%, 0% 0%, 13% 100%, 100% 100%)",
                "display": "flex",
                "flexDirection": "column",
                "height": "80%",
                "justifyContent": "center",
                "left": "2.3%",
                "position": "relative",
                "textAlign": "center",
                "width": "30%",



            },

            "name": {

                "alignItems": "center",
                "color": CONFIG1.typographyColorUsual,
                "display": "flex",
                "fontFamily": "Oswald",
                //"fontSize": `${(15/1366)*100}vw`,
                "fontSizeRatio": 1.1, // 1500/1366
                "height": "50%",
                //"paddingRight": "25px",
                "paddingRightRatio": 0.44, // 600/1366
                "textShadow": "0 0 0.2vw black"

            },

            "value": {

                "alignItems": "center",
                "color": CONFIG1.typographyColorUsual,
                "display": "flex",
                "fontFamily": "Oswald",
                //"fontSize": `${(20/1366)*100}vw`,
                "fontSizeRatio": 1.46, // 2000/1366
                "height": "50%",
                "textShadow": "0 0 0.2vw black"

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

    const CONFIGBestPlayersContainer = {

        "display": "flex",
        "flexDirection": "row",
        "height": "12%",
        "justifyContent": "center",
        "width": "75%"

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
            // "marginTop": "0.5%",
            "marginTopRatio": 0.5, // 384/768
            "width": "50%"

        },

        "typography": {

            "color": CONFIG1.typographyColorUsual,
            "fontFamily": "Oswald",
            // "fontSize": `${(36/1366)*100}vw`,
            "fontSizeRatio": 2.63, // 3600/1366
            "fontWeight": "700",
            "textTransform": "uppercase"

        }

    }

    const CONFIGPlayingTeamsAndMatchNameAndBackDrop = {

        "container": {

            "alignItems": "center",
            "display": "flex",
            "flexDirection": "row",
            "gap": "7.9%",
            "height": "100%",
            "justifyContent": "center",
            "position": "absolute",
            "width": "90%"

        },

        "matchNameBackDrop": {

            "height": "100%",
            "width": "31.6%"

        },

        "playingTeamsAndMatchName": {

            "container": {

                "alignItems": "center",
                "display": "flex",
                "flexDirection": "row",
                "gap": "5.7%",
                "height": "14%",
                "justifyContent": "center",
                "position": "absolute",
                "top": "0",
                "width": "100%"

            },

            "matchNameTypography": {

                "color": CONFIG1.typographyColorUsual,
                "fontFamily": "Oswald",
                //"fontSize": `${(22/1366)*100}vw`,
                "fontSizeRatio": 1.61, // 2200/1366
                "fontWeight": "600",
                "textAlign": "center",
                "textTransform": "uppercase",
                "width": "35.6%"

            },

            "teamATypography": {

                "color": CONFIG1.typographyColorUsual,
                "fontFamily": "Oswald",
                //"fontSize": `${(18/1366)*100}vw`,
                "fontSizeRatio": 1.32, // 1800/1366
                "fontWeight": "600",
                "textAlign": "center",
                "textTransform": "uppercase",
                "width": "23.2%"

            },

            "teamBTypography": {

                "color": CONFIG1.typographyColorUsual,
                "fontFamily": "Oswald",
                //"fontSize": `${(18/1366)*100}vw`,
                "fontSizeRatio": 1.32, // 1800/1366
                "fontWeight": "600",
                "textAlign": "center",
                "textTransform": "uppercase",
                "width": "23.2%"

            }

        },

        "teamABackDrop": {

            "background": "linear-gradient(to right, #a50055, transparent)",
            "height": "100%",
            "width": "22.8%"

        },

        "teamBBackDrop": {

            "background": "linear-gradient(to left, #3caeaa, transparent)",
            "height": "100%",
            "width": "22.8%"

        }

    }

    const CONFIGPrimaryScoreTypePoints = {

        "container": {

            "alignItems": "center",
            "background": "linear-gradient(to bottom, #f7f7f7,rgb(170, 170, 170),#f7f7f7)",
            "border": "3%",
            "borderColor": "rgb(156, 156, 156)",
            //"borderRadius": `${(9/1366)*100}vw`,
            "borderRadiusRatio": 0.66, // 900/1366
            "borderStyle": "solid",
            //"borderWidth": `${(4.7/768)*100}vh`,
            "borderWidthRatio": 0.61, // 470/768
            // "borderWidth": `${(5/1366)*100}vw`,
            "display": "flex",
            "gap": "5.7%",
            "height": "12%",
            "justifyContent": "center",
            //"marginTop": `${(84/768)*100}vh`,
            "marginTopRatio": 10.94, // 8400/768
            "width": "90%",
            "zIndex": "50"

        },

        "name": {

            "color": CONFIG1.typographyColorPrimaryScoreTypeName,
            "fontFamily": "Bebas Neue",
            //"fontSize": `${(33/1366)*100}vw`,
            "fontSizeRatio": 2.41, // 3300/1366
            "fontWeight": "600",
            "textAlign": "center",
            "transform": "scaleX(1.2)",
            "textTransform": "uppercase",
            "width": "35.6%"

        },

        "teamAPoints": {

            "alignItems": "center",
            "background": "linear-gradient(to bottom, #b0025c, #6e0e4c 80%)",
            "color": CONFIG1.typographyColorUsual,
            "display": "flex",
            "fontFamily": "'Bebas Neue'",
            //"fontSize": `${(52/1366)*100}vw`,
            "fontSizeRatio": 3.81, // 5200/1366
            "fontWeight": "600",
            "height": "114%",
            "justifyContent": "center",
            "width": "23.2%",
            "zIndex": "100"

        },

        "teamBPoints": {

            "alignItems": "center",
            "background": "linear-gradient(to bottom, #3ad5d0,#268a8a 80%)",
            "color": CONFIG1.typographyColorUsual,
            "display": "flex",
            "fontFamily": "Bebas Neue",
            //"fontSize": `${(52/1366)*100}vw`,
            "fontSizeRatio": 3.81, // 5200/1366
            "fontWeight": "600",
            "height": "114%",
            "justifyContent": "center",
            "width": "23.2%",
            "zIndex": "100"

        }

    }

    const CONFIGScoreBoard = {

        "outermostContainer": {

            "alignItems": "center",
            "background": "linear-gradient(to right,rgba(110, 14, 76, 0.9),rgb(0, 0, 0),rgb(0, 0, 0),rgba(46, 133, 142, 0.8))",
            "boxShadow": "0vw 0vw 0.3vw white",
            "display": "flex",
            "flexDirection": "column",
            "gap": `${(2/768)*100}vh`,
            "height": "76%",
            "position": "relative",
            "width": "47%"

        },

        "leftNarrowEmptyContainer": {

            "backgroundColor": "rgba(200, 2, 101, 0.8)",
            "borderRadius": `${(14/1366)*100}vw`,
            "height": "100%",
            "left": "0.5%",
            //"marginTop": `${(0/768)*100}vh`,
            "marginTopRatio": 0, // 0/768
            "position": "absolute",
            "width": "1%"

        },

        "rightNarrowEmptyContainer": {

            "backgroundColor": "rgba(58, 213, 208, 0.8)",
            "borderRadius": `${(14/1366)*100}vw`,
            "height": "100%",
            //"marginTop": `${(0/768)*100}vh`,
            "marginTopRatio": 0, // 0/768
            "position": "absolute",
            "right": "0.5%",
            "width": "1%"

        }

    }

    const CONFIGSecondaryScoreTypePointsContainer = {

        "alignItems": "center",
        "display": "flex",
        "flexDirection": "column",
        "gap": "2.3%",
        "height": "74%",
        "justifyContent": "center",
        "width": "100%"

    }

    const CONFIGSecondaryScoreTypePointsIndividual = {

        "container": {

            "alignItems": "center",
            "background": "linear-gradient(to right, rgba(176, 2, 92, 0.8),transparent 40%,transparent 60%,rgba(58, 213,208, 0.8) 100%)",
            //"borderRadius": `${(40/1366)*100}vw`,
            "borderRadiusRatio": 2.93, // 4000/1366
            "display": "flex",
            "flexDirection": "row",
            "gap": "7%",
            "height": "14%",
            "justifyContent": "center",
            "width": "92%",
            "zIndex": "50"

        },

        "pointsTypography": {

            "color": CONFIG1.typographyColorUsual,
            "fontFamily": "Oswald",
            //"fontSize": `${(23/1366)*100}vw`,
            "fontSizeRatio": 1.68, // 2300/1366
            "fontWeight": "600",
            "textAlign": "center",
            "textTransform": "uppercase",
            "width": "31.6%",

        },

        "teamAPoints": {

            "alignItems": "center",
            "background": "linear-gradient(to bottom, #b0025c, #6e0e4c 80%)",
            "color": CONFIG1.typographyColorUsual,
            "display": "flex",
            "fontFamily": "'Bebas Neue'", 
            //"fontSize": `${(30/1366)*100}vw`,
            "fontSizeRatio": 2.2, // 3000/1366
            "fontWeight": "600",
            "height": "100%",
            "justifyContent": "center",
            "width": "22.8%"

        },

        "teamBPoints": {

            "alignItems": "center",
            "background": "linear-gradient(to bottom, #3ad5d0,#268a8a 80%)",
            "color": CONFIG1.typographyColorUsual,
            "display": "flex",
            "fontFamily": "'Bebas Neue'", 
            //"fontSize": `${(30/1366)*100}vw`,
            "fontSizeRatio": 2.2, // 3000/1366
            "fontWeight": "600",
            "height": "100%",
            "justifyContent": "center",
            "width": "22.8%"

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
            "width": "26.5%",
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
            "width": "26.5%",
            "zIndex": "100"

        },

        "logo": {

            "height": "40%"

        }

    }

    // Aditya
    // CONFIGMainContainer
    // CONFIGMatchSummary

    // Urva
    // Rest 10 CONFIGs

    const [
        tournamentData,
        setTournamentData
    ] = useState({
		style: {
            "CONFIG1": {...CONFIG1},
			"CONFIGBestPlayerA": {...CONFIGBestPlayerA},
			"CONFIGBestPlayerB": {...CONFIGBestPlayerB},
			"CONFIGBestPlayersContainer": {...CONFIGBestPlayersContainer},
			"CONFIGMainContainer": {...CONFIGMainContainer},
			"CONFIGMatchSummary": {...CONFIGMatchSummary},
			"CONFIGPlayingTeamsAndMatchNameAndBackDrop": {...CONFIGPlayingTeamsAndMatchNameAndBackDrop},
			"CONFIGPrimaryScoreTypePoints": {...CONFIGPrimaryScoreTypePoints},
			"CONFIGScoreBoard": {...CONFIGScoreBoard},
			"CONFIGSecondaryScoreTypePointsContainer": {...CONFIGSecondaryScoreTypePointsContainer},
			"CONFIGSecondaryScoreTypePointsIndividual": {...CONFIGSecondaryScoreTypePointsIndividual},
			"CONFIGTeamALogo": {...CONFIGTeamALogo},
			"CONFIGTeamBLogo": {...CONFIGTeamBLogo}
		}
	});

    // const isMobileScreen = useMediaQuery(useTheme().breakpoints.down('md'));
	// const isSmallScreen = useMediaQuery(useTheme().breakpoints.down('sm'));

    // Get font size based on screen width
	function getFontSize(fontSizeNumber){

		// if (isMobileScreen) {
		// 	return (fontSizeNumber * tournamentData.style.CONFIG1.mobileScreenFactor)
		// }
		// else if (isSmallScreen) {
		// 	return (fontSizeNumber * tournamentData.style.CONFIG1.smallScreenFactor)
		// } else {
		// 	return fontSizeNumber
		// }

        return fontSizeNumber

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
                ...tournamentData.style.CONFIGMainContainer
            }}
        >
            {/* Match summary container (located at top of the screen) */}
            <Box 
                id="matchSummaryOutsideContainer"
                style={{
                    ...tournamentData.style.CONFIGMatchSummary.outsideContainer,
                    marginTop: `${tournamentData.style.CONFIGMatchSummary.outsideContainer.marginTopRatio}vh`
                }}
            >
                <Box 
                    id="matchSummaryInsideContainer"
                    style={{
                        ...tournamentData.style.CONFIGMatchSummary.insideContainer
                    }}
                >
                    <Typography 
                        id="matchSummaryTypography"
                        style={{
                            ...tournamentData.style.CONFIGMatchSummary.typography,
                            fontSize: `${getFontSize(tournamentData.style.CONFIG1.fontSizeFactor*tournamentData.style.CONFIGMatchSummary.typography.fontSizeRatio)}vw`
                        }}
                    >
                        MATCH SUMMARY
                    </Typography>
                </Box>
            </Box>
            {/* Scoreboard container (loacted at centre of the screen) */}
            <Stack 
                id="scoreBoardContainer"
                style={{
                    // ...CONFIGScoreBoard.outermostContainer
                    ...tournamentData.style.CONFIGScoreBoard.outermostContainer,
                    marginTop: `${tournamentData.style.CONFIGScoreBoard.leftNarrowEmptyContainer.marginTopRatio}vh`
                }}
            >
                {/* Best players A and B container (located at bottom of the screen) */}
                <Box 
                    id="playingTeamsAndMatchNameAndBackDropContainer" 
                    style={{
                        ...tournamentData.style.CONFIGPlayingTeamsAndMatchNameAndBackDrop.container
                    }}
                >
                    <Box
                        id="teamABackdropContainer"
                        style={{
                            ...tournamentData.style.CONFIGPlayingTeamsAndMatchNameAndBackDrop.teamABackDrop,

                        }}
                    >
                    </Box>
                    <Box
                        id="matchNameBackdropContainer"
                        style={{
                            ...tournamentData.style.CONFIGPlayingTeamsAndMatchNameAndBackDrop.matchNameBackDrop,
                        }}
                    >
                    </Box>
                    <Box
                        id="teamBBackdropContainer"
                        style={{
                            ...tournamentData.style.CONFIGPlayingTeamsAndMatchNameAndBackDrop.teamBBackDrop
                        }}
                    >
                    </Box>
                    <Box
                        id="playingTeamsAndMatchNameContainer"
                        style={{
                            ...tournamentData.style.CONFIGPlayingTeamsAndMatchNameAndBackDrop.playingTeamsAndMatchName.container,
                        }}
                    >
                        <Typography
                            id="teamATypography"
                            style={{
                                ...tournamentData.style.CONFIGPlayingTeamsAndMatchNameAndBackDrop.playingTeamsAndMatchName.teamATypography,
                                fontSize: `${tournamentData.style.CONFIGPlayingTeamsAndMatchNameAndBackDrop.playingTeamsAndMatchName.teamATypography.fontSizeRatio}vw`
                            }}
                        >
                            MANCHESTER UNITED
                        </Typography>
                        <Typography
                            id="matchNameTypography"
                            style={{
                                ...tournamentData.style.CONFIGPlayingTeamsAndMatchNameAndBackDrop.playingTeamsAndMatchName.matchNameTypography,
                                fontSize: `${tournamentData.style.CONFIGPlayingTeamsAndMatchNameAndBackDrop.playingTeamsAndMatchName.matchNameTypography.fontSizeRatio}vw`
                            }}
                        >
                            LEAGUE MATCH
                        </Typography>
                        <Typography
                            id="teamBTypography"
                            style={{
                                ...tournamentData.style.CONFIGPlayingTeamsAndMatchNameAndBackDrop.playingTeamsAndMatchName.teamBTypography,
                                fontSize: `${tournamentData.style.CONFIGPlayingTeamsAndMatchNameAndBackDrop.playingTeamsAndMatchName.teamBTypography.fontSizeRatio}vw`
                            }}
                        >
                            CHELSEA
                        </Typography>
                    </Box>
                </Box>
                {/* Primary score type points container */}
                <Box 
                    id="primaryScoreTypePointsContainer" 
                    style={{
                        ...tournamentData.style.CONFIGPrimaryScoreTypePoints.container,
                        borderRadius: `${CONFIGPrimaryScoreTypePoints.container.borderRadiusRatio}vw`,
                        borderWidth: `${CONFIGPrimaryScoreTypePoints.container.borderWidthRatio}vh`,
                        marginTop: `${CONFIGPrimaryScoreTypePoints.container.marginTopRatio}vh`
                    }}
                >
                    <Typography 
                        id="teamAPrimaryScoreTypePointsTypography"
                        style={{
                            ...tournamentData.style.CONFIGPrimaryScoreTypePoints.teamAPoints,
                            fontSize: `${CONFIGPrimaryScoreTypePoints.teamAPoints.fontSizeRatio}vw`
                        }}
                    >
                        {/* 30 */}
                        5
                    </Typography>
                    <Typography 
                        id="primaryScoreTypeNameTypography"
                        style={{
                            ...tournamentData.style.CONFIGPrimaryScoreTypePoints.name,
                            fontSize: `${CONFIGPrimaryScoreTypePoints.name.fontSizeRatio}vw`
                        }}
                    >
                        {/* FULL TIME */}
                        GOALS
                    </Typography>
                    <Typography
                        id="teamBPrimaryScoreTypePointsTypography" 
                        style={{
                            ...tournamentData.style.CONFIGPrimaryScoreTypePoints.teamBPoints,
                            fontSize: `${CONFIGPrimaryScoreTypePoints.teamBPoints.fontSizeRatio}vw`
                        }}
                    >
                        {/* 18 */}
                        3
                    </Typography>
                </Box>
                {/* Secondary score type points container */}
                <Box
                    id="secondaryScoreTypePointsContainer"
                    style={{
                        ...tournamentData.style.CONFIGSecondaryScoreTypePointsContainer
                    }}
                >
                    <Box 
                        id="secondaryScoreTypeOnePointsContainer"
                        style={{
                            ...tournamentData.style.CONFIGSecondaryScoreTypePointsIndividual.container,
                            borderRadius: `${tournamentData.style.CONFIGSecondaryScoreTypePointsIndividual.container.borderRadiusRatio}vw`
                        }}
                    >
                        <Typography 
                            id="teamASecondaryScoreTypeOnePointsValueTypography" 
                            style={{
                                ...tournamentData.style.CONFIGSecondaryScoreTypePointsIndividual.teamAPoints,
                                fontSize: `${tournamentData.style.CONFIGSecondaryScoreTypePointsIndividual.teamAPoints.fontSizeRatio}vw`
                            }}
                        >
                            {/* 16 */}
                            20
                        </Typography>
                        <Typography 
                            id="secondaryScoreTypeOnePointsNameTypography" 
                            style={{
                                ...tournamentData.style.CONFIGSecondaryScoreTypePointsIndividual.pointsTypography,
                                fontSize: `${tournamentData.style.CONFIGSecondaryScoreTypePointsIndividual.pointsTypography.fontSizeRatio}vw`
                            }}
                        >
                            {/* RAID POINTS */}
                            SHOTS
                        </Typography>
                        <Typography 
                            id="teamBSecondaryScoreTypeOnePointsValueTypography" 
                            style={{
                                ...tournamentData.style.CONFIGSecondaryScoreTypePointsIndividual.teamBPoints,
                                fontSize: `${tournamentData.style.CONFIGSecondaryScoreTypePointsIndividual.teamBPoints.fontSizeRatio}vw`
                            }}
                        >
                            {/* 11 */}
                            16
                        </Typography>
                    </Box>
                    <Box 
                        id="secondaryScoreTypeTwoPointsContainer"
                        style={{
                            ...tournamentData.style.CONFIGSecondaryScoreTypePointsIndividual.container,
                            borderRadius: `${tournamentData.style.CONFIGSecondaryScoreTypePointsIndividual.container.borderRadiusRatio}vw`
                        }}
                    >
                        <Typography 
                            id="teamASecondaryScoreTypeTwoPointsValueTypography" 
                            style={{
                                ...tournamentData.style.CONFIGSecondaryScoreTypePointsIndividual.teamAPoints,
                                fontSize: `${tournamentData.style.CONFIGSecondaryScoreTypePointsIndividual.teamAPoints.fontSizeRatio}vw`
                            }}
                        >
                            {/* 11 */}
                            15
                        </Typography>
                        <Typography 
                            id="secondaryScoreTypeTwoPointsNameTypography" 
                            style={{
                                ...tournamentData.style.CONFIGSecondaryScoreTypePointsIndividual.pointsTypography,
                                fontSize: `${tournamentData.style.CONFIGSecondaryScoreTypePointsIndividual.pointsTypography.fontSizeRatio}vw`
                            }}
                        >
                            {/* TACKLE POINTS */}
                            SHOTS ON TARGET
                        </Typography>
                        <Typography 
                            id="teamBSecondaryScoreTypeTwoPointsValueTypography" 
                            style={{
                                ...tournamentData.style.CONFIGSecondaryScoreTypePointsIndividual.teamBPoints,
                                fontSize: `${tournamentData.style.CONFIGSecondaryScoreTypePointsIndividual.teamBPoints.fontSizeRatio}vw`
                            }}
                        >
                            {/* 7 */}
                            10
                        </Typography>
                    </Box>
                    <Box 
                        id="secondaryScoreTypeThreePointsContainer"
                        style={{
                            ...tournamentData.style.CONFIGSecondaryScoreTypePointsIndividual.container,
				            borderRadius: `${tournamentData.style.CONFIGSecondaryScoreTypePointsIndividual.container.borderRadiusRatio}vw`
                        }}
                    >
                        <Typography 
                            id="teamASecondaryScoreTypeThreePointsValueTypography" 
                            style={{
                                ...tournamentData.style.CONFIGSecondaryScoreTypePointsIndividual.teamAPoints,
							    fontSize: `${tournamentData.style.CONFIGSecondaryScoreTypePointsIndividual.teamAPoints.fontSizeRatio}vw`
                            }}
                        >
                            {/* 2 */}
                            5
                        </Typography>
                        <Typography 
                            id="secondaryScoreTypeThreePointsNameTypography" 
                            style={{
                                ...tournamentData.style.CONFIGSecondaryScoreTypePointsIndividual.pointsTypography,
								fontSize: `${tournamentData.style.CONFIGSecondaryScoreTypePointsIndividual.pointsTypography.fontSizeRatio}vw`
                            }}
                        >
                            {/* ALL OUT POINTS */}
                            SHOTS OFF TARGET
                        </Typography>
                        <Typography 
                            id="teamBSecondaryScoreTypeThreePointsValueTypography" 
                            style={{
                                ...tournamentData.style.CONFIGSecondaryScoreTypePointsIndividual.teamBPoints,
								fontSize: `${tournamentData.style.CONFIGSecondaryScoreTypePointsIndividual.teamBPoints.fontSizeRatio}vw`
                            }}
                        >
                            6
                        </Typography>
                    </Box>
                    <Box 
                        id="secondaryScoreTypeFourPointsContainer"
                        style={{
                            ...tournamentData.style.CONFIGSecondaryScoreTypePointsIndividual.container,
							borderRadius: `${tournamentData.style.CONFIGSecondaryScoreTypePointsIndividual.container.borderRadiusRatio}vw`
                        }}
                    >
                        <Typography 
                            id="teamASecondaryScoreTypeFourPointsValueTypography" 
                            style={{
                                ...tournamentData.style.CONFIGSecondaryScoreTypePointsIndividual.teamAPoints,
								fontSize: `${tournamentData.style.CONFIGSecondaryScoreTypePointsIndividual.teamAPoints.fontSizeRatio}vw`
                            }}
                        >
                            {/* 1 */}
                            10
                        </Typography>
                        <Typography 
                            id="secondaryScoreTypeFourPointsNameTypography" 
                            style={{
                                ...tournamentData.style.CONFIGSecondaryScoreTypePointsIndividual.pointsTypography,
								fontSize: `${tournamentData.style.CONFIGSecondaryScoreTypePointsIndividual.pointsTypography.fontSizeRatio}vw`
                            }}
                        >
                            {/* EXTRAS */}
                            SAVES
                        </Typography>
                        <Typography 
                            id="teamBSecondaryScoreTypeFourPointsValueTypography" 
                            style={{
                                ...tournamentData.style.CONFIGSecondaryScoreTypePointsIndividual.teamBPoints,
								fontSize: `${tournamentData.style.CONFIGSecondaryScoreTypePointsIndividual.teamBPoints.fontSizeRatio}vw`
                            }}
                        >
                            {/* 0 */}
                            7
                        </Typography>
                    </Box>
                    <Box 
                        id="secondaryScoreTypeFivePointsContainer"
                        style={{
                            ...tournamentData.style.CONFIGSecondaryScoreTypePointsIndividual.container,
                            borderRadius: `${tournamentData.style.CONFIGSecondaryScoreTypePointsIndividual.container.borderRadiusRatio}vw`
                        }}
                    >
                        <Typography
                            id="teamASecondaryScoreTypeFivePointsValueTypography" 
                            style={{
                                ...tournamentData.style.CONFIGSecondaryScoreTypePointsIndividual.teamAPoints,
								fontSize: `${tournamentData.style.CONFIGSecondaryScoreTypePointsIndividual.teamAPoints.fontSizeRatio}vw`
                            }}
                        >
                            {/* 0 */}
                            55%
                        </Typography>
                        <Typography 
                            id="secondaryScoreTypeFivePointsNameTypography" 
                            style={{
                                ...tournamentData.style.CONFIGSecondaryScoreTypePointsIndividual.pointsTypography,
								fontSize: `${tournamentData.style.CONFIGSecondaryScoreTypePointsIndividual.pointsTypography.fontSizeRatio}vw`
                            }}
                        >
                            {/* SUPER RAIDS */}
                            POSSESSION
                        </Typography>
                        <Typography 
                            id="teamBSecondaryScoreTypeFivePointsValueTypography" 
                            style={{
                                ...tournamentData.style.CONFIGSecondaryScoreTypePointsIndividual.teamBPoints,
								fontSize: `${tournamentData.style.CONFIGSecondaryScoreTypePointsIndividual.teamBPoints.fontSizeRatio}vw`
                            }}
                        >
                            {/* 1 */}
                            45%
                        </Typography>
                    </Box>
                    <Box 
                        id="secondaryScoreTypeSixPointsContainer"
                        style={{
                            ...tournamentData.style.CONFIGSecondaryScoreTypePointsIndividual.container,
                            borderRadius: `${tournamentData.style.CONFIGSecondaryScoreTypePointsIndividual.container.borderRadiusRatio}vw`
                        }}
                    >
                        <Typography 
                            id="teamASecondaryScoreTypeSixPointsValueTypography" 
                            style={{
                                ...tournamentData.style.CONFIGSecondaryScoreTypePointsIndividual.teamAPoints,
								fontSize: `${tournamentData.style.CONFIGSecondaryScoreTypePointsIndividual.teamAPoints.fontSizeRatio}vw`
                            }}
                        >
                            {/* 1 */}
                            3
                        </Typography>
                        <Typography 
                            id="secondaryScoreTypeSixPointsNameTypography" 
                            style={{                                
                                ...tournamentData.style.CONFIGSecondaryScoreTypePointsIndividual.pointsTypography,
                                fontSize: `${tournamentData.style.CONFIGSecondaryScoreTypePointsIndividual.pointsTypography.fontSizeRatio}vw`
                            }}
                        >
                            {/* SUPER TACKLES */}
                            YELLOW CARDS
                        </Typography>
                        <Typography 
                            id="teamBSecondaryScoreTypeSixPointsValueTypography" 
                            style={{
                                ...tournamentData.style.CONFIGSecondaryScoreTypePointsIndividual.teamBPoints,
								fontSize: `${tournamentData.style.CONFIGSecondaryScoreTypePointsIndividual.teamBPoints.fontSizeRatio}vw`
                            }}
                        >
                            {/* 0 */}
                            5
                        </Typography>
                    </Box>
                </Box>
                {/* left narrow empty container (located at left side of the scoreboard) */}
                <Box 
                    id="leftNarrowEmptyContainer"
                    style={{
                        ...tournamentData.style.CONFIGScoreBoard.leftNarrowEmptyContainer,
                        marginTop: `${tournamentData.style.CONFIGScoreBoard.leftNarrowEmptyContainer.marginTopRatio}vh`
                    }}
                >
                </Box>
                {/* right narrow empty container (located at right side of the scoreboard) */}
                <Box 
                    id="rightNarrowEmptyContainer"
                    style={{
                        ...tournamentData.style.CONFIGScoreBoard.rightNarrowEmptyContainer,
                        marginTop: `${tournamentData.style.CONFIGScoreBoard.rightNarrowEmptyContainer.marginTopRatio}vh`
                    }}
                >
                </Box>
            </Stack>
            {/* Team A logo container (located at left side of the screen) */}
            <Box 
                id="teamALogoContainer"
                style={{
                    ...tournamentData.style.CONFIGTeamALogo.container
                }}
            >
                <img 
                    id="teamALogo" 
                    // src="https://feed.yuvakabaddi.com/YKS-2022-SE/teamLogos/569.png"
                    src="https://www.pngall.com/wp-content/uploads/12/Manchester-United-F.C.-Logo-PNG-Image.png"
                    style={{
                        ...tournamentData.style.CONFIGTeamALogo.logo
                    }}
                >
                </img>
            </Box>
            {/* Team B logo container (located at right side of the screen) */}
            <Box
                id="teamBLogoContainer"
                style={{
                    ...tournamentData.style.CONFIGTeamBLogo.conntainer
                }}
            >
                <img 
                    id="teamBLogo"
                    // src="https://www.bullscore.com/feature_img_cron/logos/kabaddi/151.png"
                    src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c4e1.png"
                    style={{
                        ...tournamentData.style.CONFIGTeamBLogo.logo
                    }}
                >
                </img>
            </Box>
            {/* Best players A and B container (located at bottom of the screen) */}
            <Box 
                id="bestPlayersContainer"
                style={{
                    ...tournamentData.style.CONFIGBestPlayersContainer
                }}
            >
                {/* best player A container (located at bottom left of the screen) */} 
                <Box
                    id="bestPlayerAContainer"
                    style={{
                        // ...tournamentData.style.CONFIGBestPlayerA.container
                        ...tournamentData.style.CONFIGBestPlayerA.container
                    }}
                >
                    <img
                        id="bestPlayerATeamLogo" 
                        // src="https://feed.yuvakabaddi.com/YKS-2022-SE/teamLogos/569.png"
                        src="https://www.pngall.com/wp-content/uploads/12/Manchester-United-F.C.-Logo-PNG-Image.png"
                        style={{
                            ...tournamentData.style.CONFIGBestPlayerA.teamLogo
                        }}
                    >  
                    </img>
                    <img
                        id="bestPlayerAImage"
                        // src="https://static.yuvakabaddi.com/images/player-images/6618.png"
                        src="https://www.footyrenders.com/render/marcus-rashford-68-390x326.png"
                        style={{
                            ...tournamentData.style.CONFIGBestPlayerA.playerImage
                        }}
                    >
                    </img>
                    <Box 
                        id="bestPlayerANameAndRoleContainer"
                        style={{
                            ...tournamentData.style.CONFIGBestPlayerA.playerNameAndRoleContainer,
                            borderWidth: `${tournamentData.style.CONFIGBestPlayerA.playerNameAndRoleContainer.borderWidthRatio}vw`
                        }}
                    >
                        <Box
                            id="bestPlayerANameContainer"
                            style = {{
                                ...tournamentData.style.CONFIGBestPlayerA.playerName.container
                            }}
                        >
                            <Typography 
                                id="bestPlayerANameTypography"
                                style={{
                                    ...tournamentData.style.CONFIGBestPlayerA.playerName.typography,
                                    fontSize: `${tournamentData.style.CONFIGBestPlayerA.playerName.typography.fontSizeRatio}vw`,
                                    marginRight: `${tournamentData.style.CONFIGBestPlayerA.playerName.typography.marginRightRatio}vw`
                                }}
                            >
                                {/* S.MUKESHKANNAN */}
                                MARCUS RASHFORD
                            </Typography>
                        </Box>
                        <Box
                            id="bestPlayerARoleContainer"
                            style={{
                                ...tournamentData.style.CONFIGBestPlayerA.playerRole.container,
                                paddingRight: `${tournamentData.style.CONFIGBestPlayerA.playerRole.container.paddingRightRatio}vw`
                            }}
                        >
                            <Typography
                                id="bestPlayerARoleTypography"
                                style={{
                                    ...tournamentData.style.CONFIGBestPlayerA.playerRole.typography,
                                    fontSize: `${tournamentData.style.CONFIGBestPlayerA.playerRole.typography.fontSizeRatio}vw`
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
                            ...tournamentData.style.CONFIGBestPlayerA.points.container
                        }}
                    >
                        <Typography
                            id="bestPlayerAPointsNameTypography"
                            style={{
                                ...tournamentData.style.CONFIGBestPlayerA.points.name,
                                fontSize: `${tournamentData.style.CONFIGBestPlayerA.points.name.fontSizeRatio}vw`,
                                paddingLeft: `${tournamentData.style.CONFIGBestPlayerA.points.name.paddingLeftRatio}vw`
                            }}
                        >
                            {/* RAID POINTS */}
                            GOALS SCORED
                        </Typography>
                        <Typography
                            id="bestPlayerAPointsValueTypography"
                            style={{
                                ...tournamentData.style.CONFIGBestPlayerA.points.value,
                                fontSize: `${tournamentData.style.CONFIGBestPlayerA.points.value.fontSizeRatio}vw`
                            }}
                        >
                            {/* 4 */}
                            3
                        </Typography>
                    </Box>
                </Box>
                {/* best player B container (located at bottom right of the screen) */}
                <Box 
                    id="bestPlayerBContainer"
                    style={{
                        ...tournamentData.style.CONFIGBestPlayerB.container
                    }}
                >
                    <Box 
                        id="bestPlayerBPointsContainer"
                        style={{
                            ...tournamentData.style.CONFIGBestPlayerB.points.container
                        }}
                    >
                        <Typography 
                            id="bestPlayerBPointsNameTypography"
                            style={{
                                ...tournamentData.style.CONFIGBestPlayerB.points.name,
                                fontSize: `${tournamentData.style.CONFIGBestPlayerB.points.name.fontSizeRatio}vw`,
                                paddingRight: `${tournamentData.style.CONFIGBestPlayerB.points.name.paddingRightRatio}vw`
                            }}
                        >
                            {/* TACKLE POINTS */}
                            SHOTS BLOCKED
                        </Typography>
                        <Typography
                            id="bestPlayerBPointsValueTypography" 
                            style={{
                                ...tournamentData.style.CONFIGBestPlayerB.points.value,
                                fontSize: `${tournamentData.style.CONFIGBestPlayerB.points.value.fontSizeRatio}vw`
                            }}
                        >
                            {/* 4 */}
                            5
                        </Typography>
                    </Box>
                    <Box 
                        id="bestPlayerBNameAndRoleContainer"
                        style={{
                            ...tournamentData.style.CONFIGBestPlayerB.playerNameAndRoleContainer,
                            borderWidth: `${tournamentData.style.CONFIGBestPlayerB.playerNameAndRoleContainer.borderWidthRatio}vw`
                        }}
                    >
                        <Box
                            id="bestPlayerBNameContainer"
                            style = {{
                                ...tournamentData.style.CONFIGBestPlayerB.playerName.container
                            }}
                        >
                            <Typography
                                id="bestPlayerBNameTypography"
                                style={{
                                    ...tournamentData.style.CONFIGBestPlayerB.playerName.typography,
                                    fontSize: `${tournamentData.style.CONFIGBestPlayerB.playerName.typography.fontSizeRatio}vw`,
                                    marginLeft: `${tournamentData.style.CONFIGBestPlayerB.playerName.typography.marginLeftRatio}vw`,
                                }}
                            >
                                {/* PURUSHOTHAMAN PALANIVELU */}
                                LISANDRO MARTINEZ
                            </Typography>
                        </Box>
                        <Box
                            id="bestPlayerBRoleContainer" 
                            style={{
                                ...tournamentData.style.CONFIGBestPlayerB.playerRole.container,
                                paddingLeft: `${tournamentData.style.CONFIGBestPlayerB.playerRole.container.paddingLeftRatio}vw`
                            }}
                        >
                            <Typography 
                                id="bestPlayerBRoleTypography" 
                                style={{
                                    ...tournamentData.style.CONFIGBestPlayerB.playerRole.typography,
                                    fontSize: `${tournamentData.style.CONFIGBestPlayerB.playerRole.typography.fontSizeRatio}vw`
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
                            ...tournamentData.style.CONFIGBestPlayerB.playerImage
                        }}
                    >
                    </img>
                    <img
                        id="bestPlayerBTeamLogo" 
                        // src="https://feed.yuvakabaddi.com/YKS-2022-SE/teamLogos/569.png"
                        src="https://www.pngall.com/wp-content/uploads/12/Manchester-United-F.C.-Logo-PNG-Image.png"
                        style={{
                            ...tournamentData.style.CONFIGBestPlayerB.teamLogo
                        }}
                    >
                    </img>
                </Box>
            </Box>
        </Box>
    );
}

export default App;
