export class solarSystem {
  private position = {
    x: 0,
    y: 0,
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
        x: 0,
        y: 0,
      },
      satellite: {
        name: "Moon",
        x: 0,
        y: 0,
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
        x: 0,
        y: 0,
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
  private cw = 0;
  private ch = 0;
  constructor(private ctx: CanvasRenderingContext2D, cw: number, ch: number, private dirs: { x: number; y: number }[] = []) {
    this.ctx = ctx;
    this.cw = cw;
    this.ch = ch;
  }
  init() {
    Object.entries(this.solarSystem).forEach((pl, index) => {
      if (pl[1].dist > 0) {
        pl[1].x = this.cw;
        pl[1].y = this.ch - this.ch * 0.15 * index;
      } else {
        pl[1].x = this.cw;
        pl[1].y = this.ch;
      }
    });
  }
  rotateSystem() {
    this.state = (this.state + 1) % 1920;
    Object.entries(this.solarSystem).forEach((pl, index) => {
      if (pl[1].dist > 0) {
        if (this.state % index === 0) pl[1].stateOfMovment = (pl[1].stateOfMovment + 1) % 360;
        pl[1].x += this.dirs[pl[1].stateOfMovment].x;
        pl[1].y += this.dirs[pl[1].stateOfMovment].y;
        if (pl[1].satellite) {
          pl[1].satellite.stateOfMovment = (pl[1].satellite.stateOfMovment + 1) % 360;
          pl[1].satellite.direction.x += this.dirs[pl[1].satellite.stateOfMovment].x * 0.4;
          pl[1].satellite.direction.y += this.dirs[pl[1].satellite.stateOfMovment].y * 0.4;
          pl[1].satellite.x = this.solarSystem.earth.x + pl[1].satellite.direction.x;
          pl[1].satellite.y = this.solarSystem.earth.y + pl[1].satellite.direction.y - 22;
        }
      }
    });
    this.renderSystem();
  }
  renderSystem() {
    Object.entries(this.solarSystem).forEach((pl) => {
      this.ctx.beginPath();
      this.ctx.shadowBlur = 10;
      this.ctx.shadowColor = pl[1].color;
      this.ctx.textAlign = "center";
      this.ctx.textBaseline = "middle";
      this.ctx.fillText(pl[0].charAt(0).toUpperCase() + pl[0].slice(1), pl[1].x, pl[1].y - 20);
      this.ctx.arc(pl[1].x, pl[1].y, pl[1].radius * 10, 0, Math.PI * 2);
      this.ctx.fillStyle = pl[1].color;
      this.ctx.fill();
      this.ctx.closePath();
      if (pl[1].satellite) {
        this.ctx.beginPath();
        this.ctx.fillStyle = pl[1].satellite.color;
        this.ctx.fillText(pl[1].satellite.name, pl[1].satellite.x, pl[1].satellite.y - 20);
        this.ctx.arc(pl[1].satellite.x, pl[1].satellite.y, pl[1].satellite.radius * 10, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.closePath();
      }
    });
  }
}
