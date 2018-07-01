module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: 'airbnb',
  plugins: ['react', 'jsx-a11y', 'import'],
  parser: 'babel-eslint',
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/destructuring-assignment': [0],
    'react/forbid-prop-types': [0],
    'jsx-a11y/interactive-supports-focus': [0],
  },
};
