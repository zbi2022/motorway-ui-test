const CracoAlias = require('craco-alias')

const dotenv = require('dotenv')
const dotenvExpand = require('dotenv-expand')
const config = dotenv.config()
dotenvExpand.expand(config)

module.exports = function () {

  return {
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
