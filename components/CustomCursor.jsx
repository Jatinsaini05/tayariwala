import React, { useEffect, useRef } from 'react';

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const dotRef = useRef(null);
  const targetPosition = useRef({ x: 0, y: 0 });
  const currentPosition = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const cursor = document.createElement('div');
    const dot = document.createElement('div');

    cursor.classList.add('custom-cursor');
    dot.classList.add('cursor-dot');

    document.body.appendChild(cursor); // Append the cursor
    document.body.appendChild(dot); // Append the dot to the cursor

    cursorRef.current = cursor;
    dotRef.current = dot;

    const mouseMoveHandler = (e) => {
      targetPosition.current = { x: e.pageX, y: e.pageY };
    };

    const animateCursor = () => {
      // Directly set the current position to the target position for linear movement
      currentPosition.current.x = targetPosition.current.x;
      currentPosition.current.y = targetPosition.current.y;

      // Update cursor position (circle)
      cursor.style.left = `${currentPosition.current.x}px`;
      cursor.style.top = `${currentPosition.current.y}px`;

      // Position the dot in the center of the outer cursor
      dot.style.left = `${currentPosition.current.x}px`;
      dot.style.top = `${currentPosition.current.y}px`;

      // Center the dot
      dot.style.transform = 'translate(-50%, -50%)';

      requestAnimationFrame(animateCursor);
    };

    window.addEventListener('mousemove', mouseMoveHandler);
    requestAnimationFrame(animateCursor);

    return () => {
      window.removeEventListener('mousemove', mouseMoveHandler);
      document.body.removeChild(cursor);
    };
  }, []);

  return null;
};

export default CustomCursor;
