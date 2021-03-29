import { injectPinyinWith } from '../pinyin';

describe('Pinyin', () => {
  it('injects pinyin attribute into the element of array', () => {
    const data = [{ name: '张三' }, { name: '李四' }, { name: '王五' }];
    expect(injectPinyinWith(data, 'name')).toStrictEqual([
      { name: '张三', namePinyin: ['zhang', 'san'] },
      { name: '李四', namePinyin: ['li', 'si'] },
      { name: '王五', namePinyin: ['wang', 'wu'] },
    ]);
  });
});
