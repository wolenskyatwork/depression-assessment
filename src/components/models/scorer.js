export default class Scorer {
  constructor(severity) {
    this.severity = severity;
  }

  getSeverity() {
    console.log('in getter');
    return this.severity;
  }


}
