import Footer from "@layout/Footer/Footer";
import NavigationBar from "@layout/NavigationBar/NavigationBar";
import React from "react";
import { Box } from "@mui/material";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <NavigationBar />
      <Box component="main" className="min-h-screen max-w-[1600px] m-auto">
        {children}
      </Box>
      <Footer />
    </>
  );
};

export default Layout;
