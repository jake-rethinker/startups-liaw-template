import { h, Component } from 'preact';
import style from './style';
import Headroom from 'react-headroom';
const Logo = require('../../assets/icons/wheelchair.svg');


class Categories extends Component {
	constructor() {
		super();
		this.state ={
		};
	}
	render() {
		return (
			<div class={style.categories} >
				<div class="row">
					<div class="col-md-auto col-xs-12">
						<a class="btn btn-primary" href="/videos/medical">Medical</a>
					</div>
					<div class="col-md-auto col-xs-12">
						<a class="btn btn-primary" href="/videos/tutorials">Wheelchair Tutorials</a>
					</div>
					<div class="col-md-auto col-xs-12">
						<a class="btn btn-primary" href="/videos/lifehacks">Life Hacks</a>
					</div>
					<div class="col-md-auto col-xs-12">
						<a class="btn btn-primary" href="/videos/healthfood">Health &amp; Food</a>
					</div>
					<div class="col-md-auto col-xs-12">
						<a class="btn btn-primary" href="/videos/mods">Wheelchair Modifications</a>
					</div>
				</div>
			</div>
		);
	}
}

export default Categories;
