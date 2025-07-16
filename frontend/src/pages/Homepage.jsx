// src/pages/Homepage.jsx
import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import Features from '../components/Features';
import Workflow from '../components/Workflow';
import ValueProposition from '../components/ValueProposition';
import Footer from '../components/Footer';

export default function Homepage() {
  return (
    <>
      <Header />
      <HeroSection />
      <Features />
      <Workflow />
      <ValueProposition />
      <Footer />
    </>
  );
}
