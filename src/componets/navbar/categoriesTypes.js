import React, { useRef } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { motion } from 'framer-motion';

const CategoriesTypes = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

  const scrollRef = useRef(null);

  const categories = [
    'Jewelry & Accessories',
    'Clothing & Shoes',
    'Home & Living',
    'Wedding & Party',
    'Toys & Entertainment',
    'Art & Collectibles',
    'Craft Supplies & Tools',
  ];

  const typingVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: (index) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: index * 0.2,
        type: 'spring',
        stiffness: 120,
      },
    }),
  };
  const handleMouseDown = (e) => {
    const startX = e.pageX - scrollRef.current.offsetLeft;
    const scrollLeft = scrollRef.current.scrollLeft;

    const handleMouseMove = (e) => {
      const x = e.pageX - scrollRef.current.offsetLeft;
      const walk = (x - startX) * 2;
      scrollRef.current.scrollLeft = scrollLeft - walk;
    };

    const handleMouseUp = () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
  };

  const handleTouchStart = (e) => {
    const startX = e.touches[0].pageX - scrollRef.current.offsetLeft;
    const scrollLeft = scrollRef.current.scrollLeft;

    const handleTouchMove = (e) => {
      const x = e.touches[0].pageX - scrollRef.current.offsetLeft;
      const walk = (x - startX) * 2;
      scrollRef.current.scrollLeft = scrollLeft - walk;
    };

    const handleTouchEnd = () => {
      scrollRef.current.removeEventListener('touchmove', handleTouchMove);
      scrollRef.current.removeEventListener('touchend', handleTouchEnd);
    };

    scrollRef.current.addEventListener('touchmove', handleTouchMove);
    scrollRef.current.addEventListener('touchend', handleTouchEnd);
  };

  return (
    <Box
      sx={{
        paddingTop: isMobile ? '20px' : isTablet ? '20px' : '30px',
        textAlign: 'center',
      }}
    >
      <Box
        ref={scrollRef}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
        sx={{
          display: 'flex',
          overflowX: 'hidden',
          whiteSpace: 'nowrap',
          gap: isMobile ? '30px' : '57px',
          paddingBottom: '10px',
          scrollbarWidth: 'none',
          '&::-webkit-scrollbar': {
            display: 'none',
          },
          userSelect: 'none',
        }}
      >
        {categories.map((category, index) => (
          <motion.div
            whileHover={{ scale: 1.1, color: '#007BFF' }}
            whileTap={{ scale: 0.95 }}
            key={index}
            custom={index}
            initial="hidden"
            animate="visible"
            variants={typingVariants}
          >
            <Typography
              variant="body1"
              sx={{
                color: 'black',
                fontSize: isMobile ? '14px' : '16px',
                cursor: 'pointer',
                lineHeight: '24px',
              }}
            >
              {category}
            </Typography>
          </motion.div>

        ))}
      </Box>
    </Box>
  );
};

export default CategoriesTypes;
