import React from 'react';
import { IntlConfig } from 'react-intl';

export type { IntlShape } from 'react-intl';

export type SizeType = 'small' | 'middle' | 'large' | undefined;

export interface DesignContextProps {
  getPrefixCls: (subPrefixCls: string, customRootPrefixCls?: string) => string;
  intl?: IntlConfig;
  rootPrefixCls?: string;
  size?: SizeType;
}

export interface DesignProviderProps extends DesignContextProps {
  children: React.ReactNode;
}
