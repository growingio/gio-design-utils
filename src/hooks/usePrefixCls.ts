import { useContext } from 'react';
import { DesignContext } from '../design-context';

const usePrefixCls = (subPrefixCls: string, customRootPrefixCls?: string): string => {
  const { rootPrefixCls, getPrefixCls } = useContext(DesignContext);
  return getPrefixCls(subPrefixCls, customRootPrefixCls ?? rootPrefixCls);
};

export default usePrefixCls;
