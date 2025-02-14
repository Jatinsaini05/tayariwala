import { useState, useRef } from 'react';

const useMouseFollow = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const spanRef = useRef(null);

  const onMouseMove = (e) => {
    const { left, top } = e.currentTarget.getBoundingClientRect();
    setPosition({ x: e.clientX - left, y: e.clientY - top });
  };

  return {
    position,
    isHovered,
    spanRef,
    onMouseMove,
    onMouseEnter: () => setIsHovered(true),
    onMouseLeave: () => setIsHovered(false),
  };
};

export default useMouseFollow;
