import * as React from "react";
import {
  Box,
  Drawer,
  Toolbar,
  List,
  Divider,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
//icons
import GroupTwoToneIcon from "@mui/icons-material/GroupTwoTone";
import NotificationImportantTwoToneIcon from "@mui/icons-material/NotificationImportantTwoTone";
import AnnouncementTwoToneIcon from "@mui/icons-material/AnnouncementTwoTone";
import DangerousTwoToneIcon from "@mui/icons-material/DangerousTwoTone";
import LogoutTwoToneIcon from "@mui/icons-material/LogoutTwoTone";
//
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { signout } from "../../lib/rtk/auth/authSlice";
import { useTheme } from "@emotion/react";
const drawerWidth = 240;

export default function AdminLayout({ children }) {
  const theme = useTheme();
  const dispatch = useDispatch();
  const router = useRouter();
  const handleLogOut = () => {
    dispatch(signout());
    router.push("/signin");
  };
  return (
    <Box sx={{ display: "flex" }}>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
        }}
        PaperProps={{
          sx: {
            backgroundColor: theme.palette.primary.main,
            color: "white",
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Box
          component="img"
          sx={{
            height: "auto",
            width: drawerWidth - 1,
            backgroundColor: "white",
            p: 1,
          }}
          alt="logo"
          src="/imgs/logo.png"
        />
        <Divider sx={{ backgroundColor: "white" }} />
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon sx={{ color: "white" }}>
                <GroupTwoToneIcon />
              </ListItemIcon>
              <ListItemText primary="All Users" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon sx={{ color: "white" }}>
                <NotificationImportantTwoToneIcon />
              </ListItemIcon>
              <ListItemText primary="Expire Soon" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon sx={{ color: "white" }}>
                <AnnouncementTwoToneIcon />
              </ListItemIcon>
              <ListItemText primary="Notified" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon sx={{ color: "white" }}>
                <DangerousTwoToneIcon />
              </ListItemIcon>
              <ListItemText primary="Expired" />
            </ListItemButton>
          </ListItem>
        </List>
        <Divider sx={{ backgroundColor: "white" }} />
        <List>
          <ListItem disablePadding>
            <ListItemButton onClick={handleLogOut}>
              <ListItemIcon sx={{ color: "white" }}>
                <LogoutTwoToneIcon />
              </ListItemIcon>
              <ListItemText primary="Logout" />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
      {children}
    </Box>
  );
}
