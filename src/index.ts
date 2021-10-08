/* eslint-disable import/prefer-default-export */
export { DesignContext, DesignProvider, DesignConsumer } from './design-context';
export type { DesignContextProps, DesignProviderProps, Locale, SizeType } from './design-context';

export { injectPinyinWith } from './pinyin';

export { formatTimeRange, humanizeTimeRange } from './format/formatTimeRange';

export { useControlledState, useLocale, useLocalStorage, usePrefixCls, useSize } from './hooks';

export type { BaseProps, CommonProps, OverridableComponent } from './interfaces';
