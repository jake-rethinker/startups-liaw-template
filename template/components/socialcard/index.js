import { Component, h } from 'preact';
import style from './style';

class SocialCard extends Component {
	render() {
		return (
			<div className={style.menu}>
				<div className={style.card}>
						<h1 className={style.h1}> {this.props.title} </h1>
				</div>
			</div>
		)
	}
}
export default SocialCard;
