import { h, Component } from 'preact';
import style from './style';
import PromptContact from '../../components/prompt-contact';

class Contact extends Component {

	constructor() {
		super();
		this.state = {
		};
	}

	render() {
		return (
			<div class={style.home}>
				<div class={style.program}>
					<div className={style.consolewindow}>
						<PromptContact />
					</div>
				</div>
			</div>

		);
	}
}

export default Contact;
