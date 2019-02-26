import { h, Component } from 'preact';
import style from './style';
import PromptThanks from '../../components/prompt-thanks';
import TopMenu from '../../components/top-menu';

class Thanks extends Component {

	constructor() {
		super();
		this.state = {
		};
	}

	render() {
		return (
			<div class={style.home}>
				<div class={style.program}>
					<div class={style.menu}>
						<TopMenu />
					</div>
					<div className={style.consolewindow}>
						<PromptThanks />
					</div>
				</div>
			</div>

		);
	}
}

export default Thanks;
