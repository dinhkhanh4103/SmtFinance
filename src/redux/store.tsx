import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import reactotron from '../../ReacttotronConfig';
import loginSlice from './loginSlice';
export const store = configureStore({
  reducer: {
    loginSlice: loginSlice,
  },
  enhancers: getDefaultEnhancers => {
    return getDefaultEnhancers({
      autoBatch: { type: 'tick' },
    }).concat(__DEV__ ? [reactotron.createEnhancer!()] : []);
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;
