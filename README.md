# vue_demo1

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## 代码规范

# 单文件组件文件名称

单文件组件的文件名始终以横线连接（kebab-case）

```
// good
my-component.vue
MyComponent.vue

// bad
mycomponent.vue
myComponent.vue
```

# 单文件组件顶级标签的顺序

单文件组件应该总是让顶级标签的顺序保持一致，且标签之间留有空行。

```vue
<template> ... </template>

<script>
  /* ... */
</script>

<style>
  /* ... */
</style>
```

# 自闭合组件

在单文件组件中没有内容的组件应该是自闭合的。

```html
<!-- good -->
<my-component />

<!-- bad -->
<my-component></my-component>
```

# 标签属性的顺序

标签的属性要有统一的顺序，依次为指令、属性、事件

```html
<my-component
  v-if="if"
  v-show="show"
  v-model="value"
  ref="ref"
  :key="key"
  :text="text"
  @input="onInput"
  @change="onChange"
/>
```

# 指令缩写

指令缩写，用 : 表示 v-bind: ，用 @ 表示 v-on。

```html
<!-- good -->
<input :value="value" @input="onInput" />

<!-- bad -->
<input v-bind:value="value" v-on:input="onInput" />
```

# Prop 大小写
在声明 prop 的时候，其命名应该始终使用 camelCase，而在模板中应该始终使用 kebab-case。

```js
// good
export default {
  props: {
    greetingText: String,
  },
};

// bad
export default {
  props: {
    'greeting-text': String,
  },
};
```

```html
<!-- good -->
<welcome-message greeting-text="hi" />

<!-- bad -->
<welcome-message greetingText="hi" />
```

# hook

Vue3 中建议将业务逻辑拆分到 hook 中，hook 文件的命名以 use- 开头，并且始终以横线连接（kebab-case）。文件中导出的方法使用 use 开头，并且遵循驼峰命名。

```
// good
use-info-formatter.ts

// bad
useInfoFormatter.ts
```

```ts
// good
export default function useInfoFromatter() {
  
}
```

# git 提交规范

代码提交规范遵循以下文档：https://www.ruanyifeng.com/blog/2016/01/commit_message_change_log.html

可以使用开发工具的插件快速生成规范，比如 webstorm 中有 Git Commit Template 插件，在 VS Code 中应该也有类似插件。

