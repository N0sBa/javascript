export class Result {
  constructor(id) {
    this.process;
    this.result;
    this.resultComponent = document.getElementById(id);
    this.resultComponent.style.height = '4vh';
    this.resultComponent.style.border = '1px dotted black';
    this.resultComponent.style.borderRadius = '3px';
  }

  render() {
    this.processArea = document.createElement('div');
    this.processArea.textContent = this.process;
    this.resultComponent.appendChild(this.processArea);
    
    this.resultArea = document.createElement('div');
    this.resultArea.style.textAlign = 'right';
    this.resultArea.textContent = this.result;
    this.resultComponent.appendChild(this.resultArea);
  }
}