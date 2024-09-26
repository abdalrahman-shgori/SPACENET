import React, { useEffect, useRef, useState } from 'react';
import { Box, Typography, TextField, Button, useMediaQuery, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import product1 from "../../assets/images/product1.svg";
import product2 from "../../assets/images/product2.svg";
import product3 from "../../assets/images/product3.svg";
import product4 from "../../assets/images/product4.svg";
import product5 from "../../assets/images/product5.svg";

const images = [
    { img: product1 },
    { img: product2 },
    { img: product3 },
    { img: product4 },
    { img: product5 },
];

const FollowProducts = () => {
    const [isFocused, setIsFocused] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const observerRef = useRef();

    const expandedWidth = isSmallScreen ? '200px' : '640px';
    const initialWidth = '180px';

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            });
        });

        if (observerRef.current) {
            observer.observe(observerRef.current);
        }

        return () => {
            if (observerRef.current) {
                observer.unobserve(observerRef.current);
            }
        };
    }, []);

    return (
        <Box
            ref={observerRef}
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: '20px',
                textAlign: 'center',
                marginTop: {
                    lg: '100px',
                    md: '50px',
                    sm: "40px",
                    xs: "20px"
                },
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
            }}
        >
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
                transition={{ duration: 1 }}
            >
                <Typography
                    sx={{
                        fontSize: {
                            lg: '50px',
                            md: '50px',
                            sm: "40px",
                            xs: "26px"
                        },
                        lineHeight: '58px',
                        fontWeight: '500',
                        fontFamily: 'var(--English-font)',
                        paddingBottom: {
                            lg: '60px',
                            md: '60px',
                            sm: "30px",
                            xs: "26px"
                        },
                    }}
                >
                    Follow products and discounts on Instagram
                </Typography>
            </motion.div>

            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '10px',
                    flexWrap: 'wrap',
                    marginBottom: '20px',
                }}
            >
                {images.map((image, index) => (
                    <motion.div
                        key={index}
                        initial={{ rotateY: 180, opacity: 0 }}
                        animate={isVisible ? { rotateY: 0, opacity: 1 } : { rotateY: 180, opacity: 0 }}
                        exit={{ rotateY: 180, opacity: 0 }}
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: 'spring', stiffness: 300, duration: 1 }}
                    >
                        <img
                            src={image.img}
                            alt={`Instagram Image ${index + 1}`}
                            style={{ width: '150px', height: '150px', objectFit: 'cover' }}
                        />
                    </motion.div>
                ))}
            </Box>

            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
                transition={{ duration: 1, delay: 0.5 }}
            >
                <Typography
                    sx={{
                        marginBottom: '10px',
                        marginTop: {
                            lg: '70px',
                            md: '50px',
                            sm: "40px",
                            xs: "20px"
                        },
                        fontSize: {
                            lg: '50px',
                            md: '50px',
                            sm: "40px",
                            xs: "26px"
                        },
                        fontWeight: '500',
                        lineHeight: '58px',
                        fontFamily: 'var(--English-font)',
                    }}
                >
                    Or subscribe to the newsletter
                </Typography>
            </motion.div>

            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '10px',
                    marginTop: {
                        lg: "74px",
                        md: "50px",
                        sm: "40px",
                        xs: "20px"
                    }
                }}
            >
                <motion.div
                    initial={{ width: initialWidth }}
                    animate={{ width: isFocused ? expandedWidth : initialWidth }}
                    transition={{ duration: 0.3 }}
                >
                    <TextField
                        type="email"
                        placeholder="Email Address.."
                        variant="standard"
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setIsFocused(false)}
                        InputProps={{
                            disableUnderline: false,
                        }}
                        sx={{
                            width: '100%',
                            '& .MuiInputBase-root': {
                                fontSize: '16px',
                            },
                            '& .MuiInput-underline:before': {
                                borderBottomColor: '#000',
                            },
                            '& .MuiInput-underline:hover:before': {
                                borderBottomColor: '#1976d2',
                            },
                            '& .MuiInput-underline:after': {
                                borderBottomColor: '#1976d2',
                            },
                        }}
                    />
                </motion.div>

                {/* Animated Submit Button */}
                <motion.div
                    whileHover={{ scale: 1.1, color: '#fff' }}
                    transition={{ type: 'spring', stiffness: 300 }}
                >
                    <Button
                        sx={{
                            position: 'relative',
                            background: 'transparent',
                            border: 'none',
                            padding: '10px 20px',
                            fontSize: '16px',
                            color: '#1E2832',
                            textTransform: 'none',
                            '&:before': {
                                content: '""',
                                position: 'absolute',
                                bottom: 8,
                                left: 0,
                                right: 0,
                                height: '1px',
                                backgroundColor: '#000',
                                transition: 'background-color 0.3s ease',
                            },
                            '&:hover:before': {
                                backgroundColor: '#1976d2',
                            },
                            '&:hover': {
                                backgroundColor: 'transparent',
                            },
                        }}
                    >
                        Submit
                    </Button>
                </motion.div>
            </Box>
        </Box>
    );
};

export default FollowProducts;
