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
                alignItems: "center",
                backgroundImage: "url('https://thumbs.dreamstime.com/b/full-stadium-neoned-colorful-flashlights-background-full-stadium-neoned-colorful-flashlights-background-flyer-197148262.jpg')",
                backgroundSize: "cover",
                display: "flex",
                flexDirection: "column",
                gap: "1vh",
                height: "100vh",
                justifyContent: "center",
                overflow: "hidden",
                width: "100vw",
            }}
        >
                <div 
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
                        marginTop: "1.2vh",
                        width: `${(736/1366)*100}vw`,
                    }}
                >
                    <h1 
                        id="matchSummaryText"
                        style={{
                            color: "rgb(252, 252, 252)",
                            fontFamily:'Oswald',
                            fontSize: "2.3vw",
                            fontWeight: "700",
                            textShadow: "0px 0px 10px rgb(35, 193, 255)",
                        }}
                    >
                        MATCH SUMMARY
                    </h1>
                </div>
                    <div 
                        id="scoreBoardContainer"
                        style={{
                            alignItems: "center",
                            background: "linear-gradient(to right,rgba(200, 2, 101, 0.8),rgb(0, 0, 0),rgb(0, 0, 0),rgba(46, 133, 142, 0.8))",
                            boxShadow: "0px 0px 3px white",
                            display: "flex",
                            flexDirection: "column",
                            gap: `${(18/768)*100}vh`,
                            height: "74%",
                            position: "relative",
                            width: `${(660/1366)*100}vw`,
                        }}
                    >
                        <div 
                            id="top" 
                            style={{
                                alignItems: "center",
                                display: "flex",
                                flexDirection: "row",
                                gap: `${(40/1366)*100}vw`,
                                marginTop: "10.6vh",
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
                                    height: `${(47/768)*100}vh`,
                                    paddingTop: "2.59vh",
                                    paddingBottom: "40.49vh",
                                    textAlign: "center",
                                    transform: "scaleY(1.5)",
                                    width: `${(150/1366)*100}vw`,
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
                                    height: `${(47/768)*100}vh`,
                                    paddingTop: "2.59vh",
                                    paddingBottom: "44vh",
                                    transform: "scaleY(1.4)",
                                    textAlign: "center",
                                    width: `${(180/1366)*100}vw`,
                                }}
                            >
                                MATCH 7
                            </span>
                            <span 
                                id="topSpan3"
                                style={{
                                    background: "linear-gradient(to left, #3caeaa, transparent)",
                                    color: "white",
                                    fontFamily: "Audiowide",
                                    fontSize: "0.95vw",
                                    fontWeight: "600",
                                    paddingTop: "2.59vh",
                                    paddingBottom: "40.49vh",
                                    height: `${(47/768)*100}vh`,
                                    textAlign: "center",
                                    transform: "scaleY(1.5)",
                                    width: `${(150/1366)*100}vw`,
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
                                height: `${(68/768)*100}vh`,
                                justifyContent: "center",
                                marginTop: "11.87vh",
                                outline: "3px solid rgb(156, 156, 156)",
                                width: `${(601/1366)*100}vw`,
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
                                    height: `${(75/768)*100}vh`,
                                    justifyContent: "center",
                                    width: `${(150/1366)*100}vw`,
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
                                    width: `${(200/1366)*100}vw`,
                                }}
                            >
                                FULL TIME
                            </span>
                            <span 
                                style={{
                                    alignItems: "center",
                                    background: "linear-gradient(to bottom, #3ad5d0,#268a8a 80%)",
                                    color: "white",
                                    display: "flex",
                                    fontFamily: "'Bebas Neue'",
                                    fontSize: "3.85vw",
                                    fontWeight: "600",
                                    height: `${(75/768)*100}vh`,
                                    justifyContent: "center",
                                    width: `${(150/1366)*100}vw`,
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
                                background: "linear-gradient(to right, rgba(200, 2, 101, 0.8),transparent 40%,transparent 60%,rgba(58, 213,208, 0.8) 100%)",
                                borderRadius: "40px",
                                display: "flex",
                                flexDirection: "row",
                                gap: "3.07vw",
                                height: `${(47/768)*100}vh`,
                                justifyContent: "center",
                                width: `${(609/1366)*100}vw`,
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
                                    height: `${(47/768)*100}vh`,
                                    justifyContent: "center",
                                    width: `${(150/1366)*100}vw`,
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
                                    width: `${(180/1366)*100}vw`,
                                }}
                            >
                                RAID POINTS
                            </span>
                            <span 
                                id="nilgiriKnightsRaidPoints" 
                                style={{
                                    alignItems: "center",
                                    background: "linear-gradient(to bottom, #3ad5d0,#268a8a 80%)",
                                    color: "white",
                                    display: "flex",
                                    fontFamily: "'Bebas Neue'", 
                                    fontWeight: "600",
                                    fontSize: "2.26vw",
                                    height: `${(47/768)*100}vh`,
                                    justifyContent: "center",
                                    width: `${(150/1366)*100}vw`
                                }}
                            >
                                11
                            </span>
                        </div>
                        <div 
                            id="tacklePoints"
                            style={{
                                alignItems: "center",
                                background: "linear-gradient(to right, rgba(200, 2, 101, 0.8),transparent 40%,transparent 60%,rgba(58, 213,208, 0.8) 100%)",
                                borderRadius: "40px",
                                display: "flex",
                                flexDirection: "row",
                                gap: "3.07vw",
                                height: `${(47/768)*100}vh`,
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
                                    height: `${(47/768)*100}vh`,
                                    justifyContent: "center",
                                    width: `${(150/1366)*100}vw`
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
                                    width: `${(180/1366)*100}vw`
                                }}
                            >
                                TACKLE POINTS
                            </span>
                            <span 
                                id="nilgiriKnightsTacklePoints" 
                                style={{
                                    alignItems: "center",
                                    background: "linear-gradient(to bottom, #3ad5d0,#268a8a 80%)",
                                    color: "white",
                                    display: "flex",
                                    fontFamily: "'Bebas Neue'", 
                                    fontWeight: "600",
                                    fontSize: "2.26vw",
                                    height: `${(47/768)*100}vh`,
                                    justifyContent: "center",
                                    width: `${(150/1366)*100}vw`
                                }}
                            >
                                7
                            </span>
                        </div>
                        <div 
                            id="allOutPoints"
                            style={{
                                alignItems: "center",
                                background: "linear-gradient(to right, rgba(200, 2, 101, 0.8),transparent 40%,transparent 60%,rgba(58, 213,208, 0.8) 100%)",
                                borderRadius: "40px",
                                display: "flex",
                                flexDirection: "row",
                                gap: "3.07vw",
                                height: `${(47/768)*100}vh`,
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
                                    height: `${(47/768)*100}vh`,
                                    justifyContent: "center",
                                    width: `${(150/1366)*100}vw`
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
                                    width: `${(180/1366)*100}vw`
                                }}
                            >
                                ALL OUT POINTS
                            </span>
                            <span 
                                id="nilgiriKnightsTacklePoints" 
                                style={{
                                    alignItems: "center",
                                    background: "linear-gradient(to bottom, #3ad5d0,#268a8a 80%)",
                                    display: "flex",
                                    color: "white",
                                    fontFamily: "'Bebas Neue'", 
                                    fontWeight: "600",
                                    fontSize: "2.26vw",
                                    height: `${(47/768)*100}vh`,
                                    justifyContent: "center",
                                    width: `${(150/1366)*100}vw`
                                }}
                            >
                                0
                            </span>
                        </div>
                        <div 
                            id="extras"
                            style={{
                                alignItems: "center",
                                background: "linear-gradient(to right, rgba(200, 2, 101, 0.8),transparent 40%,transparent 60%,rgba(58, 213,208, 0.8) 100%)",
                                borderRadius: "40px",
                                display: "flex",
                                flexDirection: "row",
                                gap: "3.07vw",
                                height: `${(47/768)*100}vh`,
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
                                    height: `${(47/768)*100}vh`,
                                    justifyContent: "center",
                                    width: `${(150/1366)*100}vw`
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
                                    width: `${(180/1366)*100}vw`
                                }}
                            >
                                EXTRAS
                            </span>
                            <span 
                                id="nilgiriKnightsExras_" 
                                style={{
                                    alignItems: "center",
                                    background: "linear-gradient(to bottom, #3ad5d0,#268a8a 80%)",
                                    color: "white",
                                    display: "flex",
                                    fontFamily: "'Bebas Neue'", 
                                    fontWeight: "600",
                                    fontSize: "2.26vw",
                                    height: `${(47/768)*100}vh`,
                                    justifyContent: "center",
                                    width: `${(150/1366)*100}vw`
                                }}
                            >
                                0
                            </span>
                        </div>
                        <div 
                            id="superRaids"
                            style={{
                                alignItems: "center",
                                background: "linear-gradient(to right, rgba(200, 2, 101, 0.8),transparent 40%,transparent 60%,rgba(58, 213,208, 0.8) 100%)",
                                borderRadius: "40px",
                                display: "flex",
                                flexDirection: "row",
                                gap: "3.07vw",
                                height: `${(47/768)*100}vh`,
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
                                    height: `${(47/768)*100}vh`,
                                    justifyContent: "center",
                                    width: `${(150/1366)*100}vw`
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
                                    width: `${(180/1366)*100}vw`
                                }}
                            >
                                SUPER RAIDS
                            </span>
                            <span 
                                id="nilgiriKnightsSuperRaids" 
                                style={{
                                    alignItems: "center",
                                    background: "linear-gradient(to bottom, #3ad5d0,#268a8a 80%)",
                                    color: "white",
                                    display: "flex",
                                    fontFamily: "'Bebas Neue'", 
                                    fontWeight: "600",
                                    fontSize: "2.26vw",
                                    height: `${(47/768)*100}vh`,
                                    justifyContent: "center",
                                    width: `${(150/1366)*100}vw`
                                }}
                            >
                                1
                            </span>
                        </div>
                        <div 
                            id="superTackles"
                            style={{
                                alignItems: "center",
                                background: "linear-gradient(to right, rgba(200, 2, 101, 0.8),transparent 40%,transparent 60%,rgba(58, 213,208, 0.8) 100%)",
                                borderRadius: "40px",
                                display: "flex",
                                flexDirection: "row",
                                gap: "3.07vw",
                                height: `${(47/768)*100}vh`,
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
                                    height: `${(47/768)*100}vh`,
                                    justifyContent: "center",
                                    width: `${(150/1366)*100}vw`
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
                                    width: `${(180/1366)*100}vw`
                                }}
                            >
                                SUPER TACKLES
                            </span>
                            <span 
                                id="nilgiriKnightsSuperRaids" 
                                style={{
                                    alignItems: "center",
                                    background: "linear-gradient(to bottom, #3ad5d0,#268a8a 80%)",
                                    color: "white",
                                    display: "flex",
                                    fontFamily: "'Bebas Neue'", 
                                    fontWeight: "600",
                                    fontSize: "2.26vw",
                                    height: `${(47/768)*100}vh`,
                                    justifyContent: "center",
                                    width: `${(150/1366)*100}vw`
                                }}
                            >
                                0
                            </span>
                        </div>
                        <div 
                            id="sideContainers"
                            style={{
                                alignItems: "center",
                                display: "flex",
                                flexDirection: "row",
                                gap: "96.5%",
                                height: "100%",
                                width: "100%",
                                justifyContent: "center",
                                position: "absolute",
                            }}
                        >
                            <div 
                                id="leftContainer"
                                style={{
                                    height: "99%",
                                    width: "0.8%",
                                    backgroundColor: "rgba(200, 2, 101, 0.8)",
                                    borderRadius: "10px",
                                }}
                            >
                            </div>
                            <div 
                                id="rightContainer"
                                style={{
                                    height: "99%",
                                    width: "0.8%",
                                    backgroundColor: "rgba(58, 213, 208, 0.8)",
                                    borderRadius: "10px",
                                }}
                            >
                            </div>
                        </div>
                    </div>
                <div 
                    class="logoContainers"
                    style={{
                        alignItems: "center",
                        display: "flex",
                        gap: `${(660/1366)*100}vw`,
                        justifyContent: "center",
                        position: "absolute",
                        zIndex: "100",
                    }}
                >
                    <div 
                        id="palaniTuskersLogoContainer"
                        style={{
                            alignItems: "center",
                            backgroundColor: "rgba(160, 0, 80, 0.5)",
                            clipPath: "polygon(100% 20%, 0% 0%, 0% 100%, 100% 80%)",
                            display: "flex",
                            height: "100vh",
                            justifyContent: "center",
                            width: "26vw",
                        }}
                    >
                        <img 
                            id="palaniTuskersLogo" 
                            src="https://feed.yuvakabaddi.com/YKS-2022-SE/teamLogos/569.png"
                            style={{
                                height: "40vh",
                            }}
                        ></img>
                    </div>
                    <div 
                        id="nilgiriKnightsLogoContainer"
                        style={{
                            alignItems: "center",
                            backgroundColor: "rgba(46, 133, 142, 0.5)",
                            clipPath: "polygon(100% 0%, 0% 20%, 0% 80%, 100% 100%)",
                            display: "flex",
                            height: "100vh",
                            justifyContent: "center",
                            width: "26vw",
                        }}
                    >
                        <img 
                            id="nilgiriKnightsLogo"
                            src="https://www.bullscore.com/feature_img_cron/logos/kabaddi/151.png"
                            style={{
                                height: "40vh",
                            }}
                        ></img>
                    </div>
                </div>
            <div 
                id="bestPlayerContainer"
                style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "19vw",
                    height: "12%",
                    justifyContent: "center",
                }}
            >
                <div 
                    id="palaniTuskersBestPlayerMainContainer"
                    style={{
                        alignItems: "center",
                        display: "flex",
                        flexDirection: "row",
                        gap: `${(5/1366)*100}vw`,
                    }}
                >
                    <div 
                        id="palaniTuskersBestPlayerSubContainer"
                        style={{
                            width: `${(250/1366)*100}vw`,
                            height: `${(70/768)*100}vh`,
                            zIndex: "200",
                            borderLeft: "50px solid rgb(224, 224, 224)",
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
                                position: "absolute",
                            }}
                        >
                            <img  
                                src="https://feed.yuvakabaddi.com/YKS-2022-SE/teamLogos/569.png"
                                style={{
                                    height: "11.41vh",
                                    marginLeft: "-6.22vw",
                                    transform: "skew(-20deg)",
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
                                    zIndex: "100",
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
                                marginTop: "4.5vh",
                                position: "absolute",
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
                            height: `${(70/768)*100}vh`,
                            justifyContent: "center",
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
                        gap: `${(5/1366)*100}vw`,
                    }}
                >
                    <div 
                        id="nilgiriKnightPointsSubContainer"
                        style={{
                            alignItems: "center",
                            backgroundColor: "rgb(46, 133, 142)",
                            borderLeft: "3px solid rgb(224, 224, 224)",
                            color: "white",
                            display: "flex",
                            flexDirection: "column",
                            fontFamily: "'Oswald'",
                            fontSize: "1.1vw",
                            fontWeight: "400",
                            gap: "0.3vh",
                            height: `${(70/768)*100}vh`,
                            justifyContent: "center",
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
                            backgroundColor: "rgb(46, 133, 142)",
                            borderRight: "3.7vw solid rgb(224, 224, 224)",
                            height: `${(70/768)*100}vh`,
                            transform: "skewX(-20deg)",
                            width: `${(250/1366)*100}vw`,
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
                                    position: "absolute",
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
                                marginTop: "4.5vh",
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
