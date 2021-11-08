export interface Locale {
  code: string;
  [key: string]: any;
}

interface DesignContextInteral {
  locale: Locale;
  prefixCls: string;
  theme: Record<string, any>;
}

export type DesignContextProps<T = Record<string, any>> = DesignContextInteral & T;
