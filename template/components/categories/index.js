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
					<div class="col-md-3">
						<a class="btn btn-primary" href="/videos/medical">Medical</a>
						<a className="btn btn-primary" href="/videos/medical">Medical</a>
						<a className="btn btn-primary" href="/videos/medical">Medical</a>
						<a className="btn btn-primary" href="/videos/medical">Medical</a>
						<a className="btn btn-primary" href="/videos/medical">Medical</a>
					</div>
						{/*<a class="btn btn-primary" href="/videos/medical">Wheelchair Tutorials</a>*/}
						{/*<a class="btn btn-primary" href="/videos/medical">Life Hacks</a>*/}
						{/*<a class="btn btn-primary" href="/videos/medical">Health & Food</a>*/}
						{/*<a class="btn btn-primary" href="/videos/medical">Wheelchair Modifications</a>*/}
				</div>
			</div>
		);
	}
}

export default Categories;
