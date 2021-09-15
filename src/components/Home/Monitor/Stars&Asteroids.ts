export class StarsAsteroids {
  public stars: { x: number; y: number; color: string }[] = [];
  public asteroids: { x: number; y: number; color: string; dir: number }[] = [];
  public kuiper: { x: number; y: number; color: string; dir: number }[] = [];
  private ast = {
    asteroids: {
      x: 0, //canvas.offsetWidth / 2,
      y: 0, //canvas.offsetHeight * 0.15 + 5,
    },
    degree: 0,
    dir: 0,
    raduis: 0,
    speed: 0,
    count: 0,
  };
  private kup = {
    asteroids: {
      x: 0, //canvas.offsetWidth / 2,
      y: 0, //system.solarSystem.neptune.y - 27,
    },
    degree: 0,
    dir: 0,
    raduis: 0,
    speed: 0,
    count: 0,
  };
  constructor(private width: number, private height: number, private dirs: { x: number; y: number }[] = [], private nPosition: number) {
    this.width = width;
    this.height = height;
    this.dirs = dirs;
    this.ast.asteroids.x = width / 2;
    this.ast.asteroids.y = height * 0.15 + 5;
    this.kup.asteroids.x = width / 2;
    this.kup.asteroids.y = nPosition - 27;
  }
  randomNum() {
    return Math.random() > 0.5 ? ~((Math.random() * 8) | 0) : (Math.random() * 8) | 0;
  }
  makeSystem() {
    for (let i = 0; i < 1000; i++) {
      this.stars.push({ x: (Math.random() * this.width) | 0, y: (Math.random() * this.height) | 0, color: `hsl(${(Math.random() * 255) | 0}, 61%, 93%)` });
    }
    for (let i = 0; i < 1620; i++) {
      this.ast.count = (this.ast.count + 0.5) % 1620;
      if (~~(this.ast.count % 4.5) === 0) this.ast.dir++;
      let randX = this.randomNum();
      let randY = this.randomNum();
      this.ast.asteroids.x += this.dirs[this.ast.dir].x;
      this.ast.asteroids.y += this.dirs[this.ast.dir].y;
      this.asteroids.push({ x: this.ast.asteroids.x + randX, y: this.ast.asteroids.y + randY, color: `hsl(212, 2%, 64%)`, dir: this.ast.dir });
    }
    for (let i = 0; i < 3060; i++) {
      this.kup.count = (this.kup.count + 0.5) % 3060;
      if (~~(this.kup.count % 8.5) === 0) this.kup.dir++;
      let randX = this.randomNum();
      let randY = this.randomNum();
      this.kup.asteroids.x += this.dirs[this.kup.dir].x;
      this.kup.asteroids.y += this.dirs[this.kup.dir].y;
      this.kuiper.push({ x: this.kup.asteroids.x + randX, y: this.kup.asteroids.y + randY, color: `hsl(212, 2%, 64%)`, dir: this.kup.dir });
    }
  }
  rotateAsteroids() {
    this.ast.speed = (this.ast.speed + 1) % 10;
    if (this.ast.speed % 3 === 0) {
      this.ast.raduis = (this.ast.raduis + 0.5) % 810;
      for (let i = 0; i < this.asteroids.length; ++i) {
        if (~~(this.ast.raduis % 4.5) === 0) this.asteroids[i].dir = (this.asteroids[i].dir + 1) % 360;
        this.asteroids[i].x += this.dirs[this.asteroids[i].dir].x;
        this.asteroids[i].y += this.dirs[this.asteroids[i].dir].y;
      }
    }
    this.kup.speed = (this.kup.speed + 1) % 10;
    if (this.kup.speed % 5 === 0) {
      this.kup.raduis = (this.kup.raduis + 0.5) % 3240;
      for (let i = 0; i < this.kuiper.length; ++i) {
        if (~~(this.kup.raduis % 8.5) === 0) this.kuiper[i].dir = (this.kuiper[i].dir + 1) % 360;
        this.kuiper[i].x += this.dirs[this.kuiper[i].dir].x;
        this.kuiper[i].y += this.dirs[this.kuiper[i].dir].y;
      }
    }
  }
}
