// redux
import { createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import { promotions } from './promotions';

import { favorites } from './favorites';

// reducers
import { leaders } from './leaders';

import { dishes } from './dishes';
import { comments } from './comments';
import { persistStore, persistCombineReducers } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
const config = { key: 'root', storage: AsyncStorage, debug: true };

export const ConfigureStore = () => {
  const store = createStore(
    persistCombineReducers(config, { leaders, dishes, comments, promotions, favorites }),
    applyMiddleware(thunk, logger)
  );
  const persistor = persistStore(store);
  return { persistor, store };
};