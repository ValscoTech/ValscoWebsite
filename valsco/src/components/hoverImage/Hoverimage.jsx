import React, { useRef, useEffect, useState } from 'react';
import gif from './valscogif.gif';
import './hover.css';
import {Link}from 'react-scroll';
import { Helmet } from "react-helmet-async";



const HoverImage = () => {
  const containerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      const containerRect = containerRef.current.getBoundingClientRect();
      const x = event.clientX - containerRect.left;
      const y = event.clientY - containerRect.top;
      setPosition({ x, y });
      setIsHovered(
        x >= 0 && x <= containerRect.width && y >= 0 && y <= containerRect.height
      );
    };

    containerRef.current?.addEventListener('mousemove', handleMouseMove);

    return () => {
      containerRef.current?.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const imageStyle = {
    position: 'absolute',
    width: '400px',
    height: '400px',
    left: `${position.x - 195}px`,
    top: `${position.y - 195}px`,
    transition: 'transform .4s ease',
    transform: isHovered ? 'scale(1)' : 'scale(0)',
  };

  return (
    <>
    <Helmet>
        <title>Interactive Hover Image - Valsco Technology</title>
        <meta
          name="description"
          content="Experience an interactive hover effect with the Valsco Technology logo. Explore our innovative solutions by interacting with this engaging element."
        />
        <link rel="canonical" href="/hover-image" />
      </Helmet>
    
  
    <Link to="aboutuspage">
    <div  style={{display:'flex',justifyContent:'center',margin:'100px'}}>
    <div className='softimage'
      ref={containerRef}
    >
      <img
        src={gif}
        alt="HoverImage"
        style={imageStyle}
      />
    </div>
    </div>
    </Link>

    </>
  );
};

export default HoverImage;
