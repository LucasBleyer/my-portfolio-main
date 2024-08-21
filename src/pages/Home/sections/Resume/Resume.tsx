import { Container, Button, styled } from "@mui/material";
import { Download as DownloadIcon } from "@mui/icons-material";
import React from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import PrintContent from "./PrintContent";

const AllContainer = styled("div")({
  backgroundColor: "#f5f5f5",
  paddingBottom: "70px",
});

function Resume() {
  const printContentRef = React.useRef<HTMLDivElement>(null);

  const handlePrint = () => {
    if (printContentRef.current) {
      html2canvas(printContentRef.current, { scale: 2 }).then((canvas) => { // Increased scale for better quality
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF();
        const imgWidth = 210; // A4 width in mm
        const pageHeight = 295; // A4 height in mm
        const imgHeight = (canvas.height * imgWidth) / canvas.width;
        let heightLeft = imgHeight;

        let position = 0;

        pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;

        while (heightLeft >= 0) {
          position -= pageHeight;
          pdf.addPage();
          pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
          heightLeft -= pageHeight;
        }

        pdf.save("Curriculo_Dev_Lucas_Bleyer.pdf");
      }).catch((error) => {
        console.error("Erro ao gerar o PDF: ", error);
        alert("Erro ao gerar o PDF. Tente novamente mais tarde.");
      });
    }
  };

  return (
    <AllContainer>
      <PrintContent ref={printContentRef} />
      <Container maxWidth="md" style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
        <Button
          variant="contained"
          color="primary"
          startIcon={<DownloadIcon />}
          onClick={handlePrint}
        >
          Fazer Download do Currículo
        </Button>
      </Container>
    </AllContainer>
  );
}

export default Resume;
