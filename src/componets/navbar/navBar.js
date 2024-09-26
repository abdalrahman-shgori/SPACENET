import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { Divider, InputBase } from '@mui/material';
import { motion } from 'framer-motion';
import SvgLogoNavComponent from '../../assets/animationComponents/logoSvgNav';
import CategoriesTypes from './categoriesTypes';

const textStyle = {
  fontWeight: '400',
  fontSize: '18px',
  color: '#000000',
  lineHeight: '21px',
};

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleSearchClick = () => {
    setIsSearchOpen((prev) => !prev);
  };

  const searchVariants = {
    closed: {
      width: 0,
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.5,
      },
    },
    open: {
      width: '200px',
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const iconVariants = {
    hidden: {
      opacity: 0,
      y: -10,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        delay: 0.5,
      },
    },
    hover: {
      scale: 1.1,
      transition: { duration: 0.2 },
    },
    click: {
      scale: 0.9,
      transition: { duration: 0.2 },
    },
  };

  return (
    <AppBar
      position="static"
      sx={{
        background: 'transparent',
        boxShadow: 'none',
        paddingLeft: {
          xs: '20px',
          sm: '80px',
          md: '100px',
          lg: '300px',
        },
        paddingRight: {
          xs: '20px',
          sm: '80px',
          md: '100px',
          lg: '300px',
        },
        backgroundColor: "#1E28320D",
      }}
    >
      <Toolbar
        sx={{
          justifyContent: 'space-between',
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <Box display="flex" alignItems="center" gap="10px">
          <motion.div
            whileHover={{ scale: 1.1 }}
          >
            <IconButton edge="start" color="inherit" aria-label="search" onClick={handleSearchClick}>
              <SearchIcon sx={{ color: '#1E2832' }} />
            </IconButton>
          </motion.div>

          <motion.div
            variants={searchVariants}
            animate={isSearchOpen ? 'open' : 'closed'}
            initial="closed"
            style={{
              overflow: 'hidden',
              display: 'flex',
              alignItems: 'center',
              backgroundColor: '#f1f1f1',
              borderRadius: '4px',
              padding: '5px 10px',
              maxWidth: "100px",
              width: "100%"
            }}
          >
            <InputBase
              placeholder="Search..."
              sx={{
                width: '100%',
                color: '#000',
                '& .MuiInputBase-input': {
                  paddingLeft: '8px',
                },
              }}
            />
          </motion.div>
        </Box>

        <Typography variant="h6" sx={{
          flexGrow: 1, textAlign: 'center',
          marginLeft: {
            lg: "40px",
            md: "40px",
            sm: "unset",
            xs: "unset"
          }
        }}>
          <SvgLogoNavComponent />
        </Typography>

        <Box
          sx={{
            display: {
              lg: "flex",
              md: "flex",
              sm: isSearchOpen ? "none" : 'flex',
              xs: isSearchOpen ? "none" : 'flex'
            },
            marginLeft: "20px"
          }}
        >
          <motion.div
            variants={iconVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            whileTap="click"
          >
            <IconButton
              color="inherit"
              aria-label="account"
              sx={{
                display: 'flex',
                gap: '8px',
              }}
            >
              <AccountCircle sx={{ color: '#000000' }} />
              {!(isMobile || isTablet) && (
                <Typography sx={textStyle}>Account</Typography>
              )}
            </IconButton>
          </motion.div>

          <motion.div
            variants={iconVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            whileTap="click"
          >
            <IconButton
              color="inherit"
              aria-label="cart"
              sx={{
                display: 'flex',
                gap: '8px',
              }}
            >
              <ShoppingCartIcon sx={{ color: '#000000' }} />
              {!(isMobile || isTablet) && (
                <Typography sx={textStyle}>Shopping</Typography>
              )}
            </IconButton>
          </motion.div>
        </Box>
      </Toolbar>
      <Divider />
      <CategoriesTypes />
    </AppBar>
  );
};

export default Navbar;
