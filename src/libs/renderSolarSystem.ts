export function renderSolarSystem(canvas: HTMLCanvasElement) {
  const ctx = canvas.getContext("2d")!;
  let w: number, h: number, cw: number, ch: number;
  function resize() {
    w = canvas.width = canvas.offsetWidth;
    h = canvas.height = canvas.offsetHeight - 20;
    cw = w / 2;
    ch = h / 2;
  }
  resize();
  window.addEventListener("resize", resize);

  const dirs: { x: number; y: number }[] = [];
  for (let i = 0; i <= 360; i++) {
    dirs.push({
      x: Math.cos((i * Math.PI) / 180),
      y: Math.sin((i * Math.PI) / 180),
    });
  }

  const stars: { x: number; y: number; color: string }[] = [];
  const asteroids: { x: number; y: number; color: string; dir: number }[] = [];
  const kuiper: { x: number; y: number; color: string; dir: number }[] = [];

  class solarSystem {
    private position = {
      x: w / 2,
      y: h / 2,
    };
    private latency = 1;
    public solarSystem = {
      sun: {
        x: 0,
        y: 0,
        dist: 0,
        radius: 3,
        stateOfMovment: 0,
        color: "#f1c716",
        latency: 0,
        direction: {
          x: 0,
          y: 0,
        },
        satellite: null,
      },
      mercury: {
        x: 0,
        y: 0,
        dist: 6.4,
        radius: 1,
        stateOfMovment: 0,
        color: "#f18f49",
        latency: this.latency,
        direction: {
          x: 0,
          y: 0,
        },
        satellite: null,
      },
      venus: {
        x: 0,
        y: 0,
        dist: 8.7,
        radius: 1,
        stateOfMovment: 0,
        color: "#f8bcbd",
        latency: this.latency * 2,
        direction: {
          x: 0,
          y: 0,
        },
        satellite: null,
      },
      earth: {
        x: 0,
        y: 0,
        dist: 11,
        radius: 1,
        stateOfMovment: 0,
        color: "#12239e",
        latency: this.latency * 4,
        direction: {
          x: w / 2,
          y: h / 2,
        },
        satellite: {
          name: "Moon",
          x: w / 2,
          y: h / 2,
          dist: 0.2,
          stateOfMovment: 0,
          radius: 0.5,
          color: "#d8d7bf",
          direction: {
            x: 0,
            y: 0,
          },
        },
      },
      mars: {
        x: 0,
        y: 0,
        dist: 13.5,
        radius: 1,
        stateOfMovment: 0,
        color: "#f5c869",
        latency: this.latency * 6,
        direction: {
          x: w / 2,
          y: h / 2,
        },
        satellite: null,
      },
      jupiter: {
        x: 0,
        y: 0,
        dist: 16.2,
        radius: 1.5,
        stateOfMovment: 0,
        color: "#c4b07b",
        latency: this.latency * 8,
        direction: {
          x: 0,
          y: 0,
        },
        satellite: null,
      },
      saturn: {
        x: 0,
        y: 0,
        dist: 19.5,
        radius: 1.5,
        stateOfMovment: 0,
        color: "#c4b07b",
        latency: this.latency * 10,
        direction: {
          x: 0,
          y: 0,
        },
        satellite: null,
      },
      uranus: {
        x: 0,
        y: 0,
        dist: 22.2,
        radius: 1,
        stateOfMovment: 0,
        color: "#118dff",
        latency: this.latency * 12,
        direction: {
          x: 0,
          y: 0,
        },
        satellite: null,
      },
      neptune: {
        x: 0,
        y: 0,
        dist: 25.1,
        radius: 1,
        stateOfMovment: 0,
        color: "#8bc7f7",
        latency: this.latency * 14,
        direction: {
          x: 0,
          y: 0,
        },
        satellite: null,
      },
      pluton: {
        x: 0,
        y: 0,
        dist: 27.5,
        radius: 1,
        stateOfMovment: 0,
        color: "#f8bcbd",
        latency: this.latency * 16,
        direction: {
          x: 0,
          y: 0,
        },
        satellite: null,
      },
    };
    private state = 0;
    init() {
      Object.entries(this.solarSystem).forEach((pl, index) => {
        if (pl[1].dist > 0) {
          pl[1].x = cw;
          pl[1].y = ch - ch * 0.15 * index;
        } else {
          pl[1].x = cw;
          pl[1].y = ch;
        }
      });
    }
    rotateSystem() {
      this.state = (this.state + 1) % 1920;
      Object.entries(this.solarSystem).forEach((pl, index) => {
        if (pl[1].dist > 0) {
          if (this.state % index === 0) pl[1].stateOfMovment = (pl[1].stateOfMovment + 1) % 360;
          pl[1].x += dirs[pl[1].stateOfMovment].x;
          pl[1].y += dirs[pl[1].stateOfMovment].y;
          if (pl[1].satellite) {
            pl[1].satellite.stateOfMovment = (pl[1].satellite.stateOfMovment + 1) % 360;
            pl[1].satellite.direction.x += dirs[pl[1].satellite.stateOfMovment].x * 0.4;
            pl[1].satellite.direction.y += dirs[pl[1].satellite.stateOfMovment].y * 0.4;
            pl[1].satellite.x = this.solarSystem.earth.x + pl[1].satellite.direction.x;
            pl[1].satellite.y = this.solarSystem.earth.y + pl[1].satellite.direction.y - 22;
          }
        }
      });
      this.renderSystem();
    }
    renderSystem() {
      Object.entries(this.solarSystem).forEach((pl) => {
        ctx.beginPath();
        ctx.shadowBlur = 10;
        ctx.shadowColor = pl[1].color;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        // ctx.fillText(`X:${pl[1].x.toFixed(1)}, Y:${pl[1].y.toFixed(1)}`, pl[1].x, pl[1].y - 30);
        ctx.fillText(pl[0].charAt(0).toUpperCase() + pl[0].slice(1), pl[1].x, pl[1].y - 20);
        ctx.arc(pl[1].x, pl[1].y, pl[1].radius * 10, 0, Math.PI * 2);
        ctx.fillStyle = pl[1].color;
        ctx.fill();
        ctx.closePath();
        if (pl[1].satellite) {
          ctx.beginPath();
          ctx.fillStyle = pl[1].satellite.color;
          ctx.fillText(pl[1].satellite.name, pl[1].satellite.x, pl[1].satellite.y - 20);
          ctx.arc(pl[1].satellite.x, pl[1].satellite.y, pl[1].satellite.radius * 10, 0, Math.PI * 2);
          ctx.fill();
          ctx.closePath();
        }
      });
    }
  }

  const system = new solarSystem();

  system.init();

  const ast = {
    asteroids: {
      x: canvas.offsetWidth / 2,
      y: canvas.offsetHeight * 0.15 + 5,
    },
    degree: 0,
    dir: 0,
    raduis: 0,
    speed: 0,
    count: 0,
  };

  const kup = {
    asteroids: {
      x: canvas.offsetWidth / 2,
      y: system.solarSystem.neptune.y - 27,
    },
    degree: 0,
    dir: 0,
    raduis: 0,
    speed: 0,
    count: 0,
  };

  function randomNum() {
    return Math.random() > 0.5 ? ~((Math.random() * 8) | 0) : (Math.random() * 8) | 0;
  }

  function makeSystem() {
    for (let i = 0; i < 1000; i++) {
      stars.push({ x: (Math.random() * w) | 0, y: (Math.random() * h) | 0, color: `hsl(${(Math.random() * 255) | 0}, 61%, 93%)` });
    }
    for (let i = 0; i < 1620; i++) {
      ast.count = (ast.count + 0.5) % 1620;
      if (~~(ast.count % 4.5) === 0) ast.dir++;
      let randX = randomNum();
      let randY = randomNum();
      ast.asteroids.x += dirs[ast.dir].x;
      ast.asteroids.y += dirs[ast.dir].y;
      asteroids.push({ x: ast.asteroids.x + randX, y: ast.asteroids.y + randY, color: `hsl(212, 2%, 64%)`, dir: ast.dir });
    }
    for (let i = 0; i < 3060; i++) {
      kup.count = (kup.count + 0.5) % 3060;
      if (~~(kup.count % 8.5) === 0) kup.dir++;
      let randX = randomNum();
      let randY = randomNum();
      kup.asteroids.x += dirs[kup.dir].x;
      kup.asteroids.y += dirs[kup.dir].y;
      kuiper.push({ x: kup.asteroids.x + randX, y: kup.asteroids.y + randY, color: `hsl(212, 2%, 64%)`, dir: kup.dir });
    }
  }
  makeSystem();

  function rotateAsteroids() {
    ast.speed = (ast.speed + 1) % 10;
    if (ast.speed % 3 === 0) {
      ast.raduis = (ast.raduis + 0.5) % 810;
      for (let i = 0; i < asteroids.length; ++i) {
        if (~~(ast.raduis % 4.5) === 0) asteroids[i].dir = (asteroids[i].dir + 1) % 360;
        asteroids[i].x += dirs[asteroids[i].dir].x;
        asteroids[i].y += dirs[asteroids[i].dir].y;
      }
    }
    kup.speed = (kup.speed + 1) % 10;
    if (kup.speed % 5 === 0) {
      kup.raduis = (kup.raduis + 0.5) % 3240;
      for (let i = 0; i < kuiper.length; ++i) {
        if (~~(kup.raduis % 8.5) === 0) kuiper[i].dir = (kuiper[i].dir + 1) % 360;
        kuiper[i].x += dirs[kuiper[i].dir].x;
        kuiper[i].y += dirs[kuiper[i].dir].y;
      }
    }
  }

  function looper() {
    rotateAsteroids();
    ctx.fillStyle = "hsl(229, 100%, 4%)";
    ctx.fillRect(0, 0, w, h);
    for (let i = 0; i < stars.length; ++i) {
      ctx.fillStyle = stars[i].color;
      ctx.fillRect(stars[i].x, stars[i].y, 2, 2);
    }
    for (let i = 0; i < asteroids.length; ++i) {
      ctx.shadowBlur = 0;
      ctx.shadowColor = "none";
      ctx.fillStyle = asteroids[i].color;
      ctx.fillRect(asteroids[i].x, asteroids[i].y, 2, 2);
    }
    for (let i = 0; i < kuiper.length; ++i) {
      ctx.fillStyle = kuiper[i].color;
      ctx.fillRect(kuiper[i].x, kuiper[i].y, 2, 2);
    }
    system.rotateSystem();
    requestAnimationFrame(looper);
  }
  looper();
}
