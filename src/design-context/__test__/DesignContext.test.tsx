import React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import DesignContext, { DesignProvider, getDesignPrefixCls } from '../DesignContext';
import { DesignContextProps, SizeType } from '../interfaces';

function useDesignContext() {
  return React.useContext(DesignContext);
}

const wrapper = ({ children, props }: { children?: React.ReactNode; props: DesignContextProps }) => (
  <DesignProvider {...props}>{children}</DesignProvider>
);

describe('DesignContext', () => {
  const defaultProps = { getPrefixCls: getDesignPrefixCls };

  it('has default getPrefixCls function', () => {
    expect(getDesignPrefixCls('design')).toBe('gio-design');
    expect(getDesignPrefixCls('design', 'growing')).toBe('growing-design');
  });

  it('has default props', () => {
    const { result } = renderHook(() => useDesignContext());
    expect(result.current.rootPrefixCls).toEqual('gio');
    expect(result.current.getPrefixCls).toBe(getDesignPrefixCls);
    expect(result.current.locale).toEqual('zh-CN');
  });

  it('can change props', () => {
    const currentProps = { ...defaultProps, size: 'small' as SizeType };
    const { result, rerender } = renderHook(() => useDesignContext(), {
      wrapper,
      initialProps: { props: currentProps },
    });
    expect(result.current.size).toEqual(currentProps.size);
    expect(result.current.locale).toBeUndefined();

    const newProps = { ...defaultProps, size: 'middle' as SizeType, locale: 'zh' };
    rerender({ props: newProps });
    expect(result.current.size).toEqual(newProps.size);
    expect(result.current.locale).toEqual(newProps.locale);
  });
});
