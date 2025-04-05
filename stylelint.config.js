/** @type {import('stylelint').Config} */
module.exports = {
  extends: ['stylelint-config-standard-scss'],
  rules: {
    'rule-empty-line-before': ['never', { severity: 'warning' }],
    'at-rule-empty-line-before': ['never', { severity: 'warning' }],
    'declaration-empty-line-before': 'never',
    'function-name-case': null,
    'custom-property-empty-line-before': 'never',
    'selector-class-pattern': null,

    // ↓↓↓ 追加ここから ↓↓↓

    // :global 疑似クラスを許可（Next.jsのCSS Modules対応）
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['global'],
      },
    ],

    // mixin名や関数名などに kebab-case を要求
    'scss/at-mixin-pattern': '^([a-z][a-z0-9]*)(-[a-z0-9]+)*$',
    'scss/at-function-pattern': '^([a-z][a-z0-9]*)(-[a-z0-9]+)*$',
    'scss/dollar-variable-pattern': null, // 変数名の命名チェックを一時無効化

    // // コメントにスペースを要求
    'scss/double-slash-comment-whitespace-inside': 'always',
    'scss/at-mixin-pattern': null,
    'scss/at-function-pattern': null,
  },
  ignoreFiles: ['**/*.js', '**/*.ts', '**/*.tsx'],
};
