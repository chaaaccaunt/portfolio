import { Members } from "./Members";

export function renderSolarSystem(canvas: HTMLCanvasElement) {
  const ctx = canvas.getContext("2d")!;
  let w: number, h: number, cw: number, ch: number;
  w = canvas.width = canvas.offsetWidth;
  h = canvas.height = canvas.offsetHeight;
  cw = w / 2;
  ch = h / 2;
  const dirs: { x: number; y: number }[] = [];
  for (let i = 0; i <= 360; i++) {
    dirs.push({
      x: Math.cos((i * Math.PI) / 180),
      y: Math.sin((i * Math.PI) / 180),
    });
  }

  const stars: { x: number; y: number; color: string }[] = [];

  function bgcolor() {
    ctx.fillStyle = "#02020C";
    ctx.fillRect(0, 0, w, h);
  }

  for (let i = 0; i < 400; i++) {
    stars.push({ x: (Math.random() * w) | 0, y: (Math.random() * h) | 0, color: `hsl(${(Math.random() * 255) | 0}, 62%, 93%)` });
  }

  function renderStars() {
    for (let i = 0; i < stars.length; ++i) {
      const rand = (Math.random() * 100) | 0;
      ctx.shadowBlur = 10;
      ctx.shadowColor = `hsl(229, 62%, ${rand}%)`;
      ctx.fillStyle = stars[i].color;
      ctx.fillRect(stars[i].x, stars[i].y, 1.5, 1.5);
    }
  }

  const system = new Members(w, h, dirs, ctx);

  function looper() {
    bgcolor();
    renderStars();
    system.rotateSystem();
    requestAnimationFrame(looper);
  }
  looper();
}
