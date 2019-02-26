import { h, Component } from 'preact';
import style from './style';
import SocialCard from '../../components/socialcard';

const Medical = {
	title: "Medical"
};
const Wheelchair = {
	title: "Wheelchair Modifications"
};

class Videos extends Component {

	constructor() {
		super();
		this.state = {
			cards: [Medical, Wheelchair]
		};
	}
	renderCards() {
		return this.state.cards.map((socialcard) => <SocialCard title={socialcard.title}/>);
	}
	render() {
		return (
			<div class={style.home}>
				<div class={style.videos}>
					<div>
						<div class={style.link}>
							<a class={style.index} href="/videos/medical">Medical Tutorials</a>
							<a className={style.index} href="/videos/medical">Wheelchair Tutorials</a>
							<a className={style.index} href="/videos/medical">Life Hacks</a>
							<a className={style.index} href="/videos/medical">Health & Food</a>
						</div>
					</div>
					<h1 class={style.header}>Videos</h1>
					<p class={style.para}>The videos we post are a series of tutorials and life hacks to make living in a wheelchair a whole lot easier.</p>
					<div class={style.holder}>
						<iframe width="560" height="315" src="https://www.youtube.com/embed/hcXSQsER38w" frameBorder="2"
	allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" class={style.video}
	allowFullScreen/>
						<h1 class={style.cardtext}>Living in a Wheelchair's Vision Statement</h1>
					</div>
				</div>
			</div>

		);
	}
}

export default Videos;
