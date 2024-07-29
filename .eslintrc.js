module.exports = {
  root: true,
  plugins: ['import'],
  extends: [
    '@react-native',
    'plugin:import/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
  ],
  settings: {
    'import/resolver': {
      typescript: true,
      node: true,
    },
  },
};
