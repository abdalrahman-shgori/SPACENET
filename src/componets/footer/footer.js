import React from 'react';
import { Box, Typography, Grid, IconButton } from '@mui/material';
import { Facebook, Twitter, LinkedIn, Instagram, ArrowUpward } from '@mui/icons-material';
import Logo from "../../assets/images/logo.svg";
import IconPayments from "../../assets/images/icons_payment 1.svg";
const footerTextStyle = {
    fontSize: "14px",
    color: "#1E2832",
    fontWeight: "400",
    lineHeight: "400"
}

const footerTextStyle2 = {
    fontSize: "16px",
    fontWeight: "600",
    lineHeight: "21px",
    color: "#000000"
}
const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <>
            <Box textTransform="capitalize" sx={{
                backgroundColor: '#F9F9F9',
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
                marginTop: "40px"

            }}

            >
                <Box sx={{ padding: '50px 20px', textAlign: 'left' }}>
                    <Grid container spacing={4}>
                        <Grid item xs={12} md={3.8}>
                            <img src={Logo} alt="Company Logo" style={{ width: '150px', marginBottom: '20px' }} />
                            <Typography variant="body1"
                                sx={{
                                    marginBottom: '20px',
                                    color: '#1E2832BF',
                                    fontSize: "16px",
                                    fontWeight: "400",
                                    lineHeight: "21px",
                                    fontFamily: "var(--English-font)",
                                }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                                dolore magna aliqua.
                            </Typography>
                            <Box
                                sx={{
                                    display: "flex",
                                    gap: { xl: "30px" }
                                }}
                            >
                                <IconButton>
                                    <Facebook />
                                </IconButton>
                                <IconButton>
                                    <Twitter />
                                </IconButton>
                                <IconButton>
                                    <LinkedIn />
                                </IconButton>
                                <IconButton>
                                    <Instagram />
                                </IconButton>
                            </Box>
                        </Grid>

                        <Grid item xs={6} md={2.7}>
                            <Typography variant="h6"
                                sx={{
                                    marginBottom: '20px',
                                    footerTextStyle2
                                }}>
                                Catalog
                            </Typography>
                            {['Necklaces', 'hoodies', 'Jewelry Box', 't-shirt', 'jacket'].map((item, index) => (
                                <Typography key={index} variant="body2"
                                    sx={{
                                        marginBottom: '10px',
                                        footerTextStyle
                                    }}>
                                    {item}
                                </Typography>
                            ))}
                        </Grid>

                        <Grid item xs={6} md={2.8}>
                            <Typography variant="h6"
                                sx={{
                                    marginBottom: '20px',
                                    footerTextStyle2
                                }}>About Us</Typography>
                            {['Our Producers', 'Sitemap', 'FAQ', 'About Us', 'Terms & Conditions'].map((item, index) => (
                                <Typography key={index} variant="body2"
                                    sx={{
                                        marginBottom: '10px',
                                        footerTextStyle

                                    }}>
                                    {item}
                                </Typography>
                            ))}
                        </Grid>

                        <Grid item xs={12} md={2.7}>
                            <Typography variant="h6"
                                sx={{
                                    marginBottom: '20px',
                                    footerTextStyle2
                                }}>Customer Services</Typography>
                            {['Contact Us', 'Track Your Order', 'Product Care & Repair', 'Book an Appointment', 'Shipping & Returns'].map((item, index) => (
                                <Typography key={index} variant="body2"
                                    sx={{
                                        marginBottom: '10px',
                                        footerTextStyle

                                    }}>
                                    {item}
                                </Typography>
                            ))}
                        </Grid>
                    </Grid>
                </Box>



            </Box>
            <Box
                sx={{
                    borderTop: '1px solid #ddd',
                    padding: '10px 0',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    background: "#1E2832",
                    paddingLeft: {
                        xs: "10px",
                        sm: "40px",
                        md: "100px",
                        lg: "300px"
                    },
                    paddingRight: {
                        xs: "10px",
                        sm: "40px",
                        md: "100px",
                        lg: "300px"
                    },

                }}
            >
                <Box
                    sx={{
                        paddingLeft: {
                            lg: "20px",
                            md: "20px",
                            sm: "10px",
                            xs: "10px"
                        },
                        paddingRight: {
                            lg: "20px",
                            md: "20px",
                            sm: "10px",
                            xs: "10px"
                        },

                    }} >
                    <Typography variant="body2"
                        sx={{
                            color: '#FFFFFF',
                            fontSize: {
                                lg: "16px",
                                md: "16px",
                                sm: "16px",
                                xs: "12px"
                            },
                            fontWeight: "400",
                            lineHeight: "22px",
                            fontFamily: "var(--English-font)",

                        }}>
                        © 2022 Coral, Inc.
                    </Typography>
                </Box>
                <Box sx={{ flex: 1, textAlign: 'center' }}>
                    <Box
                        component="img"
                        src={IconPayments}
                        alt="Visa Logo"
                        sx={{
                            width: '100%',
                            maxWidth: {
                                lg: '283px',
                                md: '283px',
                                sm: '100%',
                                xs: '100%'
                            },
                            marginRight: '10px'
                        }}
                    />
                </Box>


                <Box sx={{
                    textAlign: 'right',
                    paddingRight: {
                        lg: "20px",
                        md: "20px",
                        sm: "10px",
                        xs: "10px"
                    },

                }}>
                    <IconButton onClick={scrollToTop} sx={{ color: '#1976d2' }}>
                        <Typography variant="body2"
                            sx={{
                                color: '#FFFFFF',
                                fontSize: {
                                    lg: "16px",
                                    md: "16px",
                                    sm: "16px",
                                    xs: "12px"
                                },
                                fontWeight: "400",
                                lineHeight: "22px",
                                fontFamily: "var(--English-font)",

                            }}>
                            Scroll To Top
                        </Typography>
                        <ArrowUpward sx={{ color: "#FFFFFF", marginLeft: "4px" }} />
                    </IconButton>
                </Box>
            </Box>
        </>
    );
};

export default Footer;
