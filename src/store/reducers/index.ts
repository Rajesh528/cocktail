// src/store/reducers/index.ts
import { combineReducers } from 'redux';
import userReducer from '../slices/userSlice'; // Corrected import
import productReducer from '../slices/productsSlice'; 
const rootReducer = combineReducers({
  user: userReducer,
  product: productReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
