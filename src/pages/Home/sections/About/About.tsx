import { Container, Typography, styled } from "@mui/material";

const StyledAbout = styled("div")(() => ({
  backgroundColor: "#f5f5f5",
  padding: "50px 0",
  minHeight: "50vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

function About() {
  return (
    <StyledAbout>
      <Container maxWidth="md">
        <Typography variant="h3" color="primary" gutterBottom textAlign="center">
          Lucas Bleyer
        </Typography>
        <Typography variant="h4" color="textPrimary" textAlign="center" gutterBottom>
          Desenvolvedor Full Stack
        </Typography>
        <Typography variant="body1" color="textSecondary" textAlign="center">
          Sou um estudante de Ciência da Computação no Instituto Federal de Santa Catarina (IFSC), apaixonado por tecnologia e inovação. Tenho experiência em C#, ASP.NET, Angular e outras tecnologias. Estou sempre em busca de aprender mais e enfrentar novos desafios no desenvolvimento de software.
        </Typography>
      </Container>
    </StyledAbout>
  );
}

export default About;
