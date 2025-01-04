import React from "react";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Layout from "./components/Layout";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

function App() {
  return (
    <Layout>
      <Home />
      <Projects />
      <Contact />
      <Analytics />
      <SpeedInsights />
    </Layout>
  );
}

export default App;
