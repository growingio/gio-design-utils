import React from 'react';

export type SizeType = 'small' | 'normal' | string;
export interface Locale {
  code: string;
  [key: string]: any;
}
export interface DesignContextProps {
  getPrefixCls: (subPrefixCls: string, customRootPrefixCls?: string) => string;
  locale: Locale;
  rootPrefixCls: string;
  size: SizeType;
}

export interface DesignProviderProps extends Partial<DesignContextProps> {
  children: React.ReactNode;
}
