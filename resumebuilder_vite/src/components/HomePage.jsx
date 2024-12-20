import React from 'react'
import '../assets/style/test.css'
import resumetemp from '../assets/image/resume-builder.png'
import { useNavigate } from 'react-router-dom';


function HomePage() {
    const navigate = useNavigate();
    const handleButtonClick = () => {
        console.log("asas");
        
        navigate('/template'); // Navigate to the Template component
      };
  return (
<div className="container">
      {/* Header Section */}
      <header className="header">
        <h1 className="logo">Resume Builder</h1>
        <nav className="nav">
          <a href="#tools">Tools</a>
          <a href="#resume">Resume</a>
          <a href="#cv">CV</a>
          <a href="#cover-letter">Cover Letter</a>
          <a href="#about">About</a>
          {/* <a href="#account" className="account-button">
            My Account
          </a> */}
        </nav>
      </header>

      {/* Hero Section */}
      <center></center>
      <section className="hero">
        <div className="hero-content">
          <h1>Best Online Resume Builder (Free to Try)</h1>
          <h2>Fast. Easy. Effective.</h2>
          <p>
            Writing a resume is a daunting task. Nothing but stress, confusion,
            and wasting precious hours on making an attractive template. But
            not with Zety. Let us take over.
          </p>
          <button className="cta-button" onClick={handleButtonClick}>Make Your Resume Now</button>
        </div>
        <div className="hero-images">
          <img src={resumetemp} alt="Resume 1" />
        </div>
      </section>
    </div>  )
}

export default HomePage