module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          extensions: [
            'js',
            'jsx',
            'ts',
            'tsx',
            'android.js',
            'android.tsx',
            'ios.js',
            'ios.tsx',
          ],
          root: ['./'],
          alias: {
            '@assets': './assets',
            '@components': './src/components',
            '@useListQR': './src/hooks/useListQR.tsx',
            '@useReadQR': './src/hooks/useReadQR.tsx',
            '@navigation': './src/navigation',
            '@reduxStore': './src/redux/store.ts',
            '@reduxAction': './src/redux/actions/qr.ts',
            '@screens': './src/screens',
          },
        },
      ],
    ],
  };
};
