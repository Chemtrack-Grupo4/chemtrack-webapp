export class Delivery {

  id: number;
  destination: string;
  packageDescription: string;
  exitPoint: string;
  route: string;
  stop: string;
  combustibleType: string;
  warnings: string;

  constructor() {
    this.id = 0;
    this.destination = '';
    this.packageDescription = '';
    this.exitPoint = '';
    this.route = '';
    this.stop = '';
    this.combustibleType = '';
    this.warnings = '';
  }


}
