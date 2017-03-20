export default class Scorer {
  constructor(severityInput, scoreInput, thresholdInput) {
    this.severity = severityInput;
    this.score = scoreInput;
    this.threshold = thresholdInput;
    this.shouldSeeTherapist = this.getShouldSeeTherapist();
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

  getShouldSeeTherapist() {
    return this.score >= this.threshold;
  }
}
