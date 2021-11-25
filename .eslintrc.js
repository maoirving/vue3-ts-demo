module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:vue/vue3-essential', '@vue/standard', '@vue/typescript/recommended'],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'quotes': [1, 'single'], // 引号
    'space-before-function-paren': 0, // 函数前空格
    'comma-dangle': ['error', 'only-multiline'], // 拖尾逗号
    'max-len': ['error', { code: 200 }], // 强制最大行长度
  },
}
