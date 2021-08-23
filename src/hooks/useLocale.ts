import { useContext } from 'react';
import { get } from 'lodash';
import { DesignContext } from '../design-context';

const useLocale = (componentName: string) => {
  const { locale } = useContext(DesignContext);
  return get(locale, componentName);
};

export default useLocale;
