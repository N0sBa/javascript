import { Action } from './model/action.js';
import {Title} from './model/title.js';

class App {
    static _init() {
        new Title('title', 'Dummy calculator');

        const action = new Action();
        action.render();

        // const titleComponent = document.querySelector('#title');
        // titleComponent.textContent = 'dummy calculator';

        // const resultComponent = document.getElementById('result');
        // resultComponent.style.height = '4vh';
        // resultComponent.style.border = '1px dotted black';
        // resultComponent.style.borderRadius = '3px';

        // let process = '';
        // const processArea = document.createElement('div');
        // processArea.textContent = process;
        // resultComponent.appendChild(processArea);
        
        // let result = '';
        // const resultArea = document.createElement('div');
        // resultArea.style.textAlign = 'right';
        // resultArea.textContent = result;
        // resultComponent.appendChild(resultArea);
        
        // const actionComponent = document.getElementById('action');
        // const buttonList = [
        //     ['clr','<='],
        //     ['1', '2', '3', '+', '-'],
        //     ['4', '5', '6', 'x', '/'],
        //     ['7', '8', '9', '0', '.'],
        //     ['squr2', 'double', '(', ')', '=']
        // ];
        // for (let item of buttonList) {
        //     const div = document.createElement('div');
        //     for (let subItem of item) {
        //         const button = document.createElement('button');
        //         button.style.width = '20%';
        //         button.textContent = subItem;
        //         div.appendChild(button);
        //     };
        //     actionComponent.appendChild(div);
        // };
        // actionComponent.addEventListener('click', event => {
        //     if (event.target.tagName === 'BUTTON') {
        //         console.log(event.target.textContent);
        //         const value = event.target.textContent;

        //         const valueCalculateButton = '=';
        //         const valueClearButton = 'clr';
        //         if (value == valueCalculateButton) {
        //             result = eval(process);
        //             resultArea.textContent = result;
        //         } else if (value == valueClearButton) {
        //             process = '';
        //             processArea.textContent = process;
        //         } else {
        //             process += value;
        //             processArea.textContent = process;
        //         } 
        //     }
        //     console.dir(event.target);
        // });
    }
}

App._init();
