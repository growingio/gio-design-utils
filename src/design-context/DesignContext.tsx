import React from 'react';
import type { DesignContextProps, DesignProviderProps, SizeType } from './interfaces';

const defaultRootPrefixCls = 'gio';

export const getDesignPrefixCls = (subPrefixCls: string, customRootPrefixCls: string = defaultRootPrefixCls): string =>
  [customRootPrefixCls, subPrefixCls].join('-');

const DesignContext = React.createContext<DesignContextProps>({
  getPrefixCls: getDesignPrefixCls,
  rootPrefixCls: defaultRootPrefixCls,
  size: 'middle' as SizeType,
  locale: 'zh-CN',
});

export const DesignConsumer = DesignContext.Consumer;

export const DesignProvider = (props: DesignProviderProps) => {
  const { children, ...restProps } = props;
  return <DesignContext.Provider value={{ ...restProps }}>{children}</DesignContext.Provider>;
};

export default DesignContext;
