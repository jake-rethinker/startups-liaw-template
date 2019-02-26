import { h, Component } from 'preact';
import style from './style';
import axios from 'axios';


class PromptContact extends Component {

	constructor(props) {
		super(props);
		this.state = {
		    routeValue: '',
			email: '',
			phone: '',
			message: '',
			name: '',
			cname: ''
		};
		this.submit = this.submit.bind(this);
		this.handleValues = this.handleValues.bind(this);
	}

	changeURL(args) {
	    window.location = args;
	}

	submit() {
		let data = {
			message: { },
			_replyto: this.props.email
		};
		console.log(data);
		axios.post(
			'https://formspree.io/xondronm',
			this.state,
			{ headers: { Accept: 'application/json' }, method: 'POST' }
		).then((() => {
			window.location = '/thanks';
		}));
	}
	handleValues = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		});
	};

	onKeyPress = (event) => {
	    if (event.key === 'Enter') {
			this.setState({
				routeValue: event.target.value
			});
			this.changeURL(this.state.routeValue);
		}
	};


	render() {
		return (
			<div class={style.contact}>
			    <div class={style.consolecontainer}>
				    <h1 class={style.para}>Fill out our contact form to reach out to us!  </h1>
				</div>
				<div class={style.input}>
					<label class={style.label} for="cmd">Name</label>
					<input class={style.cmd}
						type="text"
						name="name"
						value={this.state.name}
						id="cmd"
						onChange={this.handleValues}
						autoFocus
					/>
			    </div>
				<div className={style.input}>
					<label class={style.label}  htmlFor="cmd">Email</label>
					<input className={style.cmd}
						type="text"
						name="email"
						value={this.state.email}
						id="cmd"
						onChange={this.handleValues}
					/>
				</div>
				<div className={style.input}>
					<label class={style.label} htmlFor="cmd">Phone Number</label>
					<input className={style.cmd}
						type="text"
						name="phone"
						value={this.state.phone}
						id="cmd"
						onChange={this.handleValues}
					/>
				</div>
				<div class={style.label} className={style.input}>
					<label class={style.label} htmlFor="cmd">Company Name</label>
					<input className={style.cmd}
						type="text"
						name="cname"
						value={this.state.cname}
						id="cmd"
						onChange={this.handleValues}
					/>
				</div>
				<div className={style.input}>
					<label class={style.label} htmlFor="cmd">Message</label>
					<input className={style.cmd}
						type="text"
						name="message"
						value={this.state.message}
						id="cmd"
						onChange={this.handleValues}
					/>
				</div>
				<div className={style.btn}>
					<input class={style.submit}
						onClick={this.submit}
						type="button"
						value="Submit"
					>Submit</input>
				</div>
			</div>
		);
	}
}
export default PromptContact;
