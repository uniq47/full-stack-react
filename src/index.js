import {StrictMode} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './main.scss'

ReactDOM.createRoot(document.getElementById('root')).render(<StrictMode><div><App/></div></StrictMode>);

// const destination = document.getElementById('root');
// const sourceCode = <div>Hello</div>

// const getDest = ReactDOM.createRoot(destination);
// getDest.render(sourceCode);



