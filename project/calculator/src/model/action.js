import { Button } from './button.js';

export class Action {
  constructor() {
    this.actionComponent = document.getElementById('action');
    this.buttonList = [
      [
        {title: 'clr', value: 'clear'}, 
        {title: '<=', value: 'backspace'},
        {title: ' ', value: ''},
        {title: '', value: ''},
        {title: '', value: ''}
      ],
      [
        {title: '1', value: '1'},
        {title: '2', value: '2'},
        {title: '3', value: '3'},
        {title: '+', value: '+'},
        {title: '-', value: '-'},
      ],
      [
        {title: '4', value: '4'},
        {title: '5', value: '5'},
        {title: '6', value: '6'},
        {title: 'x', value: '*'},
        {title: '/', value: '/'},
      ],
      [
        {title: '7', value: '7'},
        {title: '8', value: '8'},
        {title: '9', value: '9'},
        {title: '0', value: '0'},
        {title: '.', value: '.'}
      ],
      [
        {title: '√', value: 'squr_root2'},
        {title: 'x²', value: 'squared'},
        {title: '(', value: '('},
        {title: ')', value: ')'},
        {title: '=', value: '='}
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
  }
}