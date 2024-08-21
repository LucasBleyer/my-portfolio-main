import { Box, Container, Grid, Typography, styled } from "@mui/material";
//import ProfilePic from '../../assets/images/ProfilePic.png';
import DownloadIcon from '@mui/icons-material/Download';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import StyledButton from "../../../../components/StyledButtom/StyledButtom";
import FileDownloader from "../../../../utils/FileDownloader";

function Hero() {

  const StyledHero = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    height: "100%",
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.up('xs')]: {
      padding: "1rem 0rem",
    },
    [theme.breakpoints.up('md')]: {
      padding: "7rem 0rem",
    }
  }));

  const StyledImage = styled("img")(({ theme }) => ({
    width: "75%",
    borderRadius: "50%",
    border: `1px solid ${theme.palette.primary.contrastText}`
  }));

  const handleDownloadCV = () => {
    const downloader = new FileDownloader("/my-portfolio-dev-lucas-bleyer/Curriculo_Lucas_Bleyer.pdf", "Curriculo_Dev_Lucas_Bleyer.pdf");
    downloader.download();
  };

  return (
    <StyledHero>
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={12} md={5}>
            <Box position="relative">
              <Box position="relative" textAlign="center">
                {/* <StyledImage src={ProfilePic} alt="Foto de Lucas Bleyer" /> */}
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={7}>
            <Typography color="primary.contrastText" variant="h1" textAlign="center" pb={2}>Lucas Bleyer</Typography>
            <Typography color="primary.contrastText" variant="h2" textAlign="center">Desenvolvedor Full Stack</Typography>
            <Grid container display="flex" justifyContent="center" spacing={3} pt={3}>
              <Grid item xs={12} md={4} display="flex" justifyContent="center">
                <StyledButton onClick={handleDownloadCV} aria-label="Download do Currículo">
                  <DownloadIcon />
                  <Typography>
                    Download CV
                  </Typography>
                </StyledButton>
              </Grid>
              <Grid item xs={4} md={2} display="flex" justifyContent="center">
                <StyledButton
                  component="a"
                  href="https://www.linkedin.com/in/lucas-oliveira-bleyer-208774224/"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <LinkedInIcon />
                </StyledButton>
              </Grid>                
              <Grid item xs={4} md={2} display="flex" justifyContent="center">
                <StyledButton
                  component="a"
                  href="https://github.com/LucasBleyer"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <GitHubIcon />
                </StyledButton>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </StyledHero>
  );
}

export default Hero;
