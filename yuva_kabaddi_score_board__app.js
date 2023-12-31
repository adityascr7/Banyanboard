import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect, useCallback } from 'react';
function App() {

    // To remove the default margin and scrolls in the body
	useEffect(() => {

		document.body.style.margin = "0";
		document.body.style.overflow = "hidden";

	},[])

    return ( 
        <div 
            id="mainContainer" 
            style={{
                backgroundImage: "url('https://thumbs.dreamstime.com/b/full-stadium-neoned-colorful-flashlights-background-full-stadium-neoned-colorful-flashlights-background-flyer-197148262.jpg')",
                backgroundSize: "cover",
                height: "100vh",
                overflow: "hidden",
                width: "100wh",
            }}
        >
            <div 
                id="matchSummaryAndScoreCardContainer"
                style={{
                    alignItems: "center",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    rowGap: "0vh",
                }}
            > 
                
                <div 
                    id="matchSummaryContainer"
                    style={{
                        alignItems: "center",
                        background: "linear-gradient(to right,rgba(200, 2, 101, 0.8),rgba(0, 0, 0, 0.9),rgba(0, 0, 0, 0.9),rgba(100, 211, 255, 0.8))",
                        border: "1px solid white",
                        display: "flex",
                        height: "13.7vh",
                        justifyContent: "center",
                        transform: "perspective(43.92vw) rotateX(-45deg)",
                        width: "51.1vw",
                    }}
                >
                    <h1 
                        id="matchSummaryText"
                        style={{
                            color: "rgb(252, 252, 252)",
                            fontFamily:'Anton',
                            fontSize: "2.93vw",
                            fontWeight: "200",
                            marginTop: "3.04vh",
                            transform: "perspective(43.92vw) rotateX(33deg) scaleY(1.2) scaleX(0.9)",
                            textShadow: "0px 0px 10px rgb(35, 193, 255)",
                        }}
                    >
                        MATCH SUMMARY
                    </h1>
                </div>   
                <div 
                    id="scoreBoardAndLogoContainer"
                    style={{
                        alignItems: "center",
                        display: "flex",
                        flexDirection: "row",
                    }}
                >
                    <div 
                        id="scoreBoardContainer"
                        style={{
                            width: "47.6vw",
                            height: "73.8vh",
                            display: "flex",
                            alignItems: "center",
                            flexDirection: "column",
                            gap: "2.28vh",
                            borderLeft: "0.44vw solid rgb(179, 0, 89)",
                            borderRight: "0.44vw solid rgb(71, 149, 180)",
                            marginTop: "-0.76vh",
                            background: "linear-gradient(to right,rgba(200, 2, 101, 0.8),rgb(0, 0, 0),rgb(0, 0, 0),rgba(100, 211, 255, 0.8))",
                            boxShadow: "0px 0px 3px white",
                        }}
                    >
                        <div 
                            id="top" 
                            style={{
                                alignItems: "center",
                                display: "flex",
                                flexDirection: "row",
                                gap: "2.9vw",
                                marginTop: "10.5vh",
                                position: "absolute",
                            }}
                        >
                            <span 
                                id="topSpan1"
                                style={{
                                    background: "linear-gradient(to right, rgb(160, 0, 80), transparent)",
                                    color: "white",
                                    fontSize: "0.95vw",
                                    fontWeight: "600",
                                    fontFamily: "'Audiowide'",
                                    height: "6.08vh",
                                    paddingTop: "2.59vh",
                                    paddingBottom: "40.49vh",
                                    textAlign: "center",
                                    transform: "scaleY(1.5)",
                                    width: "11vw",
                                }}
                            >
                                PALANI TUSKERS
                            </span>
                            <span 
                                id="topSpan2"
                                style={{
                                    color: "white",
                                    fontFamily: "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif",
                                    fontSize: "1.32vw",
                                    fontWeight: "600",
                                    height: "6.08vh",
                                    paddingTop: "2.59vh",
                                    paddingBottom: "44vh",
                                    transform: "scaleY(1.4)",
                                    textAlign: "center",
                                    width: "13.2vw",
                                }}
                            >
                                MATCH 7
                            </span>
                            <span 
                                id="topSpan3"
                                style={{
                                    background: "linear-gradient(to left, rgb(63, 133, 160), transparent)",
                                    color: "white",
                                    fontFamily: "Audiowide",
                                    fontSize: "0.95vw",
                                    fontWeight: "600",
                                    paddingTop: "2.59vh",
                                    paddingBottom: "40.49vh",
                                    height: "6.08vh",
                                    textAlign: "center",
                                    transform: "scaleY(1.5)",
                                    width: "11vw",
                                }}
                            >
                                NILGIRI KNIGHTS
                            </span>
                        </div>
                        <div 
                            id="fullTime" 
                            style={{
                                alignItems: "center",
                                borderRadius: "5px",
                                background: "linear-gradient(to bottom, #f7f7f7,rgb(170, 170, 170),#f7f7f7)",
                                display: "flex",
                                gap: "2.34vw",
                                height: "9.13vh",
                                justifyContent: "center",
                                marginTop: "11.87vh",
                                outline: "3px solid rgb(156, 156, 156)",
                                width: "44vw",
                                zIndex: "50",
                            }}
                        >
                            <span 
                                id="fullTimeSpan1"
                                style={{
                                    alignItems: "center",
                                    background: "linear-gradient(to bottom, rgb(200, 2, 100),rgb(126, 0, 63) 80%)",
                                    color: "white",
                                    display: "flex",
                                    fontSize: "3.85vw",
                                    fontFamily: "'Bebas Neue'",
                                    fontWeight: "600",
                                    height: "10vh",
                                    justifyContent: "center",
                                    width: "11vw",
                                    zIndex: "100",
                                }}
                            >
                                30
                            </span>
                            <span 
                                style={{
                                    color: "black",
                                    fontSize: "2.4vw",
                                    fontFamily: "'Bebas Neue'",
                                    fontWeight: "600",
                                    transform: "scaleX(1.2)",
                                    textAlign: "center",
                                    width: "14.6vw",
                                }}
                            >
                                FULL TIME
                            </span>
                            <span 
                                style={{
                                    alignItems: "center",
                                    background: "linear-gradient(to bottom, rgb(100, 211, 255),rgb(49, 103, 124) 80%)",
                                    color: "white",
                                    display: "flex",
                                    fontFamily: "'Bebas Neue'",
                                    fontSize: "3.85vw",
                                    fontWeight: "600",
                                    height: "10vh",
                                    justifyContent: "center",
                                    width: "11vw",
                                    zIndex: "100",
                                }}
                            >
                                18
                            </span>
                        </div>
                        <div 
                            id="raidPoints"
                            style={{
                                alignItems: "center",
                                background: "linear-gradient(to right, rgba(200, 2, 101, 0.8),transparent 40%,transparent 60%,rgba(100, 211, 255, 0.8) 100%)",
                                borderRadius: "40px",
                                display: "flex",
                                flexDirection: "row",
                                gap: "3.07vw",
                                height: "6.1vh",
                                justifyContent: "center",
                                width: "44.6vw",
                                zIndex: "50",
                            }}
                        >
                            <span 
                                id="palaniTuskersRaidPoints" 
                                style={{
                                    alignItems: "center",
                                    background: "linear-gradient(to bottom, rgb(200, 2, 100),rgb(126, 0, 63) 80%)",
                                    color: "white",
                                    display: "flex",
                                    fontFamily: "'Bebas Neue'", 
                                    fontWeight: "600",
                                    fontSize: "2.26vw",
                                    height: "6.1vh",
                                    justifyContent: "center",
                                    width: "11vw",
                                }}
                            >
                                16
                            </span>
                            <span 
                                id="raidPoints_" 
                                style={{
                                    color: "white",
                                    fontFamily: "'Audiowide'",
                                    fontSize: "1.25vw",
                                    fontWeight: "600",
                                    transform: "scaleY(1.3)",
                                    textAlign: "center",
                                    width: "13.2vw",
                                }}
                            >
                                RAID POINTS
                            </span>
                            <span 
                                id="nilgiriKnightsRaidPoints" 
                                style={{
                                    alignItems: "center",
                                    background: "linear-gradient(to bottom, rgb(100, 211, 255),rgb(49, 103, 124) 80%)",
                                    color: "white",
                                    display: "flex",
                                    fontFamily: "'Bebas Neue'", 
                                    fontWeight: "600",
                                    fontSize: "2.26vw",
                                    height: "6.1vh",
                                    justifyContent: "center",
                                    width: "11vw",
                                }}
                            >
                                11
                            </span>
                        </div>
                        <div 
                            id="tacklePoints"
                            style={{
                                alignItems: "center",
                                background: "linear-gradient(to right, rgba(200, 2, 101, 0.8),transparent 40%,transparent 60%,rgba(100, 211, 255, 0.8) 100%)",
                                borderRadius: "40px",
                                display: "flex",
                                flexDirection: "row",
                                gap: "3.07vw",
                                height: "6.1vh",
                                justifyContent: "center",
                                width: "44.6vw",
                                zIndex: 50,
                            }}
                        >
                            <span 
                                id="palani-tuskers-tackle-points" 
                                style={{
                                    alignItems: "center",
                                    background: "linear-gradient(to bottom, rgb(200, 2, 100),rgb(126, 0, 63) 80%)",
                                    color: "white",
                                    display: "flex",
                                    fontFamily: "'Bebas Neue'", 
                                    fontWeight: "600",
                                    fontSize: "2.26vw",
                                    height: "6.1vh",
                                    justifyContent: "center",
                                    width: "11vw",
                                }}
                            >
                                11
                            </span>
                            <span 
                                id="tacklePoints" 
                                style={{
                                    color: "white",
                                    fontFamily: "'Audiowide'",
                                    fontSize: "1.25vw",
                                    fontWeight: "600",
                                    transform: "scaleY(1.3)",
                                    textAlign: "center",
                                    width: "13.2vw",
                                }}
                            >
                                TACKLE POINTS
                            </span>
                            <span 
                                id="nilgiriKnightsTacklePoints" 
                                style={{
                                    alignItems: "center",
                                    background: "linear-gradient(to bottom, rgb(100, 211, 255),rgb(49, 103, 124) 80%)",
                                    color: "white",
                                    display: "flex",
                                    fontFamily: "'Bebas Neue'", 
                                    fontWeight: "600",
                                    fontSize: "2.26vw",
                                    height: "6.1vh",
                                    justifyContent: "center",
                                    width: "11vw",
                                }}
                            >
                                7
                            </span>
                        </div>
                        <div 
                            id="allOutPoints"
                            style={{
                                alignItems: "center",
                                background: "linear-gradient(to right,rgba(200, 2, 101, 0.8),transparent 40%,transparent 60%,rgba(100, 211, 255, 0.8) 100%)",
                                borderRadius: "40px",
                                display: "flex",
                                flexDirection: "row",
                                gap: "3.07vw",
                                height: "6.1vh",
                                justifyContent: "center",
                                width: "44.6vw",
                                zIndex: "50",
                            }}
                        >
                            <span 
                                id="palaniTuskersAllOutPoints" 
                                style={{
                                    alignItems: "center",
                                    background: "linear-gradient(to bottom, rgb(200, 2, 100),rgb(126, 0, 63) 80%)",
                                    color: "white",
                                    display: "flex",
                                    fontFamily: "'Bebas Neue'", 
                                    fontWeight: "600",
                                    fontSize: "2.26vw",
                                    height: "6.1vh",
                                    justifyContent: "center",
                                    width: "11vw",
                                }}
                            >
                                2
                            </span>
                            <span 
                                id="tacklePoints" 
                                style={{
                                    color: "white",
                                    fontFamily: "'Audiowide'",
                                    fontSize: "1.25vw",
                                    fontWeight: "600",
                                    transform: "scaleY(1.3)",
                                    textAlign: "center",
                                    width: "13.2vw",
                                }}
                            >
                                ALL OUT POINTS
                            </span>
                            <span 
                                id="nilgiriKnightsTacklePoints" 
                                style={{
                                    alignItems: "center",
                                    background: "linear-gradient(to bottom, rgb(100, 211, 255),rgb(49, 103, 124) 80%)",
                                    display: "flex",
                                    color: "white",
                                    fontFamily: "'Bebas Neue'", 
                                    fontWeight: "600",
                                    fontSize: "2.26vw",
                                    height: "6.1vh",
                                    justifyContent: "center",
                                    width: "11vw",
                                }}
                            >
                                0
                            </span>
                        </div>
                        <div 
                            id="extras"
                            style={{
                                alignItems: "center",
                                background: "linear-gradient(to right, rgba(200, 2, 101, 0.8),transparent 40%,transparent 60%,rgba(100, 211, 255, 0.8) 100%)",
                                borderRadius: "40px",
                                display: "flex",
                                flexDirection: "row",
                                gap: "3.07vw",
                                height: "6.1vh",
                                justifyContent: "center",
                                width: "44.6vw",
                                zIndex: "50",
                            }}
                        >
                            <span 
                                id="palaniTuskersExtras" 
                                style={{
                                    alignItems: "center",
                                    background: "linear-gradient(to bottom, rgb(200, 2, 100),rgb(126, 0, 63) 80%)",
                                    color: "white",
                                    display: "flex",
                                    fontFamily: "'Bebas Neue'", 
                                    fontWeight: "600",
                                    fontSize: "2.26vw",
                                    height: "6.1vh",
                                    justifyContent: "center",
                                    width: "11vw",
                                }}
                            >
                                1
                            </span>
                            <span 
                                id="extras_" 
                                style={{
                                    color: "white",
                                    fontFamily: "'Audiowide'",
                                    fontSize: "1.25vw",
                                    fontWeight: "600",
                                    transform: "scaleY(1.3)",
                                    textAlign: "center",
                                    width: "13.2vw",
                                }}
                            >
                                EXTRAS
                            </span>
                            <span 
                                id="nilgiriKnightsExras_" 
                                style={{
                                    alignItems: "center",
                                    background: "linear-gradient(to bottom, rgb(100, 211, 255),rgb(49, 103, 124) 80%)",
                                    color: "white",
                                    display: "flex",
                                    fontFamily: "'Bebas Neue'", 
                                    fontWeight: "600",
                                    fontSize: "2.26vw",
                                    height: "6.1vh",
                                    justifyContent: "center",
                                    width: "11vw",
                                }}
                            >
                                0
                            </span>
                        </div>
                        <div 
                            id="superRaids"
                            style={{
                                alignItems: "center",
                                background: "linear-gradient(to right, rgba(200, 2, 101, 0.8),transparent 40%,transparent 60%,rgba(100, 211, 255, 0.8) 100%)",
                                borderRadius: "40px",
                                display: "flex",
                                flexDirection: "row",
                                gap: "3.07vw",
                                height: "6.1vh",
                                justifyContent: "center",
                                width: "44.6vw",
                                zIndex: "50",
                            }}
                        >
                            <span 
                                id="palaniTuskersSuperRaids" 
                                style={{
                                    alignItems: "center",
                                    background: "linear-gradient(to bottom, rgb(200, 2, 100),rgb(126, 0, 63) 80%)",
                                    color: "white",
                                    display: "flex",
                                    fontFamily: "'Bebas Neue'", 
                                    fontWeight: "600",
                                    fontSize: "2.26vw",
                                    height: "6.1vh",
                                    justifyContent: "center",
                                    width: "11vw",
                                }}
                            >
                                0
                            </span>
                            <span 
                                id="superRaids_" 
                                style={{
                                    color: "white",
                                    fontFamily: "'Audiowide'",
                                    fontSize: "1.25vw",
                                    fontWeight: "600",
                                    transform: "scaleY(1.3)",
                                    textAlign: "center",
                                    width: "13.2vw",
                                }}
                            >
                                SUPER RAIDS
                            </span>
                            <span 
                                id="nilgiriKnightsSuperRaids" 
                                style={{
                                    alignItems: "center",
                                    background: "linear-gradient(to bottom, rgb(100, 211, 255),rgb(49, 103, 124) 80%)",
                                    color: "white",
                                    display: "flex",
                                    fontFamily: "'Bebas Neue'", 
                                    fontWeight: "600",
                                    fontSize: "2.26vw",
                                    height: "6.1vh",
                                    justifyContent: "center",
                                    width: "11vw",
                                }}
                            >
                                1
                            </span>
                        </div>
                        <div 
                            id="superTackles"
                            style={{
                                alignItems: "center",
                                background: "linear-gradient(to right, rgba(200, 2, 101, 0.8),transparent 40%,transparent 60%,rgba(100, 211, 255, 0.8) 100%)",
                                borderRadius: "40px",
                                display: "flex",
                                flexDirection: "row",
                                gap: "3.07vw",
                                height: "6.1vh",
                                justifyContent: "center",
                                width: "44.6vw",
                                zIndex: "50",
                            }}
                        >
                            <span 
                                id="palaniTuskersSuperRaids" 
                                style={{
                                    alignItems: "center",
                                    background: "linear-gradient(to bottom, rgb(200, 2, 100),rgb(126, 0, 63) 80%)",
                                    color: "white",
                                    display: "flex",
                                    fontFamily: "'Bebas Neue'", 
                                    fontWeight: "600",
                                    fontSize: "2.26vw",
                                    height: "6.1vh",
                                    justifyContent: "center",
                                    width: "11vw",
                                }}
                            >
                                1
                            </span>
                            <span 
                                id="superRaids_" 
                                style={{
                                    color: "white",
                                    fontFamily: "'Audiowide'",
                                    fontSize: "1.25vw",
                                    fontWeight: "600",
                                    transform: "scaleY(1.3)",
                                    textAlign: "center",
                                    width: "13.2vw",
                                }}
                            >
                                SUPER TACKLES
                            </span>
                            <span 
                                id="nilgiriKnightsSuperRaids" 
                                style={{
                                    alignItems: "center",
                                    background: "linear-gradient(to bottom, rgb(100, 211, 255),rgb(49, 103, 124) 80%)",
                                    color: "white",
                                    display: "flex",
                                    fontFamily: "'Bebas Neue'", 
                                    fontWeight: "600",
                                    fontSize: "2.26vw",
                                    height: "6.1vh",
                                    justifyContent: "center",
                                    width: "11vw",
                                }}
                            >
                                0
                            </span>
                        </div>
                    </div>
                </div>
                <div 
                    class="logoContainers"
                    style={{
                        alignItems: "center",
                        display: "flex",
                        gap: "31vw",
                        justifyContent: "center",
                        marginTop: "13.1vh",
                        position: "absolute",
                        zIndex: "100",
                    }}
                >
                    <div 
                        id="palaniTuskersLogoContainer"
                        style={{
                            alignItems: "center",
                            backgroundColor: "rgba(160, 0, 80, 0.5)",
                            display: "flex",
                            height: "93.8vh",
                            justifyContent: "center",
                            transform: "perspective(43.92vw) rotateY(45deg)",
                            width: "38vw",
                        }}
                    >
                        <img 
                            id="palaniTuskersLogo" 
                            src="https://feed.yuvakabaddi.com/YKS-2022-SE/teamLogos/569.png"
                            style={{
                                height: "48.71vh",
                                transform:"perspective(900px) rotateY(-45deg) scaleX(1.5)",
                            }}
                        ></img>
                    </div>
                    <div 
                        id="nilgiriKnightsLogoContainer"
                        style={{
                            alignItems: "center",
                            backgroundColor: "rgba(63, 132, 160, 0.5)",
                            display: "flex",
                            height: "93.8vh",
                            justifyContent: "center",
                            transform: "perspective(43.92vw) rotateY(-45deg)",
                            width: "38vw",
                        }}
                    >
                        <img 
                            id="nilgiriKnightsLogo"
                            src="https://www.bullscore.com/feature_img_cron/logos/kabaddi/151.png"
                            style={{
                                height: "48.71vh",
                                transform:"perspective(900px) rotateY(45deg) scaleX(1.5)",
                            }}
                        ></img>
                    </div>
                </div>
            </div>
            <div 
                id="bestPlayerContainer"
                style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "19vw",
                    justifyContent: "center",
                }}
            >
                <div 
                    id="palaniTuskersBestPlayerMainContainer"
                    style={{
                        alignItems: "center",
                        display: "flex",
                        flexDirection: "row",
                        gap: "0.37vw",
                    }}
                >
                    <div 
                        id="palaniTuskersBestPlayerSubContainer"
                        style={{
                            width: "18.3vw",
                            height: "9.13vh",
                            zIndex: "200",
                            borderLeft: "50px solid rgb(224, 224, 224)",
                            marginTop: "3.04vh",
                            backgroundColor: "rgb(126, 0, 63)",
                            transform: "skewX(20deg)",
                        }}
                    >
                        <div 
                            id="palaniTuskersBestPlayerAndLogoContainer"
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "left",
                            }}
                        >
                            <img  
                                src="https://feed.yuvakabaddi.com/YKS-2022-SE/teamLogos/569.png"
                                style={{
                                    height: "11.41vh",
                                    marginLeft: "-6.22vw",
                                    position: "absolute",
                                }}
                            >  
                            </img>
                            <img 
                                src="https://static.yuvakabaddi.com/images/player-images/6618.png"
                                style={{
                                    height: "12.2vh",
                                    marginLeft: "0.73vw", 
                                    marginTop: "-3.04vh", 
                                    transform: "skew(-20deg)",
                                    position: "absolute", 
                                }}
                            >
                            </img>
                            <span 
                                id="palaniTuskersPlayerName"
                                style={{
                                    color: "white",
                                    fontFamily: "'Oswald'",
                                    fontSize: "1.1vw",
                                    fontWeight: "400",
                                    marginLeft: "8.04vw",
                                    marginTop: "0.46vh",
                                    transform: "skew(-20deg)",
                                }}
                            >
                                S.MUKESHKANNAN
                            </span>
                        </div>
                        <div
                            id="bestRaiderTextContainer"
                            style={{
                                alignItems: "center",
                                backgroundColor: "black",
                                color: "white",
                                display: "flex",
                                float: "left",
                                fontFamily: "'Oswald'",
                                fontSize: "1.1vw",
                                height: "4.6vh",
                                justifyContent: "right",
                                marginTop: "0.76vh",
                                paddingRight: "1.46vw",
                                width: "13.18vw",
                            }}
                        >
                            <span 
                                id="bestRaiderText"
                                style={{
                                    transform: "skew(-20deg)",
                                }}
                            >
                                BEST RAIDER
                            </span>
                        </div>
                    </div>
                    <div 
                        id="palaniTuskersPointsContainer"
                        style={{
                            alignItems: "center",
                            backgroundColor: "rgb(126, 0, 63)",
                            borderRight: "0.22vw solid rgb(224, 224, 224)",
                            color: "white",
                            display: "flex",
                            flexDirection: "column",
                            fontFamily: "'Oswald'",
                            fontSize: "1.1vw",
                            fontWeight: "400",
                            gap: "0.3vh",
                            height: "9.13vh",
                            justifyContent: "center",
                            marginTop: "3.04vh",
                            transform: "skewX(20deg)",
                            textAlign: "center",
                            width: "7.32vw",
                        }}
                    >
                        <span 
                            id="palaniTuskersPointsText"
                            style={{
                                transform: "skewX(-20deg)",
                            }}
                        >
                            RAID POINTS
                        </span>
                        <span
                            id="palaniTuskersPointsValue" 
                            style={{
                                fontSize: "1.46vw",
                                transform: "skewX(-20deg)",
                            }}
                        >
                            4
                        </span>
                    </div>
                </div>
                <div 
                    id="nilgiriKnightPointsMainContainer"
                    style={{
                        alignItems: "center",
                        display: "flex",
                        flexDirection: "row",
                        gap: "0.37vw",
                    }}
                >
                    <div 
                        id="nilgiriKnightPointsSubContainer"
                        style={{
                            alignItems: "center",
                            backgroundColor: "rgb(49, 103, 124)",
                            borderLeft: "3px solid rgb(224, 224, 224)",
                            color: "white",
                            display: "flex",
                            flexDirection: "column",
                            fontFamily: "'Oswald'",
                            fontSize: "1.1vw",
                            fontWeight: "400",
                            gap: "0.3vh",
                            height: "9.13vh",
                            justifyContent: "center",
                            marginTop: "3.04vh",
                            transform: "skewX(-20deg)",
                            textAlign: "center",
                            width: "7.32vw",
                        }}
                    >
                        <span 
                            id="nilgiriKnightPointsText"
                            style={{
                                transform: "skewX(20deg)",
                            }}
                        >
                            TACKLE POINTS
                        </span>
                        <span
                            id="nilgiriKnightPointsValue" 
                            style={{
                                fontSize: "1.46vw",
                                transform: "skewX(20deg)",
                            }}
                        >
                            4
                        </span>
                    </div>
                    <div 
                        id="nilgiriKnightsBestPlayerMainContainer"
                        style={{
                            backgroundColor: "rgb(49, 103, 124)",
                            borderRight: "3.7vw solid rgb(224, 224, 224)",
                            height: "9.13vh",
                            marginTop: "3.04vh",
                            transform: "skewX(-20deg)",
                            width: "18.3vw",
                            zIndex: "200",
                        }}
                    >
                        <div 
                            id="nilgiriKnightsBestPlayerAndLogoContainer"
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "right",
                            }}
                        >
                            <span
                                id="nilgiriKnightsBestPlayerName"
                                style={{
                                    color: "white",
                                    fontFamily: "'Oswald'",
                                    fontSize: "1.1vw",
                                    fontWeight: "400",
                                    marginRight: "8.05vw",
                                    marginTop: "0.46vh",
                                    transform: "skew(20deg)",
                                }}
                            >
                                PURUSHOTHAMAN
                            </span>
                                <img  
                                    src="https://static.yuvakabaddi.com/images/player-images/6638.png"
                                    style={{
                                        height: "12.2vh",
                                        marginRight: "0.73vw", 
                                        marginTop: "-3.04vh", 
                                        transform: "skew(20deg)",
                                        position: "absolute", 
                                    }}
                                ></img>
                                <img  
                                    src="https://www.bullscore.com/feature_img_cron/logos/kabaddi/151.png"
                                    style={{
                                        height: "11.41vh",
                                        marginRight: "-6.22vw", 
                                        position: "absolute",
                                        transform: "skew(20deg)",
                                    }}
                                ></img>
                        </div>
                        <div
                            id="nilgiriKnightsBestDefenderContainer" 
                            style={{
                                alignItems: "center", 
                                backgroundColor: "black",
                                color: "white",
                                display: "flex",
                                float: "right",
                                fontFamily: "'Oswald'",
                                fontSize: "1.1vw",
                                height: "4.57vh",
                                marginTop: "0.76vh",
                                paddingLeft: "1.46vw",
                                width: "13.18vw",
                            }}
                        >
                            <span 
                                id="nilgiriKnightsBestDefenderText" 
                                style={{
                                    transform: "skew(20deg)",
                                }}
                            >
                                BEST DEFENDER
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
