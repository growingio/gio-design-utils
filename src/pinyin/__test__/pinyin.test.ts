import { injectPinyinWith } from '../pinyin';

describe('Pinyin', () => {
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

  it('injects pinyin attribute into the element of array', () => {
    const pinyinData = injectPinyinWith(data, 'name');
    pinyinData.forEach((d, index) => {
      expect(d['namePinyin' as keyof typeof d]).toStrictEqual(expectData[index]);
    });
  });

  it('injects invalid attribute with undefined', () => {
    const pinyinData = injectPinyinWith(data, 'firstName');
    pinyinData.forEach((d) => {
      expect(d['firstNamePinyin' as keyof typeof d]).toBeUndefined();
    });
  });
});
