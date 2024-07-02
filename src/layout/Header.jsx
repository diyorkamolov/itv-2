import React, { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { NavLink as RouterNavLink } from 'react-router-dom';

import FilmsPage from '../pages/Films.Page/FilmsPage';
import ObunalarPage from '../pages/Subscribtions.Page/ObunalarPage';
import SeriesPage from '../pages/Series.Page/SeriesPage';

const HideAppBar = () => {
    const [activeLink, setActiveLink] = useState(null);
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            setVisible(currentScrollPos === 0);
            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [prevScrollPos]);

    const handleLinkHover = (index) => {
        setActiveLink(index);
    };

    const handleLinkLeave = () => {
        setActiveLink(null);
    };

    return (
        <React.Fragment>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    backgroundColor: visible ? "transparent" : "#1D1F1E", // Change background color based on visibility
                    height: '80px',
                    transition: 'background-color 0.3s ease',
                    boxShadow: "none",
                }}
            >
                <Toolbar>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', marginLeft: '100px' }}>
                        <Box sx={{ marginLeft: '90px', marginTop: "12px" }}>
                            <svg width="66" height="33" viewBox="0 0 66 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.249 8.251a4.126 4.126 0 100-8.25 4.126 4.126 0 000 8.25zM57.748 10.607L49.5 24.749l-8.252-14.142H33L45.374 33h8.252L66 10.607h-8.252zM0 10.607v8.251a4.117 4.117 0 014.117 4.117v10.02h8.257V22.98A12.39 12.39 0 000 10.607zM36.1 24.748h-7.814a4.117 4.117 0 01-4.117-4.116v-1.765h8.684l-4.567-8.26h-4.117v-6.49h-8.234v16.509A12.39 12.39 0 0028.31 33h12.374l-4.585-8.252z" fill="#52B038"></path>
                            </svg>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', fontFamily: 'inherit', marginRight: '40%' }}>
                            <Typography variant="body1" component="div" sx={{ mr: 2 }}>
                                <RouterNavLink exact to="/" activeClassName="active" onMouseEnter={() => handleLinkHover(0)} onMouseLeave={handleLinkLeave} style={{ color: activeLink === 0 ? '#FFFFFF80' : 'lightgray', textDecoration: 'none' }}>Bosh sahifa</RouterNavLink>
                            </Typography>
                            <Typography variant="body1" component="div" sx={{ mr: 2 }}>
                                <RouterNavLink activeClassName="active" onMouseEnter={() => handleLinkHover(1)} onMouseLeave={handleLinkLeave} style={{ color: activeLink === 1 ? '#FFFFFF80' : 'lightgray', textDecoration: 'none', marginRight: '20px' }}>TV</RouterNavLink>
                            </Typography>
                            <Typography variant="body1" component="div" sx={{ mr: 2 }}>
                                <RouterNavLink to="/films" activeClassName="active" onMouseEnter={() => handleLinkHover(2)} onMouseLeave={handleLinkLeave} style={{ color: activeLink === 2 ? '#FFFFFF80' : 'lightgray', textDecoration: 'none', marginRight: '20px' }}>Films</RouterNavLink>
                            </Typography>
                            <Typography variant="body1" component="div" sx={{ mr: 2 }}>

                            <RouterNavLink to="/series" activeClassName="active" onMouseEnter={() => handleLinkHover(3)} onMouseLeave={handleLinkLeave} style={{ color: activeLink === 3 ? '#FFFFFF80' : 'lightgray', textDecoration: 'none', marginRight: '20px' }}>Series</RouterNavLink>
                            </Typography>
                            <Typography variant="body1" component="div" sx={{ mr: 2 }}>
                                <RouterNavLink activeClassName="active" onMouseEnter={() => handleLinkHover(4)} onMouseLeave={handleLinkLeave} style={{ color: activeLink === 4 ? '#FFFFFF80' : 'lightgray', textDecoration: 'none', marginRight: '20px' }}>Multfilmlar</RouterNavLink>
                            </Typography>
                            <Typography variant="body1" component="div" sx={{ mr: 2 }}>
                                <RouterNavLink to="/obunalar" activeClassName="active" onMouseEnter={() => handleLinkHover(5)} onMouseLeave={handleLinkLeave} style={{ color: activeLink === 5 ? '#FFFFFF80' : 'lightgray', textDecoration: 'none', marginRight: '20px' }}>Obunalar</RouterNavLink>
                            </Typography>
                            <Typography variant="body1" component="div">
                                <RouterNavLink activeClassName="active" onMouseEnter={() => handleLinkHover(6)} onMouseLeave={handleLinkLeave} style={{ color: activeLink === 6 ? '#FFFFFF80' : 'lightgray', textDecoration: 'none', marginRight: '20px' }}>Boshqalar</RouterNavLink>
                            </Typography>
                        </Box>
                        <Box sx={{ marginTop: "25px", color: "white", display: "flex", gap: "5px", }}>
                            <button
                                style={{
                                    width: "40px",
                                    height: "40px",
                                    border: "none",
                                    backgroundColor: "rgba(203, 203, 203, 0.1)",
                                    borderRadius: "10px",
                                    color: "white",
                                    marginLeft: "5px",
                                    cursor: "default",
                                }}
                            >
                                UZ
                            </button>
                            <button
                                style={{
                                    width: "40px",
                                    height: "40px",
                                    border: "none",
                                    backgroundColor: "rgba(203, 203, 203, 0.1)",
                                    borderRadius: "10px",
                                    color: "white",
                                    marginLeft: "5px",
                                    cursor: "default",
                                }}
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M19.728 9.476c0 1.381.365 2.196 1.168 3.134.61.692.804 1.579.804 2.542 0 .961-.316 1.874-.949 2.615a4.99 4.99 0 01-3.19 1.555c-1.729.147-3.458.271-5.21.271a45.81 45.81 0 01-5.21-.271 4.985 4.985 0 01-3.191-1.555A3.977 3.977 0 013 15.152c0-.963.196-1.85.804-2.542.828-.938 1.17-1.752 1.17-3.134v-.469c0-1.85.46-3.06 1.41-4.244C7.798 3.036 10.062 2 12.302 2h.099c2.288 0 4.625 1.086 6.014 2.887.9 1.16 1.314 2.319 1.314 4.12v.469zM9.13 21.866c0-.553.508-.807.979-.915.55-.117 3.9-.117 4.45 0 .47.108.979.362.979.916-.028.527-.337.995-.765 1.292a3.997 3.997 0 01-1.884.804c-.376.049-.746.05-1.109 0a3.98 3.98 0 01-1.885-.805c-.428-.296-.738-.764-.765-1.291z"
                                    ></path>
                                </svg>
                            </button>

                            <button
                                style={{
                                    width: "40px",
                                    height: "40px",
                                    border: "none",
                                    backgroundColor: "rgba(203, 203, 203, 0.1)",
                                    borderRadius: "10px",
                                    color: "white",
                                    marginLeft: "5px",
                                    cursor: "default",
                                }}
                            >
                                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M.832 11.237C.832 5.491 5.441.833 11.126.833c2.73 0 5.348 1.097 7.278 3.048a10.46 10.46 0 013.015 7.356c0 5.746-4.608 10.404-10.293 10.404S.832 16.983.832 11.237zm20.416 8.382l3.066 2.474h.053c.62.627.62 1.643 0 2.27a1.576 1.576 0 01-2.246 0l-2.544-2.915a1.298 1.298 0 010-1.83 1.183 1.183 0 011.67 0z"
                                        fill="currentColor"
                                    ></path>
                                </svg>
                            </button>
                            <button
                                style={{
                                    width: "40px",
                                    height: "40px",
                                    border: "none",
                                    backgroundColor: "rgba(203, 203, 203, 0.1)",
                                    borderRadius: "10px",
                                    color: "white",
                                    marginLeft: "5px",
                                    cursor: "default",
                                }}
                            >
                                <svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M12.534 10.208H2.5M10.094 7.778l2.44 2.43-2.44 2.43"
                                        stroke="#fff"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    ></path>
                                </svg>
                            </button>
                        </Box>
                    </Box>
                </Toolbar>
            </AppBar>
            <Toolbar />
            <Container>
                <Box sx={{ my: 2 }}>
                    <FilmsPage />
                    <ObunalarPage />
                    <SeriesPage />
                </Box>
            </Container>
        </React.Fragment>
    );
};

export default HideAppBar;
