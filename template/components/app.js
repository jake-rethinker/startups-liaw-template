import { h, Component } from 'preact';
import { Router } from 'preact-router';
import Redirect from './Redirect';

import Header from './header';

// Code-splitting is automated for routes
import Home from '../routes/home';
import Contact from '../routes/contact';
import PromptContact from '../components/prompt-contact';
import Videos from '../routes/videos';
import Store from '../routes/store'
import Medical from '../routes/medical'

export default class App extends Component {

	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	handleRoute = e => {
		this.currentUrl = e.url;
	};

	render() {
		return (
			<div id="app">
				<Header />
				<Router onChange={this.handleRoute}>
					<Home path="" />
					<Redirect path="/!home" to="/home" />
					<Redirect path="Home" to="/home" />
					<Redirect path="HOME" to="/home" />
					<Contact path="/contact" component={PromptContact} />
					<Redirect path="/CONTACT" to="/contact" />
					<Redirect path="!contact" to="/contact" />
					<Videos path="/videos" />
					<Store path="/store" />
					<Medical path="/videos/medical" />
				</Router>
			</div>
		);
	}
}
