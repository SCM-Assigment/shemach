import React from "react";
import Header from "../Header/header";
import Footer from "../Footer/footer";
import Routers from "../../routers/routes";

/**
 * Layout component to render the header, main content, and footer
 */
const Layout = () => {
  return (
    <>
      <Header /> {/* Render the header component */}
      <div>
        <Routers /> {/* Render the routers component */}
      </div>
      <Footer /> {/* Render the footer component */}
    </>
  );
};

export default Layout;
