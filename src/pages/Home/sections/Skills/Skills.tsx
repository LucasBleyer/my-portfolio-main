import { Grid, Typography, styled } from "@mui/material";
import { SiCsharp, SiDotnet, SiAngular, SiTypescript } from "react-icons/si";
import { useTheme } from "@mui/material/styles";

const StyledSkills = styled("div")(({ theme }) => ({
  padding: "50px 0",
  color: theme.palette.primary.contrastText,
  textAlign: "center", // Adiciona alinhamento centralizado ao texto
}));

function Skills() {
  const theme = useTheme(); // Acessando o tema

  return (
    <StyledSkills>
      <Typography variant="h4" color="textPrimary" gutterBottom>
        Minhas Skills
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        <Grid item>
          <SiDotnet size={60} title=".NET" color={theme.palette.primary.main} aria-label=".NET" />
        </Grid>
        <Grid item>
          <SiCsharp size={60} title="C#" color={theme.palette.primary.main} aria-label="C#" />
        </Grid>
        <Grid item>
          <SiAngular size={60} title="Angular" color={theme.palette.primary.main} aria-label="Angular" />
        </Grid>
        <Grid item>
          <SiTypescript size={60} title="TypeScript" color={theme.palette.primary.main} aria-label="TypeScript" />
        </Grid>
      </Grid>
    </StyledSkills>
  );
}

export default Skills;
