import './style';
import App from './components/app';
import { render } from 'preact';

render(<App />, document.querySelector('#content'));
export default App;
