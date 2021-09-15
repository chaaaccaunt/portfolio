import { solarSystem } from "./Planets";
import { StarsAsteroids } from "./Stars&Asteroids";

export function renderSolarSystem(canvas: HTMLCanvasElement) {
  const ctx = canvas.getContext("2d")!;
  function resize() {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight - 20;
  }
  resize();

  const dirs: { x: number; y: number }[] = [];
  for (let i = 0; i <= 360; i++) {
    dirs.push({
      x: Math.cos((i * Math.PI) / 180),
      y: Math.sin((i * Math.PI) / 180),
    });
  }

  const system = new solarSystem(ctx, canvas.offsetWidth / 2, (canvas.offsetHeight - 20) / 2, dirs);
  system.init();

  const stars = new StarsAsteroids(canvas.offsetWidth, canvas.offsetHeight - 20, dirs, system.solarSystem.neptune.y);
  stars.makeSystem();

  function looper() {
    stars.rotateAsteroids();
    ctx.fillStyle = "hsl(229, 100%, 4%)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < stars.stars.length; ++i) {
      ctx.fillStyle = stars.stars[i].color;
      ctx.fillRect(stars.stars[i].x, stars.stars[i].y, 2, 2);
    }
    for (let i = 0; i < stars.asteroids.length; ++i) {
      ctx.shadowBlur = 0;
      ctx.shadowColor = "none";
      ctx.fillStyle = stars.asteroids[i].color;
      ctx.fillRect(stars.asteroids[i].x, stars.asteroids[i].y, 2, 2);
    }
    for (let i = 0; i < stars.kuiper.length; ++i) {
      ctx.fillStyle = stars.kuiper[i].color;
      ctx.fillRect(stars.kuiper[i].x, stars.kuiper[i].y, 2, 2);
    }
    system.rotateSystem();
    requestAnimationFrame(looper);
  }
  looper();
}
