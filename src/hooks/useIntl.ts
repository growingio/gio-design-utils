import { useContext } from 'react';
import { DesignContext } from '../design-context';

const useIntl = () => {
  const { intl } = useContext(DesignContext);
  return intl;
};

export default useIntl;
