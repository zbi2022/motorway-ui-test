const CracoAlias = require('craco-alias')
const webpack = require('webpack')
const dotenv = require('dotenv')
const dotenvExpand = require('dotenv-expand')
const config = dotenv.config()
dotenvExpand.expand(config)

const appVersion = process.env.npm_package_version

module.exports = function () {
  return {
    webpack: {
      plugins: [
         new webpack.DefinePlugin({
            'process.env.REACT_APP_VERSION': JSON.stringify(appVersion)
          }),
      ],
    },
    plugins: [
      {
        plugin: CracoAlias,
        options: {
          source: 'tsconfig',
          baseUrl: './',
          tsConfigPath: './tsconfig.paths.json',
        },
      },
    ]
  }
}
