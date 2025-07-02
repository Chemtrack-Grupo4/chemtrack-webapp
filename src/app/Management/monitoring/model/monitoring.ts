export class Sensor {
  id: number;
  gasValue: number;
  temp: number;
  safe: boolean;
  unsafe: boolean;
  heartRate: number;

  constructor() {
    this.id = 0;
    this.gasValue = 0;
    this.temp = 0;
    this.safe = false;
    this.unsafe = false;
    this.heartRate = 0;
  }
}
