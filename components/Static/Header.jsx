import * as React from "react";
import Link from "next/link";
import {AppBar,Box,Toolbar,IconButton,Menu,Divider,Drawer,Container,Avatar,Button,Tooltip,MenuItem} from '@mui/material'
//icons
import AddIcon from "@mui/icons-material/Add";
import LoginIcon from "@mui/icons-material/Login";
import MenuIcon from "@mui/icons-material/Menu";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
////////////
import { blue } from "@mui/material/colors";
import { useTheme } from "@emotion/react";
import MobileNavbar from "../Static/MobileNavbar";
import { useRouter } from 'next/router'
import { useSelector, useDispatch } from "react-redux";
import { signout } from "../../lib/rtk/auth/authSlice";
///////////

const MenuButtonStyle = {
  "&:hover": {
    backgroundColor: blue[700],
    color: "white",
  },
};
const ButtonSin = () => (
  <Box m={1}>
    <Link href="/signin">
      <Button
        sx={{
          backgroundColor: blue[900],
          border: `2px solid ${blue[900]}`,

          color: "white",
          "&:hover": {
            backgroundColor: blue[700],
            border: `2px solid ${blue[700]}`,
            color: "white",
          },
        }}
        endIcon={<LoginIcon />}
        fullWidth
      >
        Sign In
      </Button>
    </Link>
  </Box>
);

const Header = () => {
  const isSignedIn = useSelector((state) => state.auth.isSignedIn);
  const dispatch = useDispatch();
  const router = useRouter();
  const theme = useTheme();
  const [anchorElNav, setAnchorElNav] = React.useState(false);
  const handleOpenNavMenu = () => {
    setAnchorElNav(true);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(false);
  };
  ////
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  ////
  const [anchorSmenu, setAnchorSmenu] = React.useState(null);
  const isSmenuOpen = Boolean(anchorSmenu);
  const handleOpenSmenu = (event) => {
    setAnchorSmenu(event.currentTarget);
  };
  const handleCloseSmenu = () => {
    setAnchorSmenu(null);
  };
  ////
  const [anchorCmenu, setAnchorCmenu] = React.useState(null);
  const isCmenuOpen = Boolean(anchorCmenu);
  const handleOpenCmenu = (event) => {
    setAnchorCmenu(event.currentTarget);
  };
  const handleCloseCmenu = () => {
    setAnchorCmenu(null);
  };
  const handleLogOut =()=>{
    dispatch(signout());
    setAnchorElUser(null)
    router.push('/signin') 
  }
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Mobile UI */}
          <Box
            sx={{
              justifyContent: "space-between",
              alignItems: "center",
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
            }}
          >
            <Box sx={{ flexGrow: 0, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Drawer
                anchor="left"
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                PaperProps={{
                  sx: {
                    backgroundColor: theme.palette.primary.main,
                    color: "white",
                    width: 200,
                  },
                }}
                sx={{ display: { xs: "block", md: "none" } }}
              >
                {!isSignedIn && (
                  <>
                    <ButtonSin />
                  </>
                )}

                <Divider />
                <MobileNavbar />
              </Drawer>
            </Box>
            <Box
              component="img"
              sx={{
                height: "auto",
                width: 250,
                display: { xs: "flex", md: "none" },
                mr: 1,
                flexGrow: 0,
              }}
              alt="logo"
              src="/imgs/logo.png"
            />
             {isSignedIn && (
                  <Box
                  sx={{
                    flexGrow: 0,
                    flexWrap: "wrap",
                    display: { xs: "flex", md: "none" },
                  }}
                >
                  <Tooltip title="Open settings">
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                       <Avatar src="/broken-image.jpg" />
                    </IconButton>
                  </Tooltip>
                  <Menu
                    sx={{ mt: "45px" }}
                    id="menu-appbar"
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                  >
                      <MenuItem  onClick={handleCloseUserMenu}>
                        Profile
                      </MenuItem>
                      <MenuItem  onClick={handleLogOut}>
                        Logout
                      </MenuItem>
                  </Menu>
                </Box>
                )}
          
          </Box>
          {/* Desktop UI */}
          <Box
            sx={{
              justifyContent: "space-between",
              alignItems: "center",
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
            }}
          >
            <Box
              component="img"
              sx={{
                height: "auto",
                width: 250,
                display: { xs: "none", md: "flex" },
                mr: 1,
              }}
              alt="logo"
              src="/imgs/logo.png"
            />
            <Box
              sx={{
                alignItems: "center",
                flexGrow: 0,
                flexShrink: 1,
                display: { xs: "none", md: "flex" },
              }}
            >
              <Link href="/">
                <Button variant="link" disableElevation sx={MenuButtonStyle}>
                  Home
                </Button>
              </Link>
              <Link href="/about">
                <Button variant="link" disableElevation sx={MenuButtonStyle}>
                  About
                </Button>
              </Link>
              <Button
                id="services-button"
                aria-controls={isSmenuOpen ? "services-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={isSmenuOpen ? "true" : undefined}
                variant="link"
                disableElevation
                sx={MenuButtonStyle}
                onClick={handleOpenSmenu}
                endIcon={<KeyboardArrowDownIcon />}
              >
                Services
              </Button>
              <Menu
                id="services-menu"
                anchorEl={anchorSmenu}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={isSmenuOpen}
                onClose={handleCloseSmenu}
                sx={{
                  display: { xs: "none", md: "block" },
                }}
              >
                <MenuItem onClick={handleCloseSmenu}>
                  <Link href="/services/homehealth">
                    <Button variant="link" fullWidth sx={MenuButtonStyle}>
                      Home Health
                    </Button>
                  </Link>
                </MenuItem>
                <Divider />
                <MenuItem onClick={handleCloseSmenu}>
                  <Link href="/services/palliativecare">
                    <Button variant="link" fullWidth sx={MenuButtonStyle}>
                      Palliative Care
                    </Button>
                  </Link>
                </MenuItem>
                <Divider />
                <MenuItem onClick={handleCloseSmenu}>
                  <Link href="/services/hospicecare">
                    <Button variant="link" fullWidth sx={MenuButtonStyle}>
                      Hospice Care
                    </Button>
                  </Link>
                </MenuItem>
                <Divider />
                <MenuItem onClick={handleCloseSmenu}>
                  <Link href="/services/assistedliving">
                    <Button variant="link" fullWidth sx={MenuButtonStyle}>
                      Assisted Living
                    </Button>
                  </Link>
                </MenuItem>
              </Menu>
              <Button
                id="careers-button"
                aria-controls={isCmenuOpen ? "careers-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={isCmenuOpen ? "true" : undefined}
                variant="link"
                disableElevation
                sx={MenuButtonStyle}
                onClick={handleOpenCmenu}
                endIcon={<KeyboardArrowDownIcon />}
              >
                Careers
              </Button>
              <Menu
                id="careers-menu"
                anchorEl={anchorCmenu}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={isCmenuOpen}
                onClose={handleCloseCmenu}
                sx={{
                  display: { xs: "none", md: "block" },
                }}
              >
                <MenuItem onClick={handleCloseCmenu}>
                  <Link href="/careers">
                    <Button variant="link" fullWidth sx={MenuButtonStyle}>
                      Careers
                    </Button>
                  </Link>
                </MenuItem>
                <Divider />
                <MenuItem onClick={handleCloseCmenu}>
                  <Link href="/careers/volunteer">
                    <Button variant="link" fullWidth sx={MenuButtonStyle}>
                      Volunteer
                    </Button>
                  </Link>
                </MenuItem>
              </Menu>
              <Link href="/contact">
                <Button variant="link" disableElevation sx={MenuButtonStyle}>
                  Contact
                </Button>
              </Link>
            </Box>
            <Box sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}>
            {!isSignedIn ? (
                  <>
                    <ButtonSin />
                  </>
                ) : (<>
                
                <Tooltip title="Open settings">
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                      <Avatar src="/broken-image.jpg" />
                    </IconButton>
                  </Tooltip>
                  <Menu
                    sx={{ mt: '45px' }}
                    id="menu-appbar"
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                  >
                     <MenuItem  onClick={handleCloseUserMenu}>
                        Profile
                      </MenuItem>
                      <MenuItem  onClick={handleLogOut}>
                        Logout
                      </MenuItem>
                  </Menu>
                
                </>)}
          

  
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
