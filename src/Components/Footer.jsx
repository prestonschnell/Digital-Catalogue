import React from 'react'
import './footerStyles.css'
import royalLogo from '../assets/royal_logo__blue.png'

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="company-info">
        <div className="footer-header">
          <h1>Royal Productions</h1>
          <p>Your full-service audio visual production partner.</p>
        </div>
        <div className="contact-info">
          <p>info@royalproductions.com</p>
          <p>1-800-776-9252</p>
        </div>
        <div className="social-links">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </div>
      <div className="company-logo">
        <img src={royalLogo} alt="Company Logo" className="company-logo" />
        <span><p>It is our mission to be your full-service audio visual production partner by creating an impactful and unforgettable experience.</p></span>
      </div>
      <div className="quick-links">
        <h2>Quick Links</h2>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/what-we-do">What We Do</a></li>
          <li><a href="/our-work">Our Work</a></li>
          <li><a href="/our-story">Our Story</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Footer




/* Use NewDate() javascript global method to display current year. */



/* 

Div 1: company-info
- Company Name
- Slogan
- Email Information
- Phone Number
- Social Media Links (Instagram, Facebook, LinkedIn)

Div 2: company-logo
- Company Logo
- Mission Statement

Div 3: quick-links
- Home
- What We Do
- Our Work
- Our Story
- Contact

We are going to use the above structure to create a footer component.
Follow the Figma design.

*/