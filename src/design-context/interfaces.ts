import React from 'react';
import { IntlShape } from 'react-intl';

export { IntlShape } from 'react-intl';

export type SizeType = 'small' | 'middle' | 'large' | undefined;

export interface DesignContextProps {
  getPrefixCls: (subPrefixCls: string, customRootPrefixCls?: string) => string;
  intl?: IntlShape;
  rootPrefixCls?: string;
  size?: SizeType;
}

export interface DesignProviderProps extends DesignContextProps {
  children: React.ReactNode;
}
