import React from 'react';
import { IntlProvider } from 'react-intl';
import type { DesignContextProps, DesignProviderProps, SizeType } from './interfaces';

const defaultRootPrefixCls = 'gio';

export const getDesignPrefixCls = (subPrefixCls: string, customRootPrefixCls: string = defaultRootPrefixCls): string =>
  [customRootPrefixCls, subPrefixCls].join('-');

const DesignContext = React.createContext<DesignContextProps>({
  getPrefixCls: getDesignPrefixCls,
  rootPrefixCls: defaultRootPrefixCls,
  size: 'middle' as SizeType,
  intl: { locale: 'zh-CN', defaultLocale: 'zh-CN' },
});

export const DesignConsumer = DesignContext.Consumer;

export const DesignProvider = (props: DesignProviderProps) => {
  const { children, ...restProps } = props;
  const { intl } = restProps;

  let childNode = children;
  if (intl) {
    childNode = <IntlProvider {...intl}>{childNode}</IntlProvider>;
  }

  return <DesignContext.Provider value={{ ...restProps }}>{childNode}</DesignContext.Provider>;
};

export default DesignContext;
