export class Members {
  public members = {
    sun: {
      type: "center",
      position: { x: 0, y: 0 },
      direction: { x: 0, y: 0 },
      count: 0,
      sequentialNum: 0,
      radius: 3,
      stateOfMovment: 0,
      color: "#f1c716",
      satellite: null,
      array: [] as { x: number; y: number; color: string; dir: number }[],
    },
    mercury: {
      type: "orbital",
      position: { x: 0, y: 0 },
      direction: { x: 0, y: 0 },
      count: 0,
      sequentialNum: 1,
      radius: 1,
      stateOfMovment: 0,
      color: "#f18f49",
      satellite: null,
      array: [] as { x: number; y: number; color: string; dir: number }[],
    },
    venus: {
      type: "orbital",
      position: { x: 0, y: 0 },
      direction: { x: 0, y: 0 },
      count: 0,
      sequentialNum: 2,
      radius: 1,
      stateOfMovment: 0,
      color: "#f8bcbd",
      satellite: null,
      array: [] as { x: number; y: number; color: string; dir: number }[],
    },
    earth: {
      type: "orbital",
      position: { x: 0, y: 0 },
      direction: { x: 0, y: 0 },
      count: 0,
      sequentialNum: 3,
      radius: 1,
      stateOfMovment: 0,
      color: "#12239e",
      satellite: {
        name: "Moon",
        type: "orbital",
        position: { x: 0, y: 0 },
        direction: { x: 0, y: 0 },
        count: 0,
        sequentialNum: 0,
        stateOfMovment: 0,
        radius: 0.2,
        color: "#d8d7bf",
        array: [] as { x: number; y: number; color: string; dir: number }[],
      },
      array: [] as { x: number; y: number; color: string; dir: number }[],
    },
    mars: {
      type: "orbital",
      position: { x: 0, y: 0 },
      direction: { x: 0, y: 0 },
      count: 0,
      sequentialNum: 4,
      radius: 1,
      stateOfMovment: 0,
      color: "#f5c869",
      satellite: null,
      array: [] as { x: number; y: number; color: string; dir: number }[],
    },
    asteroids: {
      type: "asteroids",
      position: { x: 0, y: 0 },
      direction: { x: 0, y: 0 },
      count: 360,
      sequentialNum: 5,
      radius: 0,
      stateOfMovment: 0,
      color: "#118dff",
      satellite: null,
      array: [] as { x: number; y: number; color: string; dir: number }[],
    },
    jupiter: {
      type: "orbital",
      position: { x: 0, y: 0 },
      direction: { x: 0, y: 0 },
      count: 0,
      sequentialNum: 6,
      radius: 1.5,
      stateOfMovment: 0,
      color: "#c4b07b",
      satellite: null,
      array: [] as { x: number; y: number; color: string; dir: number }[],
    },
    saturn: {
      type: "orbital",
      position: { x: 0, y: 0 },
      direction: { x: 0, y: 0 },
      count: 0,
      sequentialNum: 7,
      radius: 1.5,
      stateOfMovment: 0,
      color: "#c4b07b",
      satellite: null,
      array: [] as { x: number; y: number; color: string; dir: number }[],
    },
    uranus: {
      type: "orbital",
      position: { x: 0, y: 0 },
      direction: { x: 0, y: 0 },
      count: 0,
      sequentialNum: 8,
      radius: 1,
      stateOfMovment: 0,
      color: "#118dff",
      satellite: null,
      array: [] as { x: number; y: number; color: string; dir: number }[],
    },
    neptune: {
      type: "orbital",
      position: { x: 0, y: 0 },
      direction: { x: 0, y: 0 },
      count: 0,
      sequentialNum: 9,
      radius: 1,
      stateOfMovment: 0,
      color: "#8bc7f7",
      satellite: null,
      array: [] as { x: number; y: number; color: string; dir: number }[],
    },
    kuiper: {
      type: "asteroids",
      position: { x: 0, y: 0 },
      direction: { x: 0, y: 0 },
      count: 360,
      sequentialNum: 10,
      radius: 0,
      stateOfMovment: 0,
      color: "",
      satellite: null,
      array: [] as { x: number; y: number; color: string; dir: number }[],
    },
    pluton: {
      type: "orbital",
      position: { x: 0, y: 0 },
      direction: { x: 0, y: 0 },
      count: 0,
      sequentialNum: 11,
      radius: 1,
      stateOfMovment: 0,
      color: "#f8bcbd",
      satellite: null,
      array: [] as { x: number; y: number; color: string; dir: number }[],
    },
  };
  private cw = 0;
  private ch = 0;
  private state = 0;
  private distance = 0;
  constructor(private width: number, private height: number, private directions: { x: number; y: number }[], private ctx: CanvasRenderingContext2D) {
    this.cw = Math.round(this.width / 2);
    this.ch = Math.round(this.height / 2);
    this.distance = Math.ceil(this.height * 0.053);
    Object.entries(this.members).forEach((mem) => {
      if (mem[1].type === "center") {
        mem[1].position.x = this.cw;
        mem[1].position.y = this.ch;
      } else {
        mem[1].position.x = this.cw;
        mem[1].position.y = this.ch - (this.distance * mem[1].sequentialNum + mem[1].radius * 2);
      }
      if (mem[1].type === "asteroids") {
        let x: number = 0;
        let y: number = 0;
        let dir: number = 0;
        for (let i = 0; i < mem[1].count * mem[1].sequentialNum; ++i) {
          if (i % mem[1].sequentialNum === 0) dir = (dir + 1) % 360;
          x += directions[dir].x;
          y += directions[dir].y;
          mem[1].array.push({ x: mem[1].position.x + x + this.randomNum(), y: mem[1].position.y + y + this.randomNum(), color: `hsl(212, 2%, 64%)`, dir });
        }
      }
    });
  }
  randomNum() {
    return Math.random() > 0.5 ? ~((Math.random() * 8) | 0) : (Math.random() * 8) | 0;
  }
  rotateSystem() {
    this.state = (this.state + 1) % 1100;
    Object.entries(this.members).forEach((mem, index) => {
      if (mem[1].type === "orbital") {
        if (this.state % mem[1].sequentialNum === 0) mem[1].stateOfMovment = (mem[1].stateOfMovment + 1) % 360;
        mem[1].position.x += this.directions[mem[1].stateOfMovment].x;
        mem[1].position.y += this.directions[mem[1].stateOfMovment].y;
        if (mem[1].satellite) {
          mem[1].satellite.stateOfMovment = (mem[1].satellite.stateOfMovment + 1) % 360;
          mem[1].satellite.direction.x += this.directions[mem[1].satellite.stateOfMovment].x * 0.4;
          mem[1].satellite.direction.y += this.directions[mem[1].satellite.stateOfMovment].y * 0.4;
          mem[1].satellite.position.x = this.members.earth.position.x + mem[1].satellite.direction.x;
          mem[1].satellite.position.y = this.members.earth.position.y + mem[1].satellite.direction.y - 22;
        }
      } else if (mem[1].type === "asteroids") {
        if (this.state % mem[1].sequentialNum === 0) mem[1].stateOfMovment = (mem[1].stateOfMovment + 1) % 360;
        mem[1].position.x += this.directions[mem[1].stateOfMovment].x;
        mem[1].position.y += this.directions[mem[1].stateOfMovment].y;
        for (let i = 0; i < mem[1].array.length; ++i) {
          if (this.state % mem[1].sequentialNum === 0) mem[1].array[i].dir = (mem[1].array[i].dir + 1) % 360;
          mem[1].array[i].x += this.directions[mem[1].array[i].dir].x;
          mem[1].array[i].y += this.directions[mem[1].array[i].dir].y;
        }
      }
    });
    this.renderSystem();
  }
  renderSystem() {
    Object.entries(this.members).forEach((mem) => {
      this.ctx.beginPath();
      this.ctx.shadowBlur = 10;
      this.ctx.shadowColor = mem[1].color;
      this.ctx.fillStyle = mem[1].color;
      this.ctx.textAlign = "center";
      this.ctx.textBaseline = "middle";
      this.ctx.arc(mem[1].position.x, mem[1].position.y, mem[1].radius * (this.distance * 0.2), 0, Math.PI * 2);
      this.ctx.fill();
      this.ctx.closePath();
      this.ctx.beginPath();
      this.ctx.fillStyle = mem[1].color;
      this.ctx.shadowBlur = 0;
      this.ctx.fillText(mem[0].charAt(0).toUpperCase() + mem[0].slice(1), mem[1].position.x, mem[1].position.y - 30);
      this.ctx.closePath();
      if (mem[1].satellite) {
        this.ctx.beginPath();
        this.ctx.fillStyle = mem[1].satellite.color;
        this.ctx.fillText(mem[1].satellite.name, mem[1].satellite.position.x, mem[1].satellite.position.y - 20);
        this.ctx.arc(mem[1].satellite.position.x, mem[1].satellite.position.y, mem[1].satellite.radius * (this.distance * 0.25), 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.closePath();
      }
      if (mem[1].type === "asteroids") {
        for (let i = 0; i < mem[1].array.length; ++i) {
          this.ctx.shadowBlur = 0;
          this.ctx.shadowColor = "none";
          this.ctx.fillStyle = mem[1].array[i].color;
          this.ctx.fillRect(mem[1].array[i].x, mem[1].array[i].y, 2, 2);
        }
      }
    });
  }
}
