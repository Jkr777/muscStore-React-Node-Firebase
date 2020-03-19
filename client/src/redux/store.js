import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistReducer } from 'redux-persist'; 
import { persistStore } from 'redux-persist'; 
import saga from 'redux-saga';
import rootSaga from './root-saga';
import storage from 'redux-persist/lib/storage'; 
import user from './user/reducer';
import cart from './cart/reducer';
import categories from './categories/reducer';
import shop from './shop/reducer';

const persistConfig = {
  key: 'root', 
  storage, 
  whitelist: ['cart'] 
}; 

const sagaMiddleware = saga();

const store = createStore(persistReducer(persistConfig, combineReducers({
  user, 
  cart,
  categories,
  shop
})), composeWithDevTools(applyMiddleware(sagaMiddleware))); 

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
export default store;