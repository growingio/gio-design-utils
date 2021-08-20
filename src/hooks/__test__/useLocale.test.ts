import { renderHook } from '@testing-library/react-hooks';
import useLocale from '../useLocale';

describe('useLocale', () => {
  it('can be used without arguments', () => {
    const { result } = renderHook(() => useLocale());
    expect(result.current).toEqual('zh-CN');
  });
});
