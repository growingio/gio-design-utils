import React from 'react';
import { IntlProvider } from 'react-intl';
import { DesignContextProps, DesignProviderProps } from './interfaces';

const defaultRootPrefixCls = 'gio';

export const getDesignPrefixCls = (subPrefixCls: string, customRootPrefixCls = defaultRootPrefixCls) =>
  [customRootPrefixCls, subPrefixCls].filter((s) => !!s).join('-');

const DesignContext = React.createContext<DesignContextProps>({
  getPrefixCls: getDesignPrefixCls,
  rootPrefixCls: defaultRootPrefixCls,
  size: 'middle',
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
