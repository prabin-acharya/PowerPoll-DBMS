import {
  Box,
  Button,
  Container,
  Hidden,
  Paper,
  Typography,
} from "@mui/material";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Features } from "../components/Features";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { HomeLayout } from "../components/HomeLayout";
import { Navbar } from "../components/Navbar";
import { Seo } from "../components/Seo/";
import { getUser } from "../lib/getUser";

const HomePage = ({ user }) => {
  return (
    <HomeLayout user={user}>
      <Seo
        title="PowerPoll - Create, Distribute and Analyze Polls"
        description="PowerPoll is the easiest and fastest way to create, distribute and analyze your polls, from start to finish!"
      />

      <Hero />

      <Features />

      <Container maxWidth="lg">
        <Box
          mt={15}
          backgroundColor="primary.main"
          color="white"
          borderRadius={4}
          textAlign="center"
          py={4}
          boxShadow="rgb(145 158 171 / 20%) 0px 0px 2px 0px, rgb(145 158 171 / 12%) 0px 12px 24px -4px"
        >
          <Box maxWidth="700px" mx="auto">
            <Typography variant="h4" component="h3" sx={{ fontWeight: 700 }}>
              Start Creating Polls
            </Typography>
            <Typography sx={{ my: 3 }}>
              In just a few clicks you can start creating and distributing polls
              and analyzing them in the dashboard.
            </Typography>

            <Link href="/login" passHref>
              <Button
                variant="contained"
                color="inherit"
                size="large"
                sx={{ color: "black" }}
                component="a"
                title="Login"
              >
                Get Started
              </Button>
            </Link>
          </Box>
        </Box>
      </Container>
    </HomeLayout>
  );
};

export const getServerSideProps = async ({ req, res }) => {
  const user = await getUser(req, res);

  return {
    props: {
      user,
    },
  };
};

export default HomePage;
