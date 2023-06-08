import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";

export const Footer = () => {
  return (
    <Box component="footer" bgcolor="#e9e9e9" py={5} mt={15}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item sm={6} xs={12}>
            <Box
              display="flex"
              alignItems="center"
              sx={{ justifyContent: { xs: "center", sm: "left" } }}
            >
              <Image
                src="/logo.svg"
                width={30}
                height={30}
                objectFit="contain"
                alt="POLLS"
              />
              <Typography sx={{ ml: 1, fontWeight: 600 }}>POLLS</Typography>
            </Box>
          </Grid>

          <Grid item sm={6} xs={12}>
            {/* <Typography sx={{ textAlign: { xs: "center", sm: "right" } }}> */}
            <p>Built by</p>
            <ul>
              <li>Prabin Acharya</li>
              <li>Sagar Tandan</li>
              <li>Sanjeev Rawal</li>
              <li>Nishan Thing</li>
            </ul>
            {/* </Typography> */}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
