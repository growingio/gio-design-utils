import React from 'react';

export type SizeType = 'small' | 'middle' | 'large' | undefined;
export interface DesignContextProps {
  getPrefixCls: (subPrefixCls: string, customRootPrefixCls?: string) => string;
  locale?: string;
  rootPrefixCls?: string;
  size?: SizeType;
}

export interface DesignProviderProps extends DesignContextProps {
  children: React.ReactNode;
}
