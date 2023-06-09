import AddIcon from "@mui/icons-material/Add";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import HowToVoteIcon from "@mui/icons-material/HowToVote";
import PollIcon from "@mui/icons-material/Poll";
import {
  Box,
  Button,
  Grid,
  Hidden,
  Link as MuiLink,
  Paper,
  Typography,
} from "@mui/material";
import moment from "moment";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { AnalyticsBox } from "../../components/AnalyticsBox/";
import { DashboardLayout } from "../../components/DashboardLayout/";
import { PollItem } from "../../components/PollItem/";
import { Seo } from "../../components/Seo/";
import { getUser } from "../../lib/getUser";
import { prisma } from "../../lib/prisma";
import { getTodayVotes, getTotalVotes } from "../../utils/votes";

const DashboardPage = ({ user, polls }) => {
  const router = useRouter();

  return (
    <DashboardLayout user={user}>
      <Seo
        title="Dashboard"
        description="PowerPoll is the easiest and fastest way to create, distribute and analyze your polls, from start to finish!"
      />

      <Box
        sx={{
          backgroundColor: "#C8FACD",
          p: 4,
          borderRadius: "20px",
          mt: 4,
          // maxWidth: "800px",
        }}
        component="section"
      >
        <Grid container spacing={3}>
          <Grid item xs={12} lg={10} sm={8}>
            <Typography
              variant="h5"
              component="h2"
              sx={{ fontWeight: 700, color: "#212b36" }}
            >
              {router.query.ref === "signup"
                ? `Welcome ${user.name}!`
                : `Welcome Back ${user.name}!`}
            </Typography>

            <Typography sx={{ my: 2, color: "#212b36" }}>
              Let start by creating a new poll!
            </Typography>

            <Link href="/dashboard/create-poll" passHref>
              <Button
                variant="contained"
                component="a"
                title="Create a Poll"
                color="primary"
                endIcon={<AddIcon />}
              >
                Create a Poll
              </Button>
            </Link>
          </Grid>

          <Hidden smDown>
            <Grid item xs={12} lg={2} sm={4}>
              <Image
                src="/dashboard.webp"
                width={400}
                height={400}
                objectFit="contain"
                alt="Create a new Poll!"
              />
            </Grid>
          </Hidden>
        </Grid>
      </Box>

      <Grid container spacing={5} component="section">
        <Grid item xs={12} md={4}>
          <AnalyticsBox
            icon={<PollIcon sx={{ fontSize: 45 }} />}
            value={polls.length}
            title="Total Polls"
          />
        </Grid>

        <Grid item xs={12} md={4}>
          <AnalyticsBox
            icon={<HowToVoteIcon sx={{ fontSize: 45 }} />}
            value={polls.reduce((t, v) => t + getTotalVotes(v), 0)}
            title="Total Votes Received"
          />
        </Grid>

        <Grid item xs={12} md={4}>
          <AnalyticsBox
            icon={<CalendarTodayIcon sx={{ fontSize: 45 }} />}
            value={polls.reduce((t, v) => t + getTodayVotes(v), 0)}
            title="Votes Received Today"
          />
        </Grid>
      </Grid>

      <Box component="section" sx={{ mt: 15 }}>
        <Typography component="h2" variant="h3" sx={{ fontWeight: 700, mb: 2 }}>
          Polls
        </Typography>

        {!polls.length && (
          <Typography>
            You don't have any polls.{" "}
            <Link href="/dashboard/create-poll">
              <a>Let's create a new one!</a>
            </Link>{" "}
          </Typography>
        )}

        {polls.map((poll) => (
          <PollItem key={poll.id} poll={poll} sx={{ mb: 5 }} />
        ))}
      </Box>
    </DashboardLayout>
  );
};

export const getServerSideProps = async ({ req, res }) => {
  const user = await getUser(req, res);

  if (!user) {
    return {
      redirect: {
        permanent: false,
        destination: "/login",
      },
      props: {},
    };
  }

  const polls = await prisma.poll.findMany({
    where: {
      userId: user.id,
    },

    include: {
      answers: {
        include: {
          votes: true,
        },
      },
    },
  });

  return {
    props: {
      user,
      polls: JSON.parse(JSON.stringify(polls)),
    },
  };
};

export default DashboardPage;
