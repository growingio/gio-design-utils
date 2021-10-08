export const DATE_FORMAT = 'yyyy/MM/dd';

export const QUICK_MAPPING = {
  'day:1,0': '今日',
  'week:1,0': '本周',
  'month:1,0': '本月',
  'quarter:1,0': '本季度',
  'year:1,0': '今年',
  'day:8,1': '过去 7 天',
  'day:31,1': '过去 30 天',
  'day:181,1': '过去 180 天',
  'day:2,1': '昨日',
  'week:2,1': '上周',
  'month:2,1': '上月',
  'quarter:2,1': '上季度',
  'year:2,1': '去年',
  'day:15,1': '过去 14 天',
  'day:91,1': '过去 90 天',
  'day:366,1': '过去 365 天',
};

export const LONG_DAY = 24 * 60 * 60 * 1000;
export const LONG_WEEK = LONG_DAY * 7;
export const LONG_MONTH = LONG_DAY * 30;
export const LONG_YEAR = LONG_DAY * 365;
export const LONG_SEASON = LONG_MONTH * 3;

export const tsMappings: { [name: string]: number } = {
  day: LONG_DAY,
  week: LONG_WEEK,
  month: LONG_MONTH,
  season: LONG_SEASON,
  year: LONG_YEAR,
};

export const dateNameMappings: { [name: string]: string } = {
  day: '天',
  week: '周',
  month: '月',
  season: '季',
  year: '年',
};
