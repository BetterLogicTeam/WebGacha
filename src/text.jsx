import React, { useState, useEffect } from 'react';

export default function Text() {
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const scrollPosition = window.pageYOffset;
  
      sections.forEach((section) => {
        const { top, height, id } = section.getBoundingClientRect();
        if (top <= scrollPosition && top + height > scrollPosition) {
          setActiveSection(id);
        }
      });
    };
  
  return (
    <>
      <div className="sidebar">
        <ul>
          <li className={activeSection === "section1" ? "active" : ""}>
            <a href="#section1">Section 1</a>
          </li>
          <li className={activeSection === "section2" ? "active" : ""}>
            <a href="#section2">Section 2</a>
          </li>
          <li className={activeSection === "section3" ? "active" : ""}>
            <a href="#section3">Section 3</a>
          </li>
        </ul>
      </div>
      <div className="content">
        <section id="section1">
          <h2>Section 1</h2>
          <p>Content of section 1.</p>
        </section>
        <section id="section2">
          <h2>Section 2</h2>
          <p>Content of section 2.</p>
        </section>
        <section id="section3">
          <h2>Section 3</h2>
          <p>Content of section 3.</p>
        </section>
      </div>
    </>
  );
}
