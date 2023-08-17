import React, { useRef, useEffect } from 'react';
/*import '../styles/BubbleAnimation.css';*/

const BubbleAnimation = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Set canvas dimensions
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Bubble properties
    const bubbles = [];
    const numBubbles = 50;
    const minRadius = 10;
    const maxRadius = 40;

    // Create bubbles
    for (let i = 0; i < numBubbles; i++) {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      const radius = Math.random() * (maxRadius - minRadius) + minRadius;
      const dx = Math.random() - 0.5; // Horizontal velocity
      const dy = Math.random() - 0.5; // Vertical velocity
      bubbles.push({ x, y, radius, dx, dy });
    }

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw bubbles
      bubbles.forEach((bubble) => {
        bubble.x += bubble.dx;
        bubble.y += bubble.dy;

        // Reverse direction upon reaching canvas edges
        if (bubble.x + bubble.radius > canvas.width || bubble.x - bubble.radius < 0) {
          bubble.dx *= -1;
        }
        if (bubble.y + bubble.radius > canvas.height || bubble.y - bubble.radius < 0) {
          bubble.dy *= -1;
        }

        // Draw bubble
        ctx.beginPath();
        ctx.arc(bubble.x, bubble.y, bubble.radius, 0, Math.PI * 2);
        ctx.fillStyle = '#eaeaea';
        ctx.fill();
        ctx.closePath();
      });
    };

    animate();
  }, []);

  return <canvas className="bubble-animation" ref={canvasRef} />;
};

export default BubbleAnimation;
