import { renderHook, act } from '@testing-library/react-hooks';
import useControlledState from '../useControlledState';

describe('useControlledState', () => {
  const newState = 'new';

  it('can not change with self', () => {
    const state = 'origin';
    const { result } = renderHook(() => useControlledState(state, ''));
    expect(result.current[0]).toBe(state);
    expect(typeof result.current[1]).toBe('function');

    act(() => {
      result.current[1](newState);
    });

    expect(result.current[0]).toBe(state);
  });

  it('will be changed by props', () => {
    let state = 'origin';
    const { result, rerender } = renderHook(() => useControlledState(state, ''));

    state = newState;
    rerender();

    expect(result.current[0]).toBe(state);
  });

  it('will be changed for undefined', () => {
    const { result } = renderHook(() => useControlledState<string | undefined>(undefined, undefined));
    act(() => {
      result.current[1](newState, true);
    });
    expect(result.current[0]).toBe(newState);
  });

  it('will use empty when is undefined', () => {
    const { result } = renderHook(() => useControlledState(undefined, ''));
    expect(result.current[0]).toBe('');
  });
});
