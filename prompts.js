module.exports = [
  {
    when: answers => answers.import === 'full',
    type: 'confirm',
    name: 'customTheme',
    message: '是否需要自定义主题？',
    default: false
  }
]
