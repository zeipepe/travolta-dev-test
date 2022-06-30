import {
  createAsyncThunk,
  createEntityAdapter,
  createSelector,
  createSlice,
  EntityState,
  PayloadAction,
} from '@reduxjs/toolkit';

export const FRONTEND_FEATURE_KEY = 'frontend';

/*
 * Update these interfaces according to your requirements.
 */
export interface FrontendEntity {
  id: number;
}

export interface FrontendState extends EntityState<FrontendEntity> {
  loadingStatus: 'not loaded' | 'loading' | 'loaded' | 'error';
  error?: string | null;
}

export const frontendAdapter = createEntityAdapter<FrontendEntity>();

/**
 * Export an effect using createAsyncThunk from
 * the Redux Toolkit: https://redux-toolkit.js.org/api/createAsyncThunk
 *
 * e.g.
 * ```
 * import React, { useEffect } from 'react';
 * import { useDispatch } from 'react-redux';
 *
 * // ...
 *
 * const dispatch = useDispatch();
 * useEffect(() => {
 *   dispatch(fetchFrontend())
 * }, [dispatch]);
 * ```
 */
export const fetchFrontend = createAsyncThunk(
  'frontend/fetchStatus',
  async (_, thunkAPI) => {
    /**
     * Replace this with your custom fetch call.
     * For example, `return myApi.getFrontends()`;
     * Right now we just return an empty array.
     */
    return Promise.resolve([]);
  }
);

export const initialFrontendState: FrontendState =
  frontendAdapter.getInitialState({
    loadingStatus: 'not loaded',
    error: null,
  });

export const frontendSlice = createSlice({
  name: FRONTEND_FEATURE_KEY,
  initialState: initialFrontendState,
  reducers: {
    add: frontendAdapter.addOne,
    remove: frontendAdapter.removeOne,
    // ...
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFrontend.pending, (state: FrontendState) => {
        state.loadingStatus = 'loading';
      })
      .addCase(
        fetchFrontend.fulfilled,
        (state: FrontendState, action: PayloadAction<FrontendEntity[]>) => {
          frontendAdapter.setAll(state, action.payload);
          state.loadingStatus = 'loaded';
        }
      )
      .addCase(fetchFrontend.rejected, (state: FrontendState, action) => {
        state.loadingStatus = 'error';
        state.error = action.error.message;
      });
  },
});

/*
 * Export reducer for store configuration.
 */
export const frontendReducer = frontendSlice.reducer;

/*
 * Export action creators to be dispatched. For use with the `useDispatch` hook.
 *
 * e.g.
 * ```
 * import React, { useEffect } from 'react';
 * import { useDispatch } from 'react-redux';
 *
 * // ...
 *
 * const dispatch = useDispatch();
 * useEffect(() => {
 *   dispatch(frontendActions.add({ id: 1 }))
 * }, [dispatch]);
 * ```
 *
 * See: https://react-redux.js.org/next/api/hooks#usedispatch
 */
export const frontendActions = frontendSlice.actions;

/*
 * Export selectors to query state. For use with the `useSelector` hook.
 *
 * e.g.
 * ```
 * import { useSelector } from 'react-redux';
 *
 * // ...
 *
 * const entities = useSelector(selectAllFrontend);
 * ```
 *
 * See: https://react-redux.js.org/next/api/hooks#useselector
 */
const { selectAll, selectEntities } = frontendAdapter.getSelectors();

export const getFrontendState = (rootState: any): FrontendState =>
  rootState[FRONTEND_FEATURE_KEY];

export const selectAllFrontend = createSelector(getFrontendState, selectAll);

export const selectFrontendEntities = createSelector(
  getFrontendState,
  selectEntities
);
