import { Button } from './button.js';

export class Action {
  constructor(showResultComponent) {
    this.showResultComponent = showResultComponent;
    this.actionComponent = document.getElementById('action');
    this.process = '';
    this.buttonList = [
      [
        { title: 'clr', filter: 'clear', value: 'clear' },
        { title: '<=', filter: 'backspace', value: 'backspace' },
        { title: '', filter: '', value: '' },
        { title: '', filter: '', value: '' },
        { title: '', filter: '', value: '' }
      ],
      [
        { title: '1', filter: '1', value: '1' },
        { title: '2', filter: '2', value: '2' },
        { title: '3', filter: '3', value: '3' },
        { title: '+', filter: '+', value: '+' },
        { title: '-', filter: '-', value: '-' },
      ],
      [
        { title: '4', filter: '4', value: '4' },
        { title: '5', filter: '5', value: '5' },
        { title: '6', filter: '6', value: '6' },
        { title: 'x', filter: '*', value: '*' },
        { title: '/', filter: '/', value: '/' },
      ],
      [
        { title: '7', filter: '7', value: '7' },
        { title: '8', filter: '8', value: '8' },
        { title: '9', filter: '9', value: '9' },
        { title: '0', filter: '0', value: '0' },
        { title: '.', filter: '.', value: '.' }
      ],
      [
        { title: '√', filter: 'square_root', value: 'Math.sqrt($a)' },
        { title: 'x²', filter: 'square', value: 'Math.pow($a,2)' },
        { title: '(', filter: '(', value: '(' },
        { title: ')', filter: ')', value: ')' },
        { title: '=', filter: '=', value: '=' }
      ]
    ];
  }

  render() {
    for (let buttonRow of this.buttonList) {
      console.log(buttonRow)
      for (let button of buttonRow) {
        const customButton = new Button(button.title, button.value);
        this.actionComponent.appendChild(customButton);
      }
    }
    this.actionComponent.addEventListener('click', this.clickHandler.bind(this), true);
  }

  clickHandler(event) {
    if (event.target.tagName === 'UC-BUTTON') {
      console.log(event.target.dataset);
      const value = event.target.dataset.value;

      const valueCalculateButton = '=';
      const valueClearButton = 'clear';
      const valueBackspace = 'backspace';
      const valuesOperator = ['+','-','*','/'];
      const valuePoint = '.';
      let flagPoint = true;

      if (value == valueCalculateButton) {
        try {
          const result = eval(this.process);
          this.showResultComponent.resultArea.textContent = result;
        } catch (err) {
          this.showResultComponent.resultArea.textContent = err;
        }
      } else if (value == valueClearButton) {
        this.process = '';
        this.showResultComponent.processArea.textContent = this.process;
        this.showResultComponent.resultArea.textContent = '';
      } else {
        this.process += value;
        this.showResultComponent.processArea.textContent = this.process;
      }
    }

    function openPoint() {
      flagPoint = true;
    }

    function closePoint() {
      flagPoint = false;
    }

    function restartFlagPoint() {

    }
  }
}