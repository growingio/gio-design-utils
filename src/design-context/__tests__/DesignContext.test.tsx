import React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import DesignContext, { DesignProvider, getDesignPrefixCls } from '../DesignContext';
import { DesignContextProps } from '../interfaces';

function useDesignContext() {
  return React.useContext(DesignContext);
}

const wrapper = ({ children, props }: { children: React.ReactNode; props: DesignContextProps }) => (
  <DesignProvider {...props}>{children}</DesignProvider>
);

describe('DesignContext', () => {
  it('has default getPrefixCls function', () => {
    expect(getDesignPrefixCls('design')).toBe('gio-design');
    expect(getDesignPrefixCls('design', 'growing')).toBe('growing-design');
  });

  it('has default props', () => {
    const { result } = renderHook(() => useDesignContext());
    expect(result.current.rootPrefixCls).toEqual('gio');
    expect(result.current.getPrefixCls).toBe(getDesignPrefixCls);
  });

  it('can change props', () => {
    const defaultProps = { size: 'small' };
    const { result, rerender } = renderHook(() => useDesignContext(), {
      wrapper,
      initialProps: { props: defaultProps },
    });
    expect(result.current.size).toEqual(defaultProps.size);
    expect(result.current.intl).toEqual(undefined);

    const currentProps = { size: 'middle', intl: { locale: 'zh-cn' } };
    rerender({ props: currentProps });
    expect(result.current.size).toEqual(currentProps.size);
    expect(result.current.intl).toEqual(currentProps.intl);
  });
});
