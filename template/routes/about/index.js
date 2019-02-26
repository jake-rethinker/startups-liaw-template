import { h, Component } from 'preact';
import style from './style';

class Home extends Component {

	constructor() {
		super();
		this.state = {
		};
	}

	render() {
		return (
			<div class={style.home}>
					<div class={style.menu}>
					</div>
			</div>

		);
	}
}

export default Home;
