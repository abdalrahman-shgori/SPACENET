import React, { useEffect, useState } from 'react';
import { Box, Card, CardContent, CardMedia, Typography, CircularProgress } from '@mui/material';
import Slider from "react-slick";
import { motion } from 'framer-motion';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const FeaturedProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [hoveredItem, setHoveredItem] = useState(null);

  useEffect(() => {
    const fetchFeaturedProducts = async () => {
      try {
        const response = await fetch('https://perfume.msalla.com/api/featured');
        if (!response.ok) {
          throw new Error('Failed to fetch featured products');
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchFeaturedProducts();
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
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
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
        paddingTop: "71px",
        background: "#FFFFFF"
      }}
    >
      <Typography variant="h4" align="center" sx={{ marginBottom: '20px' }}>
        Featured Products
      </Typography>

      <Box sx={{ display: { xs: 'block', md: 'none' } }}>
        <Slider {...settings}>
          {products.map((item) => (
            <Box key={item.id}>
              <motion.div
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.1 }} 
                onHoverStart={() => setHoveredItem(item.id)}
                onHoverEnd={() => setHoveredItem(null)}
                style={{
                  filter: hoveredItem && hoveredItem !== item.id ? 'blur(2px)' : 'none',
                  transition: 'filter 0.3s ease'
                }}
              >
                <Card sx={{ width: 290, height: 420, position: 'relative', margin: 'auto', border: 'none', boxShadow: 'none' }}>
                  <Typography
                    variant="caption"
                    sx={{
                      position: 'absolute',
                      top: '5px',
                      left: '5px',
                      color: 'white',
                      padding: '2px 5px',
                      borderRadius: '3px',
                      backgroundColor: item.hot ? 'red' : 'green'
                    }}
                  >
                    {item.hot ? 'Hot' : 'Sale'}
                  </Typography>
                  <CardMedia
                    component="img"
                    height="290"
                    image={item.preview.media.url}
                    alt={item.arabic}
                    sx={{ objectFit: 'contain', border: 'none' }}
                  />
                  <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Typography
                      sx={{
                        paddingLeft: '10px',
                        paddingRight: '10px',
                        marginTop: '10px',
                        fontSize: '16px',
                        fontWeight: '600',
                        lineHeight: '21.7px',
                        textAlign: 'justify',
                        display: '-webkit-box',
                        overflow: 'hidden',
                        WebkitBoxOrient: 'vertical',
                        WebkitLineClamp: hoveredItem === item.id ? 'none' : 2,
                        maxHeight: hoveredItem === item.id ? 'none' : '42px', 
                        transition: 'max-height 0.3s ease'
                      }}
                    >
                      {item.arabic}
                    </Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', marginTop: '10px' }}>
                      <Typography sx={{ color: '#000000', fontSize: '16px', lineHeight: '21px', fontWeight: '400', opacity: '0.5' }}>
                        Perfume
                      </Typography>
                      <Typography sx={{ color: '#000000', fontSize: '16px', lineHeight: '21px', fontWeight: '600' }}>
                        {item.price.price} $
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </motion.div>
            </Box>
          ))}
        </Slider>
      </Box>

      <Box sx={{ display: { xs: 'none', md: 'flex' }, flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>
        {products.map((item) => (
          <motion.div
            key={item.id}
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.1 }} 
            onHoverStart={() => setHoveredItem(item.id)}
            onHoverEnd={() => setHoveredItem(null)}
            style={{
              filter: hoveredItem && hoveredItem !== item.id ? 'blur(2px)' : 'none',
              transition: 'filter 0.3s ease'
            }}
          >
            <Card sx={{ width: 290, height: 478, position: 'relative', border: 'none', boxShadow: 'none' }}>
              <Typography
                variant="caption"
                sx={{
                  position: 'absolute',
                  top: '5px',
                  left: '5px',
                  color: 'white',
                  padding: '2px 5px',
                  borderRadius: '3px',
                  backgroundColor: item.hot ? 'red' : 'green'
                }}
              >
                {item.hot ? 'Hot' : 'Sale'}
              </Typography>
              <CardMedia
                component="img"
                height="290"
                image={item.preview.media.url}
                alt={item.arabic}
                sx={{ objectFit: 'contain', border: 'none' }}
              />
              <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Typography
                  sx={{
                    paddingLeft: '10px',
                    paddingRight: '10px',
                    marginTop: '10px',
                    fontSize: '16px',
                    fontWeight: '600',
                    lineHeight: '21.7px',
                    textAlign: 'justify',
                    display: '-webkit-box',
                    overflow: 'hidden',
                    WebkitBoxOrient: 'vertical',
                    WebkitLineClamp: hoveredItem === item.id ? 'none' : 2, 
                    maxHeight: hoveredItem === item.id ? 'none' : '42px', 
                    transition: 'max-height 0.3s ease'
                  }}
                >
                  {item.arabic}
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', marginTop: '10px' }}>
                  <Typography sx={{ color: '#000000', fontSize: '16px', lineHeight: '21px', fontWeight: '400', opacity: '0.5' }}>
                    Perfume
                  </Typography>
                  <Typography sx={{ color: '#000000', fontSize: '16px', lineHeight: '21px', fontWeight: '600' }}>
                    {item.price.price} $
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </Box>
    </Box>
  );
};

export default FeaturedProducts;
