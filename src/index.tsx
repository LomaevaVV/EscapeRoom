import { StrictMode } from 'react';
import { render } from 'react-dom';
import App from './components/app/app';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { store } from './store';
import 'react-toastify/dist/ReactToastify.css';
import { fetchQuestsAction } from './store/api-actions';

store.dispatch(fetchQuestsAction());

render(
  <StrictMode>
    <Provider store={store}>
      <App />
      <ToastContainer hideProgressBar />
    </Provider>
  </StrictMode>,
  document.getElementById('root'),
);
