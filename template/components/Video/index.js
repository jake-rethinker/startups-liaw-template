import { h, Component } from 'preact';
import style from './style';



class Video extends Component {
	constructor() {
		super();
		this.state = {

		}
	}
	render() {
		return (
			<div>
				<iframe width={this.props.width} height={this.props.height} src={this.props.url} frameBorder="2"
				        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" class={style.video}
				        allowFullScreen />
			</div>
		)
	}
}
export default Video;
