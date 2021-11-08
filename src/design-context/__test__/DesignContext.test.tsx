import React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import DesignContext, { DefaultContextProps } from '../DesignContext';
import { DesignContextProps } from '../interfaces';

function useDesignContext() {
  return React.useContext(DesignContext);
}

const wrapper = ({ children, props }: { children?: React.ReactNode; props: Partial<DesignContextProps> }) => (
  <DesignContext.Provider value={{ ...DefaultContextProps, ...props }}>{children}</DesignContext.Provider>
);

describe('DesignContext', () => {
  const defaultLocale = { code: 'zh-CN' };

  it('has default props', () => {
    const { result } = renderHook(() => useDesignContext());
    expect(result.current?.prefixCls).toEqual('gio');
    expect(result.current?.locale).toEqual(defaultLocale);
  });

  it('can change props', () => {
    const { result, rerender } = renderHook(() => useDesignContext(), {
      wrapper,
      initialProps: { props: {} },
    });

    expect(result.current.locale).toEqual(defaultLocale);

    const newProps = { prefixCls: 'custom', locale: { code: 'zh' } };
    rerender({ props: newProps });
    expect(result.current.prefixCls).toEqual(newProps.prefixCls);
    expect(result.current.locale).toEqual(newProps.locale);
  });
});
