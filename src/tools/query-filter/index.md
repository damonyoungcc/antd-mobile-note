---
group:
  title: '工具方法'
  path: '/tools'
  order: 2
nav:
  title: 笔记
  path: /note
order: 2
title: 'QueryFilter 筛选表单'
mobile: false
---

## QueryFilter 筛选表单

### 何时使用

- 一般配合`Table`使用，放置在 `Table` 上方做筛选
- `QueryFilter` 完全继承了`antd`中的[antd Form](https://ant-design.gitee.io/components/form-cn/)组件的属性，在此基础上做了相应的拓展和封装，避免了复杂的样式设置，只填入相应的`Form.Item`业务字段，即可快速根据容器宽度完成样式布局

### 基础用法

<code src="./demos/demo1.tsx" />

### API

`QueryFilter` 筛选表单完全继承了[antd Form](https://ant-design.gitee.io/components/form-cn/#API) 组件的`API`

| 属性       | 说明             | 类型                         | 默认值 |
| ---------- | ---------------- | ---------------------------- | ------ |
| onCollapse | 展开收起时的回调 | `(collapsed: boolean)=>void` | -      |
| labelWidth | `label` 宽度     | `number`                     | `80`   |
