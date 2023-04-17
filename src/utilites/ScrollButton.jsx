import React, { useState } from 'react';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';


const ScrollButton = () => {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  window.addEventListener('scroll', checkScrollTop);

  return (
    <ArrowUpwardIcon
      onClick={scrollTop}
      style={{
        backgroundColor: 'orange',
        fontSize: '60px',
        color: 'white',
        borderRadius: '50%',
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        cursor: 'pointer',
        transitionDuration: '0.2s',
        transitionTimingFunction: 'linear',
        transitionDelay: '0s',
        zIndex: '100',
      }}
    />
  );
};

export default ScrollButton;
