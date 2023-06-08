import AddBoxIcon from "@mui/icons-material/AddBox";
import BarChartIcon from "@mui/icons-material/BarChart";
import DashboardIcon from "@mui/icons-material/Dashboard";
import HomeIcon from "@mui/icons-material/Home";
import HowToVoteIcon from "@mui/icons-material/HowToVote";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import LogoutIcon from "@mui/icons-material/Logout";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Box,
  Button,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import { UserContext } from "../../context/UserContext/";
import classes from "./style.module.scss";

export const Navbar = ({ user }) => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const { logoutHandler } = useContext(UserContext);

  const closeDrawer = () => setOpen(false);
  const openDrawer = () => setOpen(true);

  return (
    <Paper sx={{ p: 1, display: "flex", justifyContent: "space-between" }}>
      <Image
        src="/logo.svg"
        width="40px"
        height="40px"
        objectFit="contain"
        alt="PowerPoll"
      />

      <IconButton onClick={openDrawer}>
        <MenuIcon />
      </IconButton>

      <Drawer anchor="left" open={open} onClose={closeDrawer}>
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={closeDrawer}
          onKeyDown={closeDrawer}
        >
          {user ? (
            <List>
              <ListItem disablePadding>
                <ListItemButton onClick={() => router.push("/dashboard")}>
                  <ListItemIcon>
                    <DashboardIcon />
                  </ListItemIcon>
                  <ListItemText primary="Dashboard" />
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton
                  onClick={() => router.push("/dashboard/create-poll")}
                >
                  <ListItemIcon>
                    <AddBoxIcon />
                  </ListItemIcon>
                  <ListItemText primary="New Poll" />
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton onClick={() => router.push("/dashboard/polls")}>
                  <ListItemIcon>
                    <HowToVoteIcon />
                  </ListItemIcon>
                  <ListItemText primary="Polls" />
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton
                  onClick={() => router.push("/dashboard/analytics")}
                >
                  <ListItemIcon>
                    <BarChartIcon />
                  </ListItemIcon>
                  <ListItemText primary="Analytics" />
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton onClick={logoutHandler}>
                  <ListItemIcon>
                    <LogoutIcon />
                  </ListItemIcon>
                  <ListItemText primary="Logout" />
                </ListItemButton>
              </ListItem>
            </List>
          ) : (
            <List>
              <ListItem disablePadding>
                <ListItemButton onClick={() => router.push("/")}>
                  <ListItemIcon>
                    <HomeIcon />
                  </ListItemIcon>
                  <ListItemText primary="Home" />
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton onClick={() => router.push("/login")}>
                  <ListItemIcon>
                    <LockOpenIcon />
                  </ListItemIcon>
                  <ListItemText primary="Login" />
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton onClick={() => router.push("/signup")}>
                  <ListItemIcon>
                    <LockOpenIcon />
                  </ListItemIcon>
                  <ListItemText primary="Signup" />
                </ListItemButton>
              </ListItem>
            </List>
          )}
        </Box>
      </Drawer>
    </Paper>
  );
};
