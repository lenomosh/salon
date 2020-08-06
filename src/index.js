import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import {Provider} from 'react-redux'
import Store from './redux/store';
import {ApolloClient,ApolloProvider,InMemoryCache} from '@apollo/client';

const client = new ApolloClient({
  url:'http://192.169.200.13:8000/graphql',
  cache: new InMemoryCache()
});
ReactDOM.render(
  <React.StrictMode>

    <BrowserRouter>
    <ApolloProvider client={client}>
      <Provider store={Store}>
        <App />
      </Provider>
    </ApolloProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
