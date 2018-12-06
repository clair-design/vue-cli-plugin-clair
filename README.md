# vue-cli-plugin-clair

Clair-Design plugin for `@vue/cli` (the so-called `vue-cli 3`).

遇到问题？请先看 [Q&A.md](./Q&A.md)。

##  Usage

1. follow installation guide on [@vue/cli offical website](https://cli.vuejs.org/guide/installation.html).

2. create your own project:

```
vue create YOUR_PROJECT_NAME
```

Notice: the option **dedicated config files** are strongly recommended.

3. `cd YOUR_PROJECT_NAME`, change your working directory to the project.

4. install and invoke vue-cli-plugin-clair:

```
vue add clair
```

The result would be something like:

![](https://ws2.sinaimg.cn/large/006tNbRwly1fxx5a31d7bj31840is75p.jpg)

5. let's explain some of these files that changed:

|           file              |      explanation    |
|-----------------------------|---------------------|
| src/plugins/clair-design.js |  where to import clair library  |
| src/styles/clair-design.css |  where we import clair stylesheet source code  |
| src/styles/clair-theme.css  |  where to put CSS variables which overwrite that of clair  |
| vue.config.js               |  'clair' is added to the [`transpileDependencies`](https://cli.vuejs.org/zh/config/#transpiledependencies) option: [reason](https://clair.75team.com/component/install/#guan-yu-polyfill-jian-tan-zai-vue-cli-3-xiang-mu-zhong-de-shi-yong)  |
| postcss.config.js           |  [related](https://clair.75team.com/component/theme)  |
| src/main.js                 |  where to import our styles and plugins  |


## Acknowledgement

This project is inspired by the following projects ——

- https://github.com/iview/vue-cli-plugin-iview
- https://github.com/ElementUI/vue-cli-plugin-element

And also thanks to the [@vue/cli](https://cli.vuejs.org/) project and its developers.
