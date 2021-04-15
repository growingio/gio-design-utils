import { injectPinyinWith } from '../pinyin';

describe('Pinyin', () => {
  it('injects pinyin attribute into the element of array', () => {
    const data = [
      { id: 1, name: '张三' },
      { id: 2, name: '李四' },
      { id: 3, name: '王五' },
    ];
    const expectData = [
      ['zhang', 'san'],
      ['li', 'si'],
      ['wang', 'wu'],
    ];
    const pinyinData = injectPinyinWith(data, 'name');
    pinyinData.forEach((d, index) => {
      expect(d.namePinyin).toStrictEqual(expectData[index]);
    });
  });
});
