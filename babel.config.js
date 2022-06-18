/* eslint-env node */
const config = {
    presets: [
        [
        '@babel/preset-env',
        {
          modules: false,
        },
      ],
      [
        '@babel/preset-typescript',
        {
          isTSX: true,
          allExtensions: true
        }
      ],
      '@babel/preset-react',
    ],
    plugins: [
      '@babel/plugin-proposal-class-properties',
      '@babel/plugin-syntax-dynamic-import',
      '@babel/plugin-transform-runtime',
    ],
    env: {
      test: {
        presets: [
          [
          '@babel/preset-env',
          {
            modules: "commonjs",
          },
        ],
        [
          '@babel/preset-typescript',
          {
            isTSX: true,
            allExtensions: true
          }
        ],
        [
          '@babel/preset-react',
          {
            runtime: "automatic"
          }
        ],
      ],
      },
      production: {
        only: ['src'],
        plugins: [
          [
            'transform-react-remove-prop-types',
            {
              removeImport: true,
            },
          ],
          '@babel/plugin-transform-react-constant-elements',
          '@babel/plugin-transform-react-inline-elements',
        ],
      },
    },
  };

  module.exports = config;