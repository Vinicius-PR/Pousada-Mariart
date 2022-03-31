import { BrowserRouter } from "react-router-dom";

import ReactDOM from 'react-dom';
import App from './App';
import "./styles/global.scss"

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
