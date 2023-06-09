import AddBoxIcon from "@mui/icons-material/AddBox";
import BarChartIcon from "@mui/icons-material/BarChart";
import DashboardIcon from "@mui/icons-material/Dashboard";
import HowToVoteIcon from "@mui/icons-material/HowToVote";
import LogoutIcon from "@mui/icons-material/Logout";
import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Hidden,
  Paper,
  Typography,
} from "@mui/material";
import { removeCookies } from "cookies-next";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext/";
import { Footer } from "../Footer/";
import { Navbar } from "../Navbar";
import classes from "./style.module.scss";

export const DashboardLayout = ({ children, user }) => {
  const router = useRouter();
  const { logoutHandler } = useContext(UserContext);

  return (
    <>
      <Grid container>
        <Hidden smDown>
          <Grid item sx={{ width: { sm: "200px", md: "250px" } }}>
            <Paper
              sx={{ minHeight: "100vh", px: 2, position: "sticky", top: 0 }}
            >
              <Box display="flex" justifyContent="center" mt={3}>
                <Image
                  src="/logo.svg"
                  width="70px"
                  height="70px"
                  objectFit="contain"
                  alt="PowerPoll"
                />
              </Box>

              <Typography
                component="h3"
                variant="h6"
                sx={{ fontWeight: 500, pt: 3, mt: 2 }}
              >
                Welcome {user.name}
              </Typography>

              <Divider sx={{ my: 2 }} />

              <nav className={classes.nav}>
                <Link href="/dashboard">
                  <a
                    title="dashboard"
                    className={
                      router.pathname === "/dashboard"
                        ? classes.activeLink
                        : null
                    }
                  >
                    <DashboardIcon />
                    Dashboard
                  </a>
                </Link>

                <Link href="/dashboard/create-poll">
                  <a
                    title="Create a Poll"
                    className={
                      router.pathname === "/dashboard/create-poll"
                        ? classes.activeLink
                        : null
                    }
                  >
                    <AddBoxIcon />
                    New Poll
                  </a>
                </Link>

                <Link href="/dashboard/polls">
                  <a
                    title="Manage Polls"
                    className={
                      router.pathname === "/dashboard/polls"
                        ? classes.activeLink
                        : null
                    }
                  >
                    <HowToVoteIcon />
                    Polls
                  </a>
                </Link>

                <Link href="/dashboard/analytics">
                  <a
                    title="View Analytics"
                    className={
                      router.pathname.includes("/dashboard/analytics")
                        ? classes.activeLink
                        : null
                    }
                  >
                    <BarChartIcon />
                    Analytics
                  </a>
                </Link>

                <Button onClick={logoutHandler}>
                  <LogoutIcon /> Logout
                </Button>
              </nav>
            </Paper>
          </Grid>
        </Hidden>

        <Grid item xs>
          <Hidden smUp>
            <Navbar user={user} />
          </Hidden>
          <Container sx={{ mb: 5, minHeight: "100vh" }}>{children}</Container>

          <Footer />
        </Grid>
      </Grid>
    </>
  );
};
