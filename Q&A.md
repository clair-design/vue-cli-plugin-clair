# Common Issues 

## Q 现有项目在执行 `vue add clair` 时报错

在现有项目中加入 vue-cli-plugin-clair 插件时，可能会类似下面的报错信息 ——

![](https://ws2.sinaimg.cn/large/006tNbRwly1fxx7q0ydxoj31gy0c8jsp.jpg)

## A 请先卸载项目中已安装的 clair

先执行 `npm uninstall clair` 或者直接删掉 package.json 里面的 clair 依赖，然后再运行 `vue add clair`。

原因：因为你此前已经安装过 clair，而 vue-cli-plugin-clair 里面指定的是 `clair: "*"`，在某些情况下可能造成上图中的报错。

## Q 我的 `vue.config.js` 文件最后一行为什么会多出一行代码

这行代码大概如下：

```js
module.exports.transpileDependencies = (module.exports.transpileDependencies || []).concat('clair')
```

## A 请跳到下一题

## Q 为什么会多出来一个 `vue.config.js`？

该文件内容大概如下：

```js
module.exports = {
  transpileDependencies: [
    'clair'
  ]
}
```

## A 需要 babel 对 clair 脚本进行 transpile

- [关于 transpileDependencies](https://cli.vuejs.org/zh/config/#transpiledependencies)
- [关于 polyfill，兼谈在 vue-cli 3 项目中的使用](https://clair.75team.com/component/install/#guan-yu-polyfill-jian-tan-zai-vue-cli-3-xiang-mu-zhong-de-shi-yong)
