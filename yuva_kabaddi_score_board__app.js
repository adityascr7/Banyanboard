
import React, { useState, useEffect, useCallback } from 'react';
import { useMediaQuery } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

function App() {

    const colors = {
        'customColorA': [160, 0, 85],
        'customColorB': [60, 174, 170],
        
        'aliceblue': [240, 248, 255],
        'antiquewhite': [250, 235, 215],
        'aqua': [0, 255, 255],
        'aquamarine': [127, 255, 212],
        'azure': [240, 255, 255],
        'beige': [245, 245, 220],
        'bisque': [255, 228, 196],
        'black': [0, 0, 0],
        'blanchedalmond': [255, 235, 205],
        'blue': [0, 0, 255],
        'blueviolet': [138, 43, 226],
        'brown': [165, 42, 42],
        'burlywood': [222, 184, 135],
        'cadetblue': [95, 158, 160],
        'chartreuse': [127, 255, 0],
        'chocolate': [210, 105, 30],
        'coral': [255, 127, 80],
        'cornflowerblue': [100, 149, 237],
        'crimson': [220, 20, 60],
        'cyan': [0, 255, 255],
        'darkblue': [0, 0, 139],
        'darkcyan': [0, 139, 139],
        'darkgoldenrod': [184, 134, 11],
        'darkgray': [169, 169, 169],
        'darkgreen': [0, 100, 0],
        'darkkhaki': [189, 183, 107],
        'darkmagenta': [139, 0, 139],
        'darkolivegreen': [85, 107, 47],
        'darkorange': [255, 140, 0],
        'darkorchid': [153, 50, 204],
        'darkpurple': [80, 0, 80],
        'darkred': [139, 0, 0],
        'darksalmon': [233, 150, 122],
        'darkseagreen': [143, 188, 143],
        'darkslateblue': [72, 61, 139],
        'darkslategray': [47, 79, 79],
        'darkturquoise': [0, 206, 209],
        'darkviolet': [148, 0, 211],
        'deeppink': [255, 20, 147],
        'deepskyblue': [0, 191, 255],
        'dimgray': [105, 105, 105],
        'dodgerblue': [30, 144, 255],
        'firebrick': [178, 34, 34],
        'floralwhite': [255, 250, 240],
        'forestgreen': [34, 139, 34],
        'fuchsia': [255, 0, 255],
        'gainsboro': [220, 220, 220],
        'ghostwhite': [248, 248, 255],
        'gold': [255, 215, 0],
        'goldenrod': [218, 165, 32],
        'gray': [128, 128, 128],
        'green': [0, 255, 0],
        'greenyellow': [173, 255, 47],
        'honeydew': [240, 255, 240],
        'hotpink': [255, 105, 180],
        'indianred': [205, 92, 92],
        'indigo': [75, 0, 130],
        'ivory': [255, 255, 240],
        'khaki': [240, 230, 140],
        'lavender': [230, 230, 250],
        'lavenderblush': [255, 240, 245],
        'lawngreen': [124, 252, 0],
        'lemonchiffon': [255, 250, 205],
        'lightblue': [173, 216, 230],
        'lightcoral': [240, 128, 128],
        'lightcyan': [224, 255, 255],
        'lightgoldenrodyellow': [250, 250, 210],
        'lightgray': [211, 211, 211],
        'lightgreen': [144, 238, 144],
        'lightpink': [255, 182, 193],
        'lightsalmon': [255, 160, 122],
        'lightseagreen': [32, 178, 170],
        'lightskyblue': [135, 206, 250],
        'lightslategray': [119, 136, 153],
        'lightsteelblue': [176, 196, 222],
        'lightyellow': [255, 255, 224],
        'lime': [0, 255, 0],
        'limegreen': [50, 205, 50],
        'linen': [250, 240, 230],
        'magenta': [255, 0, 255],
        'maroon': [128, 0, 0],
        'mediumaquamarine': [102, 205, 170],
        'mediumblue': [0, 0, 205],
        'mediumorchid': [186, 85, 211],
        'mediumpurple': [147, 112, 219],
        'mediumseagreen': [60, 179, 113],
        'mediumslateblue': [123, 104, 238],
        'mediumspringgreen': [0, 250, 154],
        'mediumturquoise': [72, 209, 204],
        'mediumvioletred': [199, 21, 133],
        'midnightblue': [25, 25, 112],
        'mintcream': [245, 255, 250],
        'mistyrose': [255, 228, 225],
        'moccasin': [255, 228, 181],
        'navajowhite': [255, 222, 173],
        'navy': [0, 0, 128],
        'oldlace': [253, 245, 230],
        'olive': [128, 128, 0],
        'olivedrab': [107, 142, 35],
        'orange': [255, 165, 0],
        'orangered': [255, 69, 0],
        'orchid': [218, 112, 214],
        'palegoldenrod': [238, 232, 170],
        'palegreen': [152, 251, 152],
        'paleturquoise': [175, 238, 238],
        'palevioletred': [219, 112, 147],
        'papayawhip': [255, 239, 213],
        'peachpuff': [255, 218, 185],
        'peru': [205, 133, 63],
        'pink': [255, 192, 203],
        'plum': [221, 160, 221],
        'powderblue': [176, 224, 230],
        'rebeccapurple': [102, 51, 153],
        'red': [255, 0, 0],
        'rosybrown': [188, 143, 143],
        'royalblue': [65, 105, 225],
        'saddlebrown': [139, 69, 19],
        'salmon': [250, 128, 114],
        'sandybrown': [244, 164, 96],
        'seagreen': [46, 139, 87],
        'seashell': [255, 245, 238],
        'sienna': [160, 82, 45],
        'silver': [192, 192, 192],
        'skyblue': [135, 206, 235],
        'slateblue': [106, 90, 205],
        'slategray': [112, 128, 144],
        'snow': [255, 250, 250],
        'springgreen': [0, 255, 127],
        'steelblue': [70, 130, 180],
        'tan': [210, 180, 140],
        'teal': [0, 128, 128],
        'thistle': [216, 191, 216],
        'tomato': [255, 99, 71],
        'turquoise': [64, 224, 208],
        'violet': [238, 130, 238],
        'wheat': [245, 222, 179],
        'white': [255, 255, 255],
        'whitesmoke': [245, 245, 245],
        'yellow': [255, 255, 0],
        'yellowgreen': [154, 205, 50]
    };

    const CONFIG1 = {

		"animationTiming": "1000ms",
		"fontSizeFactor": 1,
		"mobileScreenFactor": 2.5,
		"playerNameMaxLength": 20,
		"smallScreenFactor": 2,
        //"teamAColor": Object.keys(colors)[0],
        //"teamBColor": Object.keys(colors)[1],
        "teamAColor": "teal",
        "teamBColor": "chocolate",
		"transitionDelay1": "0ms",
		"transitionDelay2": "500ms",
		"transitionDelay3": "1000ms",
		"transitionDelay4": "1500ms",
		"transitionDelay5": "2000ms",
		"transitionDelay6": "2500ms",
		"transitionDelay7": "3000ms",
		"transitionDelay8": "3500ms",
        "typographyColorUsual": "white",
        "typographyColorPrimaryScoreTypeName": "black"
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
                "fontSizeRatio": 1.1, // 1500/1366
                "fontWeight": "400",
                "marginRightRatio": 2.2, //3000/1366
                "overflowWrap": "break-word",
                "textShadow": "0 0 0.2vw black",
                "textTransform": "uppercase"

            }

        },

        "playerNameAndRoleContainer": {

            "background": colorNameForBestPlayerIndividualContainer(CONFIG1.teamAColor, 1),
            "borderColor": borderColorNameForBestPlayerIndividualContainer(CONFIG1.teamBColor, 0.8),
            "borderLeftStyle": "solid",
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
                "paddingRightRatio": 1.83, // 2500/1366 
                "width": "75%"

            },

            "typography": {

                "color": CONFIG1.typographyColorUsual,
                "fontFamily": "Oswald",
                "fontSizeRatio": 1.1, // 1500/1366
                "textShadow": "0 0 0.1vw white",
                "textTransform": "uppercase"

            }

        },

        "points":{

            "container": {

                "alignItems": "center",
                "background": colorNameForBestPlayerIndividualPointsContainer(CONFIG1.teamAColor, 1),
                "clipPath": "polygon(100% 0%, 10% 0%, 0% 100%, 86% 100%)",
                "display": "flex",
                "filter": "brightness(1.3)",
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
                "fontSizeRatio": 1.1, // 1500/1366
                "height": "50%",
                "paddingLeftRatio": 0.44, // 600/1366
                "textShadow": "0 0 0.2vw black",
                "textTransform": "uppercase"

            },

            "value": {

                "alignItems": "center",
                "color": CONFIG1.typographyColorUsual,
                "display": "flex",
                "fontFamily": "Oswald",
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
                "fontSizeRatio": 1.1, // 1500/1366
                "fontWeight": "400",
                "marginLeftRatio": 2.2, //3000/1366
                "overflowWrap": "break-word",
                "textShadow": "0 0 0.2vw black",
                "textTransform": "uppercase"

            }

        },

        "playerNameAndRoleContainer": {

            "background": colorNameForBestPlayerIndividualContainer(CONFIG1.teamAColor, 1),
            "borderColor": borderColorNameForBestPlayerIndividualContainer(CONFIG1.teamBColor, 0.8),
            "borderRightStyle": "solid",
            "borderWidthRatio": 2.56, // 3500/1366
            "clipPath": "polygon(100% 0%, 0% 0%, 3.9% 100%, 100% 100%)",
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
                "paddingLeftRatio": 1.83, // 2500/1366 
                "width": "75%"

            },

            "typography": {

                "color": CONFIG1.typographyColorUsual,
                "fontFamily": "Oswald",
                "fontSizeRatio": 1.1, // 1500/1366
                "textShadow": "0 0 0.1vw white",
                "textTransform": "uppercase"

            }

        },

        "points": {

            "container": {

                "alignItems": "center",
                "background": colorNameForBestPlayerIndividualPointsContainer(CONFIG1.teamAColor, 1),
                "clipPath": "polygon(90% 0%, 0% 0%, 14% 100%, 100% 100%)",
                "display": "flex",
                "filter": "brightness(1.3)",
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
                "fontSizeRatio": 1.1, // 1500/1366
                "height": "50%",
                "paddingRightRatio": 0.44, // 600/1366
                "textShadow": "0 0 0.2vw black"

            },

            "value": {

                "alignItems": "center",
                "color": CONFIG1.typographyColorUsual,
                "display": "flex",
                "fontFamily": "Oswald",
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
            "background": colorNameForMatchSummaryInsideContainer(CONFIG1.teamAColor, 1),
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
            "marginTopRatio": 0.5, // 384/768
            "width": "50%"

        },

        "typography": {

            "color": CONFIG1.typographyColorUsual,
            "fontFamily": "Oswald",
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
                "fontSizeRatio": 1.61, // 2200/1366
                "fontWeight": "600",
                "textAlign": "center",
                "textTransform": "uppercase",
                "width": "35.6%"

            },

            "teamATypography": {

                "color": CONFIG1.typographyColorUsual,
                "fontFamily": "Oswald",
                "fontSizeRatio": 1.32, // 1800/1366
                "fontWeight": "600",
                "textAlign": "center",
                "textTransform": "uppercase",
                "width": "23.2%"

            },

            "teamBTypography": {

                "color": CONFIG1.typographyColorUsual,
                "fontFamily": "Oswald",
                "fontSizeRatio": 1.32, // 1800/1366
                "fontWeight": "600",
                "textAlign": "center",
                "textTransform": "uppercase",
                "width": "23.2%"

            }

        },

        "teamABackDrop": {

            "background": colorNameForTeamABackdrop(CONFIG1.teamAColor, CONFIG1.teamBColor, 1),
            "height": "100%",
            "width": "22.8%"

        },

        "teamBBackDrop": {

            "background": colorNameForTeamBBackdrop(CONFIG1.teamBColor, 1),
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
            "borderRadiusRatio": 0.66, // 900/1366
            "borderStyle": "solid",
            "borderWidthRatio": 0.61, // 470/768
            "display": "flex",
            "gap": "5.6%",
            "height": "12%",
            "justifyContent": "center",
            "marginTopRatio": 10.94, // 8400/768
            "width": "90%",
            "zIndex": "50"

        },

        "name": {

            "color": CONFIG1.typographyColorPrimaryScoreTypeName,
            "fontFamily": "Bebas Neue",
            "fontSizeRatio": 2.41, // 3300/1366
            "fontWeight": "600",
            "textAlign": "center",
            "transform": "scaleX(1.2)",
            "textTransform": "uppercase",
            "width": "35.6%"

        },

        "teamAPoints": {

            "alignItems": "center",
            "background": colorNameForPrimaryScoreTypeAndSecondaryScoreTypePointsTeamAPoints(CONFIG1.teamAColor, 1),
            "color": CONFIG1.typographyColorUsual,
            "display": "flex",
            "fontFamily": "'Bebas Neue'",
            "fontSizeRatio": 3.81, // 5200/1366
            "fontWeight": "600",
            "height": "113%",
            "justifyContent": "center",
            "width": "23.2%",
            "zIndex": "100"

        },

        "teamBPoints": {

            "alignItems": "center",
            "background": colorNameForPrimaryScoreTypeAndSecondaryScoreTypePointsTeamBPoints(CONFIG1.teamBColor, 1),
            "color": CONFIG1.typographyColorUsual,
            "display": "flex",
            "fontFamily": "Bebas Neue",
            "fontSizeRatio": 3.81, // 5200/1366
            "fontWeight": "600",
            "height": "113%",
            "justifyContent": "center",
            "width": "23.2%",
            "zIndex": "100"

        }

    }

    const CONFIGScoreBoard = {

        "outermostContainer": {

            "alignItems": "center",
            "background": colorNameForScoreBoard(CONFIG1.teamAColor, CONFIG1.teamBColor, 0.8),
            "boxShadow": "0vw 0vw 0.3vw white",
            "display": "flex",
            "flexDirection": "column",
            "gap": `${(2/768)*100}vh`,
            "height": "76%",
            "position": "relative",
            "width": "47%"

        },

        "leftNarrowEmptyContainer": {

            "backgroundColor": colorNameForLeftNarrowEmptyContainer(CONFIG1.teamAColor, 1),
            "borderRadiusRatio": 1.02, // 1400/1366
            "filter": "brightness(1.3)",
            "height": "100%",
            "left": "0.5%",
            "marginTopRatio": 0, // 0/768
            "position": "absolute",
            "width": "1%"

        },

        "rightNarrowEmptyContainer": {

            "backgroundColor": colorNameForRightNarrowEmptyContainer(CONFIG1.teamBColor, 1),
            "borderRadiusRatio": 1.02, // 1400/1366
            "filter": "brightness(1.3)",
            "height": "100%",
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
            "background": colorNameForSecondaryScoreTypePointsIndividualContainer(CONFIG1.teamAColor, CONFIG1.teamBColor, 0.8),
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
            "fontSizeRatio": 1.68, // 2300/1366
            "fontWeight": "600",
            "textAlign": "center",
            "textTransform": "uppercase",
            "width": "31.6%",

        },

        "teamAPoints": {

            "alignItems": "center",
            "background": colorNameForPrimaryScoreTypeAndSecondaryScoreTypePointsTeamAPoints(CONFIG1.teamAColor, 1),
            "color": CONFIG1.typographyColorUsual,
            "display": "flex",
            "fontFamily": "'Bebas Neue'", 
            "fontSizeRatio": 2.2, // 3000/1366
            "fontWeight": "600",
            "height": "100%",
            "justifyContent": "center",
            "width": "22.8%"

        },

        "teamBPoints": {

            "alignItems": "center",
            "background": colorNameForPrimaryScoreTypeAndSecondaryScoreTypePointsTeamBPoints(CONFIG1.teamBColor, 1),
            "color": CONFIG1.typographyColorUsual,
            "display": "flex",
            "fontFamily": "'Bebas Neue'", 
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
            "backgroundColor": colorNameForTeamALogoContainer(CONFIG1.teamAColor, 0.5),
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
            "backgroundColor": colorNameForTeamBLogoContainer(CONFIG1.teamBColor, 0.5),
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

    function borderColorNameForBestPlayerIndividualContainer(colorB, alpha = 1){

        const rgb = colors[colorB];
        if (!rgb) {
            throw new Error(`Unknown color name: ${colorB}`);
        }

        return `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, ${alpha})`;

    }

    function colorNameForBestPlayerIndividualContainer(colorA, alpha = 1){

        const rgb1 = colors[colorA];
        const rgb2 = colors[colorA];
        if (!rgb1 || !rgb2) {
            throw new Error(`Unknown color name: ${colorA}`);
        }

        /* The values multiplied with the new color are derived from the master color. 
        The backdrop colors serve as the base color. 
        For instance, when examining the master color and comparing it with the background-color of the 
        BestPlayerIndividualContainer, differences in their RGB values become apparent. 
        The factors of these RGB values are then multiplied with the new color. */

        let rgba1 = `rgba(${rgb1[0]*0.7}, ${Math.min(255, rgb1[1]*0.7 + 20)}, ${rgb1[2]*0.7}, ${alpha})`;
        let rgba2 = `rgba(${rgb2[0]*0.5}, ${rgb2[1]*0.5}, ${rgb2[2]*0.5}, ${alpha})`;

        return `linear-gradient(
                to bottom,
                ${rgba1}, 
                ${rgba2}
            )`;

    }

    function colorNameForBestPlayerIndividualPointsContainer(colorA, alpha = 1){

        const rgb1 = colors[colorA];
        const rgb2 = colors[colorA];
        if (!rgb2 || !rgb2) {
            throw new Error(`Unknown color name: ${colorA}`);
        }

        /* The values multiplied with the new color are derived from the master color. 
        The backdrop colors serve as the base color. 
        For instance, when examining the master color and comparing it with the background-color of the 
        BestPlayerIndividualPointsContainer, differences in their RGB values become apparent. 
        The factors of these RGB values are then multiplied with the new color. */

        let rgba1 = `rgba(${rgb1[0]*0.7}, ${Math.min(255, rgb1[1]*0.7 + 20)}, ${rgb1[2]*0.7}, ${alpha})`;
        let rgba2 = `rgba(${rgb2[0]*0.5}, ${rgb2[1]*0.5}, ${rgb2[2]*0.5}, ${alpha})`;

        return `linear-gradient(${rgba1}, ${rgba2})`;

    }

    function colorNameForLeftNarrowEmptyContainer(colorA, alpha = 1){

        const rgb = colors[colorA];
        if (!rgb) {
          throw new Error(`Unknown color name: ${colorA}`);
        }

        return `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, ${alpha})`;

    }

    function colorNameForMatchSummaryInsideContainer(colorA, alpha = 1){
    
        const rgb1 = colors[colorA];
        const rgb2 = colors[colorA];
        if (!rgb1 || !rgb2) {
            throw new Error(`Unknown color name: ${colorA}`);
        }

        /* The values multiplied with the new color are derived from the master color. 
        The backdrop colors serve as the base color. 
        For instance, when examining the master color and comparing it with the background-color of the 
        MatchSummaryInsideContainer, differences in their RGB values become apparent. 
        The factors of these RGB values are then multiplied with the new color. */

        let rgba1 = `rgba(${rgb1[0]*0.7}, ${rgb1[1]*0.7}, ${rgb1[2]*0.7}, ${alpha})`;
        let rgba2 = `rgba(${rgb2[0]*0.5}, ${rgb2[1]*0.5}, ${rgb2[2]*0.5}, ${alpha})`;

        return `linear-gradient(
                to bottom,
                ${rgba1}, 
                ${rgba2}
            )`;
    }

    function colorNameForPrimaryScoreTypeAndSecondaryScoreTypePointsTeamAPoints(colorA, alpha = 1){
    
        const rgb1 = colors[colorA];
        const rgb2 = colors[colorA];
        if (!rgb1 || !rgb2) {
            throw new Error(`Unknown color name: ${colorA}`);
        }

        /* The values multiplied with the new color are derived from the master color. 
        The backdrop colors serve as the base color. 
        For instance, when examining the master color and comparing it with the background-color of the 
        PrimaryScoreTypeAndSecondaryScoreTypePointsTeamAPointsContainer, differences in their RGB values become apparent. 
        The factors of these RGB values are then multiplied with the new color. */

        let rgba1 = `rgba(${rgb1[0]*1.1}, ${rgb1[1]*1}, ${rgb1[2]*1.08}, ${alpha})`;
        let rgba2 = `rgba(${rgb1[0]*0.82}, ${rgb2[1]*0.75}, ${rgb2[2]*0.59}, ${alpha})`;

        return `linear-gradient(
                ${rgba1}, 
                ${rgba2} 80%
            )`;

    }

    function colorNameForPrimaryScoreTypeAndSecondaryScoreTypePointsTeamBPoints(colorB, alpha = 1){
    
        const rgb1 = colors[colorB];
        const rgb2 = colors[colorB];
        if (!rgb1 || !rgb2) {
            throw new Error(`Unknown color name: ${colorB}`);
        }

        /* The values multiplied with the new color are derived from the master color. 
        The backdrop colors serve as the base color. 
        For instance, when examining the master color and comparing it with the background-color of the 
        PrimaryScoreTypeAndSecondaryScoreTypePointsTeamBPointsContainer, differences in their RGB values become apparent. 
        The factors of these RGB values are then multiplied with the new color. */

        let rgba1 = `rgba(${rgb1[0]*0.97}, ${rgb1[1]*1.224}, ${rgb1[2]*1.223}, ${alpha})`;
        let rgba2 = `rgba(${rgb2[0]*0.63}, ${rgb2[1]*0.793}, ${rgb2[2]*0.81}, ${alpha})`;

        return `linear-gradient(
                ${rgba1}, 
                ${rgba2} 80%
            )`;

    }

    function colorNameForRightNarrowEmptyContainer(colorB, alpha = 1){

        const rgb = colors[colorB];
        if (!rgb) {
          throw new Error(`Unknown color name: ${colorB}`);
        }

        return `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, ${alpha})`;

    }

    function colorNameForScoreBoard(colorA, colorB, alpha = 1) {

        const rgb1 = colors[colorA];
        const rgb2 = colors[colorB];
        if (!rgb1 || !rgb2) {
          throw new Error(`Unknown color name: ${colorA} or ${colorB}`);
        }

        return `linear-gradient(
                    to right, 
                    rgba(${rgb1[0]}, ${rgb1[1]}, ${rgb1[2]}, ${alpha}), 
                    black, 
                    black, 
                    rgba(${rgb2[0]}, ${rgb2[1]}, ${rgb2[2]}, ${alpha})
                )`;

    }

    function colorNameForSecondaryScoreTypePointsIndividualContainer(colorA, colorB, alpha = 1){
    
        const rgb1 = colors[colorA];
        const rgb2 = colors[colorB];
        if (!rgb1 || !rgb2) {
            throw new Error(`Unknown color name: ${colorA} or ${colorB}`);
        }

        /* The values multiplied with the new color are derived from the master color. 
        The backdrop colors serve as the base color. 
        For instance, when examining the master color and comparing it with the background-color of the 
        SecondaryScoreTypePointsIndividualContainer, differences in their RGB values become apparent. 
        The factors of these RGB values are then multiplied with the new color. */

        let rgba1 = `rgba(${rgb1[0]*1.1}, ${rgb1[1]*1}, ${rgb1[2]*1.08}, ${alpha})`;
        let rgba2 = `rgba(${rgb2[0]*0.96}, ${rgb2[1]*1.224}, ${rgb2[2]*1.223}, ${alpha})`;

        return `linear-gradient(
                to right, 
                ${rgba1}, 
                transparent 40%, 
                transparent 60%, 
                ${rgba2}
            )`;
                
    }

    function colorNameForTeamABackdrop(colorA, colorB, alpha = 1){

        const rgb = colors[colorA];
        if (!rgb) {
          throw new Error(`Unknown color name: ${colorA}`);
        }

        return `linear-gradient(
                to right, 
                rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, ${alpha}), 
                transparent
            )`;

    }

    function colorNameForTeamALogoContainer(colorA, alpha = 1){
    
        const rgb = colors[colorA];
        if (!rgb) {
            throw new Error(`Unknown color name: ${colorA}`);
        }

        let rgba = `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, ${alpha})`;

        return `${rgba}`;

    }

    function colorNameForTeamBBackdrop(colorB, alpha = 1){

        const rgb = colors[colorB];
        if (!rgb) {
          throw new Error(`Unknown color name: ${colorB}`);
        }

        return `linear-gradient(
                to left, 
                rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, ${alpha}), 
                transparent
            )`;

    }

    function colorNameForTeamBLogoContainer(colorB, alpha = 1){
    
        const rgb = colors[colorB];
        if (!rgb) {
            throw new Error(`Unknown color name: ${colorB}`);
        }

        let rgba = `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, ${alpha})`

        return `${rgba}`;

    }

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
                        5
                    </Typography>
                    <Typography 
                        id="primaryScoreTypeNameTypography"
                        style={{
                            ...tournamentData.style.CONFIGPrimaryScoreTypePoints.name,
                            fontSize: `${CONFIGPrimaryScoreTypePoints.name.fontSizeRatio}vw`
                        }}
                    >
                        GOALS
                    </Typography>
                    <Typography
                        id="teamBPrimaryScoreTypePointsTypography" 
                        style={{
                            ...tournamentData.style.CONFIGPrimaryScoreTypePoints.teamBPoints,
                            fontSize: `${CONFIGPrimaryScoreTypePoints.teamBPoints.fontSizeRatio}vw`
                        }}
                    >
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
                            20
                        </Typography>
                        <Typography 
                            id="secondaryScoreTypeOnePointsNameTypography" 
                            style={{
                                ...tournamentData.style.CONFIGSecondaryScoreTypePointsIndividual.pointsTypography,
                                fontSize: `${tournamentData.style.CONFIGSecondaryScoreTypePointsIndividual.pointsTypography.fontSizeRatio}vw`
                            }}
                        >
                            SHOTS
                        </Typography>
                        <Typography 
                            id="teamBSecondaryScoreTypeOnePointsValueTypography" 
                            style={{
                                ...tournamentData.style.CONFIGSecondaryScoreTypePointsIndividual.teamBPoints,
                                fontSize: `${tournamentData.style.CONFIGSecondaryScoreTypePointsIndividual.teamBPoints.fontSizeRatio}vw`
                            }}
                        >
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
                            15
                        </Typography>
                        <Typography 
                            id="secondaryScoreTypeTwoPointsNameTypography" 
                            style={{
                                ...tournamentData.style.CONFIGSecondaryScoreTypePointsIndividual.pointsTypography,
                                fontSize: `${tournamentData.style.CONFIGSecondaryScoreTypePointsIndividual.pointsTypography.fontSizeRatio}vw`
                            }}
                        >
                            SHOTS ON TARGET
                        </Typography>
                        <Typography 
                            id="teamBSecondaryScoreTypeTwoPointsValueTypography" 
                            style={{
                                ...tournamentData.style.CONFIGSecondaryScoreTypePointsIndividual.teamBPoints,
                                fontSize: `${tournamentData.style.CONFIGSecondaryScoreTypePointsIndividual.teamBPoints.fontSizeRatio}vw`
                            }}
                        >
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
                            5
                        </Typography>
                        <Typography 
                            id="secondaryScoreTypeThreePointsNameTypography" 
                            style={{
                                ...tournamentData.style.CONFIGSecondaryScoreTypePointsIndividual.pointsTypography,
								fontSize: `${tournamentData.style.CONFIGSecondaryScoreTypePointsIndividual.pointsTypography.fontSizeRatio}vw`
                            }}
                        >
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
                            10
                        </Typography>
                        <Typography 
                            id="secondaryScoreTypeFourPointsNameTypography" 
                            style={{
                                ...tournamentData.style.CONFIGSecondaryScoreTypePointsIndividual.pointsTypography,
								fontSize: `${tournamentData.style.CONFIGSecondaryScoreTypePointsIndividual.pointsTypography.fontSizeRatio}vw`
                            }}
                        >
                            SAVES
                        </Typography>
                        <Typography 
                            id="teamBSecondaryScoreTypeFourPointsValueTypography" 
                            style={{
                                ...tournamentData.style.CONFIGSecondaryScoreTypePointsIndividual.teamBPoints,
								fontSize: `${tournamentData.style.CONFIGSecondaryScoreTypePointsIndividual.teamBPoints.fontSizeRatio}vw`
                            }}
                        >
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
                            55%
                        </Typography>
                        <Typography 
                            id="secondaryScoreTypeFivePointsNameTypography" 
                            style={{
                                ...tournamentData.style.CONFIGSecondaryScoreTypePointsIndividual.pointsTypography,
								fontSize: `${tournamentData.style.CONFIGSecondaryScoreTypePointsIndividual.pointsTypography.fontSizeRatio}vw`
                            }}
                        >
                            POSSESSION
                        </Typography>
                        <Typography 
                            id="teamBSecondaryScoreTypeFivePointsValueTypography" 
                            style={{
                                ...tournamentData.style.CONFIGSecondaryScoreTypePointsIndividual.teamBPoints,
								fontSize: `${tournamentData.style.CONFIGSecondaryScoreTypePointsIndividual.teamBPoints.fontSizeRatio}vw`
                            }}
                        >
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
                            3
                        </Typography>
                        <Typography 
                            id="secondaryScoreTypeSixPointsNameTypography" 
                            style={{                                
                                ...tournamentData.style.CONFIGSecondaryScoreTypePointsIndividual.pointsTypography,
                                fontSize: `${tournamentData.style.CONFIGSecondaryScoreTypePointsIndividual.pointsTypography.fontSizeRatio}vw`
                            }}
                        >
                            YELLOW CARDS
                        </Typography>
                        <Typography 
                            id="teamBSecondaryScoreTypeSixPointsValueTypography" 
                            style={{
                                ...tournamentData.style.CONFIGSecondaryScoreTypePointsIndividual.teamBPoints,
								fontSize: `${tournamentData.style.CONFIGSecondaryScoreTypePointsIndividual.teamBPoints.fontSizeRatio}vw`
                            }}
                        >
                            5
                        </Typography>
                    </Box>
                </Box>
                {/* left narrow empty container (located at left side of the scoreboard) */}
                <Box 
                    id="leftNarrowEmptyContainer"
                    style={{
                        ...tournamentData.style.CONFIGScoreBoard.leftNarrowEmptyContainer,
                        marginTop: `${tournamentData.style.CONFIGScoreBoard.leftNarrowEmptyContainer.marginTopRatio}vh`,
                        borderRadius: `${tournamentData.style.CONFIGScoreBoard.leftNarrowEmptyContainer.borderRadiusRatio}vh`
                    }}
                >
                </Box>
                {/* right narrow empty container (located at right side of the scoreboard) */}
                <Box 
                    id="rightNarrowEmptyContainer"
                    style={{
                        ...tournamentData.style.CONFIGScoreBoard.rightNarrowEmptyContainer,
                        marginTop: `${tournamentData.style.CONFIGScoreBoard.rightNarrowEmptyContainer.marginTopRatio}vh`,
                        borderRadius: `${tournamentData.style.CONFIGScoreBoard.leftNarrowEmptyContainer.borderRadiusRatio}vh`
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
                        ...tournamentData.style.CONFIGBestPlayerA.container
                    }}
                >
                    <img
                        id="bestPlayerATeamLogo" 
                        src="https://www.pngall.com/wp-content/uploads/12/Manchester-United-F.C.-Logo-PNG-Image.png"
                        style={{
                            ...tournamentData.style.CONFIGBestPlayerA.teamLogo
                        }}
                    >  
                    </img>
                    <img
                        id="bestPlayerAImage"
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
                            GOALS SCORED
                        </Typography>
                        <Typography
                            id="bestPlayerAPointsValueTypography"
                            style={{
                                ...tournamentData.style.CONFIGBestPlayerA.points.value,
                                fontSize: `${tournamentData.style.CONFIGBestPlayerA.points.value.fontSizeRatio}vw`
                            }}
                        >
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
                            SHOTS BLOCKED
                        </Typography>
                        <Typography
                            id="bestPlayerBPointsValueTypography" 
                            style={{
                                ...tournamentData.style.CONFIGBestPlayerB.points.value,
                                fontSize: `${tournamentData.style.CONFIGBestPlayerB.points.value.fontSizeRatio}vw`
                            }}
                        >
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
                        src="https://www.footyrenders.com/render/lisandro-martinez-4-303x540.png"
                        style={{
                            ...tournamentData.style.CONFIGBestPlayerB.playerImage
                        }}
                    >
                    </img>
                    <img
                        id="bestPlayerBTeamLogo" 
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
