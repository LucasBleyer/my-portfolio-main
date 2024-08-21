import { ForwardedRef, forwardRef } from "react";
import { Container, Typography, styled } from "@mui/material";

const StyledResume = styled("div")({
  backgroundColor: "#f5f5f5",
  padding: "50px 0",
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

const Section = styled("section")({
  backgroundColor: "#f5f5f5",
  maxWidth: "800px",
  width: "100%",
  marginBottom: "30px",
});

const PrintContent = forwardRef<HTMLDivElement>((_, ref: ForwardedRef<HTMLDivElement>) => (
  <StyledResume ref={ref}>
    <Container maxWidth="md">
      <Typography variant="h3" color="primary" gutterBottom textAlign="center">
        Currículo
      </Typography>

      <Section>
        <Typography variant="h4" color="textPrimary" gutterBottom>
          Experiência Profissional
        </Typography>
        <Typography variant="body1" color="textSecondary" paragraph>
          <strong>Analista Desenvolvedor Júnior</strong> - NDD Tech
          <br />
          <em>Outubro de 2022 - Agosto de 2023</em>
          <br />
          Responsabilidades:
          <ul>
            <li>Desenvolvimento e integração de sistemas utilizando C#, ASP.NET, e SQL Server.</li>
            <li>Design e implementação de APIs RESTful e serviços web.</li>
            <li>Colaboração com equipes para garantir a qualidade e eficiência dos projetos.</li>
          </ul>
          Conquistas:
          <ul>
            <li>Melhoria no processo de Code Review e integração contínua utilizando SonarQube.</li>
          </ul>
        </Typography>
      </Section>

      <Section>
        <Typography variant="h4" color="textPrimary" gutterBottom>
          Formação Acadêmica
        </Typography>
        <Typography variant="body1" color="textSecondary" paragraph>
          <strong>Graduação em Ciência da Computação</strong> - IFSC
          <br />
          <em>2021 - 2024</em>
        </Typography>
      </Section>

      <Section>
        <Typography variant="h4" color="textPrimary" gutterBottom>
          Curso Profissionalizante
        </Typography>
        <Typography variant="body1" color="textSecondary" paragraph>
          <strong>Academia do Programador</strong>
          <br />
          <em>2021 - 2022</em>
          <br />
          Curso intensivo em desenvolvimento full stack, com foco em C# e .NET.
        </Typography>
      </Section>
    </Container>
  </StyledResume>
));

export default PrintContent;
