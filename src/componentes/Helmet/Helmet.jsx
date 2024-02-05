import React from "react";

/**
 * Component for setting the document title and rendering children.
 * @param {Object} props - The props for the Helmet component.
 * @param {string} props.title - The title to be appended to the document title.
 * @param {ReactNode} props.children - The children to be rendered within the div.
 * @returns {ReactNode} - The Helmet component with the document title and children.
 */
const Helmet = (props) => {
  document.title = "Maltimart -" + props.title;
  return <div className="w-100">{props.children}</div>;
};

export default Helmet;
