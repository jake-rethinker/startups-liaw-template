import { h, Component } from 'preact';
import style from './style';
import WarningModal from '../../components/warning';
import Categories from '../../components/categories';

class Medical extends Component {

	modalClick() {
		this.setState({ open: !this.state.open });
		console.log('Changed to: ', this.state.open.toString());
	}

	constructor() {
		super();
		this.state = {
			open: true,
		};
		this.modalClick = this.modalClick.bind(this);
	}

	render() {
		return (
			<div className={style.home}>
				<Categories />
			</div>

		);
	}
}

export default Medical;
