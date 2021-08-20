import { useContext } from 'react';
import { DesignContext } from '../design-context';

const useLocale = () => {
  const { locale } = useContext(DesignContext);
  return locale;
};

export default useLocale;
