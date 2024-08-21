import { Card, CardContent, Typography, IconButton, styled } from "@mui/material";
import VisibilityIcon from '@mui/icons-material/Visibility';

interface ProjectCardProps {
  name: string;
  description: string;
  url: string;
}

const StyledCard = styled(Card)(({ theme }) => ({
  backgroundColor: "#fff",
  borderRadius: "8px",
  boxShadow: theme.shadows[5],
  transition: "transform 0.3s",
  cursor: "pointer",
  position: "relative",
  "&:hover": {
    transform: "scale(1.05)",
  },
}));

const StyledCardContent = styled(CardContent)({
  height: "150px",
  width: "300px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
});

const StyledDescription = styled(Typography)({
  overflow: "hidden",
  textOverflow: "ellipsis",
  display: "-webkit-box",
  WebkitLineClamp: 3, // Exibir no máximo 3 linhas
  WebkitBoxOrient: "vertical",
});

function ProjectCard({ name, description, url }: ProjectCardProps) {
  const handleCardClick = () => {
    window.open(url, "_blank");
  };

  return (
    <StyledCard onClick={handleCardClick}>
      {/* Ícone de visualização no canto superior direito */}
      <IconButton
        style={{
          position: 'absolute',
          top: 8,
          right: 8,
          backgroundColor: 'rgba(255, 255, 255, 0.7)',
          zIndex: 1,
        }}
      >
        <VisibilityIcon />
      </IconButton>
      <StyledCardContent>
        <Typography variant="h5" component="div" gutterBottom>
          {name}
        </Typography>
        <StyledDescription variant="body2" color="textSecondary">
          {description}
        </StyledDescription>
      </StyledCardContent>
    </StyledCard>
  );
}

export default ProjectCard;
