export class Sensor {
  id: number;
  gasValue: number;
  temp: number;
  safe: boolean;
  unsafe: boolean;

  constructor() {
    this.id = 0;
    this.gasValue = 0;
    this.temp = 0;
    this.safe = false;
    this.unsafe = false;
  }
}
