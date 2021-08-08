import { renderHook } from '@testing-library/react-hooks';
import useIntl from '../useIntl';

describe('useIntl', () => {
  it('can be used without arguments', () => {
    const { result } = renderHook(() => useIntl());
    expect(result.current).toEqual({ defaultLocale: 'zh-CN', locale: 'zh-CN' });
  });
});
