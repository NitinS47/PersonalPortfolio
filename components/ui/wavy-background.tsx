import React, { useEffect, useRef, useCallback } from "react";
import { createNoise3D } from "simplex-noise";

interface WavyBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  colors?: string[];
  waveWidth?: number;
  blur?: number;
  speed?: "slow" | "fast";
  waveOpacity?: number;
  overflowScale?: number;
}

export const WavyBackground: React.FC<WavyBackgroundProps> = ({
  children,
  className,
  containerClassName,
  colors,
  waveWidth,
  blur = 10,
  speed = "fast",
  waveOpacity = 0.5,
  overflowScale = 1.5,
  ...props
}) => {
  const noise = createNoise3D();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const waveColors = useRef(colors ?? [
    "#38bdf8",
    "#818cf8",
    "#c084fc",
    "#e879f9",
    "#22d3ee",
  ]).current;

  const getSpeed = useCallback(() => {
    return speed === "fast" ? 0.002 : 0.001;
  }, [speed]);

  const drawWave = useCallback(
    (
      ctx: CanvasRenderingContext2D,
      noise: (x: number, y: number, z: number) => number,
      width: number,
      height: number,
      nt: number,
      n: number
    ) => {
      for (let i = 0; i < n; i++) {
        ctx.beginPath();
        ctx.lineWidth = waveWidth || 50;
        ctx.strokeStyle = waveColors[i % waveColors.length];
        for (let x = 0; x < width; x += 5) {
          const y = noise(x / 800, 0.3 * i, nt) * 100;
          ctx.lineTo(x, y + height * 0.5);
        }
        ctx.stroke();
        ctx.closePath();
      }
    },
    [waveWidth, waveColors]
  );

  const initCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const { width, height } = container.getBoundingClientRect();
    canvas.width = width * overflowScale;
    canvas.height = height * overflowScale;
    ctx.filter = `blur(${blur}px)`;

    let nt = 0;

    const render = () => {
      nt += getSpeed();
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.globalAlpha = waveOpacity || 0.5;
      drawWave(ctx, noise, canvas.width, canvas.height, nt, 5);
      requestAnimationFrame(render);
    };

    render();

    const resizeCanvas = () => {
      const { width, height } = container.getBoundingClientRect();
      canvas.width = width * overflowScale;
      canvas.height = height * overflowScale;
      ctx.filter = `blur(${blur}px)`;
    };

    window.addEventListener("resize", resizeCanvas);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [blur, drawWave, getSpeed, noise, overflowScale, waveOpacity]);

  useEffect(() => {
    const cleanup = initCanvas();
    return () => cleanup && cleanup();
  }, [initCanvas]);

  function cn(...classes: (string | undefined)[]): string {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative w-full h-full flex items-center justify-center",
        containerClassName
      )}
    >
      <canvas
        ref={canvasRef}
        className="absolute -top-1/4 -left-1/4 z-0"
        style={{
          ...(typeof window !== "undefined" && window.navigator.userAgent.includes("Safari") ? { filter: `blur(${blur}px)` } : {}),
        }}
      />
      <div className={cn("relative z-10", className)} {...props}>
        {children}
      </div>
    </div>
  );
};
