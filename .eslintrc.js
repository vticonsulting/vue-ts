module.exports = {
  extends: [
    '@antfu',
  ],
  rules: {
    'import/named': 'off',
    'no-restricted-syntax': 'off',
    'no-use-before-define': 'off',
    'space-before-function-paren': 'off',
    'vue/multiline-html-element-content-newline': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
  },
}
