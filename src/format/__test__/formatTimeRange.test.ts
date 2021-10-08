import { format, subDays } from 'date-fns';
import { LONG_DAY, LONG_MONTH, LONG_WEEK } from '../constants';
import { formatTimeRange, humanizeTimeRange } from '../formatTimeRange';

const getCurrentTs = () => {
  return new Date(format(new Date(), 'MM/dd/yyyy')).getTime();
};

const formatFormula = 'yyyy-MM-dd HH:mm:ss';

describe('formatTimeRange & humanizeTimeRange', () => {
  test('use day', () => {
    const res = formatTimeRange('week:1,0');
    console.log(res);
    console.log(
      format(new Date(Number(res.startTime)), formatFormula),
      format(new Date(Number(res.endTime)), formatFormula)
    );
    const range = 'day:7, 1';
    const data = formatTimeRange(range);
    console.log(humanizeTimeRange('week:1,0'));
    expect(format(new Date(Number(data.startTime)), formatFormula)).toBe(
      format(getCurrentTs() - LONG_DAY * 7, formatFormula)
    );
    expect(format(new Date(Number(data.endTime)), formatFormula)).toBe(format(getCurrentTs() - 1, formatFormula));
    expect(humanizeTimeRange(range)).toBe('过去 6 天');
  });

  test('use week', () => {
    const range = 'week :7, 1';
    const data = formatTimeRange(range);
    expect(format(new Date(Number(data.startTime)), formatFormula)).toBe(
      format(getCurrentTs() - LONG_WEEK * 7, formatFormula)
    );
    expect(format(new Date(Number(data.endTime)), formatFormula)).toBe(format(getCurrentTs() - 1, formatFormula));
    expect(humanizeTimeRange(range)).toBe('过去 6 周');
  });

  test('use month', () => {
    const range = 'month :3, 1';
    const data = formatTimeRange(range);
    expect(format(new Date(Number(data.startTime)), formatFormula)).toBe(
      format(getCurrentTs() - LONG_MONTH * 3, formatFormula)
    );
    expect(format(new Date(Number(data.endTime)), formatFormula)).toBe(format(getCurrentTs() - 1, formatFormula));
    expect(humanizeTimeRange(range)).toBe('过去 2 月');
  });

  test('since', () => {
    const sinceTs = subDays(new Date(), 10).getTime();
    const range = `since: ${sinceTs}`;
    const data = formatTimeRange(range);
    expect(data.startTime).toBe(sinceTs);
    expect(humanizeTimeRange(range)).toBe('自 2021/09/28 至昨日');
  });
});