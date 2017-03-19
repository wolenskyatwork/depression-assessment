export default class Scorer {
  constructor(severityInput, scoreInput) {
    this.severity = severityInput;
    this.score = scoreInput;
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
      //since this data is coming from api, this should be dependent on api too
      return this.score > 14;
  }
}
