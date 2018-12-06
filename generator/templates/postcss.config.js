const { join, dirname } = require('path')
const glob = require('glob')

const aliasRE = /^~?@/
const clairLocation = dirname(require.resolve('clair/package.json'))
const clairStylesLocation = join(clairLocation, '/src/styles/')
const customThemePath = join(__dirname, 'src/clair-theme.css')

module.exports = {
  plugins: {
    'postcss-import': {
      resolve (id, basedir) {
        // treat clair source stylesheets
        if (basedir.startsWith(clairLocation)) {
          // 将 theme.css 指向你的项目中的 CSS 变量配置文件
          if (id === './theme.css' && basedir.startsWith(clairLocation)) {
            return customThemePath
          }

          if (/\*\*/.test(id)) {
            return glob.sync(join(clairStylesLocation, id))
          }

          return id
        }

        // set alias for project
        if (aliasRE.test(id)) {
          id = id.replace(aliasRE, join(__dirname, 'src'))
        }
        return id
      }
    },
    'postcss-easy-import': {},
    'postcss-for': {},
    'postcss-each': {},
    // keep animation names
    'postcss-reduce-idents': {
      keyframes: false
    },
    'postcss-cssnext': {
      warnForDuplicates: false
    }
  }
}
