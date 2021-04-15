import { renderHook } from '@testing-library/react-hooks';
import usePrefixCls from '../usePrefixCls';

describe('usePrefixCls', () => {
  fit('can set sub prefix class', () => {
    const { result } = renderHook(() => usePrefixCls('design'));
    expect(result.current).toEqual('gio-design');
  });

  fit('can set root and sub prefix class', () => {
    const { result } = renderHook(() => usePrefixCls('design', 'growing'));
    expect(result.current).toEqual('growing-design');
  });
});
