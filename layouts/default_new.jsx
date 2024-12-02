import React, { useState, useRef } from "react";
import Topbar from "../components/Menu/Topbar";
import Header from "../components/Menu/Header";
import Footer from "../components/Menu/Footer";
import { NextUIProvider } from "@nextui-org/react";
export default function DefaultLayout({ children }) {
  return (
    <NextUIProvider>
      <Topbar />
      <Header />
      <main>{children}</main>
      <Footer />
    </NextUIProvider>
  );
}
