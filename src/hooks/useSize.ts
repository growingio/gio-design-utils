import { useContext } from 'react';
import { DesignContext, SizeType } from '../design-context';

const useSize = (): SizeType => {
  const { size } = useContext(DesignContext);
  return size;
};

export default useSize;
