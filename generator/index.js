const { existsSync, readFileSync, writeFileSync } = require('fs')

module.exports = (api, opts, rootOptions) => {
  api.extendPackage({
    dependencies: {
      'clair': '*'
    }
  })

  api.injectImports(api.entryFile, `import './plugins/clair-design.js'`)

  api.render({
    './src/plugins/clair-design.js': './templates/src/plugins/clair-design.js',
    './src/App.vue': './templates/src/App.vue',
    './src/styles/clair-theme.css': './templates/src/styles/clair-theme.css',
    './src/styles/clair-design.css': './templates/src/styles/clair-design.css',
    './postcss.config.js': './templates/postcss.config.js'
  })

  // add postcss deps
  api.extendPackage({
    devDependencies: {
      'glob': '^7.1.3',
      'postcss': '^7.0.6',
      'postcss-cssnext': '^3.1.0',
      'postcss-each': '^0.10.0',
      'postcss-for': '^2.1.1',
      'postcss-import': '^12.0.1',
      'postcss-reduce-idents': '^4.0.0'
    }
  })

  api.onCreateComplete(() => {
    const vueConfigJS = api.resolve('vue.config.js')

    if (existsSync(vueConfigJS)) {
      const content = readFileSync(vueConfigJS, 'utf-8')
      const extra = '\nmodule.exports.transpileDependencies = (module.exports.transpileDependencies || []).concat(\'clair\')'
      writeFileSync(vueConfigJS, `${content}\n${extra}\n`)
    } else {
      const content = api.genJSConfig({
        transpileDependencies: ['clair']
      })
      writeFileSync(vueConfigJS, content + '\n')
    }
  })
}
