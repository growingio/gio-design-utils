import { analysisSourceData } from '../analysisSourceData';
import activeMemberData from './data.json';

describe('call format', () => {
  const expectDataWithStringTs = [
    { tm: '1628870400000', NxDLPLD7: 793, type: '活跃人数' },
    { tm: '1628956800000', NxDLPLD7: 756, type: '活跃人数' },
    { tm: '1629043200000', NxDLPLD7: 1866, type: '活跃人数' },
    { tm: '1629129600000', NxDLPLD7: 483, type: '活跃人数' },
    { tm: '1629216000000', NxDLPLD7: 1381, type: '活跃人数' },
    { tm: '1629302400000', NxDLPLD7: 918, type: '活跃人数' },
    { tm: '1629388800000', NxDLPLD7: 1618, type: '活跃人数' },
  ];

  const expectDataWithNumberTs = [
    { tm: 1628870400000, NxDLPLD7: 793, type: '活跃人数' },
    { tm: 1628956800000, NxDLPLD7: 756, type: '活跃人数' },
    { tm: 1629043200000, NxDLPLD7: 1866, type: '活跃人数' },
    { tm: 1629129600000, NxDLPLD7: 483, type: '活跃人数' },
    { tm: 1629216000000, NxDLPLD7: 1381, type: '活跃人数' },
    { tm: 1629302400000, NxDLPLD7: 918, type: '活跃人数' },
    { tm: 1629388800000, NxDLPLD7: 1618, type: '活跃人数' },
  ];

  const expectDataWithNumberName = [
    { name: '1628870400000', value: 793, type: '活跃人数' },
    { name: '1628956800000', value: 756, type: '活跃人数' },
    { name: '1629043200000', value: 1866, type: '活跃人数' },
    { name: '1629129600000', value: 483, type: '活跃人数' },
    { name: '1629216000000', value: 1381, type: '活跃人数' },
    { name: '1629302400000', value: 918, type: '活跃人数' },
    { name: '1629388800000', value: 1618, type: '活跃人数' },
  ];

  const expectDataWithNumberTsWithoutType = [
    { tm: 1628870400000, NxDLPLD7: 793 },
    { tm: 1628956800000, NxDLPLD7: 756 },
    { tm: 1629043200000, NxDLPLD7: 1866 },
    { tm: 1629129600000, NxDLPLD7: 483 },
    { tm: 1629216000000, NxDLPLD7: 1381 },
    { tm: 1629302400000, NxDLPLD7: 918 },
    { tm: 1629388800000, NxDLPLD7: 1618 },
  ];
  test('call analysisSourceData', () => {
    const covertData = analysisSourceData(activeMemberData, {
      chart: 'column',
      fetch: { type: '活跃人数' },
    });
    expect(covertData).toEqual(expectDataWithStringTs);
  });

  test('call analysisSourceData with formatter', () => {
    const covertData = analysisSourceData(activeMemberData, {
      chart: 'column',
      fetch: { type: '活跃人数' },
      formatter: (value) => value,
    });
    expect(covertData).toEqual(expectDataWithNumberTs);
  });

  test('call analysisSourceData with insteand', () => {
    const covertData = analysisSourceData(activeMemberData, {
      chart: 'column',
      fetch: { type: '活跃人数' },
      instead: {
        tm: 'name',
        NxDLPLD7: 'value',
      },
    });
    expect(covertData).toEqual(expectDataWithNumberName);
  });

  test('call analysisSourceData without options', () => {
    const covertData = analysisSourceData(activeMemberData);
    expect(covertData).toEqual(expectDataWithNumberTsWithoutType);
  });

  test('call analysisSourceData with empty data', () => {
    expect(analysisSourceData({})).toEqual([]);
  });

  test('call analysisSourceData with null data', () => {
    expect(analysisSourceData(null as any)).toEqual([]);
  });

  test('call analysisSourceData with falsy data', () => {
    expect(analysisSourceData({ data: [undefined] })).toEqual([{}]);
  });
});
