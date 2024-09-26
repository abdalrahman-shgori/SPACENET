import React, { useEffect, useState } from 'react';
import { Box, CircularProgress, Typography } from '@mui/material';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Brand from "../../assets/images/brand-5.svg";

const Brands = () => {
    const [brands, setBrands] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBrands = async () => {
            try {
                const response = await fetch('https://perfume.msalla.com/api/brands');
                if (!response.ok) {
                    throw new Error('Failed to fetch brands');
                }
                const data = await response.json();
                setBrands(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchBrands();
    }, []);

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

    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <Box
            sx={{
                paddingLeft: {
                    xs: "30px",
                    sm: "80px",
                    md: "100px",
                    lg: "300px"
                },
                paddingRight: {
                    xs: "30px",
                    sm: "80px",
                    md: "100px",
                    lg: "300px"
                },
                marginTop: {
                    lg: "73px",
                    md: "73px",
                    sm: "40px",
                    xs: "50px"
                },
                paddingBottom: {
                    lg: "63px",
                    md: "63px",
                    sm: "40px",
                    xs: "50px"
                },
                background: "#FFFFFF"
            }}
        >
            <Slider {...settings}>
                {brands.map((brand) => (
                    <div key={brand.id}>
                        <img
                            src={Brand}
                            alt={brand.name}
                            style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
                        />
                    </div>
                ))}
            </Slider>
        </Box>
    );
};

export default Brands;
