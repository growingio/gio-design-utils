import React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import DesignContext, { DesignProvider, getDesignPrefixCls } from '../DesignContext';
import { DesignContextProps, SizeType } from '../interfaces';

function useDesignContext() {
  return React.useContext(DesignContext);
}

const wrapper = ({ children, props }: { children?: React.ReactNode; props: Partial<DesignContextProps> }) => (
  <DesignProvider {...props}>{children}</DesignProvider>
);

describe('DesignContext', () => {
  const defaultLocale = { code: 'zh-CN' };
  const defaultProps = { getPrefixCls: getDesignPrefixCls };

  it('has default getPrefixCls function', () => {
    expect(getDesignPrefixCls('design')).toBe('gio-design');
    expect(getDesignPrefixCls('design', 'growing')).toBe('growing-design');
  });

  it('has default props', () => {
    const { result } = renderHook(() => useDesignContext());
    expect(result.current?.rootPrefixCls).toEqual('gio');
    expect(result.current?.getPrefixCls).toBe(getDesignPrefixCls);
    expect(result.current?.locale).toEqual(defaultLocale);
  });

  it('can change props', () => {
    const currentProps = { ...defaultProps, size: 'middle' as SizeType };
    const { result, rerender } = renderHook(() => useDesignContext(), {
      wrapper,
      initialProps: { props: {} },
    });
    expect(result.current.size).toEqual(currentProps.size);
    expect(result.current.locale).toEqual(defaultLocale);

    const newProps = { ...defaultProps, rootPrefixCls: 'custom', size: 'small' as SizeType, locale: { code: 'zh' } };
    rerender({ props: newProps });
    expect(result.current.rootPrefixCls).toEqual(newProps.rootPrefixCls);
    expect(result.current.size).toEqual(newProps.size);
    expect(result.current.locale).toEqual(newProps.locale);
  });
});
