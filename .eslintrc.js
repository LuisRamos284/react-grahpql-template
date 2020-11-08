module.exports = {
  extends: [
    'universe/node',
    'universe/web',
    'universe/native',
    'universe/shared/typescript-analysis',
  ],
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.d.ts'],
      parserOptions: {
        project: './tsconfig.json',
      },
    },
  ],
  rules: {
    'import/order': 'off',
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
  },
}
