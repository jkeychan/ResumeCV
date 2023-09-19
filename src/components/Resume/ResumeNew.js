import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/Jeff_Bollinger-Resume-2023-redacted.pdf";
import wordVersion from "../../Assets/Jeff_Bollinger-Resume-2023-redacted.docx";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px", marginRight: "10px" }} // added marginRight for spacing between buttons
          >
            <AiOutlineDownload />
            &nbsp;Download Full PDF Version
          </Button>

          <Button
            variant="primary" 
            href={wordVersion}
            target="_blank"
            style={{ maxWidth: "250px", marginLeft: "10px" }} // added marginLeft for spacing between buttons
          >
            <AiOutlineDownload />
            &nbsp;Download Word Version
          </Button>
        </Row>

        <Row className="resume">
          <Document file={pdf} className="d-flex justify-content-center">
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px", marginRight: "10px" }} // added marginRight for spacing between buttons
          >
            <AiOutlineDownload />
            &nbsp;Download Full PDF Version
          </Button>

          <Button
            variant="primary" 
            href={wordVersion}
            target="_blank"
            style={{ maxWidth: "250px", marginLeft: "10px" }} // added marginLeft for spacing between buttons
          >
            <AiOutlineDownload />
            &nbsp;Download Word Version
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
