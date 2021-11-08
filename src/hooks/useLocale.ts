import { useContext } from 'react';
import { get } from 'lodash';
import { DesignContext, Locale } from '../design-context';

const useLocale = <T = Record<string, any>>(componentName: string) => {
  const { locale } = useContext(DesignContext);
  return get(locale, componentName) as Locale & T;
};

export default useLocale;
