import { h, Component } from 'preact';
import style from './style';
import Headroom from 'react-headroom';
const Logo = require('../../assets/icons/wheelchair.svg');


class Header extends Component {
	constructor() {
		super();
		this.state ={
		};
	}
	render() {
		return (
			<Headroom class={style.headroom} wrapperStyle={{ position: 'fixed', left: '0', right: '0', fontsize: '25px' }}>
				<nav className="navbar navbar-default">
					<a className="navbar-brand" href="/">
						<img src={Logo} width="110" height="110"
						     className="d-inline-block align-top" alt=""
						/>
					</a>
					<div class={style.company}>
						<a class={style.companytext} href="/">Home</a>
						<a className={style.companytext} href="/videos">Videos</a>
						<a class={style.companytext} href="/">Living in a Wheelchair</a>
						<a className={style.companytext} href="/store">Store</a>
						<a className={style.companytext} href="/contact">Contact</a>
					</div>
				</nav>
			</Headroom>
		);
	}
}

export default Header;
