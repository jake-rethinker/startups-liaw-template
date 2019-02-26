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
						<div class={style.text}>
							<h1 class={style.text}> Welcome to Living In A Wheelchair!</h1>
							<h2 class={style.text2}> Our goal is to help people living in wheelchairs live better</h2>
						</div>
					</div>
			</div>

		);
	}
}

export default Home;
