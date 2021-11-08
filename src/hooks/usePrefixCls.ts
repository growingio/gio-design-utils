import { useContext } from 'react';
import { DesignContext } from '../design-context';

const getPrefixCls = (prefix: string, rootPrefix: string) => [prefix, rootPrefix].join('-');

const usePrefixCls = (prefixCls: string, customRootPrefixCls?: string) => {
  const { prefixCls: rootPrefixCls } = useContext(DesignContext);
  return getPrefixCls(customRootPrefixCls ?? rootPrefixCls, prefixCls);
};

export default usePrefixCls;
