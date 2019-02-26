import { h, Component } from 'preact';
import style from './style';
import SocialCard from '../../components/socialcard';
import Video from '../../components/Video';
import Categories from "../../components/categories";


const Medical = {
	title: "Medical"
};
const Vision = {
	url: 'https://www.youtube.com/embed/hcXSQsER38w',
	title: 'Living in a Wheelchair Vision Statement',
	width: "100%",
	height: "100%"
};

class Videos extends Component {

	constructor() {
		super();
		this.state = {
			videos: [Vision]
		};
	}

	renderVideos() {
		return this.state.videos.map((video) => <Video url={video.url} height={video.height} width={video.width} />);
	}

	render() {
		return (
			<div class={style.home}>
				<Categories />
				<div class={style.vidcontainer}>
					<div class={style.container}>
						<div class={style.videos}>
								{this.renderVideos()}
						</div>
					</div>
				</div>
			</div>

		);
	}
}

export default Videos;
