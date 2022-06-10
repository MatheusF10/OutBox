import { modalStateReducer } from './reducer/modalStateReducer';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { postReducer } from './reducer/postReducer';
import createSagaMiddleWare from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import { history } from '../flows/history';
import rootSaga from './sagas/rootSagas';
import { routerMiddleware, connectRouter } from 'connected-react-router';
import { BrowserHistory } from 'history';

const sagaMiddleware = createSagaMiddleWare();

const rootReducer = (history: BrowserHistory) =>
  combineReducers({
    post: postReducer,
    modal: modalStateReducer,
    router: connectRouter(history),
  });

const middlewares = [sagaMiddleware, routerMiddleware(history)];

const store = createStore(
  rootReducer(history),
  compose(composeWithDevTools(applyMiddleware(...middlewares)))
);

sagaMiddleware.run(rootSaga);

export default store;
