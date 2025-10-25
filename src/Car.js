class Car {
  constructor(name) {
    this.name = name;
    this.position = 0;
  }

  move() {
    const random = Math.floor(Math.random() * 10);
    if (random >= 4) this.position++;
  }

  getTrack() {
    return "-".repeat(this.position);
  }
}

export default Car;
