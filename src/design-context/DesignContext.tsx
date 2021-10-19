import React from 'react';
import type { DesignContextProps, DesignProviderProps, SizeType } from './interfaces';

const defaultRootPrefixCls = 'gio';

export const getDesignPrefixCls = (subPrefixCls: string, customRootPrefixCls: string = defaultRootPrefixCls): string =>
  [customRootPrefixCls, subPrefixCls].join('-');

const defaultProps = {
  getPrefixCls: getDesignPrefixCls,
  rootPrefixCls: defaultRootPrefixCls,
  size: 'middle' as SizeType,
  locale: { code: 'zh-CN' },
  theme: {},
};
const DesignContext = React.createContext<DesignContextProps>(defaultProps);

export const DesignConsumer = DesignContext.Consumer;

export const DesignProvider = ({
  getPrefixCls = getDesignPrefixCls,
  rootPrefixCls = defaultRootPrefixCls,
  size = 'middle' as SizeType,
  locale = { code: 'zh-CN' },
  theme = {},
  children,
}: DesignProviderProps) => (
  <DesignContext.Provider value={{ getPrefixCls, rootPrefixCls, size, locale, theme }}>
    {children}
  </DesignContext.Provider>
);

export default DesignContext;
