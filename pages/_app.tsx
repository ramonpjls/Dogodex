import { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { store } from '../store/store';
import Header from '../components/Header';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Provider store={store}>
    <div>
      <Header />
      <Component {...pageProps} />
    </div>
  </Provider >
);

export default MyApp;
