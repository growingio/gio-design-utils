import React from 'react';

export type SizeType = 'small' | 'middle' | 'large' | undefined;
export interface Locale {
  code: string;
  [key: string]: any;
}
export interface DesignContextProps {
  getPrefixCls?: (subPrefixCls: string, customRootPrefixCls?: string) => string;
  locale?: Locale;
  rootPrefixCls?: string;
  size?: SizeType;
  theme?: Record<string, any>;
  [key: string]: any;
}

export interface DesignProviderProps extends Partial<DesignContextProps> {
  children: React.ReactNode;
}
