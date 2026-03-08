"use client";
import { useEffect } from "react";
// import { RiResetLeftFill } from "react-icons/ri";
import { MdOutlineClear } from "react-icons/md";
import { FaPencil, FaEraser } from "react-icons/fa6";

interface DrawingConfig {
  color?: string;
  width: number;
  lineCap: "round" | "butt" | "square";
  lineJoin: "round" | "bevel" | "miter";
}

const canvasState = {
  penActive: true,
  eraserActive: false,
  isDrawing: false,
  isErasing: false,
  lastX: 0,
  lastY: 0,
};

const penConfig: DrawingConfig = {
  color: "#000000",
  width: 2,
  lineCap: "round" as const,
  lineJoin: "round" as const,
};

const eraserConfig: DrawingConfig = {
  width: 20,
  lineCap: "round" as const,
  lineJoin: "round" as const,
};

function initializePen() {
  canvasState.penActive = true;
  canvasState.eraserActive = false;
  const canvas = document.getElementById("canvas") as HTMLCanvasElement;
  const ctx = canvas.getContext("2d")!;
  if (!ctx) return;
  ctx.globalCompositeOperation = "source-over";
  ctx.strokeStyle = penConfig.color || "#000000";
  ctx.lineWidth = penConfig.width;
  ctx.lineCap = penConfig.lineCap;
  ctx.lineJoin = penConfig.lineJoin;
}

function initializeEraser() {
  canvasState.penActive = false;
  canvasState.eraserActive = true;
  const canvas = document.getElementById("canvas") as HTMLCanvasElement;
  const ctx = canvas.getContext("2d")!;
  if (!ctx) return;
  ctx.globalCompositeOperation = "destination-out";
  ctx.lineWidth = eraserConfig.width;
  ctx.lineCap = eraserConfig.lineCap;
  ctx.lineJoin = eraserConfig.lineJoin;
}

function draw(e: MouseEvent, ctx: CanvasRenderingContext2D) {
  ctx.beginPath();
  ctx.moveTo(canvasState.lastX, canvasState.lastY);
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  canvasState.lastX = e.offsetX;
  canvasState.lastY = e.offsetY;
}

function setupCanvas() {
  const canvas = document.getElementById("canvas") as HTMLCanvasElement;
  const ctx = canvas.getContext("2d")!;
  if (!ctx) return;

  initializePen();

  canvas.addEventListener("mousedown", (e) => {
    if (canvasState.penActive) {
      canvasState.isDrawing = true;
      canvasState.lastX = e.offsetX;
      canvasState.lastY = e.offsetY;
    } else if (canvasState.eraserActive) {
      canvasState.isErasing = true;
      canvasState.lastX = e.offsetX;
      canvasState.lastY = e.offsetY;
    }
  });

  canvas.addEventListener("mousemove", (e) => {
    if (canvasState.isDrawing) {
      draw(e, ctx);
    } else if (canvasState.isErasing) {
      draw(e, ctx);
    }
  });

  canvas.addEventListener("mouseup", () => {
    canvasState.isDrawing = false;
    canvasState.isErasing = false;
  });

  canvas.addEventListener("mouseleave", () => {
    canvasState.isDrawing = false;
    canvasState.isErasing = false;
  });
}

function clearCanvas() {
  const canvas = document.getElementById("canvas") as HTMLCanvasElement;
  const ctx = canvas.getContext("2d")!;
  if (!ctx) return;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

const canvasComponent = () => {
  useEffect(() => {
    setupCanvas();
    return () => {
      const canvas = document.getElementById("canvas") as HTMLCanvasElement;
      canvas.removeEventListener("mousedown", () => {});
      canvas.removeEventListener("mousemove", () => {});
      canvas.removeEventListener("mouseup", () => {});
      canvas.removeEventListener("mouseleave", () => {});
    };
  }, []);

  return (
    <div className="flex justify-center items-center flex-col">
      <canvas
        id="canvas"
        className="border-solid border-2 border-gray-300 rounded-lg"
        width="800"
        height="600"
      ></canvas>
      <div className="flex gap-2">
        <button
          onClick={initializePen}
          className="hover:scale-105 transition-transform p-2"
        >
          <FaPencil />
        </button>
        <button
          onClick={initializeEraser}
          className="hover:scale-105 transition-transform p-2"
        >
          <FaEraser />
        </button>
        <button
          onClick={clearCanvas}
          className="hover:scale-105 transition-transform p-2"
        >
          <MdOutlineClear />
        </button>
      </div>
    </div>
  );
};

export default canvasComponent;
