import { Action } from './model/action.js';
import { Result } from './model/result.js';
import {Title} from './model/title.js';

class App {
    static _init() {
        const titleComponent = new Title('title', 'Dummy calculator');
        titleComponent.render();

        const resultComponent = new Result('result');
        resultComponent.render();

        const actionComponent = new Action(resultComponent);
        actionComponent.render();
    }
}

App._init();
