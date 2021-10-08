import has from 'lodash/has';
import get from 'lodash/get';
import { format } from 'date-fns';
import { dateNameMappings, DATE_FORMAT, LONG_DAY, QUICK_MAPPING, tsMappings } from './constants';

const analysisTimeRange = (range: string) => {
  const [prefix, times] = range.split(':');
  const [start, end] = times?.split(',');
  return [prefix.trim().toLowerCase(), Number(start), Number(end)];
};

const getStartEndTime = (start: number, end: number, longTs: number) => {
  const currentZeroTime = new Date(format(new Date(), 'MM/dd/yyyy')).getTime();
  let endTime = 0;
  // end time should be ended with 23:59:59
  // or currentTime if end is 0
  // or 0 if there is no end.
  if (end >= 1) {
    endTime = currentZeroTime - (end - 1) * longTs - 1;
  } else if (end < 1) {
    endTime = new Date().getTime();
  }
  return {
    start,
    end,
    // start time should be started with 00:00:00
    startTime: start ? currentZeroTime - start * longTs : 0,
    endTime,
  };
};

export const formatTimeRange = (range: string) => {
  if (!range || range.trim() === '') {
    return {
      type: 'relative',
      prefix: 'day',
      range,
      ...getStartEndTime(8, 1, LONG_DAY),
    };
  }

  const [prefix, start, end] = analysisTimeRange(range);
  // handle day, week, month, season, year
  if (tsMappings[prefix]) {
    return {
      type: 'relative',
      prefix,
      range,
      ...getStartEndTime(Number(start), Number(end), tsMappings[prefix]),
    };
  }

  if (prefix === 'since') {
    return {
      type: 'relative',
      prefix,
      range,
      start: Number(start),
      end: Number(end),
      startTime: Number(start),
      endTime: 0,
    };
  }

  if (prefix === 'abs') {
    return {
      type: 'absolute',
      prefix,
      range,
      start: Number(start),
      end: Number(end),
      startTime: Number(start),
      endTime: Number(end),
    };
  }
  // empty value and default value use this.
  return {
    type: 'relative',
    prefix: 'day',
    range,
    ...getStartEndTime(8, 1, LONG_DAY),
  };
};

export const humanizeTimeRange = (timeRange: string, defaultString: string = '时间范围') => {
  if (!timeRange || timeRange.split(':').length !== 2) {
    return defaultString;
  }
  if (has(QUICK_MAPPING, timeRange)) {
    return get(QUICK_MAPPING, timeRange);
  }
  const range = formatTimeRange(timeRange);
  if (range.prefix === 'since') {
    const start = format(range.startTime, DATE_FORMAT);
    return `自 ${start} 至昨日`;
  }
  if (range.prefix === 'abs') {
    const start = format(range.startTime, DATE_FORMAT);
    const end = format(range.endTime, DATE_FORMAT);
    return `从 ${start} 至 ${end}`;
  }
  return `过去 ${range.start - range.end} ${dateNameMappings[range.prefix] || '天'}`;
};
