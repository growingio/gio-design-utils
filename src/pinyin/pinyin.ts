import { flatten } from 'lodash';

const pinyin = require('pinyin/lib/web-pinyin');

/**
 * Returns the array of object which has been injected pinyin attribute.
 *
 * @param array - The array to iterate over.
 * @param attribute - The attribute to transform key.
 * @returns The array of object with pinyin attribute.
 *
 * @example
 * ```ts
 * import { injectPinyinWith } from '@gio-design/utils';
 *
 * console.log(injectPinyinWith([{ name: '张三' }, { name: '李四' }, { name: '王五' }], 'name'));
 * // => [{ name: '张三', namePinyin: ['zhang', 'san'] }, { name: '李四', namePinyin: ['li', 'si'] }, { name: '王五', namePinyin: ['wang', 'wu'] }]
 * ```
 */
export const injectPinyinWith = (array: object[], attribute: string) =>
  array.map((element: { [key: string]: string }) => {
    const attrPinyin = flatten(
      pinyin(element[attribute], {
        style: pinyin.STYLE_NORMAL,
      })
    );
    return Object.assign(element, { [`${attribute}Pinyin`]: attrPinyin });
  });

export default {
  injectPinyinWith,
};
