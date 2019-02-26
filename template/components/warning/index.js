import { h, Component } from 'preact';
import style from './style';
import Portal from 'preact-portal';

const Warning = require('../../assets/icons/exclamation.svg');

class WarningModal extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<div>
				<Portal into="body">
					<div className={style.popup} onClick={this.props.onClick}>
							<img src={Warning} />
							<h1>18+ Warning</h1>
							<h1 class={style.warnings}>The videos featured under the medical section of our website may contain nudity. They are created purely for educational value.</h1>
					</div>
				</Portal>
			</div>
		)
	}
}
export default WarningModal;
