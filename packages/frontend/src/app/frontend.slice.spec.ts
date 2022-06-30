import {
  fetchFrontend,
  frontendAdapter,
  frontendReducer,
} from './frontend.slice';

describe('frontend reducer', () => {
  it('should handle initial state', () => {
    const expected = frontendAdapter.getInitialState({
      loadingStatus: 'not loaded',
      error: null,
    });

    expect(frontendReducer(undefined, { type: '' })).toEqual(expected);
  });

  it('should handle fetchFrontends', () => {
    let state = frontendReducer(undefined, fetchFrontend.pending(null, null));

    expect(state).toEqual(
      expect.objectContaining({
        loadingStatus: 'loading',
        error: null,
        entities: {},
      })
    );

    state = frontendReducer(
      state,
      fetchFrontend.fulfilled([{ id: 1 }], null, null)
    );

    expect(state).toEqual(
      expect.objectContaining({
        loadingStatus: 'loaded',
        error: null,
        entities: { 1: { id: 1 } },
      })
    );

    state = frontendReducer(
      state,
      fetchFrontend.rejected(new Error('Uh oh'), null, null)
    );

    expect(state).toEqual(
      expect.objectContaining({
        loadingStatus: 'error',
        error: 'Uh oh',
        entities: { 1: { id: 1 } },
      })
    );
  });
});
