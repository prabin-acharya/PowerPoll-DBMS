import AddIcon from "@mui/icons-material/Add";
import { Button, Container, Grid, Typography } from "@mui/material";
import Link from "next/link";
import { useEffect, useRef } from "react";

export const Hero = () => {
  useEffect(() => {
    import("@lottiefiles/lottie-player");
  }, []);

  const ref = useRef(null);

  return (
    <Container maxWidth="lg">
      <Grid container alignItems="center">
        <Grid item md={7}>
          <Typography
            component="h1"
            variant="h2"
            sx={{
              fontWeight: 700,
              mt: 10,
              fontSize: { sm: "3.75rem", xs: "3rem" },
            }}
          >
            Everything you need to{" "}
            <Typography
              component="span"
              variant="h2"
              color="primary"
              sx={{ fontWeight: 700, fontSize: "inherit" }}
            >
              power your polls
            </Typography>
          </Typography>

          <Typography sx={{ fontSize: "1.2rem", mx: "auto", mt: 4 }}>
            PowerPoll is the easiest and fastest way to create, distribute and
            analyze your polls, from start to finish!
          </Typography>

          <Link passHref href="/login">
            <Button
              variant="contained"
              size="large"
              sx={{ mt: 3 }}
              component="a"
              title="Login"
            >
              Create your first poll
            </Button>
          </Link>
        </Grid>

        <Grid item md={5}>
          <lottie-player
            src="https://assets2.lottiefiles.com/packages/lf20_z9bl7izn.json"
            background="transparent"
            speed="1"
            style={{ width: "200px", height: "200px", margin: "0 auto" }}
            loop
            autoplay
            ref={ref}
          ></lottie-player>
        </Grid>
      </Grid>
    </Container>
  );
};
