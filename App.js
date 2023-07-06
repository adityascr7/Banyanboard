import logo from './logo.svg';
import './App.css';

function App() {
  	return (
		<div
			id="mainContainer"
			style={{
				alignItems: "center",
				backgroundImage: "url('https://preview.redd.it/narendra-modi-stadium-ahmedabad-v0-uhvr9f952ufa1.jpg?auto=webp&s=f4ac0c6b00b00c0f76cc9042e79767ba6b621cc1')",
				backgroundSize: "cover",
				display: "flex",
				flexDirection: "column",
				height: "100vh",
				justifyContent: "flex-start",
                overflow: "hidden",
				width: "100vw",
			}}
		>
			<div
				id="logoAndHeadingContainer"
				style={{
					alignItems: "center",
					color: "white",
					display: "flex",
					flexDirection: "column",
					gap: "8px",
					justifyContent: "center",
                    marginTop: "2px",
                }}
			>
                <img 
                    height="30px"
                    src="https://static.vecteezy.com/system/resources/thumbnails/023/654/784/small/golden-logo-template-free-png.png">
                </img>
				<span
					style={{
						fontFamily: "'Belanosima'",
						fontSize: "20px",
						fontWeight: "600",
						transform: "scaleX(1.4) scaleY(1.2)",
                    }}
				>
					1ST GARWARE CLUB HOUSE ALL INDIA SQUASH CHAMPIONSHIP
				</span>
				<span
					style={{
						fontFamily: "Arial, Helvetica, sans-serif",
                        fontSize: "12px",
                    }}
				>
					MUMBAI
				</span>
			</div>
			<div 
				id="courtsContainer"
				style={{
                    alignItems: "center",
					columnGap: "180px",
					display: "grid",
					gridTemplateColumns: "auto auto",
					justifyContent: "center",
					rowGap: "30px",
					width: "800px",
                    zoom: "0.85",
                }}
			>
				<div 
					id="court1"
					style={{
						alignItems: "center",
						display: "flex",
						flexDirection: "column",
						gap: "2px",
						justifyContent: "center",
                        zoom:"0.8",
                    }}
				>
                    <span 
                        id="court1Text"
                        style={{
                            color: "white",
                            fontFamily: "'Agdasima'",
                            fontSize: "26px",
                            fontWeight: 600,
                        }}
                    >
                        COURT 1
                    </span>
                    <div
                        id="court1Cover1"
                        style={{
                            alignItems: "center",
                            display: "flex",
                            flexDirection: "column",
                            gap: "0px",
                            justifyContent: "center",
                        }}
                    >
                        <div 
                            id="court1Top1"
                            style={{
                                alignItems: "center",
                                backgroundColor: "white",
                                display: "flex",
                                height: "30px",
                                justifyContent: "center",
                                transform: "perspective(130px) rotateX(20deg)",
                                width: "130px",
                            }}
                        >
                            <span
                                id="court1Top1Text"
                                style={{
                                    fontFamily: "'Agdasima'",
                                    fontSize: "12px",
                                    fontWeight: "600",
                                    transform: "perspective(80px) rotateX(-13deg) scaleY(1.4)",
                                }}
                            >
                                GU13-POSITION 01-04
                            </span>
                        </div>
                        <div 
                            id="court1time1"
                            style={{
                                backgroundColor: "rgb(255, 196, 0)",
                                transform: "perspective(80px) rotateX(50deg)",
                                position: "relative",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                zIndex: "100",
                                height: "55px",
                                width: "80px",
                                marginTop: "-20px",
                            }}
                        >
                            <span
                                style={{
                                    fontFamily: "'Agdasima'",
                                    fontWeight: "600",
                                    fontSize: "26px",
                                    transform: "perspective(80px) rotateX(-36deg) scaleY(1.7) scaleX(0.9)",
                                }}
                            >
                                9:00AM
                            </span>
                        </div>
                        <div
                            id="court1Bottom1"
                            style={{
                                alignItems: "center",
                                display: "flex",
                                flexDirection: "row",
                                gap: "65px",
                                marginTop: "19px",
                                position: "absolute",
                            }}
                        >
                            <div 
                                id="court1Bottom1Player1"
                                style={{
                                    alignItems: "center",
                                    backgroundColor: "white",
                                    boxShadow: "0px 0px 5px grey",
                                    display: "flex",
                                    height: "30px",
                                    justifyContent: "center",
                                    transform: "perspective(120px) rotateX(-20deg)",
                                    width: "140px",
                                }}
                            >
                                <span
                                    id="court1Bottom1Player1Text"
                                    style={{
                                        fontFamily: "'Agdasima'",
                                        fontWeight: "600",
                                        fontSize: "15px",
                                        transform: "perspective(80px) rotateX(23deg) scaleY(1.4)",
                                    }}
                                >
                                    PLAYER 1
                                </span>
                            </div>
                            <div 
                                id="court1Bottom1Player2"
                                style={{
                                    alignItems: "center",
                                    backgroundColor: "white",
                                    boxShadow: "0px 0px 5px grey",
                                    display: "flex",
                                    height: "30px",
                                    justifyContent: "center",
                                    transform: "perspective(120px) rotateX(-20deg)",
                                    width: "140px",
                                }}
                            >
                                <span
                                    id="court1Bottom1Player2Text"
                                    style={{
                                        fontFamily: "'Agdasima'",
                                        fontSize: "15px",
                                        fontWeight: "600",
                                        transform: "perspective(80px) rotateX(23deg) scaleY(1.4)",
                                    }}
                                >
                                    PLAYER 2
                                </span>
                            </div>
                        </div>
                    </div>
                    <div
                        id="court1cover2"
                        style={{
                            alignItems: "center",
                            display: "flex",
                            flexDirection: "column",
                            gap: "0px",
                            justifyContent: "center",
                        }}
                    >
                        <div 
                            id="court1top2"
                            style={{
                                alignItems: "center",
                                backgroundColor: "white",
                                display: "flex",
                                height: "30px",
                                justifyContent: "center",
                                transform: "perspective(130px) rotateX(20deg)",
                                width: "130px",
                            }}
                        >
                            <span
                                id="court1top2Text"
                                style={{
                                    fontFamily: "'Agdasima'",
                                    fontSize: "12px",
                                    fontWeight: "600",
                                    transform: "perspective(80px) rotateX(-13deg) scaleY(1.4)",
                                }}
                            >
                                GU13-POSITION 01-04
                            </span>
                        </div>
                        <div 
                            id="court1time2"
                            style={{
                                backgroundColor: "rgb(255, 196, 0)",
                                transform: "perspective(80px) rotateX(50deg)",
                                position: "relative",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                zIndex: "100",
                                height: "55px",
                                width: "80px",
                                marginTop: "-20px",
                            }}
                        >
                            <span
                                id="court1Time2Text"
                                style={{
                                    fontFamily: "'Agdasima'",
                                    fontWeight: "600",
                                    fontSize: "26px",
                                    transform: "perspective(80px) rotateX(-36deg) scaleY(1.7) scaleX(0.9)",
                                }}
                            >
                                9:30AM
                            </span>
                        </div>
                        <div
                            id="court1bottom2"
                            style={{
                                alignItems: "center",
                                display: "flex",
                                flexDirection: "row",
                                gap: "65px",
                                marginTop: "19px",
                                position: "absolute",
                            }}
                        >
                            <div 
                                id="court1Bottom2player3"
                                style={{
                                    alignItems: "center",
                                    backgroundColor: "white",
                                    boxShadow: "0px 0px 5px grey",
                                    display: "flex",
                                    height: "30px",
                                    justifyContent: "center",
                                    transform: "perspective(120px) rotateX(-20deg)",
                                    width: "140px",
                                }}
                            >
                                <span
                                    id="court1Bottom2player3text"
                                    style={{
                                        fontFamily: "'Agdasima'",
                                        fontWeight: "600",
                                        fontSize: "15px",
                                        transform: "perspective(80px) rotateX(23deg) scaleY(1.4)",
                                    }}
                                >
                                    PLAYER 3
                                </span>
                            </div>
                            <div 
                                id="court1Bottom2player4"
                                style={{
                                    alignItems: "center",
                                    backgroundColor: "white",
                                    boxShadow: "0px 0px 5px grey",
                                    display: "flex",
                                    height: "30px",
                                    justifyContent: "center",
                                    transform: "perspective(120px) rotateX(-20deg)",
                                    width: "140px",
                                }}
                            >
                                <span
                                    id="court1Bottom2player4Text"
                                    style={{
                                        fontFamily: "'Agdasima'",
                                        fontSize: "15px",
                                        fontWeight: "600",
                                        transform: "perspective(80px) rotateX(23deg) scaleY(1.4)",
                                    }}
                                >
                                    PLAYER 4
                                </span>
                            </div>
                        </div>
                    </div>
                    <div
                        id="cover"
                        style={{
                            alignItems: "center",
                            display: "flex",
                            flexDirection: "column",
                            gap: "0px",
                            justifyContent: "center",
                        }}
                    >
                        <div 
                            id="top"
                            style={{
                                alignItems: "center",
                                backgroundColor: "white",
                                display: "flex",
                                height: "30px",
                                justifyContent: "center",
                                transform: "perspective(130px) rotateX(20deg)",
                                width: "130px",
                            }}
                        >
                            <span
                                style={{
                                    fontFamily: "'Agdasima'",
                                    fontSize: "12px",
                                    fontWeight: "600",
                                    transform: "perspective(80px) rotateX(-13deg) scaleY(1.4)",
                                }}
                            >
                                GU13-POSITION 01-04
                            </span>
                        </div>
                        <div 
                            id="time"
                            style={{
                                backgroundColor: "rgb(255, 196, 0)",
                                transform: "perspective(80px) rotateX(50deg)",
                                position: "relative",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                zIndex: "100",
                                height: "55px",
                                width: "80px",
                                marginTop: "-20px",
                            }}
                        >
                            <span
                                style={{
                                    fontFamily: "'Agdasima'",
                                    fontWeight: "600",
                                    fontSize: "26px",
                                    transform: "perspective(80px) rotateX(-36deg) scaleY(1.7) scaleX(0.9)",
                                }}
                            >
                                10:00AM
                            </span>
                        </div>
                        <div
                            id="bottom"
                            style={{
                                alignItems: "center",
                                display: "flex",
                                flexDirection: "row",
                                gap: "65px",
                                marginTop: "19px",
                                position: "absolute",
                            }}
                        >
                            <div 
                                id="player5"
                                style={{
                                    alignItems: "center",
                                    backgroundColor: "white",
                                    boxShadow: "0px 0px 5px grey",
                                    display: "flex",
                                    height: "30px",
                                    justifyContent: "center",
                                    transform: "perspective(120px) rotateX(-20deg)",
                                    width: "140px",
                                }}
                            >
                                <span
                                    style={{
                                        fontFamily: "'Agdasima'",
                                        fontWeight: "600",
                                        fontSize: "15px",
                                        transform: "perspective(80px) rotateX(23deg) scaleY(1.4)",
                                    }}
                                >
                                    PLAYER 5
                                </span>
                            </div>
                            <div 
                                id="player6"
                                style={{
                                    alignItems: "center",
                                    backgroundColor: "white",
                                    boxShadow: "0px 0px 5px grey",
                                    display: "flex",
                                    height: "30px",
                                    justifyContent: "center",
                                    transform: "perspective(120px) rotateX(-20deg)",
                                    width: "140px",
                                }}
                            >
                                <span
                                    style={{
                                        fontFamily: "'Agdasima'",
                                        fontSize: "15px",
                                        fontWeight: "600",
                                        transform: "perspective(80px) rotateX(23deg) scaleY(1.4)",
                                    }}
                                >
                                    PLAYER 6
                                </span>
                            </div>
                        </div>
                    </div>
                    <div
                        id="cover"
                        style={{
                            alignItems: "center",
                            display: "flex",
                            flexDirection: "column",
                            gap: "0px",
                            justifyContent: "center",
                        }}
                    >
                        <div 
                            id="top"
                            style={{
                                alignItems: "center",
                                backgroundColor: "white",
                                display: "flex",
                                height: "30px",
                                justifyContent: "center",
                                transform: "perspective(130px) rotateX(20deg)",
                                width: "130px",
                            }}
                        >
                            <span
                                style={{
                                    fontFamily: "'Agdasima'",
                                    fontSize: "12px",
                                    fontWeight: "600",
                                    transform: "perspective(80px) rotateX(-13deg) scaleY(1.4)",
                                }}
                            >
                                GU13-POSITION 01-04
                            </span>
                        </div>
                        <div 
                            id="time"
                            style={{
                                backgroundColor: "rgb(255, 196, 0)",
                                transform: "perspective(80px) rotateX(50deg)",
                                position: "relative",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                zIndex: "100",
                                height: "55px",
                                width: "80px",
                                marginTop: "-20px",
                            }}
                        >
                            <span
                                style={{
                                    fontFamily: "'Agdasima'",
                                    fontWeight: "600",
                                    fontSize: "26px",
                                    transform: "perspective(80px) rotateX(-36deg) scaleY(1.7) scaleX(0.9)",
                                }}
                            >
                                10:30AM
                            </span>
                        </div>
                        <div
                            id="bottom"
                            style={{
                                alignItems: "center",
                                display: "flex",
                                flexDirection: "row",
                                gap: "65px",
                                marginTop: "19px",
                                position: "absolute",
                            }}
                        >
                            <div 
                                id="player7"
                                style={{
                                    alignItems: "center",
                                    backgroundColor: "white",
                                    boxShadow: "0px 0px 5px grey",
                                    display: "flex",
                                    height: "30px",
                                    justifyContent: "center",
                                    transform: "perspective(120px) rotateX(-20deg)",
                                    width: "140px",
                                }}
                            >
                                <span
                                    style={{
                                        fontFamily: "'Agdasima'",
                                        fontWeight: "600",
                                        fontSize: "15px",
                                        transform: "perspective(80px) rotateX(23deg) scaleY(1.4)",
                                    }}
                                >
                                    PLAYER 7
                                </span>
                            </div>
                            <div 
                                id="player8"
                                style={{
                                    alignItems: "center",
                                    backgroundColor: "white",
                                    boxShadow: "0px 0px 5px grey",
                                    display: "flex",
                                    height: "30px",
                                    justifyContent: "center",
                                    transform: "perspective(120px) rotateX(-20deg)",
                                    width: "140px",
                                }}
                            >
                                <span
                                    style={{
                                        fontFamily: "'Agdasima'",
                                        fontSize: "15px",
                                        fontWeight: "600",
                                        transform: "perspective(80px) rotateX(23deg) scaleY(1.4)",
                                    }}
                                >
                                    PLAYER 8
                                </span>
                            </div>
                        </div>
                    </div>
                    <div 
                        id='playersContainer'
                        style={{
                            borderBottom: "3px solid white",
                            borderTop: "2px solid white",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            marginTop: "10px",
                            gap: "0px",
                            height: "73px",
                            width: "336px",
                            backgroundColor: "white",
                        }}
                    >
                        <div
                            id='asianJuniorSelectionTrial'
                            style={{
                                alignItems: "center",
                                backgroundColor: "black",
                                display: "flex",
                                fontSize: "9px",
                                height: "15px",
                                width: "100%",
                            }}
                        >
                            <span
                                style={{
                                    fontFamily: "arial",
                                    fontWeight: "600",
                                    color: "#39B5E0",
                                }}
                            >
                                &nbsp;&nbsp;Asian Junior Selection Trials, SNU
                            </span>
                            <span
                                style={{
                                    fontFamily: "arial",
                                    fontWeight: "600",
                                    color: "#39B5E0",
                                    marginLeft: "40px",
                                }}
                            >
                                BU17
                            </span>
                            <span
                                style={{
                                    fontFamily: "arial",
                                    fontWeight: "600",
                                    color: "#39B5E0",
                                    marginLeft: "35px",
                                }}
                            >
                                Court: C4 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;11:35
                            </span>
                        </div>
                        <div 
                            id='avalokitSinghScoreContainer'
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "right",
                                alignItems: "center",
                                gap: "0px",
                                width: "100%",
                                height: "29px",
                            }}
                        >
                            <span
                                style={{
                                    width: "146px", 
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "left",
                                    paddingLeft: "4px",
                                    fontSize: "12px",
                                    fontFamily: "arial",
                                    fontWeight: "600",
                                    backgroundColor: "#39B5E0",
                                    height: "100%",   
                                }}
                            >
                                Avalokit Singh
                            </span>
                            <span
                                style={{
                                    width: "30px", 
                                    display: "flex",
                                    color: "#39B5E0",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    fontSize: "12px",
                                    fontFamily: "arial",
                                    fontWeight: "600",
                                    backgroundColor: "white",
                                    height: "100%",  
                                    borderRight: "1px solid #cccc",   
                                }}
                            >
                                1
                            </span>
                            <span
                                style={{
                                    width: "30px", 
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    fontSize: "12px",
                                    fontFamily: "arial",
                                    fontWeight: "600",
                                    backgroundColor: "white",
                                    height: "100%",   
                                    borderRight: "1px solid #cccc",   
                                }}
                            >
                                11
                            </span>
                            <span
                                style={{
                                    width: "30px", 
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    fontSize: "12px",
                                    fontFamily: "arial",
                                    fontWeight: "600",
                                    backgroundColor: "white",
                                    height: "100%",   
                                    borderRight: "1px solid #cccc",   
                                }}
                            >
                                10
                            </span>
                            <span
                                style={{
                                    width: "30px", 
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    fontSize: "12px",
                                    fontFamily: "arial",
                                    fontWeight: "600",
                                    backgroundColor: "white",
                                    height: "100%",   
                                    borderRight: "1px solid #cccc",   
                                }}
                            >
                            </span>
                            <span
                                style={{
                                    width: "30px", 
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    fontSize: "12px",
                                    fontFamily: "arial",
                                    fontWeight: "600",
                                    backgroundColor: "white",
                                    height: "100%",      
                                }}
                            >
                            </span>
                        </div>
                        <div 
                            id='yushaNafeesScoreContainer'
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "right",
                                alignItems: "center",
                                width: "100%",
                                height: "29px",
                            }}
                        >
                            <span
                                style={{
                                    width: "146px", 
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "left",
                                    paddingLeft: "4px",
                                    fontSize: "12px",
                                    fontFamily: "arial",
                                    fontWeight: "600",
                                    backgroundColor: "#39B5E0",
                                    borderBottom: "1px solid white", 
                                    borderTop: "1px solid white", 
                                    height: "100%",
                                }}
                            >
                                Yusha Nafees
                            </span>
                            <span
                                style={{
                                    width: "30px", 
                                    display: "flex",
                                    color: "#39B5E0",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    fontSize: "12px",
                                    fontFamily: "arial",
                                    fontWeight: "600",
                                    backgroundColor: "white",
                                    height: "100%",  
                                    borderTop: "1px solid #cccc", 
                                    borderRight: "1px solid #cccc",   
                                }}
                            >
                                0
                            </span>
                            <span
                                style={{
                                    width: "30px", 
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    fontSize: "12px",
                                    fontFamily: "arial",
                                    fontWeight: "600",
                                    backgroundColor: "white",
                                    height: "100%",  
                                    borderTop: "1px solid #cccc", 
                                    borderRight: "1px solid #cccc",   
                                }}
                            >
                                5
                            </span>
                            <span
                                style={{
                                    width: "30px", 
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    fontSize: "12px",
                                    fontFamily: "arial",
                                    fontWeight: "600",
                                    backgroundColor: "white",
                                    height: "100%",    
                                    borderTop: "1px solid #cccc",  
                                    borderRight: "1px solid #cccc",   
                                }}
                            >
                                7
                            </span>
                            <span
                                style={{
                                    width: "30px", 
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    fontSize: "12px",
                                    fontFamily: "arial",
                                    fontWeight: "600",
                                    backgroundColor: "white",
                                    height: "100%",    
                                    borderTop: "1px solid #cccc",  
                                    borderRight: "1px solid #cccc",   
                                }}
                            >
                            </span>
                            <span
                                style={{
                                    width: "30px", 
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    fontSize: "12px",
                                    fontFamily: "arial",
                                    fontWeight: "600",
                                    backgroundColor: "white",
                                    height: "100%",    
                                    borderTop: "1px solid #cccc",    
                                }}
                            >
                            </span>
                        </div>
                    </div>
                </div>
                <div 
                    id="court2"
                    style={{
                        alignItems: "center",
                        display: "flex",
                        flexDirection: "column",
                        gap: "2px",
                        justifyContent: "center",
                        zoom:"0.8",
                    }}
                >
                    <span
                        style={{
                            color: "white",
                            fontFamily: "'Agdasima'",
                            fontSize: "26px",
                            fontWeight: 600,
                        }}
                    >
                        COURT 2
                    </span>
                    <div
                        id="cover"
                        style={{
                            alignItems: "center",
                            display: "flex",
                            flexDirection: "column",
                            gap: "0px",
                            justifyContent: "center",
                        }}
                    >
                        <div 
                            id="top"
                            style={{
                                alignItems: "center",
                                backgroundColor: "white",
                                display: "flex",
                                height: "30px",
                                justifyContent: "center",
                                transform: "perspective(130px) rotateX(20deg)",
                                width: "130px",
                            }}
                        >
                            <span
                                style={{
                                    fontFamily: "'Agdasima'",
                                    fontSize: "12px",
                                    fontWeight: "600",
                                    transform: "perspective(80px) rotateX(-13deg) scaleY(1.4)",
                                }}
                            >
                                GU13-POSITION 01-04
                            </span>
                        </div>
                        <div 
                            id="time"
                            style={{
                                backgroundColor: "rgb(255, 196, 0)",
                                transform: "perspective(80px) rotateX(50deg)",
                                position: "relative",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                zIndex: "100",
                                height: "55px",
                                width: "80px",
                                marginTop: "-20px",
                            }}
                        >
                            <span
                                style={{
                                    fontFamily: "'Agdasima'",
                                    fontWeight: "600",
                                    fontSize: "26px",
                                    transform: "perspective(80px) rotateX(-36deg) scaleY(1.7) scaleX(0.9)",
                                }}
                            >
                                9:00AM
                            </span>
                        </div>
                        <div
                            id="bottom"
                            style={{
                                alignItems: "center",
                                display: "flex",
                                flexDirection: "row",
                                gap: "65px",
                                marginTop: "19px",
                                position: "absolute",
                            }}
                        >
                            <div 
                                id="player1"
                                style={{
                                    alignItems: "center",
                                    backgroundColor: "white",
                                    boxShadow: "0px 0px 5px grey",
                                    display: "flex",
                                    height: "30px",
                                    justifyContent: "center",
                                    transform: "perspective(120px) rotateX(-20deg)",
                                    width: "140px",
                                }}
                            >
                                <span
                                    style={{
                                        fontFamily: "'Agdasima'",
                                        fontWeight: "600",
                                        fontSize: "15px",
                                        transform: "perspective(80px) rotateX(23deg) scaleY(1.4)",
                                    }}
                                >
                                    PLAYER 1
                                </span>
                            </div>
                            <div 
                                id="player2"
                                style={{
                                    alignItems: "center",
                                    backgroundColor: "white",
                                    boxShadow: "0px 0px 5px grey",
                                    display: "flex",
                                    height: "30px",
                                    justifyContent: "center",
                                    transform: "perspective(120px) rotateX(-20deg)",
                                    width: "140px",
                                }}
                            >
                                <span
                                    style={{
                                        fontFamily: "'Agdasima'",
                                        fontSize: "15px",
                                        fontWeight: "600",
                                        transform: "perspective(80px) rotateX(23deg) scaleY(1.4)",
                                    }}
                                >
                                    PLAYER 2
                                </span>
                            </div>
                        </div>
                    </div>
                    <div
                        id="cover"
                        style={{
                            alignItems: "center",
                            display: "flex",
                            flexDirection: "column",
                            gap: "0px",
                            justifyContent: "center",
                        }}
                    >
                        <div 
                            id="top"
                            style={{
                                alignItems: "center",
                                backgroundColor: "white",
                                display: "flex",
                                height: "30px",
                                justifyContent: "center",
                                transform: "perspective(130px) rotateX(20deg)",
                                width: "130px",
                            }}
                        >
                            <span
                                style={{
                                    fontFamily: "'Agdasima'",
                                    fontSize: "12px",
                                    fontWeight: "600",
                                    transform: "perspective(80px) rotateX(-13deg) scaleY(1.4)",
                                }}
                            >
                                GU13-POSITION 01-04
                            </span>
                        </div>
                        <div 
                            id="time"
                            style={{
                                backgroundColor: "rgb(255, 196, 0)",
                                transform: "perspective(80px) rotateX(50deg)",
                                position: "relative",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                zIndex: "100",
                                height: "55px",
                                width: "80px",
                                marginTop: "-20px",
                            }}
                        >
                            <span
                                style={{
                                    fontFamily: "'Agdasima'",
                                    fontWeight: "600",
                                    fontSize: "26px",
                                    transform: "perspective(80px) rotateX(-36deg) scaleY(1.7) scaleX(0.9)",
                                }}
                            >
                                9:30AM
                            </span>
                        </div>
                        <div
                            id="bottom"
                            style={{
                                alignItems: "center",
                                display: "flex",
                                flexDirection: "row",
                                gap: "65px",
                                marginTop: "19px",
                                position: "absolute",
                            }}
                        >
                            <div 
                                id="player3"
                                style={{
                                    alignItems: "center",
                                    backgroundColor: "white",
                                    boxShadow: "0px 0px 5px grey",
                                    display: "flex",
                                    height: "30px",
                                    justifyContent: "center",
                                    transform: "perspective(120px) rotateX(-20deg)",
                                    width: "140px",
                                }}
                            >
                                <span
                                    style={{
                                        fontFamily: "'Agdasima'",
                                        fontWeight: "600",
                                        fontSize: "15px",
                                        transform: "perspective(80px) rotateX(23deg) scaleY(1.4)",
                                    }}
                                >
                                    PLAYER 3
                                </span>
                            </div>
                            <div 
                                id="player4"
                                style={{
                                    alignItems: "center",
                                    backgroundColor: "white",
                                    boxShadow: "0px 0px 5px grey",
                                    display: "flex",
                                    height: "30px",
                                    justifyContent: "center",
                                    transform: "perspective(120px) rotateX(-20deg)",
                                    width: "140px",
                                }}
                            >
                                <span
                                    style={{
                                        fontFamily: "'Agdasima'",
                                        fontSize: "15px",
                                        fontWeight: "600",
                                        transform: "perspective(80px) rotateX(23deg) scaleY(1.4)",
                                    }}
                                >
                                    PLAYER 4
                                </span>
                            </div>
                        </div>
                    </div>
                    <div
                        id="cover"
                        style={{
                            alignItems: "center",
                            display: "flex",
                            flexDirection: "column",
                            gap: "0px",
                            justifyContent: "center",
                        }}
                    >
                        <div 
                            id="top"
                            style={{
                                alignItems: "center",
                                backgroundColor: "white",
                                display: "flex",
                                height: "30px",
                                justifyContent: "center",
                                transform: "perspective(130px) rotateX(20deg)",
                                width: "130px",
                            }}
                        >
                            <span
                                style={{
                                    fontFamily: "'Agdasima'",
                                    fontSize: "12px",
                                    fontWeight: "600",
                                    transform: "perspective(80px) rotateX(-13deg) scaleY(1.4)",
                                }}
                            >
                                GU13-POSITION 01-04
                            </span>
                        </div>
                        <div 
                            id="time"
                            style={{
                                backgroundColor: "rgb(255, 196, 0)",
                                transform: "perspective(80px) rotateX(50deg)",
                                position: "relative",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                zIndex: "100",
                                height: "55px",
                                width: "80px",
                                marginTop: "-20px",
                            }}
                        >
                            <span
                                style={{
                                    fontFamily: "'Agdasima'",
                                    fontWeight: "600",
                                    fontSize: "26px",
                                    transform: "perspective(80px) rotateX(-36deg) scaleY(1.7) scaleX(0.9)",
                                }}
                            >
                                10:00AM
                            </span>
                        </div>
                        <div
                            id="bottom"
                            style={{
                                alignItems: "center",
                                display: "flex",
                                flexDirection: "row",
                                gap: "65px",
                                marginTop: "19px",
                                position: "absolute",
                            }}
                        >
                            <div 
                                id="player5"
                                style={{
                                    alignItems: "center",
                                    backgroundColor: "white",
                                    boxShadow: "0px 0px 5px grey",
                                    display: "flex",
                                    height: "30px",
                                    justifyContent: "center",
                                    transform: "perspective(120px) rotateX(-20deg)",
                                    width: "140px",
                                }}
                            >
                                <span
                                    style={{
                                        fontFamily: "'Agdasima'",
                                        fontWeight: "600",
                                        fontSize: "15px",
                                        transform: "perspective(80px) rotateX(23deg) scaleY(1.4)",
                                    }}
                                >
                                    PLAYER 5
                                </span>
                            </div>
                            <div 
                                id="player6"
                                style={{
                                    alignItems: "center",
                                    backgroundColor: "white",
                                    boxShadow: "0px 0px 5px grey",
                                    display: "flex",
                                    height: "30px",
                                    justifyContent: "center",
                                    transform: "perspective(120px) rotateX(-20deg)",
                                    width: "140px",
                                }}
                            >
                                <span
                                    style={{
                                        fontFamily: "'Agdasima'",
                                        fontSize: "15px",
                                        fontWeight: "600",
                                        transform: "perspective(80px) rotateX(23deg) scaleY(1.4)",
                                    }}
                                >
                                    PLAYER 6
                                </span>
                            </div>
                        </div>
                    </div>
                    <div
                        id="cover"
                        style={{
                            alignItems: "center",
                            display: "flex",
                            flexDirection: "column",
                            gap: "0px",
                            justifyContent: "center",
                        }}
                    >
                        <div 
                            id="top"
                            style={{
                                alignItems: "center",
                                backgroundColor: "white",
                                display: "flex",
                                height: "30px",
                                justifyContent: "center",
                                transform: "perspective(130px) rotateX(20deg)",
                                width: "130px",
                            }}
                        >
                            <span
                                style={{
                                    fontFamily: "'Agdasima'",
                                    fontSize: "12px",
                                    fontWeight: "600",
                                    transform: "perspective(80px) rotateX(-13deg) scaleY(1.4)",
                                }}
                            >
                                GU13-POSITION 01-04
                            </span>
                        </div>
                        <div 
                            id="time"
                            style={{
                                backgroundColor: "rgb(255, 196, 0)",
                                transform: "perspective(80px) rotateX(50deg)",
                                position: "relative",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                zIndex: "100",
                                height: "55px",
                                width: "80px",
                                marginTop: "-20px",
                            }}
                        >
                            <span
                                style={{
                                    fontFamily: "'Agdasima'",
                                    fontWeight: "600",
                                    fontSize: "26px",
                                    transform: "perspective(80px) rotateX(-36deg) scaleY(1.7) scaleX(0.9)",
                                }}
                            >
                                10:30AM
                            </span>
                        </div>
                        <div
                            id="bottom"
                            style={{
                                alignItems: "center",
                                display: "flex",
                                flexDirection: "row",
                                gap: "65px",
                                marginTop: "19px",
                                position: "absolute",
                            }}
                        >
                            <div 
                                id="player7"
                                style={{
                                    alignItems: "center",
                                    backgroundColor: "white",
                                    boxShadow: "0px 0px 5px grey",
                                    display: "flex",
                                    height: "30px",
                                    justifyContent: "center",
                                    transform: "perspective(120px) rotateX(-20deg)",
                                    width: "140px",
                                }}
                            >
                                <span
                                    style={{
                                        fontFamily: "'Agdasima'",
                                        fontWeight: "600",
                                        fontSize: "15px",
                                        transform: "perspective(80px) rotateX(23deg) scaleY(1.4)",
                                    }}
                                >
                                    PLAYER 7
                                </span>
                            </div>
                            <div 
                                id="player8"
                                style={{
                                    alignItems: "center",
                                    backgroundColor: "white",
                                    boxShadow: "0px 0px 5px grey",
                                    display: "flex",
                                    height: "30px",
                                    justifyContent: "center",
                                    transform: "perspective(120px) rotateX(-20deg)",
                                    width: "140px",
                                }}
                            >
                                <span
                                    style={{
                                        fontFamily: "'Agdasima'",
                                        fontSize: "15px",
                                        fontWeight: "600",
                                        transform: "perspective(80px) rotateX(23deg) scaleY(1.4)",
                                    }}
                                >
                                    PLAYER 8
                                </span>
                            </div>
                        </div>
                    </div>
                    <div 
                        id='playersContainer'
                        style={{
                            borderBottom: "3px solid white",
                            borderTop: "2px solid white",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            marginTop: "10px",
                            gap: "0px",
                            height: "73px",
                            width: "336px",
                            backgroundColor: "white",
                        }}
                    >
                        <div
                            id='asianJuniorSelectionTrial'
                            style={{
                                backgroundColor: "black",
                                display: "flex",
                                alignItems: "center",
                                fontSize: "9px",
                                width: "100%",
                                height: "15px",
                            }}
                        >
                            <span
                                style={{
                                    fontFamily: "arial",
                                    fontWeight: "600",
                                    color: "#39B5E0",
                                }}
                            >
                                &nbsp;&nbsp;Asian Junior Selection Trials, SNU 
                            </span>
                            <span
                                style={{
                                    fontFamily: "arial",
                                    fontWeight: "600",
                                    color: "#39B5E0",
                                    marginLeft: "40px",
                                }}
                            >
                                BU17
                            </span>
                            <span
                                style={{
                                    fontFamily: "arial",
                                    fontWeight: "600",
                                    color: "#39B5E0",
                                    marginLeft: "35px",
                                }}
                            >
                                Court: C4 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;11:20 
                            </span>
                        </div>
                        <div 
                            id='avalokitSinghScoreContainer'
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "right",
                                alignItems: "center",
                                gap: "0px",
                                width: "100%",
                                height: "29px",
                            }}
                        >
                            <span
                                style={{
                                    width: "146px", 
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "left",
                                    paddingLeft: "4px",
                                    fontSize: "12px",
                                    fontFamily: "arial",
                                    fontWeight: "600",
                                    backgroundColor: "#39B5E0",
                                    height: "100%",   
                                }}
                            >
                                Arihant KS
                            </span>
                            <span
                                style={{
                                    width: "30px", 
                                    display: "flex",
                                    color: "#39B5E0",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    fontSize: "12px",
                                    fontFamily: "arial",
                                    fontWeight: "600",
                                    backgroundColor: "white",
                                    height: "100%",  
                                    borderRight: "1px solid #cccc",   
                                }}
                            >
                                2
                            </span>
                            <span
                                style={{
                                    width: "30px", 
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    fontSize: "12px",
                                    fontFamily: "arial",
                                    fontWeight: "600",
                                    backgroundColor: "white",
                                    height: "100%",   
                                    borderRight: "1px solid #cccc",   
                                }}
                            >
                                11
                            </span>
                            <span
                                style={{
                                    width: "30px", 
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    fontSize: "12px",
                                    fontFamily: "arial",
                                    fontWeight: "600",
                                    backgroundColor: "white",
                                    height: "100%",   
                                    borderRight: "1px solid #cccc",   
                                }}
                            >
                                11
                            </span>
                            <span
                                style={{
                                    width: "30px", 
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    fontSize: "12px",
                                    fontFamily: "arial",
                                    fontWeight: "600",
                                    backgroundColor: "white",
                                    height: "100%",   
                                    borderRight: "1px solid #cccc",   
                                }}
                            >
                                5
                            </span>
                            <span
                                style={{
                                    width: "30px", 
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    fontSize: "12px",
                                    fontFamily: "arial",
                                    fontWeight: "600",
                                    backgroundColor: "white",
                                    height: "100%",      
                                }}
                            >
                            </span>
                        </div>
                        <div 
                            id='yushaNafeesScoreContainer'
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "right",
                                alignItems: "center",
                                width: "100%",
                                height: "29px",
                            }}
                        >
                            <span
                                style={{
                                    width: "146px", 
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "left",
                                    paddingLeft: "4px",
                                    fontSize: "12px",
                                    fontFamily: "arial",
                                    fontWeight: "600",
                                    backgroundColor: "#39B5E0",
                                    borderTop: "1px solid white", 
                                    height: "100%",
                                }}
                            >
                                Arjun Somani
                            </span>
                            <span
                                style={{
                                    width: "30px", 
                                    display: "flex",
                                    color: "#39B5E0",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    fontSize: "12px",
                                    fontFamily: "arial",
                                    fontWeight: "600",
                                    backgroundColor: "white",
                                    height: "100%",  
                                    borderTop: "1px solid #cccc", 
                                    borderRight: "1px solid #cccc",   
                                }}
                            >
                                0
                            </span>
                            <span
                                style={{
                                    width: "30px", 
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    fontSize: "12px",
                                    fontFamily: "arial",
                                    fontWeight: "600",
                                    backgroundColor: "white",
                                    height: "100%", 
                                    borderTop: "1px solid #cccc", 
                                    borderRight: "1px solid #cccc",   
                                }}
                            >
                                8
                            </span>
                            <span
                                style={{
                                    width: "30px", 
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    fontSize: "12px",
                                    fontFamily: "arial",
                                    fontWeight: "600",
                                    backgroundColor: "white",
                                    height: "100%",  
                                    borderTop: "1px solid #cccc",  
                                    borderRight: "1px solid #cccc",   
                                }}
                            >
                                5
                            </span>
                            <span
                                style={{
                                    width: "30px", 
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    fontSize: "12px",
                                    fontFamily: "arial",
                                    fontWeight: "600",
                                    backgroundColor: "white",
                                    height: "100%",  
                                    borderTop: "1px solid #cccc",  
                                    borderRight: "1px solid #cccc",   
                                }}
                            >
                                1
                            </span>
                            <span
                                style={{
                                    width: "30px", 
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    fontSize: "12px",
                                    fontFamily: "arial",
                                    fontWeight: "600",
                                    backgroundColor: "white",
                                    height: "100%",  
                                    borderTop: "1px solid #cccc",    
                                }}
                            >
                            </span>
                        </div>
                    </div>
                </div>
                <div 
                    id="court3"
                    style={{
                        alignItems: "center",
                        display: "flex",
                        flexDirection: "column",
                        gap: "2px",
                        justifyContent: "center",
                        zoom:"0.8",
                    }}
                >
                    <span
                        style={{
                            color: "white",
                            fontFamily: "'Agdasima'",
                            fontSize: "26px",
                            fontWeight: 600,
                        }}
                    >
                        COURT 3
                    </span>
                    <div
                        id="cover"
                        style={{
                            alignItems: "center",
                            display: "flex",
                            flexDirection: "column",
                            gap: "0px",
                            justifyContent: "center",
                        }}
                    >
                        <div 
                            id="top"
                            style={{
                                alignItems: "center",
                                backgroundColor: "white",
                                display: "flex",
                                height: "30px",
                                justifyContent: "center",
                                transform: "perspective(130px) rotateX(20deg)",
                                width: "130px",
                            }}
                        >
                            <span
                                style={{
                                    fontFamily: "'Agdasima'",
                                    fontSize: "12px",
                                    fontWeight: "600",
                                    transform: "perspective(80px) rotateX(-13deg) scaleY(1.4)",
                                }}
                            >
                                GU13-POSITION 01-04
                            </span>
                        </div>
                        <div 
                            id="time"
                            style={{
                                backgroundColor: "rgb(255, 196, 0)",
                                transform: "perspective(80px) rotateX(50deg)",
                                position: "relative",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                zIndex: "100",
                                height: "55px",
                                width: "80px",
                                marginTop: "-20px",
                            }}
                        >
                            <span
                                style={{
                                    fontFamily: "'Agdasima'",
                                    fontWeight: "600",
                                    fontSize: "26px",
                                    transform: "perspective(80px) rotateX(-36deg) scaleY(1.7) scaleX(0.9)",
                                }}
                            >
                                9:00AM
                            </span>
                        </div>
                        <div
                            id="bottom"
                            style={{
                                alignItems: "center",
                                display: "flex",
                                flexDirection: "row",
                                gap: "65px",
                                marginTop: "19px",
                                position: "absolute",
                            }}
                        >
                            <div 
                                id="player1"
                                style={{
                                    alignItems: "center",
                                    backgroundColor: "white",
                                    boxShadow: "0px 0px 5px grey",
                                    display: "flex",
                                    height: "30px",
                                    justifyContent: "center",
                                    transform: "perspective(120px) rotateX(-20deg)",
                                    width: "140px",
                                }}
                            >
                                <span
                                    style={{
                                        fontFamily: "'Agdasima'",
                                        fontWeight: "600",
                                        fontSize: "15px",
                                        transform: "perspective(80px) rotateX(23deg) scaleY(1.4)",
                                    }}
                                >
                                    PLAYER 1
                                </span>
                            </div>
                            <div 
                                id="player2"
                                style={{
                                    alignItems: "center",
                                    backgroundColor: "white",
                                    boxShadow: "0px 0px 5px grey",
                                    display: "flex",
                                    height: "30px",
                                    justifyContent: "center",
                                    transform: "perspective(120px) rotateX(-20deg)",
                                    width: "140px",
                                }}
                            >
                                <span
                                    style={{
                                        fontFamily: "'Agdasima'",
                                        fontSize: "15px",
                                        fontWeight: "600",
                                        transform: "perspective(80px) rotateX(23deg) scaleY(1.4)",
                                    }}
                                >
                                    PLAYER 2
                                </span>
                            </div>
                        </div>
                    </div>
                    <div
                        id="cover"
                        style={{
                            alignItems: "center",
                            display: "flex",
                            flexDirection: "column",
                            gap: "0px",
                            justifyContent: "center",
                        }}
                    >
                        <div 
                            id="top"
                            style={{
                                alignItems: "center",
                                backgroundColor: "white",
                                display: "flex",
                                height: "30px",
                                justifyContent: "center",
                                transform: "perspective(130px) rotateX(20deg)",
                                width: "130px",
                            }}
                        >
                            <span
                                style={{
                                    fontFamily: "'Agdasima'",
                                    fontSize: "12px",
                                    fontWeight: "600",
                                    transform: "perspective(80px) rotateX(-13deg) scaleY(1.4)",
                                }}
                            >
                                GU13-POSITION 01-04
                            </span>
                        </div>
                        <div 
                            id="time"
                            style={{
                                backgroundColor: "rgb(255, 196, 0)",
                                transform: "perspective(80px) rotateX(50deg)",
                                position: "relative",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                zIndex: "100",
                                height: "55px",
                                width: "80px",
                                marginTop: "-20px",
                            }}
                        >
                            <span
                                style={{
                                    fontFamily: "'Agdasima'",
                                    fontWeight: "600",
                                    fontSize: "26px",
                                    transform: "perspective(80px) rotateX(-36deg) scaleY(1.7) scaleX(0.9)",
                                }}
                            >
                                9:30AM
                            </span>
                        </div>
                        <div
                            id="bottom"
                            style={{
                                alignItems: "center",
                                display: "flex",
                                flexDirection: "row",
                                gap: "65px",
                                marginTop: "19px",
                                position: "absolute",
                            }}
                        >
                            <div 
                                id="player4"
                                style={{
                                    alignItems: "center",
                                    backgroundColor: "white",
                                    boxShadow: "0px 0px 5px grey",
                                    display: "flex",
                                    height: "30px",
                                    justifyContent: "center",
                                    transform: "perspective(120px) rotateX(-20deg)",
                                    width: "140px",
                                }}
                            >
                                <span
                                    style={{
                                        fontFamily: "'Agdasima'",
                                        fontWeight: "600",
                                        fontSize: "15px",
                                        transform: "perspective(80px) rotateX(23deg) scaleY(1.4)",
                                    }}
                                >
                                    PLAYER 3
                                </span>
                            </div>
                            <div 
                                id="player4"
                                style={{
                                    alignItems: "center",
                                    backgroundColor: "white",
                                    boxShadow: "0px 0px 5px grey",
                                    display: "flex",
                                    height: "30px",
                                    justifyContent: "center",
                                    transform: "perspective(120px) rotateX(-20deg)",
                                    width: "140px",
                                }}
                            >
                                <span
                                    style={{
                                        fontFamily: "'Agdasima'",
                                        fontSize: "15px",
                                        fontWeight: "600",
                                        transform: "perspective(80px) rotateX(23deg) scaleY(1.4)",
                                    }}
                                >
                                    PLAYER 4
                                </span>
                            </div>
                        </div>
                    </div>
                    <div
                        id="cover"
                        style={{
                            alignItems: "center",
                            display: "flex",
                            flexDirection: "column",
                            gap: "0px",
                            justifyContent: "center",
                        }}
                    >
                        <div 
                            id="top"
                            style={{
                                alignItems: "center",
                                backgroundColor: "white",
                                display: "flex",
                                height: "30px",
                                justifyContent: "center",
                                transform: "perspective(130px) rotateX(20deg)",
                                width: "130px",
                            }}
                        >
                            <span
                                style={{
                                    fontFamily: "'Agdasima'",
                                    fontSize: "12px",
                                    fontWeight: "600",
                                    transform: "perspective(80px) rotateX(-13deg) scaleY(1.4)",
                                }}
                            >
                                GU13-POSITION 01-04
                            </span>
                        </div>
                        <div 
                            id="time"
                            style={{
                                backgroundColor: "rgb(255, 196, 0)",
                                transform: "perspective(80px) rotateX(50deg)",
                                position: "relative",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                zIndex: "100",
                                height: "55px",
                                width: "80px",
                                marginTop: "-20px",
                            }}
                        >
                            <span
                                style={{
                                    fontFamily: "'Agdasima'",
                                    fontWeight: "600",
                                    fontSize: "26px",
                                    transform: "perspective(80px) rotateX(-36deg) scaleY(1.7) scaleX(0.9)",
                                }}
                            >
                                10:00AM
                            </span>
                        </div>
                        <div
                            id="bottom"
                            style={{
                                alignItems: "center",
                                display: "flex",
                                flexDirection: "row",
                                gap: "65px",
                                marginTop: "19px",
                                position: "absolute",
                            }}
                        >
                            <div 
                                id="player5"
                                style={{
                                    alignItems: "center",
                                    backgroundColor: "white",
                                    boxShadow: "0px 0px 5px grey",
                                    display: "flex",
                                    height: "30px",
                                    justifyContent: "center",
                                    transform: "perspective(120px) rotateX(-20deg)",
                                    width: "140px",
                                }}
                            >
                                <span
                                    style={{
                                        fontFamily: "'Agdasima'",
                                        fontWeight: "600",
                                        fontSize: "15px",
                                        transform: "perspective(80px) rotateX(23deg) scaleY(1.4)",
                                    }}
                                >
                                    PLAYER 5
                                </span>
                            </div>
                            <div 
                                id="player6"
                                style={{
                                    alignItems: "center",
                                    backgroundColor: "white",
                                    boxShadow: "0px 0px 5px grey",
                                    display: "flex",
                                    height: "30px",
                                    justifyContent: "center",
                                    transform: "perspective(120px) rotateX(-20deg)",
                                    width: "140px",
                                }}
                            >
                                <span
                                    style={{
                                        fontFamily: "'Agdasima'",
                                        fontSize: "15px",
                                        fontWeight: "600",
                                        transform: "perspective(80px) rotateX(23deg) scaleY(1.4)",
                                    }}
                                >
                                    PLAYER 6
                                </span>
                            </div>
                        </div>
                    </div>
                    <div
                        id="cover"
                        style={{
                            alignItems: "center",
                            display: "flex",
                            flexDirection: "column",
                            gap: "0px",
                            justifyContent: "center",
                        }}
                    >
                        <div 
                            id="top"
                            style={{
                                alignItems: "center",
                                backgroundColor: "white",
                                display: "flex",
                                height: "30px",
                                justifyContent: "center",
                                transform: "perspective(130px) rotateX(20deg)",
                                width: "130px",
                            }}
                        >
                            <span
                                style={{
                                    fontFamily: "'Agdasima'",
                                    fontSize: "12px",
                                    fontWeight: "600",
                                    transform: "perspective(80px) rotateX(-13deg) scaleY(1.4)",
                                }}
                            >
                                GU13-POSITION 01-04
                            </span>
                        </div>
                        <div 
                            id="time"
                            style={{
                                backgroundColor: "rgb(255, 196, 0)",
                                transform: "perspective(80px) rotateX(50deg)",
                                position: "relative",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                zIndex: "100",
                                height: "55px",
                                width: "80px",
                                marginTop: "-20px",
                            }}
                        >
                            <span
                                style={{
                                    fontFamily: "'Agdasima'",
                                    fontWeight: "600",
                                    fontSize: "26px",
                                    transform: "perspective(80px) rotateX(-36deg) scaleY(1.7) scaleX(0.9)",
                                }}
                            >
                                10:30AM
                            </span>
                        </div>
                        <div
                            id="bottom"
                            style={{
                                alignItems: "center",
                                display: "flex",
                                flexDirection: "row",
                                gap: "65px",
                                marginTop: "19px",
                                position: "absolute",
                            }}
                        >
                            <div 
                                id="player7"
                                style={{
                                    alignItems: "center",
                                    backgroundColor: "white",
                                    boxShadow: "0px 0px 5px grey",
                                    display: "flex",
                                    height: "30px",
                                    justifyContent: "center",
                                    transform: "perspective(120px) rotateX(-20deg)",
                                    width: "140px",
                                }}
                            >
                                <span
                                    style={{
                                        fontFamily: "'Agdasima'",
                                        fontWeight: "600",
                                        fontSize: "15px",
                                        transform: "perspective(80px) rotateX(23deg) scaleY(1.4)",
                                    }}
                                >
                                    PLAYER 7
                                </span>
                            </div>
                            <div 
                                id="player8"
                                style={{
                                    alignItems: "center",
                                    backgroundColor: "white",
                                    boxShadow: "0px 0px 5px grey",
                                    display: "flex",
                                    height: "30px",
                                    justifyContent: "center",
                                    transform: "perspective(120px) rotateX(-20deg)",
                                    width: "140px",
                                }}
                            >
                                <span
                                    style={{
                                        fontFamily: "'Agdasima'",
                                        fontSize: "15px",
                                        fontWeight: "600",
                                        transform: "perspective(80px) rotateX(23deg) scaleY(1.4)",
                                    }}
                                >
                                    PLAYER 8
                                </span>
                            </div>
                        </div>
                    </div>
                    <div 
                        id='playersContainer'
                        style={{
                            borderBottom: "4px solid white",
                            borderTop: "2px solid white",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            marginTop: "10px",
                            gap: "0px",
                            height: "73px",
                            width: "336px",
                            backgroundColor: "white",
                        }}
                    >
                        <div
                            id='asianJuniorSelectionTrial'
                            style={{
                                backgroundColor: "black",
                                display: "flex",
                                alignItems: "center",
                                fontSize: "9px",
                                width: "100%",
                                height: "15px",
                            }}
                        >
                            <span
                                style={{
                                    fontFamily: "arial",
                                    fontWeight: "600",
                                    color: "#39B5E0",
                                }}
                            >
                                &nbsp;&nbsp;Asian Junior Selection Trials, SNU 
                            </span>
                            <span
                                style={{
                                    fontFamily: "arial",
                                    fontWeight: "600",
                                    color: "#39B5E0",
                                    marginLeft: "40px",
                                }}
                            >
                                BU17
                            </span>
                            <span
                                style={{
                                    fontFamily: "arial",
                                    fontWeight: "600",
                                    color: "#39B5E0",
                                    marginLeft: "35px",
                                }}
                            >
                                Court: C4 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;11:35
                            </span>
                        </div>
                        <div 
                            id='avalokitSinghScoreContainer'
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "right",
                                alignItems: "center",
                                gap: "0px",
                                width: "100%",
                                height: "29px",
                            }}
                        >
                            <span
                                style={{
                                    width: "146px", 
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "left",
                                    paddingLeft: "4px",
                                    fontSize: "12px",
                                    fontFamily: "arial",
                                    fontWeight: "600",
                                    backgroundColor: "#39B5E0",
                                    height: "100%",   
                                }}
                            >
                                Avalokit Singh
                            </span>
                            <span
                                style={{
                                    width: "30px", 
                                    display: "flex",
                                    color: "#39B5E0",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    fontSize: "12px",
                                    fontFamily: "arial",
                                    fontWeight: "600",
                                    backgroundColor: "white",
                                    height: "100%",  
                                    borderRight: "1px solid #cccc",   
                                }}
                            >
                                1
                            </span>
                            <span
                                style={{
                                    width: "30px", 
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    fontSize: "12px",
                                    fontFamily: "arial",
                                    fontWeight: "600",
                                    backgroundColor: "white",
                                    height: "100%",   
                                    borderRight: "1px solid #cccc",   
                                }}
                            >
                                11
                            </span>
                            <span
                                style={{
                                    width: "30px", 
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    fontSize: "12px",
                                    fontFamily: "arial",
                                    fontWeight: "600",
                                    backgroundColor: "white",
                                    height: "100%",   
                                    borderRight: "1px solid #cccc",   
                                }}
                            >
                                10
                            </span>
                            <span
                                style={{
                                    width: "30px", 
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    fontSize: "12px",
                                    fontFamily: "arial",
                                    fontWeight: "600",
                                    backgroundColor: "white",
                                    height: "100%",   
                                    borderRight: "1px solid #cccc",   
                                }}
                            >
                            </span>
                            <span
                                style={{
                                    width: "30px", 
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    fontSize: "12px",
                                    fontFamily: "arial",
                                    fontWeight: "600",
                                    backgroundColor: "white",
                                    height: "100%",      
                                }}
                            >
                            </span>
                        </div>
                        <div 
                            id='yushaNafeesScoreContainer'
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "right",
                                alignItems: "center",
                                width: "100%",
                                height: "29px",
                            }}
                        >
                            <span
                                style={{
                                    width: "146px", 
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "left",
                                    paddingLeft: "4px",
                                    fontSize: "12px",
                                    fontFamily: "arial",
                                    fontWeight: "600",
                                    backgroundColor: "#39B5E0",
                                    borderTop: "1px solid white", 
                                    height: "100%",
                                }}
                            >
                                Yusha Nafees
                            </span>
                            <span
                                style={{
                                    width: "30px", 
                                    display: "flex",
                                    color: "#39B5E0",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    fontSize: "12px",
                                    fontFamily: "arial",
                                    fontWeight: "600",
                                    backgroundColor: "white",
                                    height: "100%",  
                                    borderTop: "1px solid #cccc", 
                                    borderRight: "1px solid #cccc",   
                                }}
                            >
                                0
                            </span>
                            <span
                                style={{
                                    width: "30px", 
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    fontSize: "12px",
                                    fontFamily: "arial",
                                    fontWeight: "600",
                                    backgroundColor: "white",
                                    height: "100%", 
                                    borderTop: "1px solid #cccc", 
                                    borderRight: "1px solid #cccc",   
                                }}
                            >
                                5
                            </span>
                            <span
                                style={{
                                    width: "30px", 
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    fontSize: "12px",
                                    fontFamily: "arial",
                                    fontWeight: "600",
                                    backgroundColor: "white",
                                    height: "100%",  
                                    borderTop: "1px solid #cccc",  
                                    borderRight: "1px solid #cccc",   
                                }}
                            >
                                7
                            </span>
                            <span
                                style={{
                                    width: "30px", 
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    fontSize: "12px",
                                    fontFamily: "arial",
                                    fontWeight: "600",
                                    backgroundColor: "white",
                                    height: "100%",  
                                    borderTop: "1px solid #cccc",  
                                    borderRight: "1px solid #cccc",   
                                }}
                            >
                            </span>
                            <span
                                style={{
                                    width: "30px", 
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    fontSize: "12px",
                                    fontFamily: "arial",
                                    fontWeight: "600",
                                    backgroundColor: "white",
                                    height: "100%",  
                                    borderTop: "1px solid #cccc",    
                                }}
                            >
                            </span>
                        </div>
                    </div>
                </div>
                <div 
                    id="court4"
                    style={{
                        alignItems: "center",
                        display: "flex",
                        flexDirection: "column",
                        gap: "2px",
                        justifyContent: "center",
                        zoom:"0.8",
                    }}
                >
                    <span
                        style={{
                            color: "white",
                            fontFamily: "'Agdasima'",
                            fontSize: "26px",
                            fontWeight: 600,
                        }}
                    >
                        COURT 4
                    </span>
                    <div
                        id="cover"
                        style={{
                            alignItems: "center",
                            display: "flex",
                            flexDirection: "column",
                            gap: "0px",
                            justifyContent: "center",
                        }}
                    >
                        <div 
                            id="top"
                            style={{
                                alignItems: "center",
                                backgroundColor: "white",
                                display: "flex",
                                height: "30px",
                                justifyContent: "center",
                                transform: "perspective(130px) rotateX(20deg)",
                                width: "130px",
                            }}
                        >
                            <span
                                style={{
                                    fontFamily: "'Agdasima'",
                                    fontSize: "12px",
                                    fontWeight: "600",
                                    transform: "perspective(80px) rotateX(-13deg) scaleY(1.4)",
                                }}
                            >
                                GU13-POSITION 01-04
                            </span>
                        </div>
                        <div 
                            id="time"
                            style={{
                                backgroundColor: "rgb(255, 196, 0)",
                                transform: "perspective(80px) rotateX(50deg)",
                                position: "relative",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                zIndex: "100",
                                height: "55px",
                                width: "80px",
                                marginTop: "-20px",
                            }}
                        >
                            <span
                                style={{
                                    fontFamily: "'Agdasima'",
                                    fontWeight: "600",
                                    fontSize: "26px",
                                    transform: "perspective(80px) rotateX(-36deg) scaleY(1.7) scaleX(0.9)",
                                }}
                            >
                                9:00AM
                            </span>
                        </div>
                        <div
                            id="bottom"
                            style={{
                                alignItems: "center",
                                display: "flex",
                                flexDirection: "row",
                                gap: "65px",
                                marginTop: "19px",
                                position: "absolute",
                            }}
                        >
                            <div 
                                id="player1"
                                style={{
                                    alignItems: "center",
                                    backgroundColor: "white",
                                    boxShadow: "0px 0px 5px grey",
                                    display: "flex",
                                    height: "30px",
                                    justifyContent: "center",
                                    transform: "perspective(120px) rotateX(-20deg)",
                                    width: "140px",
                                }}
                            >
                                <span
                                    style={{
                                        fontFamily: "'Agdasima'",
                                        fontWeight: "600",
                                        fontSize: "15px",
                                        transform: "perspective(80px) rotateX(23deg) scaleY(1.4)",
                                    }}
                                >
                                    PLAYER 1
                                </span>
                            </div>
                            <div 
                                id="player2"
                                style={{
                                    alignItems: "center",
                                    backgroundColor: "white",
                                    boxShadow: "0px 0px 5px grey",
                                    display: "flex",
                                    height: "30px",
                                    justifyContent: "center",
                                    transform: "perspective(120px) rotateX(-20deg)",
                                    width: "140px",
                                }}
                            >
                                <span
                                    style={{
                                        fontFamily: "'Agdasima'",
                                        fontSize: "15px",
                                        fontWeight: "600",
                                        transform: "perspective(80px) rotateX(23deg) scaleY(1.4)",
                                    }}
                                >
                                    PLAYER 2
                                </span>
                            </div>
                        </div>
                    </div>
                    <div
                        id="cover"
                        style={{
                            alignItems: "center",
                            display: "flex",
                            flexDirection: "column",
                            gap: "0px",
                            justifyContent: "center",
                        }}
                    >
                        <div 
                            id="top"
                            style={{
                                alignItems: "center",
                                backgroundColor: "white",
                                display: "flex",
                                height: "30px",
                                justifyContent: "center",
                                transform: "perspective(130px) rotateX(20deg)",
                                width: "130px",
                            }}
                        >
                            <span
                                style={{
                                    fontFamily: "'Agdasima'",
                                    fontSize: "12px",
                                    fontWeight: "600",
                                    transform: "perspective(80px) rotateX(-13deg) scaleY(1.4)",
                                }}
                            >
                                GU13-POSITION 01-04
                            </span>
                        </div>
                        <div 
                            id="time"
                            style={{
                                backgroundColor: "rgb(255, 196, 0)",
                                transform: "perspective(80px) rotateX(50deg)",
                                position: "relative",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                zIndex: "100",
                                height: "55px",
                                width: "80px",
                                marginTop: "-20px",
                            }}
                        >
                            <span
                                style={{
                                    fontFamily: "'Agdasima'",
                                    fontWeight: "600",
                                    fontSize: "26px",
                                    transform: "perspective(80px) rotateX(-36deg) scaleY(1.7) scaleX(0.9)",
                                }}
                            >
                                9:30AM
                            </span>
                        </div>
                        <div
                            id="bottom"
                            style={{
                                alignItems: "center",
                                display: "flex",
                                flexDirection: "row",
                                gap: "65px",
                                marginTop: "19px",
                                position: "absolute",
                            }}
                        >
                            <div 
                                id="player3"
                                style={{
                                    alignItems: "center",
                                    backgroundColor: "white",
                                    boxShadow: "0px 0px 5px grey",
                                    display: "flex",
                                    height: "30px",
                                    justifyContent: "center",
                                    transform: "perspective(120px) rotateX(-20deg)",
                                    width: "140px",
                                }}
                            >
                                <span
                                    style={{
                                        fontFamily: "'Agdasima'",
                                        fontWeight: "600",
                                        fontSize: "15px",
                                        transform: "perspective(80px) rotateX(23deg) scaleY(1.4)",
                                    }}
                                >
                                    PLAYER 3
                                </span>
                            </div>
                            <div 
                                id="player4"
                                style={{
                                    alignItems: "center",
                                    backgroundColor: "white",
                                    boxShadow: "0px 0px 5px grey",
                                    display: "flex",
                                    height: "30px",
                                    justifyContent: "center",
                                    transform: "perspective(120px) rotateX(-20deg)",
                                    width: "140px",
                                }}
                            >
                                <span
                                    style={{
                                        fontFamily: "'Agdasima'",
                                        fontSize: "15px",
                                        fontWeight: "600",
                                        transform: "perspective(80px) rotateX(23deg) scaleY(1.4)",
                                    }}
                                >
                                    PLAYER 4
                                </span>
                            </div>
                        </div>
                    </div>
                    <div
                        id="cover"
                        style={{
                            alignItems: "center",
                            display: "flex",
                            flexDirection: "column",
                            gap: "0px",
                            justifyContent: "center",
                        }}
                    >
                        <div 
                            id="top"
                            style={{
                                alignItems: "center",
                                backgroundColor: "white",
                                display: "flex",
                                height: "30px",
                                justifyContent: "center",
                                transform: "perspective(130px) rotateX(20deg)",
                                width: "130px",
                            }}
                        >
                            <span
                                style={{
                                    fontFamily: "'Agdasima'",
                                    fontSize: "12px",
                                    fontWeight: "600",
                                    transform: "perspective(80px) rotateX(-13deg) scaleY(1.4)",
                                }}
                            >
                                GU13-POSITION 01-04
                            </span>
                        </div>
                        <div 
                            id="time"
                            style={{
                                backgroundColor: "rgb(255, 196, 0)",
                                transform: "perspective(80px) rotateX(50deg)",
                                position: "relative",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                zIndex: "100",
                                height: "55px",
                                width: "80px",
                                marginTop: "-20px",
                            }}
                        >
                            <span
                                style={{
                                    fontFamily: "'Agdasima'",
                                    fontWeight: "600",
                                    fontSize: "26px",
                                    transform: "perspective(80px) rotateX(-36deg) scaleY(1.7) scaleX(0.9)",
                                }}
                            >
                                10:00AM
                            </span>
                        </div>
                        <div
                            id="bottom"
                            style={{
                                alignItems: "center",
                                display: "flex",
                                flexDirection: "row",
                                gap: "65px",
                                marginTop: "19px",
                                position: "absolute",
                            }}
                        >
                            <div 
                                id="player5"
                                style={{
                                    alignItems: "center",
                                    backgroundColor: "white",
                                    boxShadow: "0px 0px 5px grey",
                                    display: "flex",
                                    height: "30px",
                                    justifyContent: "center",
                                    transform: "perspective(120px) rotateX(-20deg)",
                                    width: "140px",
                                }}
                            >
                                <span
                                    style={{
                                        fontFamily: "'Agdasima'",
                                        fontWeight: "600",
                                        fontSize: "15px",
                                        transform: "perspective(80px) rotateX(23deg) scaleY(1.4)",
                                    }}
                                >
                                    PLAYER 5
                                </span>
                            </div>
                            <div 
                                id="player6"
                                style={{
                                    alignItems: "center",
                                    backgroundColor: "white",
                                    boxShadow: "0px 0px 5px grey",
                                    display: "flex",
                                    height: "30px",
                                    justifyContent: "center",
                                    transform: "perspective(120px) rotateX(-20deg)",
                                    width: "140px",
                                }}
                            >
                                <span
                                    style={{
                                        fontFamily: "'Agdasima'",
                                        fontSize: "15px",
                                        fontWeight: "600",
                                        transform: "perspective(80px) rotateX(23deg) scaleY(1.4)",
                                    }}
                                >
                                    PLAYER 6
                                </span>
                            </div>
                        </div>
                    </div>
                    <div
                        id="cover"
                        style={{
                            alignItems: "center",
                            display: "flex",
                            flexDirection: "column",
                            gap: "0px",
                            justifyContent: "center",
                        }}
                    >
                        <div 
                            id="top"
                            style={{
                                alignItems: "center",
                                backgroundColor: "white",
                                display: "flex",
                                height: "30px",
                                justifyContent: "center",
                                transform: "perspective(130px) rotateX(20deg)",
                                width: "130px",
                            }}
                        >
                            <span
                                style={{
                                    fontFamily: "'Agdasima'",
                                    fontSize: "12px",
                                    fontWeight: "600",
                                    transform: "perspective(80px) rotateX(-13deg) scaleY(1.4)",
                                }}
                            >
                                GU13-POSITION 01-04
                            </span>
                        </div>
                        <div 
                            id="time"
                            style={{
                                backgroundColor: "rgb(255, 196, 0)",
                                transform: "perspective(80px) rotateX(50deg)",
                                position: "relative",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                zIndex: "100",
                                height: "55px",
                                width: "80px",
                                marginTop: "-20px",
                            }}
                        >
                            <span
                                style={{
                                    fontFamily: "'Agdasima'",
                                    fontWeight: "600",
                                    fontSize: "26px",
                                    transform: "perspective(80px) rotateX(-36deg) scaleY(1.7) scaleX(0.9)",
                                }}
                            >
                                10:30AM
                            </span>
                        </div>
                        <div
                            id="bottom"
                            style={{
                                alignItems: "center",
                                display: "flex",
                                flexDirection: "row",
                                gap: "65px",
                                marginTop: "19px",
                                position: "absolute",
                            }}
                        >
                            <div 
                                id="player7"
                                style={{
                                    alignItems: "center",
                                    backgroundColor: "white",
                                    boxShadow: "0px 0px 5px grey",
                                    display: "flex",
                                    height: "30px",
                                    justifyContent: "center",
                                    transform: "perspective(120px) rotateX(-20deg)",
                                    width: "140px",
                                }}
                            >
                                <span
                                    style={{
                                        fontFamily: "'Agdasima'",
                                        fontWeight: "600",
                                        fontSize: "15px",
                                        transform: "perspective(80px) rotateX(23deg) scaleY(1.4)",
                                    }}
                                >
                                    PLAYER 7
                                </span>
                            </div>
                            <div 
                                id="player8"
                                style={{
                                    alignItems: "center",
                                    backgroundColor: "white",
                                    boxShadow: "0px 0px 5px grey",
                                    display: "flex",
                                    height: "30px",
                                    justifyContent: "center",
                                    transform: "perspective(120px) rotateX(-20deg)",
                                    width: "140px",
                                }}
                            >
                                <span
                                    style={{
                                        fontFamily: "'Agdasima'",
                                        fontSize: "15px",
                                        fontWeight: "600",
                                        transform: "perspective(80px) rotateX(23deg) scaleY(1.4)",
                                    }}
                                >
                                    PLAYER 8
                                </span>
                            </div>
                        </div>
                    </div>
                    <div 
                        id='playersContainer'
                        style={{
                            borderBottom: "4px solid white",
                            borderTop: "2px solid white",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            marginTop: "10px",
                            gap: "0px",
                            height: "73px",
                            width: "336px",
                            backgroundColor: "white",
                        }}
                    >
                        <div
                            id='asianJuniorSelectionTrial'
                            style={{
                                backgroundColor: "black",
                                display: "flex",
                                alignItems: "center",
                                fontSize: "9px",
                                width: "100%",
                                height: "15px",
                            }}
                        >
                            <span
                                style={{
                                    fontFamily: "arial",
                                    fontWeight: "600",
                                    color: "#39B5E0",
                                }}
                            >
                                &nbsp;&nbsp;Asian Junior Selection Trials, SNU 
                            </span>
                            <span
                                style={{
                                    fontFamily: "arial",
                                    fontWeight: "600",
                                    color: "#39B5E0",
                                    marginLeft: "40px",
                                }}
                            >
                                BU17
                            </span>
                            <span
                                style={{
                                    fontFamily: "arial",
                                    fontWeight: "600",
                                    color: "#39B5E0",
                                    marginLeft: "35px",
                                }}
                            >
                                Court: C4 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;11:20
                            </span>
                        </div>
                        <div 
                            id='avalokitSinghScoreContainer'
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "right",
                                alignItems: "center",
                                gap: "0px",
                                width: "100%",
                                height: "29px",
                            }}
                        >
                            <span
                                style={{
                                    width: "146px", 
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "left",
                                    paddingLeft: "4px",
                                    fontSize: "12px",
                                    fontFamily: "arial",
                                    fontWeight: "600",
                                    backgroundColor: "#39B5E0",
                                    height: "100%",   
                                }}
                            >
                                Arihant KS
                            </span>
                            <span
                                style={{
                                    width: "30px", 
                                    display: "flex",
                                    color: "#39B5E0",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    fontSize: "12px",
                                    fontFamily: "arial",
                                    fontWeight: "600",
                                    backgroundColor: "white",
                                    height: "100%",  
                                    borderRight: "1px solid #cccc",   
                                }}
                            >
                                2
                            </span>
                            <span
                                style={{
                                    width: "30px", 
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    fontSize: "12px",
                                    fontFamily: "arial",
                                    fontWeight: "600",
                                    backgroundColor: "white",
                                    height: "100%",   
                                    borderRight: "1px solid #cccc",   
                                }}
                            >
                                11
                            </span>
                            <span
                                style={{
                                    width: "30px", 
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    fontSize: "12px",
                                    fontFamily: "arial",
                                    fontWeight: "600",
                                    backgroundColor: "white",
                                    height: "100%",   
                                    borderRight: "1px solid #cccc",   
                                }}
                            >
                                11
                            </span>
                            <span
                                style={{
                                    width: "30px", 
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    fontSize: "12px",
                                    fontFamily: "arial",
                                    fontWeight: "600",
                                    backgroundColor: "white",
                                    height: "100%",   
                                    borderRight: "1px solid #cccc",   
                                }}
                            >
                                5
                            </span>
                            <span
                                style={{
                                    width: "30px", 
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    fontSize: "12px",
                                    fontFamily: "arial",
                                    fontWeight: "600",
                                    backgroundColor: "white",
                                    height: "100%",      
                                }}
                            >
                            </span>
                        </div>
                        <div 
                            id='yushaNafeesScoreContainer'
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "right",
                                alignItems: "center",
                                width: "100%",
                                height: "29px",
                            }}
                        >
                            <span
                                style={{
                                    width: "146px", 
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "left",
                                    paddingLeft: "4px",
                                    fontSize: "12px",
                                    fontFamily: "arial",
                                    fontWeight: "600",
                                    backgroundColor: "#39B5E0",
                                    borderTop: "1px solid white", 
                                    height: "100%",
                                }}
                            >
                                Arjun Somani
                            </span>
                            <span
                                style={{
                                    width: "30px", 
                                    display: "flex",
                                    color: "#39B5E0",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    fontSize: "12px",
                                    fontFamily: "arial",
                                    fontWeight: "600",
                                    backgroundColor: "white",
                                    height: "100%",  
                                    borderTop: "1px solid #cccc", 
                                    borderRight: "1px solid #cccc",   
                                }}
                            >
                                0
                            </span>
                            <span
                                style={{
                                    width: "30px", 
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    fontSize: "12px",
                                    fontFamily: "arial",
                                    fontWeight: "600",
                                    backgroundColor: "white",
                                    height: "100%", 
                                    borderTop: "1px solid #cccc", 
                                    borderRight: "1px solid #cccc",   
                                }}
                            >
                                8
                            </span>
                            <span
                                style={{
                                    width: "30px", 
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    fontSize: "12px",
                                    fontFamily: "arial",
                                    fontWeight: "600",
                                    backgroundColor: "white",
                                    height: "100%",  
                                    borderTop: "1px solid #cccc",  
                                    borderRight: "1px solid #cccc",   
                                }}
                            >
                                5
                            </span>
                            <span
                                style={{
                                    width: "30px", 
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    fontSize: "12px",
                                    fontFamily: "arial",
                                    fontWeight: "600",
                                    backgroundColor: "white",
                                    height: "100%",  
                                    borderTop: "1px solid #cccc",  
                                    borderRight: "1px solid #cccc",   
                                }}
                            >
                                1
                            </span>
                            <span
                                style={{
                                    width: "30px", 
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    fontSize: "12px",
                                    fontFamily: "arial",
                                    fontWeight: "600",
                                    backgroundColor: "white",
                                    height: "100%",  
                                    borderTop: "1px solid #cccc",    
                                }}
                            >
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div 
                id='banyanboard.com'
                style={{
                    marginTop: "0px",
                }}
            >
                <span
                    style={{
                        color: "white",
                        fontSize: "16px",
                        fontFamily: "'Teko'",
                    }}
                >
                    WWW.BANYANBOARD.COM
                </span>
            </div>
            <div 
                id='qrCode'
                style={{
                    marginTop: "-54px",
                    marginLeft: "96%",
                }}
            >
                <img
                    style={{
                        height: "50px",
                    }}
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAb1BMVEX///8AAADn5+fU1NQFBQWKioqgoKBBQUGFhYW8vLxmZmaBgYE3Nzdra2ukpKS4uLjCwsLl5eXv7+/5+flXV1fZ2dk+Pj6SkpItLS05OTkqKirx8fFLS0tiYmLd3d0ZGRmampojIyPJycl5eXmtra2EOkclAAAGY0lEQVR4nO2d6VryMBBGFT6QpVJkkR1BuP9r/H7YzFTzMiQ0ZdH3/EyaaU7r8xCzTJ+eCCGEEPKneGtU5m1sxR1J0Qi0lcpxio5AwecENP24Dak8SNkBNJXKZoqOIMXG+WbnMQ07UtYBTdMaNvyO0DAMGtKQhsHQ8GKA4Ugqb2/474vn9awVx0SaqmFe0D1KZdnQlfVdDK1sSuUksh+ztTS13+EM1JoMwDsEzxW9w5EfTd/hILYjszPv0NGKDdy+3BD0RA3bsR1p0ZCGp6AhDb9DQ4P7MexLmfl7eAXDvN85zfFyw2a3YNhy0fqm4cDoRz+vYIjmU4Te5YbKQmpNw43VEX048YZ9FNDxmsLwJcywZ3VE49KQhjSkIQ1/p+H8qoZujqNs+O8k3wz9eZqRYwrmaWbz7Iv9VK4rGboGZUOjI2XDsHmaJO9QVcGzDpynue+/UhC3wv8WNKQhDWlIQxo+pqEUzcG9lOuO2uoxfDENf8PIm4Y0pCENaWgQOKufxNCc1a8yizHY9E6y0S0baBbjuSiDhm/Ngm3mLisb+rMYM6sjumUjfhYjkOh3iP42Sob+OwzkNuuHyDBwTxQNPWhIw5PQ0IOGd2do7r6sYBi9+zJ0TDMZtKMY9MLGNNudNik4Lq0xTS+2I5PAMU0FzHfYlbKulJnj0grQ8GJoWEDD6tDwYmhYcBvDxKdkpUgNh1I2rN0QnZIdNxOgJ53lXh+vxXzK61rK1lL24Rsm7khtRD/1+ruUGBrS8P6hIQ3vHxrewBCNS3V0BXaFKG3QtBTX3/PaBUEEe9Qml41AZW6EPWeYVTD0oSENaUhDGtLwfE9ubbh/Kcg+pXby7gqlaCx52NqLl5/MpbIJ4g5RBxzTuRdNWaqhf1l2lERwtmFgbhN7FQw84ehVu2h01c7O1xbYk2hDdLIrLYlXSGlIwxqgIQ1/8MCGgT15OMPRwc8VogxdNhIdcL1J4pO2q8v10KtUHsA5YBQ3Fh0XNXJXtJObgtO3Z9jL0wGV5rmnlfkOdbwby15ioHXJeAJH3oEnuxRdP4wlA4b2yJuGNKQhDWlYt+GyJsO0v4ehhk0/S1s/l7EESOGGxjQlQ39MI3ngSnFlrNIGSzk7f+wDxjQ5TKcPyMET066DSnO3MnqHZs69KbjDNLDrgdRvGHhaXQF//VWgIQ2/Q0MPGibg9xsOwS1WUgsqj0aw0v/46DszK7/Bti7Dhqzl6M4SWctZ6drTyi0q6YNYSkv9Zc6KoveNa9BQGy3avL/8BA3kTMPPzIsxD93nba4f2n9NUvRuPtd3ECTWsAsaXNMw9Dw+DWlIQxrS8BEM0akgNQTzNOcMjdwmygIESWEYOp9RgbCeo1EbAuSn+ai3/+cJNIRbe3xAjqHsfKt6oSENv0PDW0BDGn4HGNp5URF1nQNGyDngCVi30I6ovhpKmraD31LzwMFzwHWd5UaYe4R1NLgDhlbL0orPFb54bF4WuM8b5U00DUN3fdGQhjSkIQ0fwdA+M1OfYdJ8bZKbbQY2jxwGBi3rSzrPcpkueG1d+rdjaL62JDn3BHQCKxAzU7KegIqfTUySNxHETWuIdn3RkIY0pCEN/6DhToJM/MqFVKLdMaGGg97rSXp6/wqGQ5lZkaLJ1J+n2boi3WzzIT1Zg7hX+DZCoCHYa/XqxyhhRktsGP29J7snUtTzY9CQhjSkIQ1/u+HKCAENH+X3EDSwz3KbHQZxddRWZVx6z4ZpRt40pCENaUjDv2IYPovhVjXKht6qii6vlA39lZll9pM5ypI2cqBErvtF0XT56S4by87cbOzKcnevxT56ZSbFqM1mbtygdGLM/MJjXy6bnXmHtzA093nf+iudNKQhDWlIw+qGgbP6NuaZmeRfPPYNj30D/T1GhkPH55PPVGpbEk5iZB1X1JbLZq5IT4F/yGU7uWznimC+trq+YYn2Y6PcJlKkf/26i2XqX4ZW1+x8bbf5Sqc5m2h+GzM+xxANaUhDGtIwpWFgTnalwhePwe/hRor0yQX+Hp4zdHMc61krjon1xeO9i9bR+3ekQd/F6HTzAh0EbV1RV3o08+O2dtLUPt9c/y5onU8xv1qNCByX2tRviHIMBRoG/m9BQxrSkIY0rNuw/lOyKF9boCHYQav0zaZlxUZl3sZWNB2hjfxK+1A3aiAE5kchhBBCyC/mPwSTx+NuBm9PAAAAAElFTkSuQmCC">
                </img>
            </div>
    	</div>
  	);
}

export default App;
