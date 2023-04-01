import React, { useState, useEffect } from 'react';

interface MarqueeProps {
  text: string;
  speed?: number;
  direction?: 'left' | 'right';
}

const Marquee: React.FC<MarqueeProps> = ({ text, speed = 100, direction = 'left' }) => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const marqueeId = setInterval(() => {
      setOffset((prevOffset) =>
        direction === 'left' ? prevOffset - 1 : prevOffset + 1
      );
    }, speed);

    return () => clearInterval(marqueeId);
  }, [speed, direction]);

  const style = {
    transform: `translateX(${offset}px)`,
  };

  return <div style={style}>{text}</div>;
};

export default Marquee;
