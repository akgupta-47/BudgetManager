import ReactDOM from 'react-dom';

// normally css files are not included in js files but react is built in a way that it combines the worlds
import './index.css';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));
// first file that gets executed