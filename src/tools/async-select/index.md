---
group:
  title: '工具方法'
  path: '/tools'
  order: 2
nav:
  title: 笔记
  path: /note
order: 1
title: 'AsyncSlect 异步选择器'
mobile: false
---

## AsyncSlect 异步选择器

### 何时使用

- 需要异步获取下拉菜单数据给用户选择操作。
- 完全继承了`antd`中的[antd Select](https://ant-design.gitee.io/components/select-cn/)组件属性，在此基础上做了相应的拓展和逻辑封装，大大简化了代码。

### 基础用法

默认异步返回的数据结构为 `{label: ReactNode; value: string}`

<code src="./demos/demo1.tsx" />

### API

`AsyncSelect` 异步选择器组件完全继承了[antd Select](https://ant-design.gitee.io/components/select-cn/#API) 组件的`API`

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| trigger | 异步数据触发请求的时机 | `'auto' \| 'open'` | `'open'` |
| request | 获取选择器下拉菜单数据的方法 | `() => Promise<ValueType[] \| undefined>` | - |
| customOption | 自定义`Option`的展示 | `(option: ValueType, index: number, options: ValueType[]) => ReactNode` | - |
| customLoading | 自定义加载样式 | `ReactNode` | - |
