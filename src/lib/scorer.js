export default class Scorer {
  constructor(severityInput, scoreInput, thresholdInput) {
    this.severity = severityInput;
    this.score = scoreInput;
    this.threshold = thresholdInput;
    this.shouldSeeTherapist = this.score >= this.threshold;
    this.level = this.getLevel();
  }

  getLevel() {
    let level = null;
    this.severity.forEach((element) => {
      if (this.score <= element.threshold && level === null) {
        level = element;
      };
    });
    return level.text;
  }
}
