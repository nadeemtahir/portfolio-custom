import React from 'react';
import { RiLightbulbFlashLine } from "react-icons/ri";
import Link from 'next/link';
import '@/app/styles/portfolio.css';

const WhatIDo = () => {
  const services = [
    {
      title: "Editable Resume Builder",
      description: "Explore my portfolio of visually compelling and creative design projects.",
      link: "https://cerulean-cannoli-2160ad.netlify.app",
    },
    {
      title: "Dynamic Resume Builder",
      description: "Explore my portfolio of visually compelling and creative design projects.",
      link: "https://bright-sable-90fd44.netlify.app",
    },
    {
      title: "Shareable Resume Builder",
      description: "Explore my portfolio of visually compelling and creative design projects.",
      link: "https://mellifluous-naiad-85705a.netlify.app",
    },
    {
      title: "Techinsights using Custom-CSS",
      description: "Simple multi-page website.",
      link: "https://stalwart-rugelach-b4fc2f.netlify.app",
    },
    {
      title: "Techinsights using Tailwind-CSS",
      description: "See my multi-page website.",
      link: "https://flourishing-meerkat-2290d5.netlify.app",
    },
    {
      title: "siple E-commerce website using nextjs.",
      description: "See my multi-page website.",
      link: "https://deluxe-jalebi-7783c9.netlify.app",
    },
    {
      title: "CLI Currency Convertor",
      description: "View my Currency Convertor projects.",
      link: "https://github.com/nadeemtahir/Currency-converter.git",
    },
    {
      title: "CLI Adventure Game",
      description: "View my CLI based Adventure game.",
      link: "https://github.com/nadeemtahir/Adventure-game.git",
    },
    {
      title: "CLI Student Management System",
      description: "See my CLI student management project.",
      link: "https://github.com/nadeemtahir/Student-management-system.git", // Updated internal link path
    },
  ];

  return (
    <section className="whatIDo-container">
      <h1 className="whatIDo-heading">
        What I Do
      </h1>

      <div className="whatIDo-grid">
        {services.map((service, index) => (
          <div key={index} className="whatIDo-card">
            <RiLightbulbFlashLine className='whatIDo-icon' />
            <h2 className='whatIDo-title'>{service.title}</h2>
            <p className='whatIDo-description'>{service.description}</p>
            
            {/* External link ke liye <a> aur internal ke liye <Link> */}
            {service.link.startsWith("http") ? (
              <a href={service.link} target="_blank" rel="noopener noreferrer" className="whatIDo-link">
                View Projects
              </a>
            ) : (
              <Link href={service.link} className="whatIDo-link">
                View Projects
              </Link>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhatIDo;
