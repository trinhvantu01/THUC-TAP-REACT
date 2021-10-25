import {createStore, applyMiddleware} from 'redux';
import thunk from 'reac-thunk';
import { user} from './reducers/reducer';
import {combineReducers} from 'redux';
const reducers = combineReducers({
    user,
});
export const store = createStore(reducers,applyMiddleware(thunk));
