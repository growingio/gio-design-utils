import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import Docs from './Less.mdx';

import './Less.stories.less';

export default {
  parameters: {
    docs: {
      page: Docs,
    },
  },
  title: 'Less/Mixins',
} as Meta;

export const Scrollbar = () => (
  <ol className="scrollbar-demo">
    <li>滚动条悬浮于页面之上。</li>
    <li>当页面静止，且未 Hover 到滚动条主体或者背景区域时，不显示滚动条。</li>
    <li>当鼠标在可滚动区域内滚动时，显示滚动条主体。</li>
    <li>当鼠标 Hover 到滚动条背景区域时，显示滚动条主体，点击背景条的某一个位置，滚动条主体的中心移动至点击的位置。</li>
    <li>滚动条悬浮于页面之上。</li>
    <li>当页面静止，且未 Hover 到滚动条主体或者背景区域时，不显示滚动条。</li>
    <li>当鼠标在可滚动区域内滚动时，显示滚动条主体。</li>
    <li>当鼠标 Hover 到滚动条背景区域时，显示滚动条主体，点击背景条的某一个位置，滚动条主体的中心移动至点击的位置。</li>
    <li>滚动条悬浮于页面之上。</li>
    <li>当页面静止，且未 Hover 到滚动条主体或者背景区域时，不显示滚动条。</li>
    <li>当鼠标在可滚动区域内滚动时，显示滚动条主体。</li>
    <li>当鼠标 Hover 到滚动条背景区域时，显示滚动条主体，点击背景条的某一个位置，滚动条主体的中心移动至点击的位置。</li>
  </ol>
);
