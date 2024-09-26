import React, { useEffect, useState, useRef } from 'react';
import { Box, Typography, CircularProgress, Grid } from '@mui/material';
import { motion } from 'framer-motion';

const Categories = () => {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [visibleItems, setVisibleItems] = useState(new Set());
    const observerRef = useRef();

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await fetch('https://perfume.msalla.com/api/categories');
                if (!response.ok) {
                    throw new Error('Failed to fetch categories');
                }
                const data = await response.json();
                setCategories(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchCategories();
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const index = entry.target.getAttribute('data-index');
                    setVisibleItems(prev => new Set(prev).add(index));
                    observer.unobserve(entry.target);
                }
            });
        });

        const items = document.querySelectorAll('.category-item');
        items.forEach((item, index) => {
            item.setAttribute('data-index', index);
            observer.observe(item);
        });

        return () => {
            observer.disconnect();
        };
    }, [categories]);

    if (loading) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <CircularProgress />
            </Box>
        );
    }

    if (error) {
        return (
            <Typography variant="h6" color="error" align="center">
                {error}
            </Typography>
        );
    }

    return (
        <Box sx={{
            background: "#FFFFFF",
            paddingLeft: { xs: "20px", sm: "80px", md: "100px", lg: "300px" },
            paddingRight: { xs: "20px", sm: "80px", md: "100px", lg: "300px" },
            paddingTop: { lg: "73px", md: "73px", sm: "40px", xs: "24px" }
        }}>
            <Typography
                align="left"
                sx={{
                    marginBottom: '20px',
                    color: "#1E2832",
                    fontSize: { lg: "32px", md: "32px", sm: "24px", xs: "24px" },
                    fontWeight: "600",
                    lineHeight: "44px",
                    fontFamily: "var(--English-font)",
                }}>
                Categories
            </Typography>
            <Grid container justifyContent="center"
             sx={{
                 gap: { lg: "100px", md: "100px", sm: "0px", xs: "0px" },
                 paddingBottom:"10px"
                  }}>
                {categories.map((category, index) => (
                    <Grid item xs={6} sm={4} md={3} lg={2} key={category.id}>
                        <motion.div
                            className="category-item"
                            initial={{ opacity: 0, y: 50, rotate: -5 }}
                            animate={visibleItems.has(index.toString()) ? {
                                opacity: 1,
                                y: 0,
                                rotate: 0,
                                transition: {
                                    duration: 0.6,
                                    type: "spring",
                                    stiffness: 70,
                                    delay: index * 0.1
                                }
                            } : { opacity: 0, y: 50, rotate: -5 }}
                            whileHover={{ scale: 1.1}}
                        >
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    textAlign: 'center',
                                    justifyContent: 'center',
                                    cursor: 'pointer',
                                }}
                            >
                                <motion.img
                                    src={category.img}
                                    alt={category.arabic}
                                    style={{
                                        width: '100px',
                                        height: '100px',
                                        objectFit: 'cover',
                                        borderRadius: '8px',
                                    }}
                                    whileHover={{ rotate: 5 }}
                                />
                                <Typography
                                    sx={{
                                        marginTop: '10px',
                                        fontSize: "16px",
                                        fontWeight: "600",
                                        fontFamily: "var(--English-font)",
                                        lineHeight: "21.7px",
                                        color: "#000000"
                                    }}>
                                    {category.arabic}
                                </Typography>
                            </Box>
                        </motion.div>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default Categories;
