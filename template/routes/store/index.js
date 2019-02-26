import { h, Component } from 'preact';
import style from './style';

class Store extends Component {

	constructor() {
		super();
		this.state = {
		};
	}

	render() {
		return (
			<div className={style.home}>
				<div className={style.menu}>
					<div className={style.text}>
						<h1 class={style.text}> Store</h1>
						<h2 class={style.text2}> Coming Soon</h2>
					</div>
				</div>
			</div>

		);
	}
}

export default Store;
