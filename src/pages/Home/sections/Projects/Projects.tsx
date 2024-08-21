import { Container, Grid, Typography } from "@mui/material";
import ProjectCard from "../../../../components/ProjectCard/ProjectCard";

function Projects() {
  const projects = [
    {
      name: "Desenvolvimento de Sistemas na NDD Tech",
      description: "Desenvolvimento e integração de sistemas utilizando ASP.NET, C#, XML, Oracle e Microsoft SQL Server.",
      url: "https://ndd.tech", 
    },
    {
      name: "Full Stack Development na Academia do Programador",
      description: "Imersão completa em linguagens e serviços como C#, .NET, e realização de testes manuais e automáticos.",
      url: "https://www.academiadoprogramador.net/inicio",
    },
    {
      name: "Desenvolvimento Front-End na TechnoICE",
      description: "Serviços de desenvolvimento front-end para websites e aplicativos web utilizando Angular, HTML, CSS, e Bootstrap.",
      url: "https://www.linkedin.com/in/lucas-oliveira-bleyer-208774224/", 
    },
  ];

  return (
    <Container maxWidth="lg" style={{ padding: "50px 16px" }}>
      <Typography variant="h3" color="primary" gutterBottom textAlign="center">
        Repertório de Desenvolvimento
      </Typography>
      <Grid container spacing={4}>
        {projects.map((project, index) => (
          <Grid item xs={12} md={4} key={index}>
            <ProjectCard 
              name={project.name}
              description={project.description}
              url={project.url}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Projects;
