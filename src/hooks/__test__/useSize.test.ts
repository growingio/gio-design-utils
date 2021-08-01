import { renderHook } from '@testing-library/react-hooks';
import useSize from '../useSize';

describe('useSize', () => {
  it('can be used without arguments', () => {
    const { result } = renderHook(() => useSize());
    expect(result.current).toEqual('middle');
  });
});
