import React from 'react';
import type { DesignContextProps } from './interfaces';

const DefaultPrefixCls = 'gio';

export const DefaultContextProps = {
  prefixCls: DefaultPrefixCls,
  locale: { code: 'zh-CN' },
  theme: {},
};
const DesignContext = React.createContext<DesignContextProps>(DefaultContextProps);

export default DesignContext;
