import React, { useRef, useEffect } from 'react';
import styled, { createGlobalStyle } from 'styled-components';

const Page8Styled = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
  }
`;

const Canvas = styled.canvas`
  display: block;
`;

const Page8 = () => {
  const canvasRef = useRef(null);
  const isDrawing = useRef(false);
  const lastX = useRef(0);
  const lastY = useRef(0);
  const hue = useRef(0);
  const direction = useRef(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    ctx.strokeStyle = '#BADA55';
    ctx.lineJoin = 'round';
    ctx.lineCap = 'round';
    ctx.lineWidth = 10;

    // Draw the text in the center of the canvas
    const drawCenteredText = (text) => {
      ctx.font = '48px sans-serif';
      ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(text, canvas.width / 2, canvas.height / 2);
    };

    drawCenteredText('Draw anything you want');

    const draw = (e) => {
      if (!isDrawing.current) return;
      ctx.strokeStyle = `hsl(${hue.current}, 100%, 50%)`;
      ctx.beginPath();
      ctx.moveTo(lastX.current, lastY.current);
      ctx.lineTo(e.offsetX, e.offsetY);
      ctx.stroke();
      lastX.current = e.offsetX;
      lastY.current = e.offsetY;
      hue.current++;
      if (hue.current >= 360) {
        hue.current = 0;
      }
      if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
        direction.current = !direction.current;
      }
      if (direction.current) {
        ctx.lineWidth++;
      } else {
        ctx.lineWidth--;
      }
    };

    const startDrawing = (e) => {
      isDrawing.current = true;
      lastX.current = e.offsetX;
      lastY.current = e.offsetY;
    };

    const stopDrawing = () => {
      isDrawing.current = false;
    };

    canvas.addEventListener('mousedown', startDrawing);
    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mouseup', stopDrawing);
    canvas.addEventListener('mouseout', stopDrawing);

    return () => {
      canvas.removeEventListener('mousedown', startDrawing);
      canvas.removeEventListener('mousemove', draw);
      canvas.removeEventListener('mouseup', stopDrawing);
      canvas.removeEventListener('mouseout', stopDrawing);
    };
  }, []);

  return (
    <>
      <Page8Styled />
      <Canvas ref={canvasRef} />
    </>
  );
};

export default Page8;