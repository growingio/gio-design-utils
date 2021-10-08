import { LooseObject } from '../interfaces';

const analysisRow = (chartType: string, data: LooseObject, column: LooseObject) => {
  return chartType === 'column' && column.id === 'tm' ? String(data) : data;
};

export interface AnalysisOptions {
  // chart的类型
  chart?: string;
  // 在生成的data中，需要补充的结构，比如color
  fetch?: LooseObject;
  // 格式化的方法，使用者根据formatter重新定义数据
  formatter?: <T extends string | number>(value: T, column?: LooseObject) => T;
  instead?: LooseObject;
}

export const analysisSourceData = (chartData: LooseObject, options?: AnalysisOptions) => {
  const chartType = options?.chart || 'line';
  const fetch = options?.fetch || {};
  const instead = options?.instead || {};
  const formatter = options?.formatter;

  const source = chartData?.data || [];
  const columns = chartData?.meta?.columns;

  return source.map((item: LooseObject) => {
    const row = {} as LooseObject;
    columns?.forEach((column: LooseObject, index: number) => {
      let value = item?.[index];
      if (formatter) {
        value = formatter(value, column);
      } else {
        value = analysisRow(chartType, item?.[index], column);
      }
      const rowId = instead[column.id] || column.id;
      row[rowId] = value;
    });
    return Object.assign(row, fetch);
  });
};
