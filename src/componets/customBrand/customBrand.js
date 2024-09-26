import React, { useRef } from 'react';
import { Box, Typography } from '@mui/material';
import { motion, useInView } from 'framer-motion';
import BgImg from "../../assets/images/background.svg";
import Zara from "../../assets/images/zara.svg";
import ZaraLogo from "../../assets/images/zaraLogo.svg";

const BackgroundImageWithText = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <Box
            ref={ref}
            textTransform="capitalize"
            sx={{
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                height: '770px',
                backgroundImage: `url(${BgImg})`,
                backgroundSize: 'cover',
                backgroundPosition: {
                    lg: "center",
                    md: "center",
                    sm: "center",
                    xs: "start"
                },
                color: 'white',
                overflow: 'hidden',
            }}
        >
            <img
                style={{
                    height: 'auto',
                    objectFit: 'contain'
                }}
            />
            <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 1 }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: "flex-start",
                        paddingLeft: "20px",
                        position: 'relative',
                        zIndex: 1,
                        width: {
                            lg: "503px",
                            md: "400px",
                            sm: "340px",
                            xs: "403px"
                        },
                        height: "187px",
                        marginRight: {
                            lg: '220px',
                            md: '20px',
                            sm: "40px",
                            xs: "10px"
                        },
                        gap: "55px"
                    }}
                >
                    <img
                        src={ZaraLogo}
                        alt="Zara Logo"
                        width="191"
                    />

                    <Typography
                        sx={{
                            fontSize: {
                                lg: "26px",
                                md: "26px",
                                sm: "16px",
                                xs: "16px"
                            },
                            fontWeight: "400",
                            lineHeight: {
                                lg: "40px",
                                md: "40px",
                                sm: "30px",
                                xs: "30px"
                            },
                            fontFamily: "var(--English-font)",
                            color: "#FFFFFF"
                        }}
                    >
                        Lustrous yet understated. The new evening
                        wear collection exclusively offered at the
                        reopened Giorgio Armani boutique in Los
                        Angeles.
                    </Typography>

                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Box
                            sx={{
                                background: "#FFFFFF",
                                padding: "19px 29px",
                                cursor: "pointer",
                                transition: "background-color 0.3s",
                                '&:hover': {
                                    backgroundColor: '#F0F0F0'
                                }
                            }}
                        >
                            <Typography
                                sx={{
                                    fontSize: "24px",
                                    fontWeight: "400",
                                    lineHeight: "33px",
                                    fontFamily: "var(--English-font)",
                                    color: "#1E2832"
                                }}
                            >
                                See Collection
                            </Typography>
                        </Box>
                    </motion.div>
                </Box>
            </motion.div>
            <motion.img
                src={Zara}
                alt="Zara"
                initial={{ opacity: 0, x: 100 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 1 }}
                style={{
                    position: 'absolute',
                    top: '10px',
                    right: '10px',
                    width: '732px',
                    height: 'auto',
                    objectFit: 'contain'
                }}
            />
        </Box>
    );
};

export default BackgroundImageWithText;
