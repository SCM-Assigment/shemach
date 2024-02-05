import React from "react";
import { Container } from "reactstrap";
import "../../styles/common-section.css";

/**
 * Common section component
 * @param {string} title - The title of the section
 * @return {JSX.Element} - The common section component
 */
const CommonSection = ({ title }) => {
  return (
    <section className="common__section">
      <Container className="text-center">
        <h1>{title}</h1>
      </Container>
    </section>
  );
};

export default CommonSection;
