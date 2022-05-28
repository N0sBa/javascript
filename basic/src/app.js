import {Helper} from './Utility/Helper';
import * as _ from 'lodash';
class App {
	static init() {
		Helper.getPosts();
		console.log(_.difference([0,1], [1,2]));
	}
}

App.init()