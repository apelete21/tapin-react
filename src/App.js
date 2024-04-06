import React from "react";
import "./styles/index.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Pro from "./pages/pro";
import Footer from "./footer";
import Head from "./head";
import Demo from "./pages/demo";
import Classic from "./pages/classic";
import About from "./pages/about";

export default function App() {
  return (
    <>
      <Head />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pro" element={<Pro />} />
        <Route path="/demo" element={<Demo />} />
        <Route path="/classic" element={<Classic />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </>
  );
}
