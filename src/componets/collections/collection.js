import React, { useEffect, useState } from 'react';
import { Box, Button, Grid, Typography } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { motion } from 'framer-motion';
import LeftBackgroundImage from '../../assets/images/Frame.svg';
import RightBackgroundImage from '../../assets/images/Frame1.svg';
import MainImage from '../../assets/images/image-product.svg';
import ShopIcon from "../../assets/images/shopIcon.svg";
import SvgFlowerComponent from '../../assets/animationComponents/flower';
import SvgFlower2Component from '../../assets/animationComponents/flower2';

const Collection = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
    const [headerText, setHeaderText] = useState('');
    const [paragraphText, setParagraphText] = useState('');

    const fullHeaderText = "Collections";
    const fullParagraphText = "you can explore and shop many different collections from various brands here.";
    useEffect(() => {
        let index = 0;
        const headerIntervalId = setInterval(() => {
            setHeaderText((prev) => prev + fullHeaderText.charAt(index));
            index += 1;
            if (index > fullHeaderText.length) clearInterval(headerIntervalId);
        }, 100);

        return () => clearInterval(headerIntervalId);
    }, [fullHeaderText]);
    useEffect(() => {
        let index = 0;
        const paragraphIntervalId = setInterval(() => {
            setParagraphText((prev) => prev + fullParagraphText.charAt(index));
            index += 1;
            if (index > fullParagraphText.length) clearInterval(paragraphIntervalId);
        }, 50);

        return () => clearInterval(paragraphIntervalId);
    }, [fullParagraphText]);

    return (
        <Box textTransform="capitalize"
            sx={{
                position: 'relative',
                overflow: 'hidden',
                textAlign: 'center',
                paddingLeft: {
                    xs: "20px",
                    sm: "80px",
                    md: "100px",
                    lg: "300px"
                },
                paddingRight: {
                    xs: "20px",
                    sm: "80px",
                    md: "100px",
                    lg: "300px"
                },
                paddingBottom: "60px",
                backgroundColor: "#1E28320D;"
            }}
        >
            <Box
                component={SvgFlowerComponent}
                alt="Left Background"
                sx={{
                    position: 'absolute',
                    left: 0,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    width: isMobile ? '20%' : isTablet ? '10%' : '132px',
                    height: 'auto',
                    zIndex: 0,
                }}
            />

            <Box
                component={SvgFlower2Component}
                alt="Right Background"
                sx={{
                    position: 'absolute',
                    right: 0,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    width: isMobile ? '20%' : isTablet ? '10%' : '195px',
                    height: '262px',
                    zIndex: 0,
                }}
            />

            <Grid container spacing={2} sx={{ position: 'relative', zIndex: 1 }}>
                <Grid item xs={12} sm={6} md={6} lg={6}
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: { lg: "52px", md: "32px", sm: "16px", xs: "16px" },
                        textAlign: "left",
                        marginTop: {
                            lg: "152px",
                            md: "102px",
                            sm: "40px",
                            xs: "20px"
                        }
                    }}>
                    <Typography
                        sx={{
                            fontSize: isMobile ? "36px" : isTablet ? "25px" : "70px",
                            lineHeight: "55px",
                            fontWeight: "300",
                            fontFamily: "var(--English-font)",
                            textAlign: "left",
                            color: "#000000"
                        }}
                    >
                        {headerText}
                    </Typography>

                    <Typography
                        sx={{
                            fontSize: isMobile ? "20px" : isTablet ? "16px" : "30px",
                            lineHeight: "55px",
                            fontWeight: "400",
                            fontFamily: "var(--English-font)",
                            textAlign: "left",
                            color: "#000000",
                            minHeight: {
                                lg:"200px",
                                md:"200px",
                                sm:"100px",
                                xs:"100px"
                            }
                        }}
                    >
                        {paragraphText}
                    </Typography>

                    <Typography>
                        <motion.div
                            whileHover={{
                                scale: 1.05,
                            }}
                            whileTap={{
                                scale: 0.95,
                            }}
                            transition={{ type: "spring", stiffness: 300 }}
                            style={{
                                maxWidth:"200px"

                            }}
                        >
                            <Button
                                sx={{
                                    fontFamily: "var(--English-font)",
                                    background: "#1E2832",
                                    color: "#ffffff",
                                    display: "flex",
                                    alignItems: "center",
                                    padding: "8px 16px",
                                    '&:hover': {
                                        background: "#3A434B",
                                    },
                                }}
                            >
                                <img
                                    src={ShopIcon}
                                    alt="Shop Icon"
                                    style={{ width: "20px", height: "20px", marginRight: "8px" }}
                                />
                                Shop Now
                            </Button>
                        </motion.div>
                    </Typography>
                </Grid>

                <Grid item xs={12} sm={6} md={6} lg={6}
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: {
                            lg: "81px",
                            md: "40px",
                            sm: "40px",
                            xs: "0px"
                        }
                    }}>
                    <Box
                        component="img"
                        src={MainImage}
                        alt="Main"
                        sx={{
                            width: {
                                lg: "100%",
                                md: "324px",
                                sm: "250px",
                                xs: "200px",
                            },
                            height: {
                                lg: "auto",
                                md: "400px",
                                sm: "300px",
                                xs: "250px",
                            },
                            borderRadius: '8px',
                            objectFit: 'cover',
                        }}
                    />
                </Grid>
            </Grid>
        </Box>
    );
};

export default Collection;
